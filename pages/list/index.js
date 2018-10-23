import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { Container, Left, Right, Icon, Content, List, ListItem, Text, 
    Body, Button, Card, CardItem, CheckBox, DatePicker, DeckSwiper, Fab,
  View, FooterTab, Footer, Badge, Form, Item, Input, Label, Picker,Textarea,
 Header, Title, Subtitle, Separator, Radio, Segment, Spinner, Tabs, Tab,
 ScrollableTab, Root, Toast, H1, H2, H3} from 'native-base';
 import { Col, Row, Grid } from 'react-native-easy-grid';
 import {StyleSheet} from 'react-native'
 import {fromJS} from 'immutable';

class ListScreen extends React.Component {

  static navigationOptions = {
    header: null,
    // title: '任务列表',
    // headerRight: (
    //   <Button style={styles.addBtn} onPress={this.onAddTask}>
    //     <Icon name={'add'} />
    //   </Button>
    // ),
  };

    constructor(props){
        super(props);

        this.state = {
          dataList: props.dataList || []
        }

        this.indata = {
          title: '任务列表',
          titleIcon: 'list'
        }

    }

    

    componentWillReceiveProps(nextProps){
      this.setState({
        dataList: nextProps.dataList
      })
    }

    /**
     * 跳转添加任务列表
     * @param {string} type 跳转的类型,add: 新增, edit:编辑, 默认新增
     */
    goTaskDetail(type, item={}){

      let params = {
        type, 
        item
      }

      this.props.navigation.navigate('Add', params);
    }

    /**
     * 渲染导航栏
     * react-navigation无法提供header中的this绑定，故取消 
     */
    renderHeader(){

      return (
        <Header>
          <Left>
            <Button transparent>
              <Icon name={this.indata.titleIcon} />
            </Button>
          </Left>
          <Body>
            <Title>{this.indata.title}</Title>
          </Body>z
          <Right>
            <Button transparent onPress={this.goTaskDetail.bind(this, 'add')}>
              <Icon name='add' />
            </Button>
          </Right>
        </Header>
      )

    }

    /**
     * 渲染任务列表
     */
    renderBody(){

      const {dataList} = this.state;

      return (
        <Content >
          {
            dataList.map((item, idx) => {
              return (
                <Card key={idx} style={styles.cardItem} >
                  <CardItem header button onPress={this.goTaskDetail.bind(this, 'edit', {...item, _taskId: idx})}>
                    <Text>{item.title}</Text>
                  </CardItem>
                  <CardItem ><Text>{item.intro}</Text></CardItem>
                </Card>
              )
            })
          }
        </Content>
      )
    }


    render() {

      return (
        <Root>
          <Container>

            {this.renderHeader()}

            {this.renderBody()}
            
          </Container>
        </Root>
      )
    }
}

const styles = StyleSheet.create({
  addBtn: {
    color: '#fff',
    backgroundColor: '#4267b2'
  },
  cardItem: {
    marginLeft: 10,
    marginRight: 10
  }
});



export default ListScreen;