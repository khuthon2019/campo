import React from 'react';
import {inject} from 'mobx-react';
import styled from 'styled-components/native';

@inject(stores => ({
  setNav: stores.nav.setNav,
}))
class MissionItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  componentDidMount() {}

  render() {
    const {data} = this.props;

    return (
      <Container>
        <MissionTitle>{data.title}</MissionTitle>
      </Container>
    );
  }
}

const Container = styled.View`
  display: flex;
`;
const MissionTitle = styled.Text`
  color: white;
`;

export default MissionItem;
