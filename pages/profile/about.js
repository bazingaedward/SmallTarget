import React from 'react';
import { Container, Left, Right, Icon, Content, List, ListItem, Text, 
    Body, Button } from 'native-base';

class AboutScreen extends React.Component {

    static navigationOptions = {
        title: '关于',
      };

    constructor(props){
        super(props);

        this.state = {

        }

    }

    render() {

        return (
            <Container>
                <Text>关于</Text>
            </Container>
        )
    }
}

export default AboutScreen;