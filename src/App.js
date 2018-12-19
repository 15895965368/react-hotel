import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Layout, notification, Icon } from 'antd';
import './util/http'


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
        return (
            <Layout>
              1111
            </Layout>
        );
    }
}

export default App;
