import styled from 'react-emotion';
import BlitzCSS from '../lib/utils'

console.log(BlitzCSS)

import {
  space,
  width,
  height,
  fontSize,
  color,
  textAlign,
  justifyContent,
  responsiveStyle
} from 'styled-system';

const wrap = responsiveStyle({
  prop: 'wrap',
  cssProperty: 'flexWrap'
});

export const Blitz = styled('main')`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  ${color};
  ${textAlign};
`

export const Box = styled('section')`
  overflow: hidden;
  ${space} ${width} ${height} ${fontSize} ${color} ${textAlign};
`

export const Flex = styled('div')`
  display: flex;
  ${justifyContent} ${wrap};
`;
