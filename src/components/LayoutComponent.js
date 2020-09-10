import styled from 'styled-components'

export const LayoutGrid = styled.div``

export const Row = styled.div`
  display: flex;
`

const media = {
  xs: styles => `
    @media only screen and (max-width: 480px) {
      ${styles}
    }
  `,
  sm: styles => `
  @media only screen and (max-width: 768px) {
    ${styles}
  }
  `,
  lg: styles => `
  @media only screen and (min-width: 768px) {
    ${styles}
  }
  `,
}

export const Col = styled.div`
  flex: ${props => props.size};
  ${props =>
    props.collapse &&
    media[props.collapse](`
    display: none;
  `)}
`

export const RepeatingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 5px;
`

export const GridItem = styled.div`
  display: flex;
  justify-content: center;
  padding: 0.5rem;
`

export const StyledList = styled.ul`
  ${props =>
    props.horizontal &&
    `
  display: flex;
`}
  ${props =>
    props.collapse && media[props.collapse](`display: none`)}
  list-style: none;
  padding: 0;

  li {
    padding-right: 10px;
  }
`
