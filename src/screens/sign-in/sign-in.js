import React, {useRef, useState} from 'react';
import {View, TouchableOpacity, KeyboardAvoidingView} from 'react-native';

// Import Components
import {styles} from './styles';
import {Container, Flex, Typography} from '../../atom-components';
import {PasswordField, PrimaryButton, InputField} from '../../components';
import sizer from '../../helpers/sizer';
import {COLORS, baseOpacity} from '../../globals';
import {EmailRightSvg, LogoMainSvg, TickSvg} from '../../assets';
import {useDispatch} from 'react-redux';
import {login} from '../../store/reducer';

function SignIn({navigation}) {
  // const [userData, setuserData] = useState(false);
  const [remember, setRemember] = useState(true);
  const [formErr, setFromErr] = useState({});
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const {email, password} = formData;
  const dispatch = useDispatch();
  const passRef = useRef();

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

  const validate = () => {
    let obj = {};
    if (email === '' || !email) {
      obj.email = 'The email field is required.';
    }
    if (password?.length < 6) {
      obj.password = 'The password field must be at least 6 characters.';
    }
    if (password === '' || !password) {
      obj.password = 'The password field is required.';
    }

    if (Object.keys(obj)?.length) {
      setFromErr(obj);
      return true;
    }
    return false;
  };

  // handle login function
  const handleLogin = async () => {
    if (validate()) {
      return;
    }
    dispatch(login({}));
  };

  // handle signup function
  const handleSignup = () => {
    // navigation.navigate('SignUp');
  };

  const form = () => {
    return (
      <View>
        <InputField
          label="Email address"
          placeholder="Email"
          RightIcon={EmailRightSvg}
          handleChange={e => handleFormData(e, 'email')}
          onSubmitEditing={() => passRef.current.focus()}
          value={formData?.email}
          error={formErr?.email}
        />
        <PasswordField
          label="Password"
          placeholder="Password"
          ref={passRef}
          handleChange={e => handleFormData(e, 'password')}
          value={formData?.password}
          error={formErr?.password}
          mb={12}
        />
      </View>
    );
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <Container styles={{paddingHorizontal: 0}}>
        <View style={styles.mainContainer}>
          <View style={styles.main}>
            {/* Main Logo Header */}
            <View style={styles.mainLogoTop}>
              <LogoMainSvg />
            </View>
            {/* Screen Body */}
            <Typography size={25} bold mT={70} mB={29}>
              Welcome Back 👋🏼
            </Typography>
            <Typography light pB={48}>
              Welcome back! Please enter your credentials to access your
              account.
            </Typography>
            {form()}
            {/* Remeber me and Forgot password Sections */}
            <Flex jusContent="space-between" algItems="center">
              {/* Remeber me box */}
              <TouchableOpacity
                activeOpacity={baseOpacity}
                style={styles.remember}
                onPress={() => setRemember(!remember)}>
                <View style={styles.box}>
                  {remember ? (
                    <TickSvg
                      width={sizer.fontScale(10)}
                      height={sizer.fontScale(7)}
                    />
                  ) : null}
                </View>
                <Typography size={12} mL={5}>
                  Remember Me
                </Typography>
              </TouchableOpacity>
              {/* Forgot Password Button */}
              <TouchableOpacity
                activeOpacity={baseOpacity}
                onPress={() => navigation.navigate('ForgotPassword')}>
                <Typography size={12} color={COLORS.danger}>
                  Forgot Password?
                </Typography>
              </TouchableOpacity>
            </Flex>
            {/* Login Button */}
            <PrimaryButton
              label="Login"
              mt={44}
              mb={32}
              onClick={() => handleLogin()}
            />
          </View>
          {/* Sign Up button */}
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity style={styles.signupBtn} onPress={handleSignup}>
              <Typography size={14} light>
                Don’t Have an account?
              </Typography>
              <Typography size={14} color={COLORS.primary}>
                Sign Up
              </Typography>
            </TouchableOpacity>
          </View>
        </View>
      </Container>
    </KeyboardAvoidingView>
  );
}

export default SignIn;
