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
        d="M19 7a1.99 1.99 0 001-.268V5.5a2 2 0 00-2-2h-.323A2 2 0 0019 7zm0 2c.345 0 .68-.044 1-.126v4.992a2 2 0 01-2 2h-6.496a1.01 1.01 0 00-.626.217L6.62 19.439v-2.563a1.01 1.01 0 00-1.01-1.01H5a2 2 0 01-2-2V5.5a2 2 0 012-2h10.29A4 4 0 0019 9zm4-4c0 1.014-.378 1.94-1 2.646v6.22a4 4 0 01-4 4h-6.153l-5.593 4.407a1.01 1.01 0 01-1.635-.794v-3.631A4 4 0 011 13.866V5.5a4 4 0 014-4h12.062A4 4 0 0123 5zM6 7a1 1 0 000 2h7a1 1 0 100-2H6zm0 4a1 1 0 100 2h3.792a1 1 0 100-2H6z"
        fill="#000"
      />
      <Path d="M21 5a2 2 0 11-4 0 2 2 0 014 0z" fill="#FFD058" />
    </Svg>
  )
}

export default SvgComponent
