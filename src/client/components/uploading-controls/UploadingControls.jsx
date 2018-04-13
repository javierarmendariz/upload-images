import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class UploadingControls extends PureComponent {
  constructor(props) {
    // Super
    super(props);
  }
  render() {
    const { uploadImages } = this.props;
    return (
      <div>
        <div className="row">
          <div className="columns small-12">
            <div>
              <button
                className="button success"
                onClick={uploadImages}
              >
                Upload
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

UploadingControls.propTypes = {
  uploadImages: PropTypes.func.isRequired,
};

export default UploadingControls;
