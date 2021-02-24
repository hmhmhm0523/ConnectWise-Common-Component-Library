import React from 'react';
import PropTypes from 'prop-types';
import './accordion.scss';

/**
 * Primary UI component for user interaction
 */
export const Accordion = ({ collapsed, statusColor, title, children, ...props }) => {

  const mode = collapsed ? 'accordion--collapsed' : 'accordion--expanded';
  function handleClick(e) {
    e.preventDefault();
    
    e.target.parentNode.parentNode.classList.toggle("accordion--collapsed");
  }
  return (
    <div
      className= {'accordion ' + mode}
      style={statusColor && { statusColor }}
      {...props}
    >
      <div className='accordion-header' style={{borderLeftColor: statusColor}}>
        <input type='checkbox'></input>
        <h3>{title}</h3>
        <h3>{title}</h3>
        <span className='spacer'></span>
        <a onClick={handleClick}></a>
      </div>
      <div className='accordion-content'>{children}</div>
    </div>
  );
};



Accordion.propTypes = {
  /**
   * Is this panel collapsed?
   */
  collapsed: PropTypes.bool,
  /**
   * What status color to use
   */
  statusColor: PropTypes.string,
  /**
   * Accordion title
   */
  title: PropTypes.string.isRequired,
  /**
 * Accordion contents
 */
  children: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Accordion.defaultProps = {
  collapsed: false,
  statusColor: '#E6E6E6',
  title: 'Accordion Row Title',
  children: 'Detail Panel',
  onClick: undefined,
};
