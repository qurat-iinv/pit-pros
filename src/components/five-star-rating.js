import React from 'react';
import {View, TouchableWithoutFeedback} from 'react-native';

import {
  Star1Svg,
  Star2Svg,
  Star3Svg,
  Star4Svg,
  Star5Svg,
  Star1InactiveSvg,
  Star2InactiveSvg,
  Star3InactiveSvg,
  Star4InactiveSvg,
  Star5InactiveSvg,
} from '../assets';
import sizer from '../helpers/sizer';

const FiveStarRating = ({
  ratingValue = 0,
  setRatingValue = () => {},
  disable = false,
}) => {
  const handleRating = selectedRating => {
    setRatingValue(selectedRating);
  };

  return (
    <View style={{flexDirection: 'row', gap: 2}}>
      <TouchableWithoutFeedback
        onPress={() => handleRating(1)}
        disabled={disable}>
        {ratingValue >= 1 ? (
          <Star1Svg width={sizer.fontScale(25)} height={sizer.fontScale(24)} />
        ) : (
          <Star1InactiveSvg
            width={sizer.fontScale(25)}
            height={sizer.fontScale(24)}
          />
        )}
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback
        onPress={() => handleRating(2)}
        disabled={disable}>
        {ratingValue >= 2 ? (
          <Star2Svg width={sizer.fontScale(25)} height={sizer.fontScale(24)} />
        ) : (
          <Star2InactiveSvg
            width={sizer.fontScale(25)}
            height={sizer.fontScale(24)}
          />
        )}
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback
        onPress={() => handleRating(3)}
        disabled={disable}>
        {ratingValue >= 3 ? (
          <Star3Svg width={sizer.fontScale(25)} height={sizer.fontScale(24)} />
        ) : (
          <Star3InactiveSvg
            width={sizer.fontScale(25)}
            height={sizer.fontScale(24)}
          />
        )}
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback
        onPress={() => handleRating(4)}
        disabled={disable}>
        {ratingValue >= 4 ? (
          <Star4Svg width={sizer.fontScale(25)} height={sizer.fontScale(24)} />
        ) : (
          <Star4InactiveSvg
            width={sizer.fontScale(25)}
            height={sizer.fontScale(24)}
          />
        )}
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback
        onPress={() => handleRating(5)}
        disabled={disable}>
        {ratingValue >= 5 ? (
          <Star5Svg width={sizer.fontScale(25)} height={sizer.fontScale(24)} />
        ) : (
          <Star5InactiveSvg
            width={sizer.fontScale(25)}
            height={sizer.fontScale(24)}
          />
        )}
      </TouchableWithoutFeedback>
    </View>
  );
};

export default FiveStarRating;
