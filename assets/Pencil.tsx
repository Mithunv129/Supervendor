import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props: any) {
  return (
    <Svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M2.667 13.328h2.666l7.529-7.529a.667.667 0 000-.942l-1.724-1.724a.667.667 0 00-.943 0L2.666 10.66v2.667zM8 5.328l2.667 2.667"
        stroke="#36F"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgComponent;
