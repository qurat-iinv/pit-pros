import sizer from '../../helpers/sizer';
import {InputField} from '../../components';
import {StyleSheet, View} from 'react-native';
import {Typography} from '../../atom-components';

export const RenderInputField = ({
  label,
  placeholder,
  mT = 10,
  multiline = false,
}) => {
  return (
    <InputField
      label={label}
      mt={sizer.moderateVerticalScale(mT)}
      labelStyle={{color: 'black'}}
      placeholder={placeholder}
      labelColor="#49454F"
      inputStyle={{
        fontWeight: '300',
        textAlignVertical: multiline ? 'top' : null,
      }}
      multiline={multiline}
      numberOfLines={multiline ? 5 : 1}
      maxLength={40}
    />
  );
};

export const Table = () => {
  const TableRow = ({name, quantity, cost, bold}) => (
    <View
      style={[
        styles.tableHead,
        bold && {borderBottomColor: '#C7C7C7', borderBottomWidth: 0.5},
      ]}>
      <View style={styles.tableLeft}>
        <Typography bold={bold} size={11}>
          {name}
        </Typography>
      </View>

      <View style={styles.tableCenter}>
        <Typography bold={bold} size={11}>
          {quantity}
        </Typography>
      </View>

      <View style={styles.tableRight}>
        <Typography bold={bold} size={11}>
          {cost}
        </Typography>
      </View>
    </View>
  );

  return (
    <View>
      <TableRow bold name="Name" quantity="Quantity" cost="Cost" />
      <TableRow name="Product Lorem Ipsum" quantity={1} cost="$10" />
      <TableRow name="Product Lorem Ipsum" quantity={1} cost="$10" />
    </View>
  );
};

export const SwipeScreenHeading = ({title, style = {}}) => {
  return (
    <Typography style={style} size={sizer.fontScale(14)} bold>
      {title}
    </Typography>
  );
};

import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';

const SwipeScreenDropDown = ({label, value}) => {
  return (
    <CustomDropDown
      data={reqDetail}
      mt={sizer.moderateVerticalScale(10)}
      labelStyle={{color: 'black'}}
      label={label}
      value={value}
      handleChange={handleChange}
      valueField="value"
    />
  );
};

export default SwipeScreenDropDown;

// DropDown Options
export const reqDetail = [
  {
    label: 'Medium Duty Oil Change',
    value: 'oilChange',
  },
  {
    label: 'Custom Complaint',
    value: 'customComplaint',
  },
];

export const globalServicesLeft = [
  {
    label: 'Chassis/Chassis',
    value: 'chassis',
  },
  {
    label: 'example 2',
    value: 'example2',
  },
];
const styles = StyleSheet.create({
  tableHead: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: 'black',
    paddingVertical: 10,
  },

  tableLeft: {
    flex: 3,
    alignItems: 'center',
    // backgroundColor: 'pink',
  },

  tableCenter: {
    flex: 4,
    alignItems: 'center',
    // backgroundColor: 'yellow',
  },

  tableRight: {
    flex: 1,
    alignItems: 'center',
    // backgroundColor: 'lightblue',
  },
});
