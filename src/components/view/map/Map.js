/* eslint no-useless-escape: 0 */

import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

class Map extends Component {
  constructor(props) {
    super(props);

    this.state = {
      markers: [
        {
          latlng: {
            latitude: 37.78825,
            longitude: -122.4324,
          },
          title: 'test',
          description: 'desc',
        },
        {
          latlng: {
            latitude: 37.78935,
            longitude: -122.4404,
          },
          title: 'test2',
          description: 'desc2',
        },
      ],
    };
  }

  onMarkerPress = marker => {
    console.log('jb: marker', marker);
    this.openMission();
  };

  openMission = () => {};

  render() {
    const {markers} = this.state;
    const markersView = markers.map(marker => (
      <Marker
        coordinate={marker.latlng}
        onPress={this.onMarkerPress.bind(this, marker)}
      />
    ));

    return (
      <Container>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={{
            ...StyleSheet.absoluteFillObject,
          }}
          {...this.props}>
          {markersView}
        </MapView>
      </Container>
    );
  }
}

Map.propTypes = {};

Map.defaultProps = {};

const Container = styled.View`
  flex: 1;
`;

export default Map;
