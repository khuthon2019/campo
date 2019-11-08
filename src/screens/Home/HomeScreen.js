import React from 'react';
import {inject} from 'mobx-react';
import Geolocation from '@react-native-community/geolocation';
import styled from 'styled-components/native';
import Map from '../../components/view/map/Map';
import Header from '../../components/view/header/Header';
import colors from '../../colors/colors';
import { MapStyle } from '../../constants/styles';

@inject(stores => ({
  setNav: stores.nav.setNav,
  navTo: stores.nav.navTo,
}))
class HomeScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      region: {
        // latitude: 0,
        // longitude: 0,
        // latitudeDelta: 0,
        // longitudeDelta: 0,
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
    };
  }
  componentDidMount() {
    this.props.setNav(this.props.navigation);

    this.watchID = Geolocation.watchPosition(
      position => {
        let region = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.00922 * 1.5,
          longitudeDelta: 0.00421 * 1.5,
        };
        this.onRegionChange(region, region.latitude, region.longitude);
      },
      error => console.log(error),
    );
  }
  componentWillUnmount() {
    Geolocation.clearWatch(this.watchID);
  }
  onRegionChange = (region, lastLat, lastLong) => {
    // this.setState({
    //   region: region,
    //   lastLat: lastLat || this.state.lastLat,
    //   lastLong: lastLong || this.state.lastLong,
    // });
  };

  render() {
    const {region} = this.state;

    return (
      <Container>
        <Header needBottom />
        <MapContainer>
          <Map customMapStyle={MapStyle} region={region} />
        </MapContainer>
      </Container>
    );
  }
}

const Container = styled.View`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.main};
`;
const MapContainer = styled.View`
  height: 100%;
  width: 100%;
  flex: 1;
`;

export default HomeScreen;
