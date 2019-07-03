import React, { Component } from 'react';

class LeapYearFinder extends Component {

    isLeapYear(year){
        return year%4 === 0;
    }

    render = () => {
        return (
            <div/>
        );
    }
}

export default LeapYearFinder;