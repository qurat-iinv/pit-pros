import React from 'react';
import {View} from 'react-native';

import sizer from '../../../../helpers/sizer';
import {CustomDropDown} from '../../../../components';
import {RenderInputField, SwipeScreenHeading, reqDetail} from '../../utils';

const RequestDetails = ({dropdownSelectedVal, handleChange}) => {
  return (
    <>
      <SwipeScreenHeading title="Request Details" />
      <View style={{marginTop: sizer.moderateVerticalScale(20)}}>
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

        <SwipeScreenHeading title="Address" />
      </View>
    </>
  );
};

export default RequestDetails;
