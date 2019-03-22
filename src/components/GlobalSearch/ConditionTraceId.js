import PropTypes from 'prop-types';
import React from 'react';

const maxCharacters = 16;

const propTypes = {
  value: PropTypes.string.isRequired,
  onConditionChange: PropTypes.func.isRequired,
  setNextFocusRef: PropTypes.func.isRequired,
  onFocus: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  isFocused: PropTypes.bool.isRequired,
};

class ConditionTraceId extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = undefined;
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleKeyDown(event) {
    if (event.key === 'Enter') {
      this.inputRef.blur();
    }
  }

  render() {
    const {
      value,
      onConditionChange,
      setNextFocusRef,
      onFocus,
      onBlur,
      isFocused,
    } = this.props;

    return (
      <div className="condition-trace-id">
        <input
          ref={(ref) => {
            setNextFocusRef(ref);
            this.inputRef = ref;
          }}
          type="text"
          value={value}
          onChange={(event) => { onConditionChange(event.target.value); }}
          className="condition-trace-id__input"
          style={{
            width: isFocused
              ? `${8 * maxCharacters + 16}px`
              : `${(8 * value.length) + 16}px`,
          }}
          onFocus={onFocus}
          onBlur={onBlur}
          onKeyDown={this.handleKeyDown}
        />
      </div>
    );
  }
}

ConditionTraceId.propTypes = propTypes;

export default ConditionTraceId;
