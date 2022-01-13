import { system, Config } from 'styled-system'

const pallette = {
  black: 'rgb(34, 34, 34)',
  white: '#ffffff',
  red: '#D50000',
  gray: {
    50: '#F6F6FB',
    100: '#E9E9EE',
    200: '#C7C7D6',
    300: '#A4A3BA',
    400: '#828093',
    500: '#9E9E9E'
  },
  faded: {
    white: 'rgba(255, 255, 255, 0.85)',
    black: 'rgba(0, 0, 0, 0.35)'
  }
}

system({ prop: 'cursor', cssProperty: 'cursor' } as Config)

export const theme = {
  breakpoints: ['768px', '1280px'],
  colors: {
    ...pallette,
    primary: pallette.gray[500],
    secondary: pallette.gray[200],
    disabled: pallette.gray[300],
    error: pallette.red
  }
}
