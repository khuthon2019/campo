import React from 'react';
import {SafeAreaView} from 'react-native';
import Splash from './screens/Splash';

class Root extends React.Component {
  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1
        }}>
        <Splash />
      </SafeAreaView>
    );
  }
}
export default Root;
