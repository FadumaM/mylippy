import React from 'react';
import { shallow } from 'enzyme';
import Nav from './index.jsx';

describe('Nav', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Nav />);
  });
  it('Should render a Nav', () => {
    expect(wrapper.length).toEqual(1);
  })
  it('should have a heading', () => {
    expect(wrapper.text()).toBe('Mylippy')
  });
});
