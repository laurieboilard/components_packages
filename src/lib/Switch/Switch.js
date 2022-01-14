import React from 'react';
import {PropTypes} from 'prop-types';
import 'antd/dist/antd.css';
import './Switch.module.css';
import {Switch} from 'antd';


export function Switchs({size}) {
  return (
    <>
    <br />
    <Switch size={size} defaultChecked />
    <br/>
    <Switch size="large" defaultChecked />
    </>
    );
  };

Switchs.propTypes = {
  /**
   * Define the size 
   */
   size: PropTypes.oneOf(['small', 'large']),
};

Switchs.defaultProps = {
  size: 'small',
};

export default Switchs