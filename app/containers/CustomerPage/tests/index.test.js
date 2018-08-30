import React from 'react';
import { shallow } from 'enzyme';

import CustomerPage from '../index';

describe('<CustomerPage />', () => {
  it('should render its heading', () => {
    const renderedComponent = shallow(<CustomerPage />);
    expect(renderedComponent.contains(<h1>Features</h1>)).toBe(true);
  });

  it('should never re-render the component', () => {
    const renderedComponent = shallow(<CustomerPage />);
    const inst = renderedComponent.instance();
    expect(inst.shouldComponentUpdate()).toBe(false);
  });
});
