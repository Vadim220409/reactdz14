import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ImageGalleryItem extends Component {
    render() {
      const { webformatURL, largeImageURL, onClick } = this.props;
  
      return (
        <li className="gallery-item">
          <img
            src={webformatURL}
            alt=""
            onClick={() => onClick(largeImageURL)}
          />
        </li>
      );
    }
}
  
ImageGalleryItem.propTypes = {
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};
  
export default ImageGalleryItem;