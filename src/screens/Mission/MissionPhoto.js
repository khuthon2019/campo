import React from 'react';
import {inject} from 'mobx-react';
import styled from 'styled-components/native';
import colors from '../../colors/colors';

@inject(stores => ({
  setNav: stores.nav.setNav,
  goBack: stores.nav.back,
}))
class MissionPhoto extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  componentDidMount() {}

  onConfirm = () => {
    this.props.goBack();
  };

  render() {
    const {params} = this.props.navigation.state;

    return (
      <Container>
        <PhotoContainer source={{uri: params.path}} />
        <ConfirmButton onPress={this.onConfirm}>
          <ConfirmText>인증하기</ConfirmText>
        </ConfirmButton>
      </Container>
    );
  }
}

const Container = styled.View`
  flex: 1;
  display: flex;
  align-items: center;
  background-color: ${colors.main};
`;
const PhotoContainer = styled.Image`
  width: 300px;
  height: 400px;
`;
const ConfirmButton = styled.TouchableOpacity`
  background-color: ${colors.yellow};
  margin-top: 20px;
  padding-horizontal: 30px;
  padding-vertical: 16px;
  border-radius: 8px;
`;
const ConfirmText = styled.Text`
  color: ${colors.main};
`;

export default MissionPhoto;
