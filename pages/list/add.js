/**
 * task 添加/编辑页面
 */

import React from 'react';
import { Container, Left, Right, Icon, Content, List, ListItem, Text, 
    Body, Button, Card, CardItem, CheckBox, DatePicker, DeckSwiper, Fab,
 FooterTab, Footer, Badge, Form, Item, Input, Label, Picker,Textarea,
 Header, Title, Subtitle, Separator, Radio, Segment, Spinner, Tabs, Tab,
 ScrollableTab, Root, Toast, H1, H2, H3} from 'native-base';
 import { Col, Row, Grid } from 'react-native-easy-grid';
 import Dialog from 'react-native-dialog';
 import {View, StyleSheet} from 'react-native';

class AddScreen extends React.Component {

    static navigationOptions = {
        header: null,
        // title: '添加任务',
      };

    constructor(props){
        super(props);

        this.state = {
            title: '',
            intro: '',
            showDialog: false
        }

        this.indata = {
            title: '添加任务',
            titleIcon: 'arrow-back'
          }
    }

    /**
     * 提交任务保存
     */
    onSubmit(){
        const {title, intro} = this.state;
        const {goBack} = this.props.navigation;

        if(!title.length){
            this.setState({
                showDialog: true
            })
            return;
        }
        

        this.props.addTask(title, intro);

        goBack();
    }

/**
     * 渲染导航栏
     * react-navigation无法提供header中的this绑定，故取消 
     */
    renderHeader(){

        const {goBack} = this.props.navigation;

        return (
          <Header>
            <Left>
              <Button transparent onPress={()=>{goBack()}}>
                <Icon name={this.indata.titleIcon} />
              </Button>
            </Left>
            <Body>
              <Title>{this.indata.title}</Title>
            </Body>
            <Right>
              <Button transparent onPress={this.onSubmit.bind(this)}>
                <Icon name='checkmark' />
              </Button>
            </Right>
          </Header>
        )
  
      }

    /**
     * 渲染表单内容
     */
    renderBody(){

        const {title, intro} = this.state;

        return (
            <Content>
                <Form>
                    <Item floatingLabel>
                        <Label>标题</Label>
                        <Input 
                            value={title}
                            onChangeText={title => this.setState({title})}
                        />
                    </Item>
                    <Textarea 
                        rowSpan={5} 
                        bordered 
                        placeholder="请输入任务简介" 
                        value={intro}
                        onChangeText={intro => this.setState({intro})}
                    />
                </Form>

                <Button block danger style={styles.delBtn}><Text>删除</Text></Button>

            </Content>
        )
    }

    /**
     * 渲染弹窗
     */
    renderDialog(){
        const {showDialog} = this.state;

        return (
            <View>
                <Dialog.Container visible={showDialog}>
                    <Dialog.Title>提示</Dialog.Title>
                    <Dialog.Description>
                        请输入任务标题
                    </Dialog.Description>
                    <Dialog.Button label="知道了" onPress={()=>{this.setState({showDialog: false})}}/>
                </Dialog.Container>
            </View>
        )
    }


    render() {

        return (
            <Root>
                <Container>

                    {this.renderHeader()}

                    {this.renderBody()}

                    {this.renderDialog()}
                    
                </Container>
            </Root>
        )
    }
}

const styles = StyleSheet.create({
    delBtn: {
        marginTop: 20
    }
})

export default AddScreen;