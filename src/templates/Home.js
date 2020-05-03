import React from 'react'
import styled from 'styled-components'

const Page = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-areas: 'left polls';
  grid-template-rows: 1fr;
  grid-template-columns: 1fr minmax(max-content, 450px);
`

const LeftBlock = styled.div`
  position: relative;
  grid-area: left;
  display: grid;

  grid-template-areas:
    'search'
    'map';
  grid-template-rows: max-content 1fr;
  box-shadow: ${(p) => p.theme.shadows.strong};
`

const HomeTemplate = ({ left, children }) => (
  <Page>
    <LeftBlock>{left}</LeftBlock>
    <div style={{ gridArea: 'polls' }}>{children}</div>
  </Page>
)

export default HomeTemplate
