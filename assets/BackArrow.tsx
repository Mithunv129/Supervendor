import * as React from "react"
import Svg, { Path } from "react-native-svg"

function BackArrow(props:any) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={25}
      viewBox="0 0 24 25"
      fill="none"
      {...props}
    >
      <Path
        d="M12.2 19.479l-7-6.831 7-6.83M18.96 12.716H7.08"
        stroke="#36F"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </Svg>
  )
}

export default BackArrow
