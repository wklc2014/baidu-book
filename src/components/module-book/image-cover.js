/**
 * 书缩略图
 */
import React from 'react';
import propTypes from 'prop-types';
import classnames from 'classnames';
import withRender from '../common-with/with-render.js';

function ImageCover(props) {

  const { data, className, style } = props;
  const cls = classnames({
    "cover": true,
    [className]: !!className,
  })

  return <div className={cls} style={{ ...style, backgroundImage: `url(${data})` }} />
}

export default withRender(ImageCover);
