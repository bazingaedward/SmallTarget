import React from 'react';
import { Container, Left, Right, Icon, Content, List, ListItem, Text, 
    Body, Button, Card, CardItem, CheckBox, DatePicker, DeckSwiper, Fab,
  View, FooterTab, Footer, Badge, Form, Item, Input, Label, Picker,Textarea,
 Header, Title, Subtitle, Separator, Radio, Segment, Spinner, Tabs, Tab,
 ScrollableTab, Root, Toast, H1, H2, H3} from 'native-base';
 import { Col, Row, Grid } from 'react-native-easy-grid';

class AddScreen extends React.Component {

    static navigationOptions = {
        title: '添加任务',
      };

    constructor(props){
        super(props);

        this.state = {
            title: '',
            intro: '',
        }



    }

    /**
     * 提交任务保存
     */
    onSubmit(){
        const {title, intro} = this.state;
        const {goBack} = this.props.navigation;

        goBack();
    }


    render() {

        const {title, intro} = this.state;

        return (
            <Container>
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

                <Button 
                    block 
                    
                    onPress={this.onSubmit.bind(this)}
                    >
                    <Text>完成</Text>
                </Button>

            </Content>
            </Container>
        )
    }
}

export default AddScreen;