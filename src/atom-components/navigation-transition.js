const NavigationTransition = () => {
  return {
    cardStyleInterpolator: ({current: {progress}}) => {
      return {
        cardStyle: {
          transform: [
            {
              translateX: progress.interpolate({
                inputRange: [0, 1],
                outputRange: [500, 0],
              }),
            },
          ],
        },
      };
    },
  };
};

export default NavigationTransition;
