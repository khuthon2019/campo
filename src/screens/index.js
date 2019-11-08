import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {StackNavOptions, InvisibleNavOptions} from '../constants/styles';
import HomeScreen from './Home/HomeScreen';
import RankingScreen from './Ranking/RankingScreen';
import MissionDetail from './Mission/MissionDetail';
import MissionPhoto from './Mission/MissionPhoto';

const defaultNavOptions = ({navigation}) => {
  const {routeName} = navigation.state;

  switch (routeName) {
    default:
      return {
        ...InvisibleNavOptions,
      };
  }
};

let Stacks = {
  Home: {screen: HomeScreen, navigationOptions: defaultNavOptions},
  Ranking: {screen: RankingScreen, navigationOptions: defaultNavOptions},
  Mission: {screen: MissionDetail, navigationOptions: defaultNavOptions},
  MissionPhoto: {screen: MissionPhoto, navigationOptions: defaultNavOptions},
};

export const StacksName = Object.keys(Stacks).reduce((acc, cur) => {
  acc[cur] = cur;
  return acc;
}, {});

const StackNavigator = createStackNavigator(Stacks, {
  initialRouteName: StacksName.Home,
  defaultNavigationOptions: StackNavOptions,
  headerLayoutPreset: 'center',
});

const StackContainer = createAppContainer(StackNavigator);

export default StackContainer;
