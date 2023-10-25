import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props:{size:number}) {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
<Path d="M10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17Z" stroke="#3366FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<Path d="M15 15L21 21" stroke="#3366FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</Svg>
  )
}

export default SvgComponent
