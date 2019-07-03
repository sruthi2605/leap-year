import React from 'react';
import {shallow} from 'enzyme';
import App from './App';
import LeapYearFinder from '../LeapYearFinder/LeapYearFinder'

describe('App', () => {

    let wrapper;
    beforeEach(() => wrapper = shallow(<App />));

    it('should render a <div />', () => {
        expect(wrapper.find('div').length).toEqual(1);
    });

    it('should render the LeapYearFinder Component', () => {
        expect(wrapper.containsMatchingElement(<LeapYearFinder />)).toEqual(true);
    });
});