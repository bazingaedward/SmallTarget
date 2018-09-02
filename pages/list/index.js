import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { Container, Left, Right, Icon, Content, List, ListItem, Text, 
    Body, Button, Card, CardItem, CheckBox, DatePicker, DeckSwiper, Fab,
  View, FooterTab, Footer, Badge, Form, Item, Input, Label, Picker,Textarea,
 Header, Title, Subtitle, Separator, Radio, Segment, Spinner, Tabs, Tab,
 ScrollableTab, Root, Toast, H1, H2, H3} from 'native-base';
 import { Col, Row, Grid } from 'react-native-easy-grid';
 import AddScreen from './add';

class ListScreen extends React.Component {

    static navigationOptions = {
        title: '任务列表',
      };

    constructor(props){
        super(props);

        this.state = {
          dataList: [
            {
              title: 'hello',
              intro: 'world'
            },
            {
              title: 'hello',
              intro: 'world'
            },
            {
              title: 'hello',
              intro: 'world'
            },
            {
              title: 'hello',
              intro: 'world'
            },
          ]
        }


    }

    /**
     * 跳转添加任务列表
     */
    onAddTask(){

      this.props.navigation.navigate('Add', {hello: 123});
    }


    render() {

      const {dataList} = this.state;

      return (
        <Container>
          <Content>
            {
              dataList.map((item, idx) => {
                return (
                  <Card key={idx}>
                    <CardItem header><Text>{item.title}</Text></CardItem>
                    <CardItem ><Text>{item.intro}</Text></CardItem>
                  </Card>
                )
              })
            }

            <Button block onPress={this.onAddTask.bind(this)}><Text>添加任务</Text></Button>
          </Content>
        </Container>
      )
    }
}

const ListStack = createStackNavigator(
  {
      Home: ListScreen,
      Add: AddScreen,
  },
  {
      initialRouteName: 'Home',
      /* The header config from HomeScreen is now here */
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
export default ()=><Root><ListStack/></Root>