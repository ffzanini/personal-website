import styled from 'styled-components'
import {
  background,
  BackgroundProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  space,
  SpaceProps,
  typography,
  TypographyProps
} from 'styled-system'

export interface ButtonProps extends BackgroundProps, LayoutProps, PositionProps, TypographyProps, SpaceProps {}

const Button = styled.button<ButtonProps>`
  font-family: 'Manrope';
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  padding: 16px 42px;
  height: 56px;
  background-color: ${({ theme }) => theme.colors.primary};
  outline: none;
  cursor: pointer;
  min-width: 228px;
  ${background}
  ${layout}
  ${position}
  ${space}
  ${typography}
`

export default Button
