import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props:any) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M6 12l4.243 4.243 8.485-8.486"
        stroke="#101840"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default SvgComponent
