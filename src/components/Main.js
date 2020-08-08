import React, {Component} from 'react';
import axios from 'axios';
import SatSetting from './SatSetting';
import SatelliteList from './SatelliteList';
import WorldMap from './WorldMap';

import {NEARBY_SATELLITE, SAT_API_KEY, STARLINK_CATEGORY} from "../Contants";

class Main extends Component {
    constructor(){
        super();
        this.state = {
            satInfo: null,
            isLoadingList: false,
            satList: null,
            setting : null
        };
    }
    showNearbySatellite = (setting) => {
        this.setState({
            isLoadingList: true,
            setting: setting
        })
        this.fetchSatellite(setting);
    }




    fetchSatellite= (setting) => {
        const {observerLat, observerLong, observerElevation, satAlt} = setting;
        const url = `${NEARBY_SATELLITE}/${observerLat}/${observerLong}/${observerElevation}/${satAlt}/${STARLINK_CATEGORY}/&apiKey=${SAT_API_KEY}`;

        this.setState({
            isLoadingList: true
        });

        axios.get(url)
            .then(response => {
                console.log(response.data)
                this.setState({
                    satInfo: response.data,
                    isLoadingList: false
                })
            })
            .catch(error => {
                console.log('err in fetch satellite -> ', error);
            })
    }

    showMap = (selected) => {
        this.setState(preState => ({
            ...preState,
            satList: [...selected]
        }))
    }

    render() {
        const { satInfo, isLoadingList, satList, setting } = this.state;
        return (
            <div className='main'>
                <div className="left-side">
                    <SatSetting onShow={this.showNearbySatellite}/>
                    <SatelliteList satInfo={satInfo}
                                   onShowMap={this.showMap}
                                    isLoad = {isLoadingList}/>
                </div>
                <div className="right-side">
                    <WorldMap satData = {satList} obserrverData = {setting}/>

                </div>
            </div>
        );
    }
}

export default Main;
