import React, { Component } from 'react';

class LeapYearFinder extends Component {

    isLeapYear(year){
        return (year % 100 !== 0)?  year % 4 === 0 : year % 400 === 0;
    }

    render = () => {
        return (
            <div/>
        );
    }
}

export default LeapYearFinder;