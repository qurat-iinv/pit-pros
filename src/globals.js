import sizer from './helpers/sizer';

const baseUrl = 'https://soyapi.parlours.info/api/';

const baseOpacity = 0.5;

const COLORS = {
  primary: '#DC0028',
  white: '#FFFFFF',
  whiteV1: '#FAFAFA',
  whiteV2: '#EBEBEB',
  whiteV3: '#F5F5F5',
  dark: '#000',
  darkV1: '#1D1B20',
  darkV2: '#0000008A',
  darkV3: '#070707',
  dangerV1: '#E86969',
  danger: '#B3261E',
  dangerV3: '#D73520',
  dangerV2: '#44021F',
  dangerV3: '#FF0000',
  grey: '#4C4C4C',
  greyV1: '#5A5A5A',
  greyV2: '#464646',
  greyV3: '#AEAEAE',
  greyV4: '#C9C9C9',
  greyV5: '#F3F3F3',
  greyV6: '#A5ACB8',
  greyV6: '#49454F',
  outline: '#79747E',
  info: '#4C68FB',
  green: '#15D704',
  yellowV1: '#FF9B05',
  backdrop: '#00000020',
};

const commonStyles = {
  cardShadow: {
    elevation: 10,
    shadowColor: '#00000080',
    borderRadius: sizer.fontScale(5),
    backgroundColor: COLORS.white,
  },
};

export {baseOpacity, baseUrl, COLORS, commonStyles};
