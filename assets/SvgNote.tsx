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
        d="M2 4a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1zm19.625 8.22a1 1 0 01.156 1.405l-5.424 6.78-3.98-3.174a1 1 0 111.246-1.564l2.42 1.929 4.176-5.22a1 1 0 011.406-.157zM3 8a1 1 0 000 2h14a1 1 0 100-2H3zm-1 6a1 1 0 011-1h6a1 1 0 110 2H3a1 1 0 01-1-1zm1 4a1 1 0 100 2h6a1 1 0 100-2H3z"
        fill="#000"
      />
    </Svg>
  )
}

export default SvgComponent
