import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';

import {CustomDropDown} from '..';
import sizer from '../../helpers/sizer';
import fontFamily from '../../helpers/font-family';
import {Flex} from '../../atom-components';
import {AngleDownSvg} from '../../assets';
import {commonStyles} from '../../globals';

const years = [];
const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth() + 1;
const minYear = currentYear - 10;
const maxYear = currentYear + 10;

for (let year = minYear; year <= maxYear; year++) {
  years.push({label: year.toString(), value: year});
}

const months = [
  {label: 'January', value: 1},
  {label: 'February', value: 2},
  {label: 'March ', value: 3},
  {label: 'April', value: 4},
  {label: 'May ', value: 5},
  {label: 'June ', value: 6},
  {label: 'July', value: 7},
  {label: 'August', value: 8},
  {label: 'September', value: 9},
  {label: 'October', value: 10},
  {label: 'November', value: 11},
  {label: 'December', value: 12},
];

const MonthYearFilter = ({mT = 0, mB = 0}) => {
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const handleMonth = e => {
    setMonth(e.value);
  };
  const handleYear = e => {
    setYear(e.value);
  };
  // console.log(month, year);
  return (
    <View
      style={[
        styles.mainContainer,
        {
          marginTop: sizer.moderateVerticalScale(mT),
          marginBottom: sizer.moderateVerticalScale(mB),
        },
      ]}>
      <Flex jusContent="center" algItems="center" gap={sizer.moderateScale(12)}>
        <CustomDropDown
          data={months}
          placeholder="Month"
          handleChange={handleMonth}
          value={currentMonth}
          valueField="value"
          contStyle={styles.inputContainer}
          selectedTextStyle={styles.inputTextStyle}
          placeholderStyle={styles.inputTextStyle}
          RightIcon={AngleDownSvg}
          rightIconStyle={{width: 12, height: 8, marginRight: 5}}
          mb={0}
        />
        <CustomDropDown
          data={years}
          placeholder="Year"
          handleChange={handleYear}
          value={currentYear}
          valueField="value"
          contStyle={styles.inputContainer}
          selectedTextStyle={styles.inputTextStyle}
          placeholderStyle={styles.inputTextStyle}
          RightIcon={AngleDownSvg}
          rightIconStyle={{width: 12, height: 8, marginRight: 5}}
          mb={0}
        />
      </Flex>
    </View>
  );
};

export default MonthYearFilter;

const styles = StyleSheet.create({
  mainContainer: {
    ...commonStyles.cardShadow,
    height: sizer.moderateVerticalScale(75),
    justifyContent: 'center',
  },
  inputContainer: {
    height: sizer.moderateVerticalScale(40),
    width: sizer.moderateScale(125),
    borderRadius: sizer.fontScale(40),
    borderColor: '#E2E5ED',
  },
  inputTextStyle: {
    ...fontFamily.medium(),
  },
});
