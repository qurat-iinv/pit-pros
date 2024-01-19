import {Dimensions, PixelRatio} from 'react-native';
import DeviceInfo from 'react-native-device-info';

const {width, height} = Dimensions.get('window');

const guidelineBaseWidth = 360;
const guidelineBaseHeight = 800;

const isTablet = DeviceInfo.isTablet();

const horizontalScale = size => {
  return Math.ceil((width / guidelineBaseWidth) * size);
};

const verticalScale = size => {
  return Math.ceil((height / guidelineBaseHeight) * size);
};

const moderateScale = (size, factor = 1) => {
  return Math.ceil(size + (horizontalScale(size) - size) * factor);
};

const moderateVerticalScale = (size, factor = 1) => {
  return Math.ceil(size + (verticalScale(size) - size) * factor);
};

const fontScale = size => {
  return size * PixelRatio.getFontScale();
};

console.log(
  isTablet
    ? 'Tablet Screen: ' +
        `Width: ${width},
    Height: ${height}`
    : 'Mobile Screen: ' +
        `Width: ${width},
       Height: ${height}`,
);

// console.log(
//   isTablet
//     ? 'Tablet Screen: ' +
//         `Width: ${moderateScale(16)},
//     Height: ${moderateVerticalScale(16)},
//     Font Size: ${fontScale(16)}`
//     : 'Mobile Screen: ' +
//         `Width: ${moderateScale(16)},
//         Height: ${moderateVerticalScale(16)},
//         Font Size: ${fontScale(16)}`,
// );

export default {
  fontScale,
  moderateScale,
  moderateVerticalScale,
  horizontalScale,
  verticalScale,
  isTablet,
};
