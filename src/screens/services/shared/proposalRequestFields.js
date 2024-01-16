import React, {useState} from 'react';

import {CustomDropDown, InputField, PrimaryButton} from '../../../components';
import {View} from 'react-native';
import sizer from '../../../helpers/sizer';

const ProposalRequestFields = () => {
  const [dropdownSelectedVal, setDropdownSelectedVal] = useState(null);

  const dropdownOptions = [
    {
      label: 'Medium Duty Oil Change',
      value: 'oilChange',
    },
    {
      label: 'Custom Complaint',
      value: 'customComplaint',
    },
  ];

  const handleChange = e => {
    setDropdownSelectedVal(e.value);
  };

  return (
    <View style={{marginTop: sizer.moderateVerticalScale(25)}}>
      <InputField
        label="Who is requesting service *"
        labelStyle={{color: 'black'}}
        placeholder="John Doe"
        inputStyle={{fontWeight: '300'}}
      />

      <InputField
        label="Which unit needs service *"
        labelStyle={{color: 'black'}}
        placeholder="Honda Civic Hatchback"
        mt={sizer.moderateVerticalScale(10)}
        inputStyle={{fontWeight: '300'}}
      />

      <CustomDropDown
        data={dropdownOptions}
        mt={sizer.moderateVerticalScale(10)}
        labelStyle={{color: 'black'}}
        label="Customer Complaint *"
        value={dropdownSelectedVal}
        handleChange={handleChange}
        valueField="value"
      />

      {dropdownSelectedVal === 'customComplaint' && (
        <InputField
          label="Custom Complaint  *"
          mt={sizer.moderateVerticalScale(10)}
          labelStyle={{color: 'black'}}
          placeholder="Medium Duty Oil Change"
          labelColor="#49454F"
          inputStyle={{fontWeight: '300', textAlignVertical: 'top'}}
          multiline
          numberOfLines={5}
          maxLength={40}
        />
      )}


    </View>
  );
};

export default ProposalRequestFields;
