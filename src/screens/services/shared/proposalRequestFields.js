import React, {useState} from 'react';
import {View} from 'react-native';
import RequestDetails from './proposal-req-fields/request-details';
import GlobalServices from './proposal-req-fields/global-services';
import Scheduling from './proposal-req-fields/scheduling';
import Authorization from './proposal-req-fields/authorization';
import Notes from './proposal-req-fields/notes';

const ProposalRequestFields = ({fieldType, width}) => {
  const [dropdownSelectedVal, setDropdownSelectedVal] = useState(null);
  const handleChange = e => {
    setDropdownSelectedVal(e.value);
  };

  return (
    <View style={{width: width, paddingHorizontal: 16,}}>
      {fieldType === 'RequestDetails' && (
        <RequestDetails
          dropdownSelectedVal={dropdownSelectedVal}
          handleChange={handleChange}
        />
      )}

      {fieldType === 'GlobalServices' && (
        <GlobalServices
          dropdownSelectedVal={dropdownSelectedVal}
          handleChange={handleChange}
        />
      )}

      {fieldType === 'Scheduling' && <Scheduling />}

      {fieldType === 'Authorization' && (
        <Authorization
          dropdownSelectedVal={dropdownSelectedVal}
          handleChange={handleChange}
        />
      )}

      {fieldType === 'Notes' && <Notes />}
    </View>
  );
};

export default ProposalRequestFields;
