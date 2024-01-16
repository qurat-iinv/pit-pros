import {StyleSheet, LayoutAnimation, View} from 'react-native';
import React from 'react';

import {COLORS} from '../../globals';
import sizer from '../../helpers/sizer';
import {Typography} from '../../atom-components';
import fontFamily from '../../helpers/font-family';

import {List} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

const VehicleAccordionList = ({_id, _title, _description, children}) => {
  const descriptionTypo = () => (
    <Typography
      size={12}
      color={COLORS.outline}
      light
      LineHeight={sizer.fontScale(18)}>
      {_description}{' '}
      <Typography size={12} color={COLORS.grey}>
        Checking due On 10.10.2022 Valid Upto 12.12.2022
      </Typography>
    </Typography>
  );

  return (
    <List.Accordion
      id={_id}
      title={_title}
      description={descriptionTypo()}
      descriptionNumberOfLines={0}
      right={e => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        return (
          <Icon
            name={e.isExpanded ? 'caret-down' : 'caret-right'}
            size={sizer.fontScale(18)}
            color={COLORS.dark}
            style={styles.RightIcon}
          />
        );
      }}
      theme={{
        colors: {
          primary: COLORS.dark,
        },
      }}
      titleStyle={styles.titleStyle}
      descriptionStyle={styles.descriptionStyle}
      style={styles.accordionContainer}>
      {children}
    </List.Accordion>
  );
};

export default VehicleAccordionList;

const styles = StyleSheet.create({
  accordionContainer: {
    backgroundColor: COLORS.white,
    paddingVertical: 0,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  titleStyle: {
    ...fontFamily.medium(),
    fontSize: sizer.fontScale(12),
    color: COLORS.dark,
    textTransform: 'capitalize',
    letterSpacing: 1,
    marginBottom: 8,
  },
  descriptionStyle: {
    paddingRight: sizer.moderateScale(25),
  },
  RightIcon: {top: '25%'},
});
