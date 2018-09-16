import { createStackNavigator } from 'react-navigation';;
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import PlotScreen from '../pages/plot/index';
import {get} from 'immutable';

const PlotStack = createStackNavigator(
  {
      Home: connect(state => (state))(PlotScreen),
  },
  {
      initialRouteName: 'Home',
      navigationOptions: {
        headerTitleStyle: { textAlign: 'center' },
        headerStyle: {
          backgroundColor: '#4267b2',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      },
    }
);

export default PlotStack;