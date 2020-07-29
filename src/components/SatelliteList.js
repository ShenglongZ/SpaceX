
import React, {Component} from 'react';
import { List, Avatar, Button, Checkbox, Spin } from 'antd';
import satellite from "../assets/images/satellite1.png";
import InfiniteScroll from 'react-infinite-scroller';
class SatelliteList extends Component {
    render() {
        const satList = this.props.satInfo ? this.props.satInfo.above : [];
        console.log("show this.props");
        console.log(this.props.isLoad);
        console.log("end of prop");
        const { isLoad } = this.props;

        return (
            <div className="sat-list-box">
                <Button className="sat-list-btn"
                        size="large">Track on the map</Button>
                <hr/>

                {
                    isLoad ?
                        <div className="spin-box">
                            <Spin tip="Loading..." size="large" />
                        </div>
                        :
                        <div className="demo-infinite-container">
                            <InfiniteScroll
                                initialLoad={false}
                                pageStart={0}
                                // loadMore={this.handleInfiniteOnLoad}
                                // hasMore={!this.state.loading && this.state.hasMore}
                                useWindow={false}
                            >
                        <List
                            className="sat-list"
                            itemLayout="horizontal"
                            size="small"
                            dataSource={satList}
                            renderItem={item => (
                                <List.Item
                                    actions={[<Checkbox dataInfo={item} onChange={this.onChange}/>]}
                                >
                                    <List.Item.Meta
                                        avatar={<Avatar size={50} src={satellite} />}
                                        title={<p>{item.satname}</p>}
                                        description={`Launch Date: ${item.launchDate}`}
                                    />

                                </List.Item>
                            )}
                        >
                            {/*{this.state.isLoad && (*/}
                            {/*    <div className="demo-loading-container">*/}
                            {/*        <Spin />*/}
                            {/*    </div>*/}
                            {/*)}*/}
                        </List>
                            </InfiniteScroll>
                        </div>
                }
            </div>
        );
    }
}

export default SatelliteList;
