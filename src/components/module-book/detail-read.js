/**
 * 书阅读量
 */
import React from 'react';
import propTypes from 'prop-types';
import classnames from 'classnames';
import withRender from '../common-with/with-render.js';

function DetailRead(props) {

  const { data, className, style } = props;
  const cls = classnames({
    "read": true,
    [className]: !!className,
  })

  return (
    <div className={cls} style={style}>
      {data / 10000} 万人在阅读
    </div>
  )
}

export default withRender(DetailRead);
