import React from 'react';
import {shallow} from 'enzyme';
import LeapYearFinder from './LeapYearFinder';

describe('LeapYearFinder', () => {

    let wrapper;
    beforeEach(() => wrapper = shallow(<LeapYearFinder />));

    it('2016 is a Leap Year', () => {
        expect(wrapper.instance().isLeapYear(2016)).toEqual(true);
    });

    it('2017 is not a Leap Year', () => {
        expect(wrapper.instance().isLeapYear(2017)).toEqual(false);
    });

    it('1900 is not a Leap Year', () => {
        expect(wrapper.instance().isLeapYear(1900)).toEqual(false);
    });

    it('2000 is a Leap Year', () => {
        expect(wrapper.instance().isLeapYear(2000)).toEqual(true);
    });
});