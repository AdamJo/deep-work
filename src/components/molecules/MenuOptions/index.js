import React, { PropTypes } from 'react';

const MenuOptions = ({ isOpen }) => {
  const open = isOpen ? 0 : -500;
  const style = {
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    width: '180px',
    transform: `translateX(${open}px)`,
    transition: `transform .5s`,
  };
  return (
    <div style={style}>
      Settings
    </div>
  );
};
MenuOptions.propTypes = {};

MenuOptions.defaultProps = {};

export default MenuOptions;
