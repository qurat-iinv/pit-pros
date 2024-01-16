import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';

import {COLORS} from '../../globals';
import sizer from '../../helpers/sizer';
import {DeleteSvg} from '../../assets';
import {Flex, Typography} from '../../atom-components';

import {Divider} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const HomeAccordionMenu = ({_data}) => {
  const {vin, status, severity, unit, year, make, model} = _data;

  const navigation = useNavigation();

  const goToVehicleDetails = () => {
    navigation.navigate('VehicleDetails');
  };

  return (
    <View>
      <Flex jusContent="space-between" algItems="center">
        <TouchableOpacity style={styles.deletebtn}>
          <DeleteSvg width={sizer.fontScale(13)} height={sizer.fontScale(15)} />
          <Typography size={13}>Delete</Typography>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            paddingHorizontal: sizer.moderateScale(24),
            paddingVertical: sizer.moderateVerticalScale(10),
            borderRadius: 4,
            borderColor: '#DEDEDE',
            borderWidth: 1,
          }}
          onPress={goToVehicleDetails}>
          <Typography size={10} medium>
            Check Details
          </Typography>
        </TouchableOpacity>
      </Flex>
      <Flex jusContent="space-between" mt={18} mb={18}>
        <View style={{flex: 4}}>
          <Typography size={12} color={COLORS.grey} mB={8}>
            VIN
          </Typography>
          <Typography size={8} color={COLORS.darkV3}>
            {vin}
          </Typography>
        </View>
        <View style={{flex: 3}}>
          <Typography size={12} color={COLORS.grey} mB={8}>
            Status
          </Typography>
          <Typography size={8} color={COLORS.darkV3}>
            {status}
          </Typography>
        </View>
        <View style={{flex: 3}}>
          <Typography size={12} color={COLORS.grey} mB={8}>
            Severity
          </Typography>
          <Typography size={8} color={COLORS.darkV3}>
            {severity}
          </Typography>
        </View>
        <View style={{flex: 1.5}}>
          <Typography size={12} color={COLORS.grey} mB={8}>
            Unit
          </Typography>
          <Typography size={8} color={COLORS.darkV3}>
            {unit}
          </Typography>
        </View>
      </Flex>
      <Divider theme={{colors: {primary: '#EBEBEB'}}} />
      <Flex jusContent="space-between" mt={18} mb={18}>
        <View style={{flex: 4}}>
          <Typography size={12} color={COLORS.grey} mB={8}>
            Year
          </Typography>
          <Typography size={8} color={COLORS.darkV3}>
            {year}
          </Typography>
        </View>
        <View style={{flex: 3}}>
          <Typography size={12} color={COLORS.grey} mB={8}>
            Make
          </Typography>
          <Typography size={8} color={COLORS.darkV3}>
            {make}
          </Typography>
        </View>
        <View style={{flex: 3}}>
          <Typography size={12} color={COLORS.grey} mB={8}>
            Model
          </Typography>
          <Typography size={8} color={COLORS.darkV3}>
            {model}
          </Typography>
        </View>
        <View style={{flex: 1.5}}></View>
      </Flex>
    </View>
  );
};

export default HomeAccordionMenu;

const styles = StyleSheet.create({
  deletebtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7.5,
  },
});
