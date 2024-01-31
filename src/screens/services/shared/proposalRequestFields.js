import React, {useState} from 'react';
import {View} from 'react-native';
import RequestDetails from './proposal-req-fields/request-details';
import GlobalServices from './proposal-req-fields/global-services';
import Scheduling from './proposal-req-fields/scheduling';
import Authorization from './proposal-req-fields/authorization';
import Notes from './proposal-req-fields/notes';
import sizer from '../../../helpers/sizer';
import {PrimaryButton} from '../../../components';
import Icon from 'react-native-vector-icons/FontAwesome';
import {SwipeScreenHeading} from '../utils';
import {ScrollView} from 'react-native-gesture-handler';
import AddProductModal from '../../../components/custom-modals/add-product';
import AddServicesModal from '../../../components/custom-modals/add-services';

const ProposalRequestFields = ({fieldType, width}) => {
  const [dropdownSelectedVal, setDropdownSelectedVal] = useState(null);
  const handleChange = e => {
    setDropdownSelectedVal(e.value);
  };

  const [visible, setVisible] = useState(false);

  const [showAnotherService, setShowAnotherService] = useState([]);

  const handleShowOtherServices = () => {
    let i = 0;
    setShowAnotherService(prev => [...prev, i++]);
  };

  const showModal = () => {
    setVisible(true);
  };

  return (
    <View style={{width: width, paddingHorizontal: 16}}>
      {fieldType === 'RequestDetails' && (
        <>
          <RequestDetails
            dropdownSelectedVal={dropdownSelectedVal}
            handleChange={handleChange}
          />
          <View style={{alignItems: 'flex-end'}}>
            <PrimaryButton
              label="Next"
              fontSize={sizer.fontScale(12)}
              btnStyle={{width: 76, height: 31, marginBottom: 10}}
            />
          </View>
        </>
      )}

      {fieldType === 'GlobalServices' && (
        <View>
          <SwipeScreenHeading title="Global Services" />
          <ScrollView
            style={{marginTop: 20, height: 510}}
            contentContainerStyle={{flexGrow: 1}}
            showsVerticalScrollIndicator={false}>
            <GlobalServices
              visible={visible}
              setVisible={setVisible}
              dropdownSelectedVal={dropdownSelectedVal}
              handleChange={handleChange}
            />

            {showAnotherService.map((_, i) => {
              return (
                <GlobalServices
                  visible={visible}
                  setVisible={setVisible}
                  key={i}
                  dropdownSelectedVal={dropdownSelectedVal}
                  handleChange={handleChange}
                />
              );
            })}
            {visible && (
              <AddServicesModal visible={visible} setVisible={setVisible} />
            )}

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-end',
                height: sizer.moderateVerticalScale(35),
              }}>
              <PrimaryButton
                label="Add Another Service"
                onClick={showModal}
                fontSize={10}
                btnStyle={{
                  backgroundColor: 'white',
                  width: sizer.moderateScale(146),
                  height: sizer.moderateVerticalScale(31),
                  marginHorizontal: sizer.moderateScale(18),
                }}
                textStyle={{color: 'black', fontWeight: 800}}
              />
              <PrimaryButton
                label="Next"
                fontSize={sizer.fontScale(12)}
                btnStyle={{
                  width: sizer.moderateScale(76),
                  height: sizer.moderateVerticalScale(31),
                }}
              />
            </View>
          </ScrollView>
        </View>
      )}

      {fieldType === 'Scheduling' && (
        <>
          <Scheduling />
          <View style={{alignItems: 'flex-end'}}>
            <PrimaryButton
              label="Next"
              fontSize={sizer.fontScale(12)}
              btnStyle={{width: 76, height: 31}}
            />
          </View>
        </>
      )}

      {fieldType === 'Authorization' && (
        <>
          <Authorization
            dropdownSelectedVal={dropdownSelectedVal}
            handleChange={handleChange}
          />
          <View style={{alignItems: 'flex-end'}}>
            <PrimaryButton
              label="Next"
              fontSize={sizer.fontScale(12)}
              btnStyle={{width: 76, height: 31}}
            />
          </View>
        </>
      )}

      {fieldType === 'Notes' && (
        <>
          <Notes visible={visible} setVisible={setVisible} />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              height: sizer.moderateVerticalScale(35),
            }}>
            <PrimaryButton
              label="Add a Note"
              icon={
                <Icon name="plus" size={sizer.fontScale(11)} color="black" />
              }
              onClick={showModal}
              fontSize={10}
              btnStyle={{
                backgroundColor: 'white',
                width: sizer.moderateScale(125),
                height: sizer.moderateVerticalScale(31),
                // mar: sizer.moderateScale(18),
              }}
              textStyle={{color: 'black', fontWeight: 800}}
            />
            <PrimaryButton
              label="Next"
              fontSize={sizer.fontScale(12)}
              btnStyle={{
                width: sizer.moderateScale(76),
                height: sizer.moderateVerticalScale(31),
              }}
            />
          </View>
        </>
      )}
    </View>
  );
};

export default ProposalRequestFields;
