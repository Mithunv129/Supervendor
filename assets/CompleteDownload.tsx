import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      {...props}
    >
      <Path
        d="M2.743 21.874A14.5 14.5 0 0113.608 1.699M17.537 1.582a14.5 14.5 0 0112.046 19.492M27.81 24.412a14.5 14.5 0 01-22.895.935"
        stroke="#148740"
        strokeWidth={3}
        strokeLinecap="round"
      />
    </Svg>
  )
}

export default SvgComponent
