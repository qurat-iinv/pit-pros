import React, {useRef, useState} from 'react';
import {View, StyleSheet, KeyboardAvoidingView, ScrollView} from 'react-native';

// Import Components and Utils
import {styles} from './styles';
import {Container, Typography} from '../../atom-components';
import {BackButton, PasswordField, PrimaryButton} from '../../components';
import {COLORS} from '../../globals';
import {useDispatch} from 'react-redux';
import {ChangePasswordVectorSvg} from '../../assets';

function ChangePassword() {
  const [isLoading, setIsLoading] = useState(false);
  const confirmPassRef = useRef();
  const dispatch = useDispatch();
  const [formErr, setFromErr] = useState({});
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: '',
  });
  const {password, confirmPassword} = formData;

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

  // Form Validation Function
  const validate = () => {
    let obj = {};
    if (password?.length < 6) {
      obj.password = 'The password field must be at least 6 characters.';
    }
    if (password === '' || !password) {
      obj.password = 'The password field is required.';
    }
    if (confirmPassword !== password) {
      obj.confirmPassword = 'Password not match';
    }
    if (confirmPassword === '' || !confirmPassword) {
      obj.confirmPassword = 'The confirm password field is required.';
    }
    if (Object.keys(obj)?.length) {
      setFromErr(obj);
      return true;
    }
    return false;
  };

  // Handle Submit Function
  const handleSubmit = async () => {
    if (validate()) {
      return;
    }
  };

  const form = () => {
    return (
      <>
        <PasswordField
          label="Password"
          placeholder="Password"
          handleChange={e => handleFormData(e, 'password')}
          onSubmitEditing={() => confirmPassRef.current.focus()}
          value={formData?.password}
          error={formErr?.password}
        />
        <PasswordField
          label="Confirm Password"
          placeholder="Confirm Password"
          ref={confirmPassRef}
          handleChange={e => handleFormData(e, 'confirmPassword')}
          value={formData?.confirmPassword}
          error={formErr?.confirmPassword}
          mb={78}
        />
      </>
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
            <ChangePasswordVectorSvg />
          </View>
          <View style={styles.main}>
            <Typography size={22} medium mB={12}>
              Change Password!
            </Typography>
            <Typography color={COLORS.grey} light mB={38} LineHeight={25}>
              Update your password for added security and peace of mind. Keep
              your account safe with a new, strong password.
            </Typography>
            {form()}
            <View>
              <PrimaryButton
                label="Submit"
                mb={32}
                onClick={handleSubmit}
                loader={isLoading}
              />
            </View>
          </View>
        </ScrollView>
      </Container>
    </KeyboardAvoidingView>
  );
}

export default ChangePassword;
