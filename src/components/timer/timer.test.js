import React from 'react';
import renderer from 'react-test-renderer';
import Timer from './timer';


it('Timer component snapshot', () => {
    const snap = renderer.create(<Timer/>).toJSON();
    expect(snap).toMatchSnapshot();
});
