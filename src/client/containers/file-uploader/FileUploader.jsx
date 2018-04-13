import React, { PureComponent } from 'react';
import crypto from 'crypto';

// Style
import styles from './FileUploader.scss';

// Component
import ImageLoader from '../../components/image-loader';
import ImageList from '../../components/image-list';
import UploadingControls from '../../components/uploading-controls';

class FileUploaderContainer extends PureComponent {
  constructor(props) {
    // Super
    super(props);

    // Bindings
    this.addImage = this.addImage.bind(this);
    this.removeImage = this.removeImage.bind(this);
    this.uploadImages = this.uploadImages.bind(this);

    // Initial State
    this.state = {
      imageList: [], // eslint-disable-line react/no-unused-state
    };
  }

  addImage({ image, name }) {
    const id = crypto
      .createHash('md5')
      .update(name)
      .digest('hex');
    this.setState((prevState) => {
      const { imageList } = prevState;
      const imageObject = {
        file: image,
        name,
        id,
      };
      const newImageList = [...imageList, imageObject];
      return {
        imageList: newImageList,
      };
    });
  }

  removeImage(id) {
    this.setState((prevState) => {
      const { imageList } = prevState;
      const imageListFiltered = imageList.filter(image => image.id !== id);
      const newImageList = imageListFiltered;
      return {
        imageList: newImageList,
      };
    });
  }

  uploadImages() {
    const { imageList } = this.state;
    const formData = new FormData();
    imageList.forEach((image) => {
      formData.append('images', image.file, image.name);
    });

    fetch('./uploadUserImage', {
      method: 'POST',
      body: formData,
    });
  }

  render() {
    const { imageList } = this.state;
    return (
      <div className="row">
        <div className="columns small-12">
          <div className={styles.FileUploader}>
            <ImageLoader addImage={this.addImage} />
            <ImageList imageList={imageList} removeImage={this.removeImage} />
            <UploadingControls uploadImages={this.uploadImages} />
          </div>
        </div>
      </div>
    );
  }
}

export default FileUploaderContainer;
