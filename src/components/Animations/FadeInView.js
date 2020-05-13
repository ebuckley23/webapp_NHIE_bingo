import React from 'react';
import { Animated } from 'react-native';

/**
 * FadeInView animates its children into view by using the fade in
 * animation.
 * @param {number} duration Defaults to 500
 */
export default class FadeInView extends React.PureComponent {
  state = {
    fadeAnim: new Animated.Value(0) // Initial value for opacity: 0
  };

  static defaultProps = {
    duration: 500
  };

  componentDidMount() {
    const { duration } = this.props;
    Animated.timing(this.state.fadeAnim, {
      toValue: 1,
      duration,
      useNativeDriver: true
    }).start();
  }

  render() {
    let { fadeAnim } = this.state;
    return (
      <Animated.View style={[{ opacity: fadeAnim }, this.props.style]}>
        {this.props.children}
      </Animated.View>
    );
  }
}
