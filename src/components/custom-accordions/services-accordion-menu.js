import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';

import {COLORS} from '../../globals';
import sizer from '../../helpers/sizer';
import {GreenTickSvg} from '../../assets';
import {Flex, Typography} from '../../atom-components';
import Divider from '../divider';

const ServicesAccordionMenu = ({
  _data,
  hideBtns = true,
  hideDetails = true,
  divider = false,
  onClickCheck,
}) => {
  const {pmname, interval, lastperformed, nextdue, component, system} = _data;
  return (
    <View>
      {!!hideBtns && (
        <Flex jusContent="space-between" algItems="center" mb={18}>
          <Flex algItems="center" gap={5.2}>
            <GreenTickSvg
              width={sizer.fontScale(15)}
              height={sizer.fontScale(7)}
            />
            <Typography size={12} color={COLORS.grey}>
              Completed
            </Typography>
          </Flex>
          <TouchableOpacity
            onPress={onClickCheck}
            style={{
              paddingHorizontal: sizer.moderateScale(24),
              paddingVertical: sizer.moderateVerticalScale(10),
              borderRadius: 4,
              borderColor: '#DEDEDE',
              borderWidth: 1,
            }}>
            <Typography size={10} medium>
              Check Details
            </Typography>
          </TouchableOpacity>
        </Flex>
      )}
      {!!hideDetails && (
        <Typography
          size={12}
          light
          color={COLORS.outline}
          LineHeight={sizer.fontScale(18)}>
          Lorem ipsum dolor sit amet consectetur. Lobortis nunc ac ornare.{' '}
          <Typography size={12}>
            Was Checked On 10.10.2022 Valid Upto 12.12.2022
          </Typography>
        </Typography>
      )}
      <Flex jusContent="space-between" gap={20} mt={18} mb={9}>
        <View style={{flex: 1}}>
          <Typography textAlign="center" size={12} color={COLORS.grey} mB={8}>
            PM Name
          </Typography>
          <Typography textAlign="center" size={9} color={COLORS.darkV3}>
            {pmname}
          </Typography>
        </View>
        <View style={{flex: 1}}>
          <Typography textAlign="center" size={12} color={COLORS.grey} mB={8}>
            Interval
          </Typography>
          <Typography textAlign="center" size={9} color={COLORS.darkV3}>
            {interval}
          </Typography>
        </View>
        <View style={{flex: 1}}>
          <Typography textAlign="center" size={12} color={COLORS.grey} mB={8}>
            Last Performed
          </Typography>
          <Typography textAlign="center" size={9} color={COLORS.primary}>
            {lastperformed}
          </Typography>
        </View>
      </Flex>
      {divider && <Divider color={COLORS.whiteV2} />}
      <Flex jusContent="space-between" gap={20} mb={divider ? 9 : 18} mt={9}>
        <View style={{flex: 1}}>
          <Typography textAlign="center" size={12} color={COLORS.grey} mB={8}>
            Next Due
          </Typography>
          <Typography textAlign="center" size={9} color={COLORS.darkV3}>
            {nextdue}
          </Typography>
        </View>
        <View style={{flex: 1}}>
          <Typography textAlign="center" size={12} color={COLORS.grey} mB={8}>
            Component
          </Typography>
          <Typography textAlign="center" size={9} color={COLORS.darkV3}>
            {component}
          </Typography>
        </View>
        <View style={{flex: 1}}>
          <Typography textAlign="center" size={12} color={COLORS.grey} mB={8}>
            System
          </Typography>
          <Typography textAlign="center" size={9} color={COLORS.darkV3}>
            {system}
          </Typography>
        </View>
      </Flex>
      {divider && <Divider mB={14} color={COLORS.whiteV2} />}
    </View>
  );
};

export default ServicesAccordionMenu;
