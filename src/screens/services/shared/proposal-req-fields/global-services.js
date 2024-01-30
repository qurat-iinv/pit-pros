import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import sizer from '../../../../helpers/sizer';
import {GestureHandlerRootView, ScrollView} from 'react-native-gesture-handler';
import {List} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  CustomDropDown,
  InputField,
  PrimaryButton,
} from '../../../../components';
import {TickSvg} from '../../../../assets';
import {Typography} from '../../../../atom-components';
import {SwipeScreenHeading, Table, globalServicesLeft} from '../../utils';

const GlobalServices = ({handleChange, dropdownSelectedVal}) => {
  const [expanded, setExpanded] = useState(true);
  const [selected, setSelected] = useState(false);

  const handlePress = () => setExpanded(!expanded);

  return (
    <>
      <View style={styles.container}>
        <List.Section>
          <List.Accordion
            // rippleColor="#DC0028"
            titleStyle={{fontSize: 14, color: 'black', marginLeft: -8}}
            title="Medium Duty Oil Change"
            style={styles.listAccordion}
            right={e => (
              <Icon
                name={e.isExpanded ? 'angle-down' : 'angle-up'}
                size={sizer.fontScale(20)}
                color="#B8B8B8"
                style={{left: sizer.fontScale(4)}}
              />
            )}
            expanded={expanded}
            onPress={()=> {
              styles.wait
              handlePress()
            }}>
            <View style={styles.dropDownContainer}>
              <View style={{flex: 1}}>
                <CustomDropDown
                  data={globalServicesLeft}
                  labelStyle={{color: 'black'}}
                  label="Customer Complaint *"
                  placeholder="heelo"
                  value={dropdownSelectedVal}
                  handleChange={handleChange}
                  valueField="value"
                />
              </View>
              <View style={{flex: 1}}>
                <CustomDropDown
                  data={globalServicesLeft}
                  labelStyle={{color: 'black'}}
                  placeholder="heelo"
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
              data={globalServicesLeft}
              mt={sizer.moderateVerticalScale(5)}
              labelStyle={{color: 'black'}}
              placeholder="heelo"
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
      </View>
    </>
  );
};

export default GlobalServices;

const styles = StyleSheet.create({
  container: {
    // maxHeight: sizer.moderateVerticalScale(440),
    marginBottom: sizer.moderateVerticalScale(18),
    borderWidth: 1,
    borderColor: '#C7C7C7',
    paddingHorizontal: 15,
  },

  listAccordion: {
    backgroundColor: 'white',
    paddingHorizontal: 0,
    paddingVertical: 0,
  },

  dropDownContainer: {
    flexDirection: 'row',
    gap: 10,
    marginTop: sizer.moderateVerticalScale(10),
  },


});
