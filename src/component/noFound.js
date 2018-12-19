import React, {Component} from 'react'
import notfound from '../assets/image/404.png'

class NoFound extends Component {
    render(){
        return (
            <div style={{height: '100%', background: '#ececec', overflow: 'hidden', textAlign: 'center'}}>
                <img src={notfound} alt="404" className="animated swing"></img>
            </div>
        )
    }
}

export default NoFound