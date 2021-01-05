import React from 'react';
import PropTypes from 'prop-types';
import './avatar.css';

export const Avatar = ({ src, size, loading, ...props }) => {
  return (
    <div className="storybook-avatar" {...props}>
      { loading ?
        'Carregando...' :
        <img src={src}
          alt="Avatar"
          className={`storybook-avatar--${size}`}
        />
      }
    </div>
  );
}

Avatar.propTypes = {
  /**
   * path of image (jpeg, png, svg)
   */
  src: PropTypes.string.isRequired,
  /**
   * Loading value (true|false)
   */
  loading: PropTypes.bool,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['tiny', 'small', 'medium', 'large']),
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Avatar.defaultProps = {
  size: 'medium',
  loading: false,
  onClick: undefined,
};
