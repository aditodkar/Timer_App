import React from 'react';
import renderer from 'react-test-renderer';
import Home from './home';


it('Home component snapshot', () => {
    const snap = renderer.create(<Home/>).toJSON();
    expect(snap).toMatchSnapshot();
});
