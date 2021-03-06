import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jquery/dist/jquery';
import TestUtils from 'react-addons-test-utils';
import Controls from '../../components/Controls';

describe('Controls', () => {
  it('should exist', () => {
    expect(Controls).toExist();
  });

  describe('render', () => {
    let onStatusChange;
    beforeEach(() => {
      onStatusChange = expect.createSpy();
    });

    it('should render pause when started', () => {
      const controls = TestUtils.renderIntoDocument(<Controls onStatusChange={onStatusChange} countdownStatus="started"/>);
      const $el = $(ReactDOM.findDOMNode(controls));
      const $pauseButton = $el.find('button:contains(Pause)');

      expect($pauseButton.length).toBe(1);
    });

    it('should render start when paused', () => {
      const controls = TestUtils.renderIntoDocument(<Controls onStatusChange={onStatusChange} countdownStatus="paused"/>);
      const $el = $(ReactDOM.findDOMNode(controls));
      const $startButton = $el.find('button:contains(Start)');

      expect($startButton.length).toBe(1);
    });
  });
});
