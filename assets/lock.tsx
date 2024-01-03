import * as React from "react"
import Svg, { Path } from "react-native-svg"

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
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.5 5a4 4 0 014-4h7.736a2 2 0 011.418.59l4.265 4.29a2 2 0 01.581 1.41V12a1 1 0 11-2 0V9h-3a3 3 0 01-3-3V3h-6a2 2 0 00-2 2v14a2 2 0 002 2h7a1 1 0 110 2h-7a4 4 0 01-4-4V5zm12 1V3.266L17.211 7H14.5a1 1 0 01-1-1zm6 10a1 1 0 10-2 0v2h-2a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2v-2zm-14-5a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1zm1 3a1 1 0 100 2h5a1 1 0 100-2h-5z"
        fill="#000"
      />
    </Svg>
  )
}

export default SvgComponent
