import React, {useState} from 'react';
import {FlatList, Image, StyleSheet, TouchableOpacity} from 'react-native';

import {CloseCrossSvg} from '../../assets';
import {COLORS, baseOpacity} from '../../globals';

import ImageView from 'react-native-image-viewing';
import sizer from '../../helpers/sizer';

function CloseButton(props) {
  return (
    <TouchableOpacity
      baseOpacity={baseOpacity}
      style={styles.closeBtn}
      {...props}>
      <CloseCrossSvg />
    </TouchableOpacity>
  );
}

const ImageSlideModal = ({imagesData, images}) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isImageViewVisible, setImageViewVisible] = useState(false);

  // Function for open images to full screen
  const openFullScreen = index => {
    setSelectedImageIndex(index);
    setImageViewVisible(true);
  };

  // Function to close opened image
  const closeFullScreen = () => {
    setImageViewVisible(false);
  };

  // Image Component for Flatlist
  const renderImage = ({item, index}) => {
    return (
      <TouchableOpacity onPress={() => openFullScreen(index)}>
        <Image source={item} style={styles.galleryImgs} />
      </TouchableOpacity>
    );
  };

  return (
    <>
      <FlatList
        data={imagesData}
        renderItem={renderImage}
        keyExtractor={(_, index) => index}
        horizontal
        contentContainerStyle={{gap: sizer.moderateScale(7)}}
        showsHorizontalScrollIndicator={false}
      />
      <ImageView
        animationType="fade"
        images={images}
        visible={isImageViewVisible}
        onRequestClose={closeFullScreen}
        HeaderComponent={({imageIndex}) => (
          <CloseButton onPress={closeFullScreen} />
        )}
        imageIndex={selectedImageIndex}
        onIndexChange={index => setSelectedImageIndex(index)}
        // backgroundColor="transparent"
        // FooterComponent={({imageIndex}) => (
        //   <View>{/* Footer component if needed */}</View>
        // )}
      />
    </>
  );
};

export default ImageSlideModal;

const styles = StyleSheet.create({
  closeBtn: {
    backgroundColor: COLORS.primary,
    position: 'absolute',
    right: sizer.moderateScale(16),
    top: sizer.moderateVerticalScale(21),
    borderRadius: 100,
    paddingVertical: 9,
    paddingHorizontal: 10,
  },
  galleryImgs: {
    width: sizer.fontScale(60),
    height: sizer.fontScale(60),
    borderRadius: 5,
  },
});
