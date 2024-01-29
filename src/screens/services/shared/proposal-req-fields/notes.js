import React from 'react';
import {Flex, Typography} from '../../../../atom-components';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Avatar} from 'react-native-paper';
import {COLORS} from '../../../../globals';
import {StyleSheet, View} from 'react-native';
import sizer from '../../../../helpers/sizer';
import {SwipeScreenHeading} from '../../utils';

const Note = ({name, noteText, time = '12:00'}) => {
  return (
    <Flex jusContent="space-between" algItems="center" mb={14}>
      <Flex algItems="center" gap={12}>
        <TouchableOpacity>
          <Avatar.Image
            style={{backgroundColor: COLORS.white}}
            size={sizer.fontScale(55)}
            source={require('../../../../assets/images/dummy-image.png')}
          />
        </TouchableOpacity>
        <View>
          <Typography size={14} medium color={COLORS.dark} mB={6} capitalize>
            {name}
          </Typography>
          <Typography size={12} light color={COLORS.grey} LineHeight={20}>
            {noteText}
          </Typography>

          {/* <Image source={require("../../../../assets/images/dummy-image.png")}/> */}
        </View>
      </Flex>
      <View>
        <View>
          <Typography size={11} color="#79747E">
            {time}
          </Typography>
        </View>
      </View>
    </Flex>
  );
};

const Notes = () => {
  return (
    <>
      <SwipeScreenHeading title="Notes" />

      <View style={styles.container}>
        <Note
          name="John Doe (Technician)"
          noteText="Hey, welcome! We'll take a look at it."
        />
        <Note
          name="Tina Doe (Customer)"
          noteText="It's like a clunking sound when I turn left."
        />
        <Note
          name="John Doe (Technician)"
          noteText="Hey, welcome! We'll take a look at it."
        />
      </View>
    </>
  );
};

export default Notes;

const styles = StyleSheet.create({
  container: {
    marginTop: sizer.moderateVerticalScale(25),
    padding: 2,
  },
});
