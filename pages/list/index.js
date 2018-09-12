import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { Container, Left, Right, Icon, Content, List, ListItem, Text, 
    Body, Button, Card, CardItem, CheckBox, DatePicker, DeckSwiper, Fab,
  View, FooterTab, Footer, Badge, Form, Item, Input, Label, Picker,Textarea,
 Header, Title, Subtitle, Separator, Radio, Segment, Spinner, Tabs, Tab,
 ScrollableTab, Root, Toast, H1, H2, H3} from 'native-base';
 import { Col, Row, Grid } from 'react-native-easy-grid';


class ListScreen extends React.Component {

    static navigationOptions = {
        title: '任务列表',
      };

    constructor(props){
        super(props);

        this.state = {
          dataList: props.dataList || []
        }


    }

    componentWillReceiveProps(nextProps){
      this.setState({
        dataList: nextProps.dataList
      })
    }

    /**
     * 跳转添加任务列表
     */
    onAddTask(){

      this.props.navigation.navigate('Add');
    }


    render() {

      const {dataList} = this.state;

      return (
        <Root>
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
        </Root>
      )
    }
}

export default ListScreen;