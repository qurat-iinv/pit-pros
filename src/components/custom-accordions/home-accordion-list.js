import {StyleSheet, LayoutAnimation} from 'react-native';
import React from 'react';

// Import Components and Utils
import {COLORS} from '../../globals';
import sizer from '../../helpers/sizer';
import fontFamily from '../../helpers/font-family';

// Import Libraries
import {List} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeAccordionList = ({_id, _title, children}) => {
  return (
    <List.Accordion
      id={_id}
      title={_title}
      right={e => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        return (
          <Icon
            name={e.isExpanded ? 'caret-down' : 'caret-right'}
            size={sizer.fontScale(10)}
            color={COLORS.white}
            style={{left: sizer.fontScale(4)}}
          />
        );
      }}
      titleStyle={{
        ...fontFamily.regular(),
        fontSize: sizer.fontScale(10),
        color: COLORS.white,
      }}
      style={styles.accordionContainer}>
      {children}
    </List.Accordion>
  );
};

export default HomeAccordionList;

const styles = StyleSheet.create({
  accordionContainer: {
    backgroundColor: COLORS.primary,
    height: sizer.moderateVerticalScale(40),
    justifyContent: 'center',
    paddingVertical: 0,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    marginBottom: sizer.moderateVerticalScale(18),
  },
});
