import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

function SvgComponent(props:any) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}>
      <G clipPath="url(#clip0_22288_132737)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M21.707 5.293a1 1 0 010 1.414L10.061 18.354a1.5 1.5 0 01-2.122 0l-5.646-5.647a1 1 0 111.414-1.414L9 16.586 20.293 5.293a1 1 0 011.414 0z"
          fill="#fff"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_22288_132737">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgComponent;
