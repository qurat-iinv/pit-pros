import {View} from 'react-native';

import sizer from '../../../../helpers/sizer';
import {CustomDropDown} from '../../../../components';
import {RenderInputField, SwipeScreenHeading, reqDetail} from '../../utils';

const Authorization = ({dropdownSelectedVal, handleChange}) => {
  return (
    <>
      <SwipeScreenHeading title="Authorization" />
      <View style={{marginTop: sizer.moderateVerticalScale(25)}}>
        <RenderInputField
          label="What is the customer purchase order number *"
          placeholder="1234567890"
        />

        <CustomDropDown
          data={reqDetail}
          mt={sizer.moderateVerticalScale(10)}
          labelStyle={{color: 'black'}}
          label="Lead Technician *"
          value={dropdownSelectedVal}
          handleChange={handleChange}
          valueField="value"
        />

        <RenderInputField label="Notes *" placeholder="Description" multiline />
      </View>
    </>
  );
};

export default Authorization;
