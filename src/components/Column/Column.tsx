import { FC, forwardRef } from 'react'
import { Row, RowProps } from '../Row'

export type ColumnProps = RowProps

const ColumnComponent: FC<ColumnProps> = forwardRef((props, ref) => <Row flexDirection='column' ref={ref} {...props} />)

export default ColumnComponent

ColumnComponent.displayName = 'Column'
