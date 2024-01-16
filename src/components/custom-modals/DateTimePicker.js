import React from 'react';
import moment from 'moment';
import DatePicker from 'react-native-date-picker';

const DateTimePicker = ({
  open,
  setOpen,
  mode = 'date',
  getDate = () => {},
  getTime = () => {},
  minimumDate = '',
}) => {
  const formatDate = e => {
    const formattedDate = moment(e).format('DD/MM/YYYY');
    getDate(formattedDate);
  };

  const formatTime = e => {
    const convertedTime = moment(e).format('hh:mm A');
    getTime(convertedTime);
  };

  return (
    <>
      <DatePicker
        modal
        theme="light"
        mode={mode}
        open={open}
        date={new Date()}
        minimumDate={minimumDate}
        onConfirm={date => {
          setOpen(false);
          mode == 'date' && formatDate(date);
          mode == 'time' && formatTime(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </>
  );
};

export default DateTimePicker;
