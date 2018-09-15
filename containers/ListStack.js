import { createStackNavigator } from 'react-navigation';;
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { addTask } from '../actions';
import ListScreen from '../pages/list/index';
import AddScreen from '../pages/list/add';
import {get} from 'immutable';

const ListStack = createStackNavigator(
  {
      Home: connect(state => ({dataList: state.List.dataList}))(ListScreen),
      Add: connect(null, dispatch => ({addTask: bindActionCreators(addTask, dispatch)}))(AddScreen),
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

export default ListStack;