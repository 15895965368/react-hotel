import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Layout, notification, Icon, Button } from 'antd';
import * as config from './util/config'


class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            collapsed: false
        }
    }
    toggle(){
        this.setState({
            collapsed: !this.state.collapsed
        })
    }

    render() {
        const { Sider, Header, Content, Footer } = Layout
        return (
            <Layout>
                <Sider><Button type="primary">Primary</Button></Sider>
                <Layout>
                    <Header>11111</Header>
                    <Content>111</Content>
                    <Footer style={{textAlign: 'center'}}>React Hotel@{config.year} Created By {config.username}</Footer>
                </Layout>
            </Layout>
        );
    }
}

export default App;
