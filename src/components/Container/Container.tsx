import { FC } from 'react'
import Row from '../Row/Row'
import { RowProps } from '../Row/Row'

interface LayoutProps extends RowProps {}

const Container: FC<LayoutProps> = (props) => <Row {...props} />

Container.defaultProps = {
  justifyContent: 'center',
  maxWidth: 1920,
  mx: 'auto',
  width: '100%',
  position: 'relative'
}

export default Container
