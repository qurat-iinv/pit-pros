import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {Avatar} from 'react-native-paper';
import sizer from '../../helpers/sizer';
import {COLORS} from '../../globals';
import {useSelector} from 'react-redux';
import {CameraSvg} from '../../assets';
import {launchImageLibrary} from 'react-native-image-picker';
import format from 'pretty-format';

const ProfileImage = () => {
  const {user} = useSelector(state => state.storeReducer);
  const [userImage, setUserImage] = useState('');

  const ImagePicker = () => {
    let options = {
      storageOption: {
        path: 'image',
      },
    };

    launchImageLibrary(options, response => {
      if (response?.didCancel) {
        console.log('User cancelled image picker');
      } else {
        setUserImage(response?.assets[0]?.uri);
      }
    });
  };

  return (
    <TouchableOpacity style={styles.profile} onPress={() => ImagePicker()}>
      <View style={styles.middle}>
        <CameraSvg />
      </View>
      <Avatar.Image
        size={sizer.fontScale(135)}
        style={styles.account}
        source={
          user?.data?.profile_image
            ? {
                uri: user?.data?.profile_image,
              }
            : userImage && {uri: userImage}
          // : require('')
        }
      />
    </TouchableOpacity>
  );
};

export default ProfileImage;

const styles = StyleSheet.create({
  profile: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: sizer.moderateVerticalScale(37),
  },
  account: {
    backgroundColor: COLORS.grey,
    borderColor: '#CFCFCF',
  },
  middle: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: 17,
    padding: 5,
  },
});
