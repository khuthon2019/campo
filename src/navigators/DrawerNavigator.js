import {createDrawerNavigator, createAppContainer} from 'react-navigation';
import React from 'react';
import colors from '../colors/colors';
import HomeScreen from '../screens/Home/HomeScreen';
import TabIcon from '../components/view/icon/TabIcon';

const defaultNavOptions = ({navigation}) => {
  const {routeName} = navigation.state;

  switch (routeName) {
    default:
      return {
        drawerIcon: () => <TabIcon type={'Home'} />,
      };
  }
};

let Drawers = {
  Home: {screen: HomeScreen, navigationOptions: defaultNavOptions},
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
