import { FC } from 'react'
import styled from 'styled-components'
import {
  space,
  layout,
  typography,
  color,
  position,
  system,
  SpaceProps,
  LayoutProps,
  TypographyProps,
  ColorProps,
  PositionProps,
} from 'styled-system'

export interface TextProps
  extends SpaceProps,
    LayoutProps,
    TypographyProps,
    ColorProps,
    PositionProps,
    Omit<React.HTMLAttributes<HTMLParagraphElement>, 'color'> {
      as?: string
      cursor?: string
    }

const Text: FC<TextProps> = styled.p(
  space,
  layout,
  typography,
  color,
  position,
  system({ cursor: true })
)

Text.defaultProps = {
  fontFamily: 'Roboto',
  color: 'black'
}

export default Text
