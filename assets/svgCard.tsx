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
        d="M2 9a5 5 0 015-5h10a5 5 0 015 5v6a5 5 0 01-5 5H7a5 5 0 01-5-5V9z"
        fill="#fff"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 6h10a3 3 0 013 3H4a3 3 0 013-3zm-3 5v4a3 3 0 003 3h10a3 3 0 003-3v-4H4zm18-1V9a5 5 0 00-5-5H7a5 5 0 00-5 5v6a5 5 0 005 5h10a5 5 0 005-5v-5zM7 14a1 1 0 100 2h3a1 1 0 100-2H7z"
        fill="#000"
      />
    </Svg>
  )
}

export default SvgComponent
