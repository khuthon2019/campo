/* eslint no-useless-escape: 0 */

import React, {Component} from 'react';
import {inject} from 'mobx-react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import Ranking from '../ranking/Ranking';

@inject(stores => ({
  navTo: stores.nav.navTo,
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
    return (
      <Container>
        <LeftContainer>
          <HamburgerContainer>
            <Hamburger />
          </HamburgerContainer>
        </LeftContainer>
        <Ranking onPressItem={this.navToRanking} />
      </Container>
    );
  }
}

Header.propTypes = {
};

Header.defaultProps = {
};

const Container = styled.View`
  width: 100%;
  height: 150;
  flex-direction: row;
  justify-content: space-between;
`;
const LeftContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const HamburgerContainer = styled.TouchableOpacity`
  padding-left: 30;
`;

const Hamburger = styled.View`
  background-color: red;
  width: 30px;
  height: 30px;
`;

export default Header;
