import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// Style
import style from './ImageList.scss';

class ImageList extends PureComponent {
  constructor(props) {
    // Super
    super(props);
  }

  render() {
    const { imageList, removeImage } = this.props;
    return (
      <div className={style.ImageList}>
        <div className="row">
          <div className="columns small-12">
            <div>
              <table>
                <thead>
                  <tr>
                    <th width="200">Thumbnail</th>
                    <th>Name</th>
                    <th width="150">Size</th>
                    <th width="150">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {imageList.map(imageObject => (
                    <tr key={`${imageObject.file.name}${imageObject.id}`}>
                      <td>
                        <img
                          src={URL.createObjectURL(imageObject.file)}
                          alt={imageObject.file.name}
                          className={style.thumbnail}
                        />
                      </td>
                      <td>
                        {imageObject.name}
                      </td>
                      <td>{imageObject.file.size} Bits</td>
                      <td>
                        <button
                          className="button alert"
                          onClick={() => removeImage(imageObject.id)}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ImageList.propTypes = {
  imageList: PropTypes.arrayOf(PropTypes.shape({
    file: PropTypes.instanceOf(File), // eslint-disable-line no-undef
    name: PropTypes.string,
    id: PropTypes.string,
  })).isRequired,
  removeImage: PropTypes.func.isRequired,
};

export default ImageList;
