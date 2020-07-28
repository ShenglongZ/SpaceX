import React, {Component} from 'react';
import SatSetting from './SatSetting';
import Test from "./Test"
class Main extends Component {
    render() {
        return (
            <div className='main'>
                <div className="left-side">
                    <SatSetting />
                </div>
                <div className="right-side">
                    right
                </div>
            </div>
        );
    }
}

export default Main;
