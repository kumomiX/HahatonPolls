import React, { useEffect, useCallback } from 'react'
import Select from './Select'
import { useTheme } from 'styled-components'
import {
  searchAddresses,
  selectAddresses,
  setFocusedOption,
} from './addressesSlice'
import { useDispatch, useSelector } from 'react-redux'

const customStyles = {
  control: (styles, state) => {
    return {
      ...styles,
      padding: '.325rem',
      border: `1px solid transparent`,
      background: state.isFocused
        ? state?.theme?.styledTheme?.palette?.secondary.main
        : state?.theme?.styledTheme?.palette?.background.lightgrey,
      color: state.isFocused
        ? state?.theme?.styledTheme?.palette?.secondary.contrastText
        : state?.theme?.styledTheme?.palette?.text.secondary,
      fontFamily: state?.theme?.styledTheme?.fonts.primary,
      '&:hover': state.isFocused
        ? {}
        : {
            cursor: 'pointer',
            borderColor: 'transparent',
            background: state?.theme?.styledTheme?.palette?.background.grey,
          },
    }
  },
  menu: (styles, state) => ({
    ...styles,
    boxShadow: state?.theme?.styledTheme?.shadows.main,
    fontFamily: state?.theme?.styledTheme?.fonts.primary,
    background: state?.theme?.styledTheme?.palette?.background.primary,
    overflow: 'hidden',
    zIndex: 100,
  }),
  input: (styles) => ({ ...styles }),
  placeholder: (styles) => ({ ...styles }),
  singleValue: (styles, { data }) => ({ ...styles }),
}

const mapAddresses = (addresses) =>
  addresses.map((a) => ({ label: a.short_address, value: a.uuid, ...a }))

const Search = ({ style = {}, ...props }) => {
  const theme = useTheme()
  const dispatch = useDispatch()
  const addresses = useSelector(({ addresses }) => addresses.list)

  // const getOptions = useCallback(
  //   async (q) => {
  //     await dispatch(searchAddresses(q))
  //     return mapAddresses(addresses)
  //   },
  //   [addresses, dispatch],
  // )

  const selectedAddresses = useSelector(({ addresses }) => addresses.selected)
  const handleChange = (newSelected, { action }) => {
    dispatch(selectAddresses({ addresses: newSelected }))
  }

  const onFocusedOptionChanged = useCallback(
    (option) => {
      dispatch(setFocusedOption(option))
    },
    [dispatch],
  )

  useEffect(() => {
    dispatch(searchAddresses(''))
  }, [dispatch])

  return (
    <Select
      cacheOptions
      defaultOptions
      // loadOptions={getOptions}
      isMulti
      options={mapAddresses(addresses)}
      styles={customStyles}
      theme={(selectTheme) => ({
        ...selectTheme,
        borderRadius: 15,
        styledTheme: theme,
        fontFamily: theme.fonts.primary,
        colors: {
          ...selectTheme.colors,
          primary25: theme.palette.secondary.lighter,
          primary: theme.palette.secondary.main,
        },
      })}
      value={mapAddresses(selectedAddresses)}
      onChange={handleChange}
      onFocusedOptionChanged={onFocusedOptionChanged}
      {...props}
    />
  )
}

export default Search
