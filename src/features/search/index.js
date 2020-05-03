import React, { useCallback } from 'react'
import Select from 'react-select/async'
import { Typography, Button } from '@material-ui/core'
import styled, { useTheme } from 'styled-components'
import blur from 'theme/blur'
import { searchAddresses, selectAddresses } from './addressesSlice'
import { useDispatch, useSelector } from 'react-redux'

// const promiseOptions = (inputValue) =>
//   new Promise((resolve) => {
//     setTimeout(() => {
//       resolve()
//     }, 1000)
//   })

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
    zIndex: 10,
  }),
  input: (styles) => ({ ...styles }),
  placeholder: (styles) => ({ ...styles }),
  singleValue: (styles, { data }) => ({ ...styles }),

  // multiValue: (styles, { theme }) => {
  //   return {
  //     ...styles,
  //     backgroundColor: theme?.styledTheme?.palette?.background.grey,
  //     // color: theme?.styledTheme?.palette?.primary.contrastText,
  //   }
  // },
  // multiValueLabel: (styles, { theme }) => ({
  //   ...styles,
  //   // color: theme?.styledTheme?.palette?.primary.contrastText,
  //   fontWeight: 500,
  // }),
}

const mapAddresses = (addresses) =>
  addresses.map((a) => ({ label: a.short_address, value: a.uuid, ...a }))

const Search = ({ style = {}, ...props }) => {
  const theme = useTheme()
  const dispatch = useDispatch()
  const addresses = useSelector(({ addresses }) => addresses.list)

  const getOptions = useCallback(
    async (q) => {
      await dispatch(searchAddresses(q))
      return mapAddresses(addresses)
    },
    [addresses, dispatch],
  )

  const selectedAddresses = useSelector(({ addresses }) => addresses.selected)
  const handleChange = (newSelected) =>
    dispatch(selectAddresses({ addresses: newSelected }))

  return (
    <Select
      cacheOptions
      defaultOptions
      loadOptions={getOptions}
      isMulti
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
      {...props}
    />
  )
}

export default Search
