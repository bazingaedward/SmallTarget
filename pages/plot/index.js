import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { Container, Left, Right, Icon, Content, List, ListItem, Text, 
    Body, Button, Card, CardItem, CheckBox, DatePicker, DeckSwiper, Fab,
  View, FooterTab, Footer, Badge, Form, Item, Input, Label, Picker,Textarea,
 Header, Title, Subtitle, Separator, Radio, Segment, Spinner, Tabs, Tab,
 ScrollableTab, Root, Toast, H1, H2, H3} from 'native-base';
 import { Col, Row, Grid } from 'react-native-easy-grid';
 import {StyleSheet} from 'react-native'

class PlotScreen extends React.Component {

  static navigationOptions = {
    header: null,
  };

    constructor(props){
        super(props);

        this.indata = {
            title: '统计分析',
            titleIcon: 'podium'
          }


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
            </Body>
            <Right>
            </Right>
          </Header>
        )
  
      }

    render() {

      return (
        <Root>
          <Container>

            {this.renderHeader()}

            <Text>plot</Text>
            
          </Container>
        </Root>
      )
    }
}

const styles = StyleSheet.create({
 
});



export default PlotScreen;