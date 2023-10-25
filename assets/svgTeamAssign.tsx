import * as React from "react"
import Svg, { Path, G, Rect, Defs, ClipPath } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

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
      <Path fill="#F0F0F0" d="M0 0H24V24H0z" />
      <G clipPath="url(#clip0_19476_124535)">
        <Rect
          x={-40}
          y={-189}
          width={360}
          height={640}
          rx={40}
          fill="#F3F5F9"
        />
        <G filter="url(#filter0_d_19476_124535)">
          <Rect x={-16} y={-17} width={312} height={58} rx={12} fill="#fff" />
          <Rect
            x={-15.5}
            y={-16.5}
            width={311}
            height={57}
            rx={11.5}
            stroke="#36F"
            strokeOpacity={0.3}
          />
        </G>
        <G fill="#000" stroke="#fff" strokeWidth={0.5}>
          <Path d="M15.094 7.344a2.844 2.844 0 10-2.844 2.843 2.857 2.857 0 002.844-2.843zm-4.414 0c0-.87.7-1.57 1.57-1.57.87 0 1.57.7 1.57 1.57 0 .87-.7 1.57-1.57 1.57-.87-.021-1.57-.721-1.57-1.57z" />
          <Path d="M21.12 7.344a2.844 2.844 0 10-2.843 2.843 2.857 2.857 0 002.844-2.843zm-4.392 0c0-.87.7-1.57 1.57-1.57.87 0 1.57.7 1.57 1.57 0 .87-.7 1.57-1.57 1.57-.87-.021-1.57-.721-1.57-1.57zM1.979 14.09v3.99h6.027v1.486h8.467v-1.485H22.5v-3.99a3.406 3.406 0 00-3.395-3.396h-1.677c-.806 0-1.57.276-2.186.785a3.44 3.44 0 00-2.186-.785H11.38a3.44 3.44 0 00-2.186.785 3.407 3.407 0 00-2.186-.785H5.332c-1.825 0-3.353 1.507-3.353 3.396zm17.147-2.121c1.167 0 2.122.955 2.122 2.122v2.716h-4.775v-2.716c0-.594-.148-1.125-.403-1.613.382-.318.87-.51 1.38-.51h1.676zm-7.704 0H13.1c1.167 0 2.122.955 2.122 2.122v4.202H9.3V14.09c0-1.167.933-2.122 2.121-2.122h0zm-8.17 2.122c0-1.167.955-2.122 2.122-2.122h1.677c.509 0 .997.19 1.379.51a3.492 3.492 0 00-.403 1.612v2.716H3.252v-2.716zM9.045 7.344a2.844 2.844 0 10-2.843 2.843 2.857 2.857 0 002.843-2.843zm-4.392 0c0-.87.7-1.57 1.57-1.57.87 0 1.57.7 1.57 1.57 0 .87-.7 1.57-1.57 1.57-.87-.021-1.57-.721-1.57-1.57z" />
        </G>
      </G>
      <Defs>
        <ClipPath id="clip0_19476_124535">
          <Rect x={-40} y={-189} width={360} height={640} rx={40} fill="#fff" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default SvgComponent
