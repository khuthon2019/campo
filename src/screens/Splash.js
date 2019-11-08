import React from 'react';
import styled from 'styled-components/native';
import {inject} from 'mobx-react';
import StackContainer from '.';
import Drawer from 'react-native-drawer';
import DrawerView from '../components/view/drawer/DrawerView';

@inject(stores => ({
  drawerVisible: stores.drawer.visible,
  closeDrawer: stores.drawer.close,
}))
class Splash extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    console.disableYellowBox = true;
  }

  componentDidMount = () => {};

  componentWillReceiveProps(nextProps) {
    if (nextProps.drawerVisible !== this.props.drawerVisible) {
      if (nextProps.drawerVisible) {
        this.openControlPanel();
      } else {
        this.closeControlPanel();
      }
    }
  }

  closeControlPanel = () => {
    this._drawer.close();
  };
  openControlPanel = () => {
    this._drawer.open();
  };
  render() {
    //render for authorized user
    // return ();

    return (
      <Drawer
        type="overlay"
        ref={ref => (this._drawer = ref)}
        content={<DrawerView />}
        tapToClose={true}
        openDrawerOffset={0.2} // 20% gap on the right side of drawer
        panCloseMask={0.2}
        onClose={this.props.closeDrawer}>
        <StackContainer />
      </Drawer>
    );
  }
}

export default Splash;
