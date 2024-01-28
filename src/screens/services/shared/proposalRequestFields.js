import React, {useState} from 'react';
import {Avatar, List, Text} from 'react-native-paper';

import {CustomDropDown, InputField, PrimaryButton} from '../../../components';
import {TouchableOpacity, View} from 'react-native';
import sizer from '../../../helpers/sizer';
import {SwipeScreenHeading} from '../services';
import {Flex, Typography} from '../../../atom-components';
import Icon from 'react-native-vector-icons/FontAwesome';
import {GestureHandlerRootView, ScrollView} from 'react-native-gesture-handler';
import {TickSvg} from '../../../assets';
import {COLORS} from '../../../globals';

const ProposalRequestFields = ({fieldType, width}) => {
  const [dropdownSelectedVal, setDropdownSelectedVal] = useState(null);
  const [expanded, setExpanded] = useState(true);
  const [selected, setSelected] = useState(false);

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

  const Table = () => {
    return (
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 10,
            borderBottomColor: '#C7C7C7',
            borderBottomWidth: 0.5,
          }}>
          <Typography bold size={11}>
            Name
          </Typography>
          <Typography bold size={11}>
            Quantity
          </Typography>
          <Typography bold size={11}>
            Cost
          </Typography>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 10,
          }}>
          <Typography size={11}>Product Lorem Ipsum</Typography>
          <Typography size={11}>1</Typography>
          <Typography size={11}>$10</Typography>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 10,
          }}>
          <Typography size={11}>Product Lorem Ipsum</Typography>
          <Typography size={11}>1</Typography>
          <Typography size={11}>$10</Typography>
        </View>
      </View>
    );
  };

  const Note = ({name, noteText, time = '12:00'}) => {
    const badgeValue = value => (value > 99 ? '99+' : value);
    // const navigation = useNavigation();
    return (
      <Flex jusContent="space-between" algItems="center" mb={14}>
        <Flex algItems="center" gap={12}>
          <TouchableOpacity>
            <Avatar.Image
              style={{backgroundColor: COLORS.white}}
              size={sizer.fontScale(55)}
              source={require('../../../assets/images/dummy-image.png')}
            />
          </TouchableOpacity>
          <View>
            <Typography size={14} medium color={COLORS.dark} mB={6} capitalize>
              {name}
            </Typography>
            <Typography size={12} light color={COLORS.grey} LineHeight={20}>
              {noteText}
            </Typography>
          </View>
        </Flex>
        <View>
          <View>
            <Typography size={11} color="#79747E">
              {time}
            </Typography>
          </View>
        </View>
      </Flex>
    );
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
          <SwipeScreenHeading title="Request Details" />

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

            <InputField
              label="Address *"
              labelStyle={{color: 'black'}}
              placeholder="Lorem Ipsum"
              mt={sizer.moderateVerticalScale(10)}
              inputStyle={{fontWeight: '300'}}
            />

            <SwipeScreenHeading title="Address" />
            {/* <PrimaryButton label="Open it in Google/Apple Map" /> */}
          </View>
        </>
      )}

      {fieldType === 'GlobalServices' && (
        <>
          <SwipeScreenHeading title="Global Services" />
          <View
            style={{
              marginTop: sizer.moderateVerticalScale(17),
              borderWidth: 1,
              borderColor: '#C7C7C7',
              paddingHorizontal: 15,
              maxHeight: 460,
            }}>
            <GestureHandlerRootView>
              <ScrollView showsVerticalScrollIndicator={false}>
                <List.Section>
                  <List.Accordion
                    titleStyle={{fontSize: 14, color: 'black', marginLeft: -8}}
                    title="Medium Duty Oil Change"
                    style={{
                      backgroundColor: 'white',
                      paddingHorizontal: 0,
                      // marginRight: -10,
                      paddingVertical: 0,
                    }}
                    right={e => (
                      <Icon
                        name={e.isExpanded ? 'angle-down' : 'angle-up'}
                        size={sizer.fontScale(20)}
                        color="#B8B8B8"
                        style={{left: sizer.fontScale(4)}}
                      />
                    )}
                    expanded={expanded}
                    onPress={handlePress}>
                    <View
                      style={{
                        flexDirection: 'row',
                        gap: 10,
                        marginTop: sizer.moderateVerticalScale(10),
                      }}>
                      <View style={{flex: 1}}>
                        <CustomDropDown
                          data={dropdownOptions}
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
                      mt={sizer.moderateVerticalScale(5)}
                      inputStyle={{fontWeight: '300'}}
                    />
                    <CustomDropDown
                      data={dropdownOptions}
                      mt={sizer.moderateVerticalScale(5)}
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
                      mt={sizer.moderateVerticalScale(5)}
                      inputStyle={{fontWeight: '300'}}
                    />

                    <SwipeScreenHeading title="Product" />
                    <Table />
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <TouchableOpacity
                        // activeOpacity={baseOpacity}
                        // style={styles.remember}

                        style={{
                          flexDirection: 'row',
                          paddingVertical: 10,
                          alignItems: 'center',
                        }}
                        onPress={() => setSelected(!selected)}>
                        <View
                          style={{
                            width: sizer.fontScale(14),
                            height: sizer.fontScale(14),
                            borderWidth: 2,
                            borderRadius: 2,
                            borderColor: '  #79747E',
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                          {selected ? (
                            <TickSvg
                              width={sizer.fontScale(10)}
                              height={sizer.fontScale(7)}
                            />
                          ) : null}
                        </View>
                        <Typography size={10} mL={5}>
                          Pre-Authorized
                        </Typography>
                      </TouchableOpacity>

                      <PrimaryButton
                        label="Add Product"
                        fontSize={10}
                        btnStyle={{
                          backgroundColor: 'white',
                          width: 91,
                          height: 31,
                        }}
                        textStyle={{color: 'black', fontWeight: 800}}
                      />
                    </View>
                  </List.Accordion>
                </List.Section>
              </ScrollView>
            </GestureHandlerRootView>
          </View>
        </>
      )}

      {fieldType === 'Scheduling' && (
        <>
          <SwipeScreenHeading title="Scheduling" />
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
          <SwipeScreenHeading title="Authorization" />
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
          <SwipeScreenHeading title="Notes" />
          <View
            style={{
              marginTop: sizer.moderateVerticalScale(25),
              padding: 2,
            }}>
            <Note
              name="John Doe (Technician)"
              noteText="Hey, welcome! We'll take a look at it."
            />
            <Note
              name="Tina Doe (Customer)"
              noteText="It's like a clunking sound when I turn left."
            />
            <Note
              name="John Doe (Technician)"
              noteText="Hey, welcome! We'll take a look at it."
            />
          </View>
        </>
      )}
    </View>
  );
};

export default ProposalRequestFields;
