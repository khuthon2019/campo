/* eslint no-useless-escape: 0 */

import React, {Component} from 'react';
import {inject} from 'mobx-react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import colors from '../../../colors/colors';
import Profile from '../profile/Profile';
import DrawerItem from './DrawerItem';

@inject(stores => ({
  navTo: stores.nav.navTo,
}))
class DrawerView extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Container>
        <Profile />
        <ItemsContainer>
          <DrawerItem data={{title: '랭킹', route: 'Ranking'}} />
          <DrawerItem data={{title: '미션', route: 'Mission'}} />
        </ItemsContainer>
      </Container>
    );
  }
}

DrawerView.propTypes = {
};

DrawerView.defaultProps = {
};

const Container = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${colors.main};
`;
const ItemsContainer = styled.View`
  flex-direction: column;
  width: 100%;
`;

export default DrawerView;
