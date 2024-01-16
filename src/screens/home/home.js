import React from 'react';
import {FlatList, View} from 'react-native';

// Import Components and Utils
import {styles} from './styles';
import {Container, Flex, Typography} from '../../atom-components';
import {PrimaryButton, UserInfoHeader} from '../../components';
import sizer from '../../helpers/sizer';
import {ClockSvg, PlusSvg} from '../../assets';
import {COLORS} from '../../globals';

// Import Libraries
import {Avatar} from 'react-native-paper';
import {appointmentCardData} from './data';

const RenderAppointmentCard = ({item}) => {
  const {title, carModal, dateAndTime} = item;
  return (
    <View style={{marginBottom: sizer.moderateVerticalScale(12)}}>
      <View style={styles.appointmentCardHeader}>
        <Typography size={8} color={COLORS.white}>
          Appointment:
        </Typography>
        <ClockSvg width={sizer.fontScale(10)} height={sizer.fontScale(10)} />
        <Typography size={8} color={COLORS.white}>
          {dateAndTime}
        </Typography>
      </View>
      <Flex
        flexStyle={{
          paddingVertical: sizer.moderateVerticalScale(7),
          ...styles.appointmentCardBody,
        }}>
        <Flex gap={12} algItems="center">
          <Avatar.Image
            style={{backgroundColor: COLORS.white}}
            size={sizer.fontScale(46)}
            source={require('../../assets/images/avatar-image.png')}
          />
          <View>
            <Typography size={14} medium mB={5}>
              {title}
            </Typography>
            <Typography size={10} color={COLORS.outline}>
              {carModal}
            </Typography>
          </View>
        </Flex>
      </Flex>
    </View>
  );
};

const Home = () => {
  return (
    <Container pT={29} pH={0}>
      <View style={{paddingHorizontal: sizer.moderateScale(16)}}>
        {/* Top Header Section */}
        <UserInfoHeader mb={28} />
        {/* Title Header Section */}
        <Flex jusContent="space-between" algItems="center">
          <Typography size={14}>Assigned Appointments</Typography>
          <PrimaryButton
            label="Check-In"
            fontSize={10}
            btnStyle={styles.checkInBtn}
            iconGap={6}
          />
        </Flex>
      </View>
      {/* Appointment Card List */}
      <FlatList
        data={appointmentCardData}
        renderItem={RenderAppointmentCard}
        keyExtractor={(_, index) => index}
        contentContainerStyle={styles.flatListContainer}
        showsVerticalScrollIndicator={false}
      />
      {/* Create Proposal Button */}
      <PrimaryButton
        label="Create Proposal"
        fontSize={12}
        btnStyle={styles.createProposalBtn}
        icon={
          <PlusSvg width={sizer.fontScale(14)} height={sizer.fontScale(15)} />
        }
      />
      {/* Create Proposal Modal */}
    </Container>
  );
};

export default Home;
