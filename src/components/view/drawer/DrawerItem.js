/* eslint no-useless-escape: 0 */

import React, {Component} from 'react';
import {inject} from 'mobx-react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import colors from '../../../colors/colors';
import Profile from '../profile/Profile';

@inject(stores => ({
  navTo: stores.nav.navTo,
  closeDrawer: stores.drawer.close,
}))
class DrawerItem extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  onPress = () => {
    const {data, navTo, closeDrawer} = this.props;

    navTo(data.route);
    closeDrawer();
  }

  render() {
    const {data} = this.props;

    return (
      <Container onPress={this.onPress}>
        <Title>
          {data.title}
        </Title>
      </Container>
    );
  }
}

DrawerItem.propTypes = {
};

DrawerItem.defaultProps = {
};

const Container = styled.TouchableOpacity`
  padding-horizontal: 20px;
  padding-vertical: 15px;
`;
const Title = styled.Text`
  color: white;
`

export default DrawerItem;
