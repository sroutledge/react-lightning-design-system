import React from 'react';
import { shallow } from 'enzyme';
import assert from 'power-assert';

import FormElement from '../src/scripts/FormElement';

describe.only('Form Element', () => {
  describe('renderLabel', () => {
    it('render an astericks in addition to the label if the field is required', () => {
        const fe = new FormElement({ id: '123', label: 'Hello World', required: true });
        const component = shallow(fe.renderLabel());
        expect(component.contains(
          <label className='slds-form-element__label' htmlFor="123">
            Hello World
            <abbr className='slds-required'>*</abbr>
          </label>)
        ).to.be.true;
    });

    it('should take in a string and return a label tag containg the string', () => {
        const fe = new FormElement({ id: '123', label: 'Hello World' });
        const component = shallow(fe.renderLabel());

        expect(component.contains(
          <label className='slds-form-element__label' htmlFor="123">
            Hello World
          </label>)
        ).to.be.true;
    });

    it('should return undefined if no label is set', () => {
        const fe = new FormElement({ id: '123', label: null });
        assert(fe.renderLabel() === undefined);
    });
  });

  describe.only('renderControl', () => {
    it('should render an input containg all of its children wrapped by a div with the slds-form-element__control class', () => {
      const fe = new FormElement({ id: '123', label: 'Hello World' });
      const component = shallow(fe.renderControl({ children: [<span key={'h'}>Hello</span>, <span key={'w'}>World</span>] }));
      expect(component.contains(
        <div className='slds-form-element__control'>
          <span>Hello</span>
          <span>World</span>
        </div>)
      ).to.be.true;
    });

    it('should render an ')
  });
})
