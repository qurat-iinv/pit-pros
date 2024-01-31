import React, {useState} from 'react';

// Import Components and Utils
import sizer from '../../helpers/sizer';
import {MapMarkerSvg} from '../../assets';

// Import libraries
import MapView, {
  PROVIDER_GOOGLE,
  Marker,
  PROVIDER_DEFAULT,
} from 'react-native-maps';

const GoogleMapView = ({mapHeight = 270}) => {
  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0034,
    longitudeDelta: 0.0053,
  });

  //   const handleMapPress = event => {
  //     const {latitude, longitude} = event.nativeEvent.coordinate;
  //     console.log('Clicked coordinates:', event.nativeEvent.coordinate.e);
  //     Alert.alert(
  //       '',
  //       `latitude:${latitude.toString()}\nlongitude:${longitude.toString()}`,
  //     );
  //     setRegion(event.nativeEvent.coordinate);
  //   };
  return (
    <MapView
      provider={Platform.OS === 'android' ? PROVIDER_GOOGLE : PROVIDER_DEFAULT}
      style={{height: sizer.moderateVerticalScale(mapHeight)}}
      initialRegion={region}
      minZoomLevel={5}
      // onRegionChangeComplete={(e)=>console.log(e)}
      // onPress={handleMapPress}
    >
      {region && (
        <Marker
          coordinate={region}
          title="Clicked Location"
          description={`Latitude: ${region.latitude}, Longitude: ${region.longitude}`}>
          <MapMarkerSvg
            width={sizer.moderateScale(30)}
            height={sizer.moderateVerticalScale(50)}
          />
        </Marker>
      )}
    </MapView>
  );
};

export default GoogleMapView;
