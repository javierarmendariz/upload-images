import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// Style
import styles from './ImageLoader.scss';

// Components
import Image from './image';
import Inputs from './inputs';
import AddControls from './add-controls';

class ImageLoader extends PureComponent {
  constructor(props) {
    // Super
    super(props);

    // Bindings
    this.setImage = this.setImage.bind(this);
    this.addImage = this.addImage.bind(this);
    this.cancelImage = this.cancelImage.bind(this);
    this.updatingName = this.updatingName.bind(this);

    // Initial State
    this.state = {
      image: {},
      name: null,
    };
  }

  setImage(image) {
    this.setState({
      image,
    });
  }

  addImage() {
    const name = this.inputElement.value;
    const { addImage: addImageContainer } = this.props;
    const { image } = this.state;
    addImageContainer({
      image,
      name,
    });
  }

  updatingName(name) {
    this.setState({
      name,
    });
  }

  cancelImage() {
    this.setState({
      image: {
        name: '',
      },
    });
  }

  render() {
    const { image, name } = this.state;
    const imageName = name || image.name || '';
    return (
      <div>
        <div className="row">
          <div className="columns small-12">
            <div className={styles.ImageLoader}>
              <div className="row">
                <div className="columns small-6">
                  <Image setImage={this.setImage} />
                </div>
                <div className="columns small-6">
                  <div>
                    <div className="row">
                      <div className="columns small-12">
                        <Inputs
                          name={imageName}
                          inputRef={(el) => { this.inputElement = el; }}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="columns small-12">
                        <AddControls addImage={this.addImage} cancelImage={this.cancelImage} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ImageLoader.propTypes = {
  addImage: PropTypes.func.isRequired,
};

export default ImageLoader;
