import React from 'react';
import {SafeAreaView} from 'react-native';
import Splash from './screens/Splash';
import colors from './colors/colors';

class Root extends React.Component {
  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: colors.main,
        }}>
        <Splash />
      </SafeAreaView>
    );
  }
}
export default Root;
