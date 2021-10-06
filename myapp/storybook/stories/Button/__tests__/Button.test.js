import React from 'react';
import renderer from 'react-test-renderer';
import {Button} from '../Button';
import {noop} from 'lodash';
import {TouchableHighlight} from 'react-native';

describe('Button', () => {
  it('should render properly', () => {
    const component = renderer.create(<Button onPress={noop} />);

    expect(component.toJSON()).toMatchSnapshot();
  });
  it('should action callback on click', () => {
    const action = jest.fn();
    const component = renderer.create(<Button onPress={action} />);

    //press on button
    const button = component.root.findByType(TouchableHighlight);
    expect(button).toBeDefined();
    button.props.onPress();

    //expect action to be called once
    expect(action).toHaveBeenCalledTimes(1);
  });
});
