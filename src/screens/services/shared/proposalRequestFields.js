import React, {useState} from 'react';

import {CustomDropDown, InputField} from '../../../components';
import {Text, View} from 'react-native';
import sizer from '../../../helpers/sizer';
import {StepperHeading} from '../services';

const ProposalRequestFields = ({fieldType, width, height}) => {
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
    <View
      style={{
        // backgroundColor: 'lightblue',
        width: sizer.moderateScale(353),
        height: height,
        paddingHorizontal: 16,
      }}>
      {fieldType === 'RequestDetails' && (
        <>
          <StepperHeading title="Request Details" />

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
        </>
      )}

      {fieldType === 'GlobalServices' && (
        <>
          <StepperHeading title="Global Services" />
          <View
            style={{
              marginTop: sizer.moderateVerticalScale(25),
              padding: 2,
              backgroundColor: 'pink',
              borderColor: '#C7C7C7',
              borderWidth: 3,
            }}>
            <Text>Heelo</Text>
          </View>
        </>
      )}

      {fieldType === 'Scheduling' && (
        <>
          <StepperHeading title="Scheduling" />
          <View
            style={{
              marginTop: sizer.moderateVerticalScale(25),
              padding: 2,
              backgroundColor: 'pink',
              borderColor: '#C7C7C7',
              borderWidth: 3,
            }}></View>
        </>
      )}

      {fieldType === 'Authorization' && (
        <>
          <StepperHeading title="Authorization" />
        </>
      )}

      {fieldType === 'Notes' && (
        <>
          <StepperHeading title="Notes" />
          <View
            style={{
              marginTop: sizer.moderateVerticalScale(25),
              padding: 2,
              backgroundColor: 'pink',
              borderColor: '#C7C7C7',
              borderWidth: 3,
            }}></View>
        </>
      )}
    </View>
  );
};

export default ProposalRequestFields;
