import React from 'react';
import {inject} from 'mobx-react';
import styled from 'styled-components/native';
import colors from '../../colors/colors';
import Header from '../../components/view/header/Header';
import MissionItem from '../../components/view/mission/MissionItem';
import Ranking from '../../components/view/ranking/Ranking';
import MissionBoard from '../../components/view/mission/MissionBoard';
import ImagePicker from 'react-native-image-crop-picker';

@inject(stores => ({
  setNav: stores.nav.setNav,
  navTo: stores.nav.navTo,
}))
class MissionDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        title: '양 목따기',
        subtitle: '양떼목장의 최대주주는?',
      },
    };
  }
  componentDidMount() {
  }

  openCamera = () => {
    // ImagePicker.openCamera({
    //   width: 300,
    //   height: 400,
    //   cropping: true,
    // }).then(image => {
    //   console.log(image);
    // });
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      this.props.navTo('MissionPhoto', image);
    });
  };

  render() {
    const {data} = this.state;

    return (
      <Container>
        <Header />
        <DetailContainer>
          <MissionItem data={data} />
          <MissionTitle>{data.subtitle}</MissionTitle>
          <RankingContainer>
            <Ranking />
          </RankingContainer>
          <MissionBoard />
        </DetailContainer>
        <BottomContainer>
          <CameraIcon onPress={this.openCamera} />
        </BottomContainer>
      </Container>
    );
  }
}

const Container = styled.View`
  flex: 1;
  display: flex;
  background-color: ${colors.main};
`;

const DetailContainer = styled.View`
  flex: 1;
`;

const MissionTitle = styled.Text`
  color: white;
  font-size: 18;
  font-weight: 600;
  text-align: center;
`;
const RankingContainer = styled.View`
  padding-horizontal: 30px;
  width: 100%;
  height: 100px;
`;
const CameraIcon = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  background-color: white;
`;
const BottomContainer = styled.View`
  align-items: center;
  padding-bottom: 80px;
`;

export default MissionDetail;
