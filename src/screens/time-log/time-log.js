import React from 'react';
import {FlatList, View} from 'react-native';

// Import Components and Utils
import {styles} from './styles';
import {Container, Flex, Typography} from '../../atom-components';
import {MonthYearFilter, UserInfoHeader} from '../../components';
import {CalendarSvg, GreenTickSvg, InprogressSvg} from '../../assets';
import {COLORS} from '../../globals';
import sizer from '../../helpers/sizer';
import {historyData} from './data';

const RenderHistoryCard = ({item}) => {
  const {date, time, status, workHours} = item;
  return (
    <View style={styles.cardContainer}>
      <Flex jusContent="space-between" mb={15}>
        <Flex gap={sizer.moderateScale(12)} algItems="center">
          <CalendarSvg />
          <View>
            <Typography size={12} medium mB={2}>
              {date}
            </Typography>
            <Typography size={12} color={COLORS.grey}>
              {time}
            </Typography>
          </View>
        </Flex>
        <View>
          <Typography size={12} medium mB={2}>
            Status
          </Typography>
          <Flex algItems="center" gap={sizer.moderateScale(5)}>
            {status === 'Completed' ? (
              <GreenTickSvg
                width={sizer.fontScale(15)}
                height={sizer.fontScale(7)}
              />
            ) : (
              <InprogressSvg
                width={sizer.fontScale(13)}
                height={sizer.fontScale(12)}
              />
            )}
            <Typography size={12} color={COLORS.grey}>
              {status === 'Completed' ? 'Completed' : 'In Progress'}
            </Typography>
          </Flex>
        </View>
      </Flex>
      <Typography size={12} medium>
        Total Work Hours: {workHours}
      </Typography>
    </View>
  );
};

const TimeLog = () => {
  return (
    <Container pT={29} pH={0}>
      <View style={{paddingHorizontal: sizer.moderateScale(16)}}>
        {/* Top Header Section */}
        <UserInfoHeader mb={27} />
        {/* Month and Year Filter Section */}
        <Typography size={14}>Check ins and outs history</Typography>
        <MonthYearFilter mT={12} mB={38} />
        {/* Total Work Hours Section */}
        <Flex jusContent="space-between" mb={18}>
          <Typography size={14}>Total Work Hours</Typography>
          <Typography size={14}>99H, 55M</Typography>
        </Flex>
        {/* History Section */}
        <Typography size={14}>History</Typography>
      </View>
      <FlatList
        data={historyData}
        renderItem={RenderHistoryCard}
        keyExtractor={(_, index) => index}
        contentContainerStyle={styles.flatListContainer}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
};

export default TimeLog;
