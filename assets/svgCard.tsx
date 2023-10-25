import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props:any) {
  return (
    <Svg
      width={30}
      height={30}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M19.812 6H4.188C3.533 6 3 6.547 3 7.218v9.564C3 17.454 3.533 18 4.188 18h15.624c.655 0 1.188-.546 1.188-1.218V7.218C21 6.547 20.467 6 19.812 6zm.154 10.782c0 .087-.069.158-.154.158H4.187a.157.157 0 01-.154-.158v-5.194h15.933v5.194zm0-6.254H4.033V9.74h15.933v.788zm0-1.847H4.033V7.218c0-.087.07-.158.155-.158h15.624c.085 0 .154.07.154.158V8.68z"
        fill="#101840"
      />
    </Svg>
  )
}

export default SvgComponent
