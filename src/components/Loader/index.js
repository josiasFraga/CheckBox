import React from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';
import COLORS from '@constants/colors';

export default class AnimatedLoader extends React.PureComponent {
 
  render() {
    let {visible, bg, size, color} = this.props;
    let backgroundColor = bg;

    let display = 'none';
    if (visible) {
      display = 'flex';
    }

    if (typeof size == 'undefined' || size == '') {
      size = 'small';
    }

    if (typeof color == 'undefined' || color == '') {
      color = COLORS.primary;
    }
    
    return (
      <View
        style={[
          {display: display, backgroundColor: backgroundColor},
          styles.container,
        ]}>
        <ActivityIndicator size={size} color={color} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  animationStyle: {
    width: '100%',
    height: 100,
  },
});
