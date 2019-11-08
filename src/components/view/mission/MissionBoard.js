import React from 'react';
import {inject} from 'mobx-react';
import styled from 'styled-components/native';
import faker from 'faker';

@inject(stores => ({
  setNav: stores.nav.setNav,
}))
class MissionBoard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visitors: [
        {
          image: 'https://picsum.photos/seed/picsum/50/50',
        },
        {
          image: 'https://picsum.photos/seed/picsum/50/50',
        },
        {
          image: 'https://picsum.photos/seed/picsum/50/50',
        },
      ],
    };
  }
  componentDidMount() {}

  render() {
    const {visitors} = this.state;

    const visitorView = visitors.map(each => {
      return (
        <VisitorViewContainer>
          <VisitorImage source={{uri: each.image}} />
        </VisitorViewContainer>
      );
    });

    return (
      <Container>
        <MissionTitle>방명록</MissionTitle>
        <VisitorContainer>{visitorView}</VisitorContainer>
      </Container>
    );
  }
}

const Container = styled.View`
  display: flex;
`;
const MissionTitle = styled.Text`
  color: white;
  margin-bottom: 10px;
`;
const VisitorContainer = styled.View`
  flex-direction: row;
  justify-content:space-between;
  padding-horizontal: 20px;
`;
const VisitorViewContainer = styled.View`
`;
const VisitorImage = styled.Image`
  width: 100px;
  height: 100px;
`;

export default MissionBoard;
