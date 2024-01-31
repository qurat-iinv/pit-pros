import React from 'react';

import sizer from '../../../../helpers/sizer';
import {CustomDropDown, PrimaryButton} from '../../../../components';
import {RenderInputField, SwipeScreenHeading, reqDetail} from '../../utils';
import GoogleMapView from '../../../../components/google-map';
import {ScrollView} from 'react-native-gesture-handler';

const RequestDetails = ({dropdownSelectedVal, handleChange}) => {
  return (
    <>
      <SwipeScreenHeading title="Request Details" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          marginTop: sizer.moderateVerticalScale(20),
          height: sizer.moderateVerticalScale(450),
          marginVertical: 16,
        }}>
        <RenderInputField
          label="Who is requesting service *"
          placeholder="John Doe"
        />

        <RenderInputField
          label="Which unit needs service *"
          placeholder="Honda Civic Hatchback"
        />

        <CustomDropDown
          data={reqDetail}
          mt={sizer.moderateVerticalScale(10)}
          labelStyle={{color: 'black'}}
          label="Service Request *"
          value={dropdownSelectedVal}
          placeholder="Medium Duty Oil Change"
          handleChange={handleChange}
          valueField="value"
        />

        {dropdownSelectedVal === 'customComplaint' && (
          <RenderInputField
            label="Service Request *"
            placeholder="Medium Duty Oil Change"
            multiline={true}
          />
        )}

        <RenderInputField label="Address *" placeholder="Lorem Ipsum" />

        <SwipeScreenHeading title="Address" style={{marginBottom: 16}}/>
        <GoogleMapView />
        <PrimaryButton
          label="Open it in Google/Apple Map"
          fontSize={10}
          btnStyle={{height: sizer.moderateVerticalScale(31), marginTop: 7}}
        />
      </ScrollView>
    </>
  );
};

export default RequestDetails;
