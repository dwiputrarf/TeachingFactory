import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { COLOR_BASE_PRIMARY_LIGHT } from '../../app/styles';

const SvgSearch = props => (
  <Svg width={24} height={24} viewBox="0 0 24 24" {...props}>
    <Path
      d="M9.967 14.066a4.76 4.76 0 1 0 6.732-6.732 4.76 4.76 0 0 0-6.732 6.732zm-1.28.431a6 6 0 1 1 .88.874L5.737 19.2a.62.62 0 1 1-.876-.876l3.825-3.826z"
      fill={COLOR_BASE_PRIMARY_LIGHT}
    />
  </Svg>
);

export default SvgSearch;
