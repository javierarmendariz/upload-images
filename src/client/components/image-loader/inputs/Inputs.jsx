import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Inputs extends PureComponent {
  constructor(props) {
    // Super
    super(props);

    // Bindings
    this.setName = this.setName.bind(this);

    // Initial State
    this.state = {
      name: '',
    };
  }

  componentWillReceiveProps(nextProps) {
    const { name } = nextProps;
    this.setState({
      name,
    });
  }

  setName(event) {
    const { target: { value } } = event;
    this.setState({
      name: value,
    });
  }

  render() {
    const { name } = this.state;
    const { inputRef } = this.props;
    return (
      <div>
        <label htmlFor="image-name">
          Name
          <input
            type="text"
            placeholder="Image name"
            ref={inputRef}
            value={name}
            onChange={this.setName}
            id="image-name"
          />
        </label>
      </div>
    );
  }
}

Inputs.propTypes = {
  name: PropTypes.string.isRequired,
  inputRef: PropTypes.func.isRequired,
};

export default Inputs;
