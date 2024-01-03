import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props:any) {
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
        d="M11.967 3.968A3 3 0 0116.2 3.48l1.877 1.501a3 3 0 01.484 4.196l-9.474 12.06A2 2 0 017.514 22H3.219l-1.07-4.282a2 2 0 01.367-1.721l9.451-12.029zm2.984 1.073a1 1 0 00-1.411.163l-1.008 1.283 3.534 2.629.923-1.175a1 1 0 00-.162-1.399l-1.876-1.501zm-.122 5.648l-3.533-2.63-7.207 9.173L4.78 20h2.733l7.315-9.31zM12.5 21a1 1 0 011-1h7a1 1 0 110 2h-7a1 1 0 01-1-1z"
        fill="#000"
      />
    </Svg>
  )
}

export default SvgComponent
