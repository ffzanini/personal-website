import { SvgProps } from '../IconTypes'

const Menu = ({ color, width, height }: SvgProps) => (
  <svg width={width} height={height} viewBox='0 0 35 25' fill='none'>
    <rect width='32' height='2' fill={color} />
    <rect y='11' width='32' height='2' fill={color} />
    <rect y='22' width='32' height='2' fill={color} />
  </svg>
)

Menu.defaultProps = {
  color: 'black',
  width: '30',
  height: '20'
}

export default Menu
