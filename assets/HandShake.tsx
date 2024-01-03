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
        d="M5.287 4.542a1 1 0 01.67 1.246l-.213.712h4.082c.945-.604 1.901-.9 2.533-.99l.17-.024 6.148 1.23-.13-.415a1 1 0 011.907-.602l3 9.5a1 1 0 01-1.908.602l-.145-.462c-.355.368-.824.73-1.364.95a3.905 3.905 0 01-.436 1.932c-.473.919-1.355 1.751-2.785 2.228-2.488.83-4.528 1.051-5.316 1.051h-.277l-.237-.142c-1.596-.958-5.214-3.513-7.732-6.556l-.296.986a1 1 0 11-1.916-.575l3-10a1 1 0 011.245-.67zm15.27 8.125l-1.192-3.774-6.88-1.376c-.983.199-2.857 1.07-3.5 3.177.204-.077.494-.22.887-.477.226-.213.56-.48.95-.706.425-.247 1.023-.51 1.678-.51h.391l5.969 5.509c.046-.006.093-.01.14-.01.212 0 .592-.16.975-.563.39-.41.525-.8.525-.937 0-.117.02-.229.057-.333zm-16.64-.076l1.228-4.093c.02.002.04.002.061.002H7.81a6.531 6.531 0 00-.77 1.726l-.012.038-.008.04A2.78 2.78 0 007 11.337c.07.37.262.857.75 1.169.491.313 1.06.31 1.575.176.512-.132 1.085-.42 1.73-.85l.083-.055.07-.07c.11-.11.343-.306.62-.467.132-.076.251-.132.357-.171l5.856 5.406c-.006.227-.06.525-.216.83-.218.423-.67.923-1.64 1.247-2.02.673-3.67.894-4.417.939-1.731-1.08-5.288-3.685-7.467-6.59a.996.996 0 00-.383-.31z"
        fill="#000"
      />
    </Svg>
  )
}

export default SvgComponent