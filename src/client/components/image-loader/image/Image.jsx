import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';

// Style
import styles from './Image.scss';

class Image extends PureComponent {
  constructor(props) {
    super(props);
    this.onDrop = this.onDrop.bind(this);
  }

  onDrop(acceptedFiles) {
    const { setImage } = this.props;
    const image = acceptedFiles[0];
    setImage(image);
  }

  render() {
    return (
      <div className={styles.Image}>
        <Dropzone onDrop={this.onDrop} />
      </div>
    );
  }
}

Image.propTypes = {
  setImage: PropTypes.func.isRequired,
};

export default Image;
