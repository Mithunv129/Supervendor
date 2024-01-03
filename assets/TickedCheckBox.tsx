import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Rect x={2} y={2} width={20} height={20} rx={6} fill="#FFD058" />
      <Rect
        x={3}
        y={3}
        width={18}
        height={18}
        rx={5}
        stroke="#000"
        strokeWidth={2}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.088 8.191a1 1 0 01.22 1.397l-3.685 5.068a1.5 1.5 0 01-2.173.27l-2.59-2.158a1 1 0 011.28-1.536l2.18 1.816 3.371-4.636a1 1 0 011.397-.22z"
        fill="#000"
      />
    </Svg>
  )
}

export default SvgComponent
