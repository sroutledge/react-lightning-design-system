import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';
import moment from 'moment';
import uuid from 'uuid';
import FormElement from './FormElement';
import Input from './Input';
import Icon from './Icon';
import Datepicker from './Datepicker';

export default class DateInput extends Component {
  constructor(props) {
    super();
    this.state = {
      id: `form-element-${uuid()}`,
      opened: (props.defaultOpened || false),
    };

    this.onDateIconClick = this.onDateIconClick.bind(this);
    this.onInputKeyDown = this.onInputKeyDown.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.onInputBlur = this.onInputBlur.bind(this);

    this.onDatepickerSelect = this.onDatepickerSelect.bind(this);
    this.onDatepickerBlur = this.onDatepickerBlur.bind(this);
    this.onDatepickerClose = this.onDatepickerClose.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.onValueChange && prevState.value !== this.state.value) {
      const value = moment(this.state.value, 'YYYY-MM-DD').format(this.props.dateFormat);
      this.props.onValueChange(value, prevState.value);
    }
  }

  onDateIconClick() {
    setTimeout(() => {
      this.showDatepicker();
    }, 10);
  }

  onInputKeyDown(e) {
    if (e.keyCode === 13) { // return key
      e.preventDefault();
      e.stopPropagation();
      this.setValueFromInput(e.target.value);
      if (this.props.onComplete) {
        setTimeout(() => {
          this.props.onComplete();
        }, 10);
      }
    } else if (e.keyCode === 40) { // down key
      this.showDatepicker();
      e.preventDefault();
      e.stopPropagation();
    }
    if (this.props.onKeyDown) {
      this.props.onKeyDown(e);
    }
  }

  onInputChange(e) {
    const inputValue = e.target.value;
    this.setState({ inputValue });
    if (this.props.onChange) {
      this.props.onChange(e, inputValue);
    }
  }

  onInputBlur(e) {
    this.setValueFromInput(e.target.value);
    setTimeout(() => {
      if (!this.isFocusedInComponent()) {
        if (this.props.onBlur) {
          this.props.onBlur();
        }
        if (this.props.onComplete) {
          this.props.onComplete();
        }
      }
    }, 10);
  }

  onDatepickerSelect(dvalue) {
    const value = moment(dvalue).format(this.getValueFormat());
    this.setState({ value, inputValue: undefined });
    setTimeout(() => {
      this.setState({ opened: false });
      const inputEl = this.input;
      if (inputEl) {
        inputEl.focus();
        inputEl.select();
      }
      if (this.props.onComplete) {
        this.props.onComplete();
      }
    }, 200);
  }

  onDatepickerBlur() {
    this.setState({ opened: false });
    setTimeout(() => {
      if (!this.isFocusedInComponent()) {
        if (this.props.onBlur) {
          this.props.onBlur();
        }
        if (this.props.onComplete) {
          this.props.onComplete();
        }
      }
    }, 10);
  }

  onDatepickerClose() {
    this.setState({ opened: false });
    const inputEl = this.input;
    if (inputEl) {
      inputEl.focus();
      inputEl.select();
    }
  }

  getValueFormat() {
    return this.props.includeTime ? 'YYYY-MM-DDTHH:mm:ss.SSSZ' : 'YYYY-MM-DD';
  }

  getInputValueFormat() {
    return this.props.dateFormat || (this.props.includeTime ? 'L HH:mm' : 'L');
  }

  setValueFromInput(inputValue) {
    let value = this.state.value;
    if (!inputValue) {
      value = '';
    } else {
      value = moment(inputValue, this.props.dateFormat);
      if (value.isValid()) {
        value = value.format(this.getValueFormat());
      } else {
        value = '';
      }
    }
    this.setState({ value, inputValue: undefined });
  }

  isFocusedInComponent() {
    const rootEl = this.node;
    let targetEl = document.activeElement;
    while (targetEl && targetEl !== rootEl) {
      targetEl = targetEl.parentNode;
    }
    return !!targetEl;
  }

  showDatepicker() {
    let value = this.state.value;
    if (typeof this.state.inputValue !== 'undefined') {
      value = moment(this.state.inputValue, this.getInputValueFormat());
      if (value.isValid()) {
        value = value.format(this.getValueFormat());
      } else {
        value = this.state.value;
      }
    }
    this.setState({ opened: true, value });
  }

  renderInput({ inputValue, ...props }) {
    const pprops = props;
    delete pprops.onValueChange;
    return (
      <div className='slds-input-has-icon slds-input-has-icon--right'>
        <Input
          inputRef={node => (this.input = node)}
          value={ inputValue }
          { ...props }
          onKeyDown={ this.onInputKeyDown }
          onChange={ this.onInputChange }
          onBlur={ this.onInputBlur }
        />
        <Icon
          icon='event'
          className='slds-input__icon'
          style={ { cursor: 'pointer' } }
          onClick={ this.onDateIconClick }
        />
      </div>
    );
  }

  renderDropdown(dateValue, minDate, maxDate) {
    const datepickerClassNames = classnames(
      'slds-dropdown',
      `slds-dropdown--${this.props.menuAlign}`
    );
    return (
      this.state.opened ?
        <Datepicker
          className={ datepickerClassNames }
          selectedDate={ dateValue }
          autoFocus
          minDate={minDate}
          maxDate={maxDate}
          onSelect={ this.onDatepickerSelect }
          onBlur={ this.onDatepickerBlur }
          onClose={ this.onDatepickerClose }
        /> :
        <div />
    );
  }

  render() {
    const id = this.props.id || this.state.id;
    const {
      totalCols, cols, label, required, error,
      defaultValue, value, dateFormat, menuAlign,
      minDate, maxDate,
      ...props,
    } = this.props;
    const dateValue =
      typeof value !== 'undefined' ? value :
        typeof this.state.value !== 'undefined' ? this.state.value :
          defaultValue;
    const mvalue = moment(dateValue, this.getValueFormat());
    const inputValue =
      typeof this.state.inputValue !== 'undefined' ? this.state.inputValue :
        typeof dateValue !== 'undefined' && mvalue.isValid() ? mvalue.format(dateFormat) :
          undefined;
    const dropdown = this.renderDropdown(dateValue, minDate, maxDate);
    const formElemProps = { id, totalCols, cols, label, required, error, dropdown };
    delete props.dateFormat;
    delete props.defaultOpened;
    delete props.includeTime;
    delete props.onComplete;
    return (
      <FormElement
        formElementRef={ node => (this.node = node) }
        { ...formElemProps }
        style={ menuAlign === 'right' ? { position: 'absolute', right: null } : {} }
      >
        { this.renderInput({ id, inputValue, ...props }) }
      </FormElement>
    );
  }
}

const MENU_ALIGN = ['left', 'right'];

DateInput.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  required: PropTypes.bool,
  error: FormElement.propTypes.error,
  totalCols: PropTypes.number,
  cols: PropTypes.number,
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  defaultOpened: PropTypes.bool,
  dateFormat: PropTypes.string,
  includeTime: PropTypes.bool,
  onKeyDown: PropTypes.func,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onValueChange: PropTypes.func,
  onComplete: PropTypes.func,
  menuAlign: PropTypes.oneOf(MENU_ALIGN),
  minDate: PropTypes.string,
  maxDate: PropTypes.string,
};

DateInput.defaultProps = {
  dateFormat: 'L',
  menuAlign: 'left',
};

DateInput.isFormElement = true;
