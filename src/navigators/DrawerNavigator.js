import {createDrawerNavigator, createAppContainer} from 'react-navigation';
import React from 'react';
import colors from '../colors/colors';

const defaultNavOptions = ({navigation}) => {
  const {routeName} = navigation.state;

  switch (routeName) {
    default:
      return {
      };
  }
};

let Drawers = {
  Home: {screen: Tab.HomeTab, navigationOptions: defaultNavOptions},
};

export const DrawersConfig = Object.keys(Drawers).reduce((acc, cur) => {
  acc[cur] = cur;
  return acc;
}, {});

const DrawerNavigator = createDrawerNavigator(Drawers, {
  initialRouteName: DrawersConfig.Home,
  lazy: false,
});

export default createAppContainer(DrawerNavigator);
