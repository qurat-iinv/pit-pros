import React, {useState} from 'react';
import {View, KeyboardAvoidingView, ScrollView} from 'react-native';

// Import Components and Utils
import {styles} from './styles';
import {Container, Typography} from '../../atom-components';
import {BackButton, InputField, PrimaryButton} from '../../components';
import {COLORS} from '../../globals';
import {EmailRightSvg, ForgotPasswordVectorSvg} from '../../assets';

// Import Libraries
import {useNavigation} from '@react-navigation/native';

function ForgotPassword() {
  const [formErr, setFromErr] = useState({});
  const [formData, setFormData] = useState({
    email: '',
  });
  const {email} = formData;
  const navigation = useNavigation();

  // FormData Setter Function
  const handleFormData = (e, name) => {
    setFormData({
      ...formData,
      [name]: e,
    });
    setFromErr({
      ...formErr,
      [name]: '',
    });
  };

  // Form Validtion Function
  const validate = () => {
    let obj = {};
    let emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email?.match(emailFormat) === null) {
      obj.email = 'Please enter a valid email address.';
    }
    if (email === '' || !email) {
      obj.email = 'The email field is required.';
    }
    if (Object.keys(obj)?.length) {
      setFromErr(obj);
      return true;
    }
    return false;
  };

  const handleSubmit = async () => {
    if (validate()) {
      return;
    }
    navigation.navigate('OTPVerification');
  };

  const handleCancel = () => {
    navigation.goBack();
  };

  const form = () => {
    return (
      <InputField
        label="Email Address"
        placeholder="Email Address"
        RightIcon={EmailRightSvg}
        handleChange={e => handleFormData(e, 'email')}
        value={formData?.email}
        error={formErr?.email}
        mb={38}
      />
    );
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <Container styles={{paddingHorizontal: 0}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.backBtnView}>
            <BackButton />
          </View>
          <View style={styles.vector}>
            <ForgotPasswordVectorSvg />
          </View>
          <View style={styles.main}>
            <Typography size={22} medium mB={12}>
              Forgot Password?
            </Typography>
            <Typography color={COLORS.grey} light mB={38} LineHeight={24}>
              Locked out of your account? Regain access hassle-free with a
              password reset.
            </Typography>
            {form()}
            <View>
              <PrimaryButton label="Continue" mb={12} onClick={handleSubmit} />
              <PrimaryButton
                label="Cancel"
                type="null"
                mb={9}
                onClick={handleCancel}
              />
            </View>
          </View>
        </ScrollView>
      </Container>
    </KeyboardAvoidingView>
  );
}

export default ForgotPassword;
