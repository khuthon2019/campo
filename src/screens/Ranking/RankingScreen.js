import React from 'react';
import {inject} from 'mobx-react';
import styled from 'styled-components/native';
import Ranking from '../../components/view/ranking/Ranking';
import colors from '../../colors/colors';

@inject(stores => ({
  setNav: stores.nav.setNav,
}))
class RankingScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  componentDidMount() {}

  render() {
    return (
      <Container>
        <RankingContainer>
          <Ranking />
        </RankingContainer>
      </Container>
    );
  }
}

const Container = styled.View`
  flex: 1;
  display: flex;
  background-color: ${colors.main};
`;
const RankingContainer = styled.View`
  flex: 1;
  width: 100%;
`;

export default RankingScreen;
