import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from './ImageGalleryItem';

const ImageGallery = ({ images, onClick }) => {
    return (
      <ul className="gallery">
        {images.map(({ id, webformatURL, largeImageURL }) => (
          <ImageGalleryItem
            key={id} 
            webformatURL={webformatURL} 
            largeImageURL={largeImageURL} 
            onClick={onClick} 
          />
        ))}
      </ul>
    );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape ({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired
    })
  ).isRequired,
  onClick: PropTypes.func.isRequired
}

export default ImageGallery