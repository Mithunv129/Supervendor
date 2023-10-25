import * as React from "react"
import Svg, { Path, G, Rect, Defs, ClipPath } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function SvgComponent(props:any) {
  return (
    <Svg
      width={28}
      height={28}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path fill="#F0F0F0" d="M0 0H24V24H0z" />
      <G clipPath="url(#clip0_19476_124535)">
        <Rect
          x={-52}
          y={-198}
          width={360}
          height={640}
          rx={40}
          fill="#F3F5F9"
        />
        <G filter="url(#filter0_d_19476_124535)">
          <Path
            d="M-28-86c0-6.627 5.373-12 12-12h288c6.627 0 12 5.373 12 12v222c0 6.627-5.373 12-12 12H-16c-6.627 0-12-5.373-12-12V-86z"
            fill="#fff"
          />
        </G>
        <Rect
          x={-11.5}
          y={-9.5}
          width={279}
          height={43}
          rx={11.5}
          fill="#fff"
        />
        <Rect width={24} height={24} rx={12} fill="#fff" />
        <Path
          d="M12 7.757v8.485M7.757 12h8.486"
          stroke="#36F"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Rect
          x={-11.5}
          y={-9.5}
          width={279}
          height={43}
          rx={11.5}
          stroke="#EEE"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_19476_124535">
          <Rect x={-52} y={-198} width={360} height={640} rx={40} fill="#fff" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default SvgComponent
