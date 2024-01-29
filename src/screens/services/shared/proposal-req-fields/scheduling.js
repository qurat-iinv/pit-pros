import {View} from 'react-native';

import sizer from '../../../../helpers/sizer';
import {RenderInputField, SwipeScreenHeading} from '../../utils';

const Scheduling = () => {
  return (
    <>
      <SwipeScreenHeading title="Scheduling" />

      <View style={{marginTop: sizer.moderateVerticalScale(25)}}>
        <RenderInputField
          label="When will the unit be available *"
          placeholder="9:30AM  Aug 18 2023"
        />

        <RenderInputField
          label="When would you like it back? *"
          placeholder="9:30AM  Aug 18 2023"
        />

        <RenderInputField
          label="WWhen would you like to start work? *"
          placeholder="9:30AM  Aug 18 2023"
        />
      </View>
    </>
  );
};

export default Scheduling;
