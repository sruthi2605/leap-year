import React from 'react';
import {shallow} from 'enzyme';
import App from './App';
import LeapYearFinder from '../LeapYearFinder/LeapYearFinder'

describe('App', () => {

    it('should render a <div />', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('div').length).toEqual(1);
    });

    it('should render the LeapYearFinder Component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.containsMatchingElement(<LeapYearFinder />)).toEqual(true);
    });
});