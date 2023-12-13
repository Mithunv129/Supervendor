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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 6a1 1 0 100-2 1 1 0 000 2zm0 2a3 3 0 10-2.97-2.573l-6.993 4.37a3 3 0 100 4.405l6.993 4.371a3 3 0 10.933-1.776l-6.993-4.37a3.026 3.026 0 000-.854l6.993-4.37A2.99 2.99 0 0018 8zm1 11a1 1 0 11-2 0 1 1 0 012 0zM6 13a1 1 0 100-2 1 1 0 000 2z"
        fill="#000"
      />
    </Svg>
  )
}

export default SvgComponent
