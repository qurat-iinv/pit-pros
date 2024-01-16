import {Platform} from 'react-native';

const regular = () => {
  return {
    ...Platform.select({
      ios: {
        fontFamily: 'Roboto-Regular',
        fontWeight: '400',
      },
      android: {
        fontFamily: 'Roboto-Regular',
      },
    }),
  };
};

const bold = () => {
  return {
    ...Platform.select({
      ios: {
        fontFamily: 'Roboto-Bold',
        fontWeight: '700',
      },
      android: {
        fontFamily: 'Roboto-Bold',
      },
    }),
  };
};

const medium = () => {
  return {
    ...Platform.select({
      ios: {
        fontFamily: 'Roboto-Medium',
        fontWeight: '500',
      },
      android: {
        fontFamily: 'Roboto-Medium',
      },
    }),
  };
};

const light = () => {
  return {
    ...Platform.select({
      ios: {
        fontFamily: 'Roboto-Light',
        fontWeight: '300',
      },
      android: {
        fontFamily: 'Roboto-Light',
      },
    }),
  };
};

export default {
  regular,
  bold,
  medium,
  light,
};
