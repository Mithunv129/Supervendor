import * as React from "react"
import Svg, { Path, G, Rect, Circle, Defs, ClipPath } from "react-native-svg"

function SvgComponent(props:{size:number}) {
  return (
    <Svg
      width={36}
      height={24}
      viewBox="0 0 36 24"
      fill="none"
     // xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path fill="#F0F0F0" d="M0 0H36V24H0z" />
      <G clipPath="url(#clip0_19476_124535)">
        <Rect x={-24} y={-52} width={360} height={642} rx={40} fill="#F3F5F9" />
        <Circle cx={24} cy={12} r={12} fill="#FFD058" />
        <Circle cx={12} cy={12} r={12} fill="#0B30B2" />
      </G>
      <Defs>
        <ClipPath id="clip0_19476_124535">
          <Rect x={-24} y={-52} width={360} height={642} rx={40} fill="#fff" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default SvgComponent
