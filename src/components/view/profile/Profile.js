/* eslint no-useless-escape: 0 */

import React, {Component} from 'react';
import {inject} from 'mobx-react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import colors from '../../../colors/colors';

@inject(stores => ({
  navTo: stores.nav.navTo,
}))
class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Container>
      </Container>
    );
  }
}

Profile.propTypes = {
};

Profile.defaultProps = {
};

const Container = styled.View`
`;

export default Profile;
