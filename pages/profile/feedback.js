import React from 'react';
import { Container, Left, Right, Icon, Content, List, ListItem, Text, 
    Body, Button } from 'native-base';

class FeedbackScreen extends React.Component {

    static navigationOptions = {
        title: '意见反馈',
      };

    constructor(props){
        super(props);

        this.state = {

        }

    }

    render() {

        return (
            <Container>
                <Text>意见反馈</Text>
            </Container>
        )
    }
}

export default FeedbackScreen;