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
        d="M10 2a1 1 0 000 2h4a1 1 0 100-2h-4zM2 6.5a1 1 0 011-1h18a1 1 0 110 2h-1.033l-.77 10.785A4 4 0 0115.207 22h-6.42a4 4 0 01-3.99-3.706L4.004 7.525 4 7.5H3a1 1 0 01-1-1zm4.006 1h11.956l-.76 10.642A2 2 0 0115.207 20h-6.42a2 2 0 01-1.995-1.853L6.006 7.5zM10 10a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm5 1a1 1 0 10-2 0v5a1 1 0 102 0v-5z"
        fill="#000"
      />
    </Svg>
  )
}

export default SvgComponent
