import React from 'react';
import {PropTypes} from 'prop-types';
import 'antd/dist/antd.css';
import {Avatar} from 'antd';
import {UserOutlined} from '@ant-design/icons';

export function Avatars({size, shape}) {
  return (
    <>
      <>
        <Avatar size="small" shape="circle" icon={<UserOutlined />} />
        <Avatar size="large" shape="square" icon={<UserOutlined />} />
      </>
      <>
        <Avatar shape={shape} size={size} icon={<UserOutlined />} />
      </>
    </>
    );
  };

Avatars.propTypes = {
  /**
   * Define the size and the shape
   */
  size: PropTypes.oneOf(['small', 'large']),
  shape: PropTypes.oneOf(['square', 'circle']),
};

Avatars.defaultProps = {
  size: 'small',
  shape: 'circle',
};

export default Avatars