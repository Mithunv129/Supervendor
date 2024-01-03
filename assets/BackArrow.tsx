import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props:any) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.906 5.281a1 1 0 01.023 1.414L6.764 11h12.64a1 1 0 110 2H6.764l4.165 4.305a1 1 0 01-1.437 1.39l-5.47-5.652a1.5 1.5 0 010-2.086l5.47-5.652a1 1 0 011.414-.024z"
        fill="#000"
      />
    </Svg>
  )
}

export default SvgComponent