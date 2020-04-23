import React from 'react';
import {Switch, Route} from 'react-router-dom';
import ToBusiness from './../toBusiness/ToBusiness';
import ToFinorg from './../toFinorg/ToFinorg';
import './content.css';

function Content() {
    return (
        <div className="content-main">
            <Switch>
                <Route path="/about">
                    it's about
                </Route>
                <Route path="/toBusiness">
                    <div className="content-2business">
                        <ToBusiness />
                    </div>
                </Route>
                <Route path="/toFinorg">
                    <div className="content-2finorg">
                        <ToFinorg />
                    </div>
                </Route>
                <Route path="/">
                    it's UNDER CONSTRUCTION
                </Route>
            </Switch>
        </div>
    );
}

export default Content;