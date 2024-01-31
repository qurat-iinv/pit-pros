import {
  StyleSheet,
  View,
  Modal,
  TouchableOpacity,
  ImageBackground,
  Switch,
} from 'react-native';
import React, {useState} from 'react';

import {COLORS} from '../../globals';
import sizer from '../../helpers/sizer';
import {BackButton, PrimaryButton} from '../';
import {BgBlurContainer, Typography} from '../../atom-components';

import {ScrollView} from 'react-native-gesture-handler';
import {RenderInputField} from '../../screens/services/utils';
import Icon from 'react-native-vector-icons/FontAwesome6';
import CrossIcom from 'react-native-vector-icons/Entypo';
import ModalButton from '../custom-buttons/modal-button';

const AddNoteModal = ({visible, setVisible}) => {
  const handleModal = () => {
    setVisible('estimationRequest', false);
  };

  const handleReject = () => {
    setVisible(false);
  };

  const NoteImage = () => {
    return (
      <ImageBackground
        source={require('../../assets/images/dummy-images/4.png')}
        style={styles.noteImage}>
        <View style={styles.crossIconContainer}>
          <CrossIcom name="cross" size={sizer.fontScale(10)} color="white" />
        </View>
      </ImageBackground>
    );
  };

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <Modal transparent={true} visible={visible} onRequestClose={handleModal}>
      <BgBlurContainer />
      <View style={styles.modalContainer}>
        <TouchableOpacity style={styles.backBtn} onPress={handleModal}>
          <BackButton disabled={true} />
        </TouchableOpacity>
        <View style={styles.centeredView}>
          <Typography size={18} medium mB={10} textAlign="center">
            Add a Note
          </Typography>
          <RenderInputField label="Note" placeholder="Note" multiline />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              gap: 8,
              marginBottom: 24,
            }}>
            <NoteImage />
            <NoteImage />
            <NoteImage />

            <View style={styles.addImageContainer}>
              <Icon name="plus" size={sizer.fontScale(15)} color="#79747E" />
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Typography size={12}>Visible to Customer</Typography>
            <Switch
              trackColor={{false: '#767577', true: '#DC0028'}}
              thumbColor={isEnabled ? '#fff' : '#f4f3f4'}
              // ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
              style={{width: 28, height: 20}}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginHorizontal: sizer.moderateScale(-17),
              marginTop: sizer.moderateScale(20),
            }}>
            <ModalButton leftLabel="Cancel" rightLabel='Add a Note' handlePressCancel={handleReject}/>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default AddNoteModal;

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: 'transparent',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: sizer.moderateScale(16),
  },
  centeredView: {
    width: '100%',
    backgroundColor: COLORS.white,
    borderRadius: 10,
    paddingHorizontal: sizer.moderateScale(16),
    paddingTop: sizer.moderateScale(25),
    maxHeight: sizer.moderateVerticalScale(675),
    elevation: 4,
    shadowColor: '#00000070',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.08,
    shadowRadius: 8,
    marginTop: sizer.moderateVerticalScale(60),
  },
  backBtn: {
    alignSelf: 'flex-start',
    position: 'absolute',
    top: sizer.moderateVerticalScale(21),
    left: sizer.moderateScale(16),
  },
  rejectBtn: {
    borderColor: '#DEDEDE',
    borderWidth: sizer.fontScale(1),
  },

  noteImage: {
    width: sizer.moderateScale(56),
    height: sizer.moderateVerticalScale(61),
    borderRadius: sizer.moderateScale(4),
  },

  crossIconContainer: {
    width: sizer.moderateScale(10),
    height: sizer.moderateScale(10),
    backgroundColor: '#DC0028',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: sizer.moderateVerticalScale(-4),
    left: sizer.moderateScale(48),
  },

  addImageContainer: {
    backgroundColor: 'white',
    borderColor: '#79747E',
    borderWidth: sizer.moderateScale(1),
    borderStyle: 'dashed',
    width: sizer.moderateScale(56),
    height: sizer.moderateVerticalScale(61),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
