import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text } from 'react-native';
import Button from './Button'
import CenterView from '../CenterView/CenterView';

storiesOf('Button', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('with text', () => (
    <Button
      btnText="Test Button"
      onPress={action('clicked-text')}
    />
  ))
  .add('with loader', () => (
    <Button
      btnText="Loading"
      onPress={action('clicked-text')}
      loading={true}
    />
  ))
