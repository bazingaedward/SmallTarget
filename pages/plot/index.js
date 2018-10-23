import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { Container, Left, Right, Icon, Content, List, ListItem, Text, 
    Body, Button, Card, CardItem, CheckBox, DatePicker, DeckSwiper, Fab,
  View, FooterTab, Footer, Badge, Form, Item, Input, Label, Picker,Textarea,
 Header, Title, Subtitle, Separator, Radio, Segment, Spinner, Tabs, Tab,
 ScrollableTab, Root, Toast, H1, H2, H3} from 'native-base';
 import { Col, Row, Grid } from 'react-native-easy-grid';
 import {StyleSheet} from 'react-native'
 import Echarts from 'native-echarts';

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


    getOption(){
        return {
            xAxis: {
                type: 'category',
                data: ['Matcha Latte', 'Milk Tea', 'Cheese Cocoa', 'Walnut Brownie']
            },
            yAxis: {},
            series: [
                {
                    type: 'bar',
                    name: '2015',
                    data: [89.3, 92.1, 94.4, 85.4]
                },
                {
                    type: 'bar',
                    name: '2016',
                    data: [95.8, 89.4, 91.2, 76.9]
                },
                {
                    type: 'bar',
                    name: '2017',
                    data: [97.7, 83.1, 92.5, 78.1]
                }
            ]
        }
    }
    /**
     * 渲染任务列表
     */
    renderBody(){
  
        return (
          <Content >
              <Echarts option={this.getOption()} height={300} style/>
            {/* <ReactEcharts option={this.getOption()} s/> */}
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
 
});



export default PlotScreen;