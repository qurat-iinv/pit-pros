import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Keyboard,
} from 'react-native';

// Import Components and Utils
import {styles} from './styles';
import {Container, Flex, Typography} from '../../atom-components';
import {BackButton, OTPInput, PrimaryButton} from '../../components';
import sizer from '../../helpers/sizer';
import {COLORS} from '../../globals';
import {OTPVerificationVectorSvg} from '../../assets';

function OTPVerification({navigation}) {
  const [formErr, setFormErr] = useState([]);
  const [otpInputs, setOtpInputs] = useState(['', '', '', '']);
  const [countdown, setCountdown] = useState(120);
  const inputRefs = [useRef(), useRef(), useRef(), useRef()];

  // Input Validation Function
  const validate = () => {
    const array = [];

    for (let i = 0; i < otpInputs.length; i++) {
      if (otpInputs[i] === '' || !otpInputs[i]) {
        array[i] = true;
      } else {
        array[i] = false;
      }
    }
    setFormErr(array);
    return array.some(error => error);
  };

  // Handle Submit Function
  const handleSubmit = async () => {
    if (validate()) {
      return;
    }
    const concatenatedOtp = otpInputs.join('');
    console.log(concatenatedOtp);
    navigation.navigate('ChangePassword');
  };

  // Handle Resend Function
  const handleResend = () => {};

  // Handle Backspace Function
  const handleBackspace = (key, index) => {
    console.log(`Backspace pressed at index ${index}, key: ${key}`);

    setOtpInputs(prev => {
      const newOtpInputs = [...prev];
      newOtpInputs[index] = '';
      return newOtpInputs;
    });

    if (key === 'Backspace' && index > 0) {
      inputRefs[index - 1].current.focus();
    }
  };

  // Handle Input Change Function
  const handleInputChange = (text, index) => {
    const newOtpInputs = [...otpInputs];
    newOtpInputs[index] = text;
    setOtpInputs(newOtpInputs);

    const newErrData = [...formErr];
    newErrData[index] = '';
    setFormErr(newErrData);

    if (text.length === 1 && index < inputRefs.length - 1) {
      inputRefs[index + 1].current.focus();
    }
    if (text.length === 1 && index === inputRefs.length - 1) {
      Keyboard.dismiss();
    }
  };

  useEffect(() => {
    let timer;
    if (countdown > 0) {
      timer = setTimeout(() => {
        setCountdown(prevCountdown => prevCountdown - 1);
      }, 1000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [countdown]);

  // Format the countdown value to display minutes and seconds
  const formatTime = seconds => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min.toString().padStart(2, '0')}:${sec
      .toString()
      .padStart(2, '0')}`;
  };

  const form = () => {
    return (
      <Flex gap={sizer.moderateScale(15)} jusContent="center">
        {otpInputs.map((_, index) => (
          <OTPInput
            key={index}
            ref={inputRefs[index]}
            handleChange={text => handleInputChange(text, index)}
            value={otpInputs[index]}
            onKeyPress={({nativeEvent: {key}}) => handleBackspace(key, index)}
            error={formErr[index]}
          />
        ))}
      </Flex>
    );
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <Container styles={{paddingHorizontal: 0}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.backbtnView}>
            <BackButton />
          </View>
          <View style={styles.vector}>
            <OTPVerificationVectorSvg />
          </View>
          <View style={styles.main}>
            <Typography size={18} bold mB={12} textAlign="center">
              OTP VERIFICATION
            </Typography>
            <Typography
              color={COLORS.grey}
              size={14}
              light
              mB={38}
              textAlign="center">
              An Email has been sent To your Email
            </Typography>
            {form()}
            <View style={styles.bottomView}>
              <Typography size={14} color={COLORS.greyV2} mB={18}>
                {formatTime(countdown)}
              </Typography>
              <TouchableOpacity style={styles.resendBtn} onPress={handleResend}>
                <Typography size={14} light color={COLORS.greyV1}>
                  Don’t receive code?
                </Typography>
                <Typography size={14} color={COLORS.primary}>
                  Re-send
                </Typography>
              </TouchableOpacity>
            </View>
            <PrimaryButton label="Continue" mb={37} onClick={handleSubmit} />
          </View>
        </ScrollView>
      </Container>
    </KeyboardAvoidingView>
  );
}

export default OTPVerification;
