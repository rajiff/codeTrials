import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import chai from 'chai';
import sinon from 'sinon';

import ApplicationBar from '../components/ApplicationBar';
import DrawerItems from '../components/DrawerItems';

Enzyme.configure({ adapter: new Adapter() });

const expect = chai.expect;

describe('Unit testing for component <ApplicationBar />', function() {
  it('Check ApplicationBar renders App bar', function() {
  	const appBarWrapper = shallow(<ApplicationBar />);

  	expect(appBarWrapper.contains('Code Trials')).to.equal(true);
  	expect(appBarWrapper.find(DrawerItems)).to.have.length(1);
  	// expect(appBarWrapper.find(DrawerItems).dive().find('li').exists()).to.equal(true);
  })

  /*it('Check on sidebar click', function() {
    const appBarWrapper = shallow(<ApplicationBar />);

    expect(appBarWrapper.find(DrawerItems)).to.have.length(1);
    appBarWrapper.find(DrawerItems).simulate('click');

  })*/
})