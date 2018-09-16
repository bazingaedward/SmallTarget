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
 import {format} from 'date-fns';

class AddScreen extends React.Component {

    static navigationOptions = {
        header: null,
        // title: '添加任务',
      };

    constructor(props){
        super(props);

        let type = props.navigation.getParam('type');
        let item = props.navigation.getParam('item')

        let param = {}

        switch(type){
            case 'add': 
                param = {
                    editMode: false,
                }
                
                break;
            case 'edit': 
                param = {
                    title: item.title,
                    intro: item.intro,
                    editMode: true,
                    _taskId: item._taskId
                }
                break;
        }

        this.state = Object.assign({
            title: '',
            intro: '',
            showDialog: false,
            startDate: new Date(),
            endDate: new Date(),
        }, param)
        
        this.indata = {
            title: type === 'add' ? '添加任务' : '编辑任务',
            titleIcon: 'arrow-back'
          }
        
    }

    /**
     * 提交任务保存
     */
    onSubmit(){
        const {title, intro, editMode, _taskId} = this.state;
        const {goBack} = this.props.navigation;

        // 效验标题有效
        if(!title.length){
            this.setState({
                showDialog: true
            })
            return;
        }
        

        if(!editMode){

            this.props.actions.addTask(title, intro);

        }else {

            this.props.actions.editTask(_taskId, title, intro);

        }
        

        goBack();
    }

    /**
     * 删除任务
     */
    onDelete(){

        const {title, intro, _taskId} = this.state;
        const {goBack} = this.props.navigation;
        

        this.props.actions.delTask(_taskId);

        goBack();

    }

    /**
     * 设置起始和结束日期
     * @param {string} typeString [startDate, endDate] 
     * @param {Date} newDate 
     */
    setDate(typeString, date) {
        this.setState({ [typeString]: date });
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

        const {title, intro, editMode, startDate, endDate} = this.state;

        let datePickerCommonProps = {
            locale: "en",
            timeZoneOffsetInMinutes: undefined,
            modalTransparent: false,
            animationType: 'fade',
            androidMode: "default",
            textStyle: { color: "green" },
            placeHolderTextStyle: { color: "#d3d3d3" },
            formatChosenDate: date => format(date, 'YYYY年MM月DD日')
        }

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
                    
                    <Item style={{justifyContent: 'space-between'}}>
                        <DatePicker
                            {...datePickerCommonProps}
                            placeHolderText="任务起始日期"
                            onDateChange={this.setDate.bind(this, 'startDate')}
                        />
                        <Text>~</Text>
                        <DatePicker
                            {...datePickerCommonProps}
                            minimumDate={startDate}
                            placeHolderText="任务结束日期"
                            onDateChange={this.setDate.bind(this, 'endDate')}
                        />
                    </Item>

                    <Item>
                        <Textarea
                            style={{flex: 1}} 
                            rowSpan={5} 
                            bordered 
                            placeholder="请输入任务简介" 
                            value={intro}
                            onChangeText={intro => this.setState({intro})}
                        />
                    </Item>
                </Form>

                {editMode && (
                    <Button 
                        block 
                        danger 
                        style={styles.delBtn}
                        onPress={this.onDelete.bind(this)}
                    ><Text>删除</Text>
                    </Button>
                )}
                

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