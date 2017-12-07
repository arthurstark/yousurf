import React from 'react';
import {Route} from "react-router-dom";
import Watch from "../components/Watch";

class WatchContainer extends React.Component {

    render() {
        return (
            <div>
                <Route path={`${this.props.match.url}/:videoId`} component={Watch}/>
            </div>
        );
    }
}

export default WatchContainer;
