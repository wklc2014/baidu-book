/**
 * 书是否加精
 */
import React from 'react';
import propTypes from 'prop-types';
import classnames from 'classnames';
import withRender from '../common-with/with-render.js';

function ImageMask(props) {

  const { data, className, style } = props;
  const cls = classnames({
    "mask": true,
    [className]: !!className,
  })

  return <div className={cls} style={style} />
}

export default withRender(ImageMask);
