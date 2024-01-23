import React, {useState} from 'react';
import {List} from 'react-native-paper';

import {CustomDropDown, InputField} from '../../../components';
import {Text, View} from 'react-native';
import sizer from '../../../helpers/sizer';
import {StepperHeading} from '../services';

const ProposalRequestFields = ({fieldType, width, height}) => {
  const [dropdownSelectedVal, setDropdownSelectedVal] = useState(null);
  const [expanded, setExpanded] = useState(true);

  const handlePress = () => setExpanded(!expanded);

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
        // width: sizer.moderateScale(330),
        width: width,
        // height: height,
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
              // paddingHorizontal: 10,
              // paddingTop: 10,
              // backgroundColor: 'pink',
              borderColor: '#C7C7C7',
              borderWidth: 1,
            }}>
            <List.Section>
              <List.Accordion
                title="Medium Duty Oil Change"
                style={{backgroundColor: 'white'}}
                // left={props => <List.Icon {...props} icon="folder" />}
                expanded={expanded}
                onPress={handlePress}>
                <View
                  style={{
                    flexDirection: 'row',
                    gap: 10,
                  }}>
                  <View style={{flex: 1}}>
                    <CustomDropDown
                      data={dropdownOptions}
                      mt={sizer.moderateVerticalScale(10)}
                      labelStyle={{color: 'black'}}
                      label="Customer Complaint *"
                      value={dropdownSelectedVal}
                      handleChange={handleChange}
                      valueField="value"
                    />
                  </View>
                  <View style={{flex: 1}}>
                    <CustomDropDown
                      data={dropdownOptions}
                      mt={sizer.moderateVerticalScale(10)}
                      labelStyle={{color: 'black'}}
                      label="Customer Complaint *"
                      value={dropdownSelectedVal}
                      handleChange={handleChange}
                      valueField="value"
                    />
                  </View>
                </View>
                <InputField
                  label="Invoiced Hours *"
                  labelStyle={{color: 'black'}}
                  placeholder="1.50000"
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
                <InputField
                  label="DriveAway Amount"
                  labelStyle={{color: 'black'}}
                  placeholder="1.50000"
                  mt={sizer.moderateVerticalScale(10)}
                  inputStyle={{fontWeight: '300'}}
                />
              </List.Accordion>
            </List.Section>
          </View>
        </>
      )}

      {fieldType === 'Scheduling' && (
        <>
          <StepperHeading title="Scheduling" />
          <View style={{marginTop: sizer.moderateVerticalScale(25)}}>
            <InputField
              label="When will the unit be available *"
              labelStyle={{color: 'black'}}
              placeholder="9:30AM  Aug 18 2023"
              inputStyle={{fontWeight: '300'}}
            />

            <InputField
              label="When would you like it back? *"
              labelStyle={{color: 'black'}}
              placeholder="9:30AM  Aug 18 2023"
              mt={sizer.moderateVerticalScale(10)}
              inputStyle={{fontWeight: '300'}}
            />
            <InputField
              label="When would you like to start work? *"
              labelStyle={{color: 'black'}}
              placeholder="9:30AM  Aug 18 2023"
              mt={sizer.moderateVerticalScale(10)}
              inputStyle={{fontWeight: '300'}}
            />
          </View>
        </>
      )}

      {fieldType === 'Authorization' && (
        <>
          <StepperHeading title="Authorization" />
          <View style={{marginTop: sizer.moderateVerticalScale(25)}}>
            <InputField
              label="What is the customer purchase order number *"
              labelStyle={{color: 'black'}}
              placeholder="1234567890"
              inputStyle={{fontWeight: '300'}}
            />

            <CustomDropDown
              data={dropdownOptions}
              mt={sizer.moderateVerticalScale(10)}
              labelStyle={{color: 'black'}}
              label="Lead Technician *"
              value={dropdownSelectedVal}
              handleChange={handleChange}
              valueField="value"
            />

            <InputField
              label="Notes *"
              mt={sizer.moderateVerticalScale(10)}
              labelStyle={{color: 'black'}}
              placeholder="Description"
              labelColor="#49454F"
              inputStyle={{fontWeight: '300', textAlignVertical: 'top'}}
              multiline
              numberOfLines={5}
              maxLength={40}
            />
          </View>
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
