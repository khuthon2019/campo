/* eslint no-useless-escape: 0 */

import React, {Component} from 'react';
import {inject} from 'mobx-react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import Ranking from '../ranking/Ranking';
import Location from '../location/Location';

@inject(stores => ({
  navTo: stores.nav.navTo,
  openDrawer: stores.drawer.open,
}))
class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  navToRanking = () => {
    this.props.navTo('Ranking');
  };

  render() {
    const {needBottom} = this.props;

    return (
      <Container>
        <TopContainer>
          <LeftContainer>
            <HamburgerContainer onPress={this.props.openDrawer}>
              <Hamburger />
            </HamburgerContainer>
          </LeftContainer>
          <RightContainer>
            <Location />
          </RightContainer>
        </TopContainer>
        {needBottom && (
          <BottomContainer>
            <Ranking onPressItem={this.navToRanking} />
          </BottomContainer>
        )}
      </Container>
    );
  }
}

Header.propTypes = {
  needBottom: PropTypes.bool.isRequired,
};

Header.defaultProps = {
  needBottom: false,
};

const Container = styled.View`
  width: 100%;
`;
const TopContainer = styled.View`
  width: 100%;
  height: 60;
  flex-direction: row;
  justify-content: space-between;
`;
const BottomContainer = styled.View`
  height: 100;
`;
const LeftContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const HamburgerContainer = styled.TouchableOpacity`
  padding-left: 30;
`;

const Hamburger = styled.View`
  background-color: white;
  width: 30px;
  height: 30px;
`;

const RightContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding-right: 30;
`;

export default Header;
