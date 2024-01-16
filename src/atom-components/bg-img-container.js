import React from 'react';
import {ImageBackground, View} from 'react-native';

import sizer from '../helpers/sizer';
import {COLORS} from '../globals';

export default function BgImgContainer({
  children,
  // url = require(''),
  pT = 0,
  pX = 0,
  pB = 0,
  bTLR = 0,
  bTRR = 0,
  ...props
}) {
  const styleObj = {
    flex: 1,
    paddingTop: sizer.moderateVerticalScale(pT),
    paddingHorizontal: sizer.moderateScale(pX),
    paddingBottom: sizer.moderateVerticalScale(pB),
    borderTopLeftRadius: bTLR,
    borderTopRightRadius: bTRR,
    ...props,
  };

  return (
    <ImageBackground source={url} resizeMode="cover" style={styleObj}>
      <View
        style={{
          flex: 1,
          width: '100%',
          backgroundColor: 'rgba(255,255,255,.40)',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {children}
      </View>
    </ImageBackground>
  );
}
