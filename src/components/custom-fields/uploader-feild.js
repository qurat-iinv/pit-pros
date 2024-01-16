import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {COLORS, baseOpacity} from '../../globals';
import sizer from '../../helpers/sizer';
import Fonts from '../../helpers/font-family';
import {Flex, Typography} from '../../atom-components';
import {UploaderFileSvg} from '../../assets';
// import ImagePicker from 'react-native-image-crop-picker';
import format from 'pretty-format';

const UploaderField = ({
  containerSt = {},
  inputStyle = {},
  error = '',
  handleChange = e => {},
  mb = 18,
  mt = 0,
  light = false,
  imageSetter,
  multipleImageSetter,
  multiple = false,
  ...props
}) => {
  const errorText = err => (
    <Text
      style={{
        color: COLORS.danger,
        fontSize: sizer.fontScale(10),
        paddingTop: sizer.moderateScale(8),
        ...Fonts.bold(),
      }}>
      {err}
    </Text>
  );

  //   const openImagePicker = async () => {
  //     try {
  //       const image = await ImagePicker.openPicker({
  //         mediaType: 'photo',
  //         cropping: multiple ? false : true,
  //         multiple: multiple,
  //       });
  //       const selectedImage = image.path;
  //
  //       uploadImage(selectedImage);
  //     } catch (error) {
  //       console.log('ImagePicker Error: ', error);
  //     }
  //   };
  //
  //   const openMultipleImagePicker = async () => {
  //     try {
  //       const image = await ImagePicker.openPicker({
  //         mediaType: 'photo',
  //         cropping: multiple ? false : true,
  //         multiple: multiple,
  //       }).then(e => {
  //         uploadImage(e);
  //       });
  //     } catch (error) {
  //       console.log('ImagePicker Error: ', error);
  //     }
  //   };
  //
  //   const uploadImage = image => {
  //     let arr = [];
  //     multiple
  //       ? image.forEach((element, i) => {
  //           arr.push(image[i].path);
  //         })
  //       : null;
  //     try {
  //       const formData = new FormData();
  //       formData.append('file', {
  //         uri: multiple ? arr : image,
  //         type: 'image/jpeg', // Modify the type based on your file format
  //         name: 'myImage.jpg', // Modify the name of the file
  //       });
  //       multiple
  //         ? multipleImageSetter(formData)
  //         : imageSetter(formData?._parts[0][1]);
  //     } catch (error) {
  //       console.log(
  //         '🚀 ~ file: uploader-feild.js:64 ~ uploadImage ~ error:',
  //         error,
  //       );
  //     }
  //   };

  return (
    <>
      <TouchableOpacity
        activeOpacity={baseOpacity}
        // onPress={() =>
        //   multiple ? openMultipleImagePicker() : openImagePicker()
        // }
        style={{
          overflow: 'hidden',
          marginTop: sizer.moderateVerticalScale(mt),
          marginBottom: sizer.moderateVerticalScale(mb),
          ...containerSt,
        }}>
        <Flex
          algItems={'center'}
          jusContent={'space-between'}
          flexStyle={{
            paddingVertical: sizer.moderateVerticalScale(27),
            paddingHorizontal: sizer.moderateScale(22),
            backgroundColor: 'rgba(68, 2, 31, 0.02)',
            borderWidth: 1,
            borderColor: COLORS.dark,
            borderStyle: 'dashed',
            borderRadius: sizer.fontScale(4),
          }}>
          <View style={{width: '60%'}}>
            <Typography size={17}>Click here to browse your files</Typography>
          </View>
          <View>
            <UploaderFileSvg />
          </View>
        </Flex>
        {Boolean(error !== '') ? errorText(error) : null}
      </TouchableOpacity>
    </>
  );
};

export default UploaderField;
