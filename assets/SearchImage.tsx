import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

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
      <G clipPath="url(#clip0_26878_395)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20 12a8 8 0 11-16 0 8 8 0 0116 0zm-1.95 7.963A9.956 9.956 0 0112 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10a9.962 9.962 0 01-2.486 6.6l2.693 2.693a1 1 0 01-1.414 1.414l-2.744-2.744z"
          fill="#000"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_26878_395">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default SvgComponent
