import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class AddControls extends PureComponent {
  constructor(props) {
    // Super
    super(props);
  }

  render() {
    const { cancelImage, addImage } = this.props;
    return (
      <div>
        <div className="row">
          <div className="columns small-12 medium-6">
            <button className="button secondary" onClick={cancelImage}>Cancel</button>
          </div>
          <div className="columns small-12 medium-6">
            <button className="button" onClick={addImage}>Add</button>
          </div>
        </div>
      </div>
    );
  }
}

AddControls.propTypes = {
  addImage: PropTypes.func.isRequired,
  cancelImage: PropTypes.func.isRequired,
};

export default AddControls;
