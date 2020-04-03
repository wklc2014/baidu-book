/**
 * 书名
 */
import React from 'react';
import propTypes from 'prop-types';
import classnames from 'classnames';
import withRender from '../common-with/with-render.js';

function DetailTitle(props) {

  const { data, className, style } = props;
  const cls = classnames({
    "title": true,
    [className]: !!className,
  })

  return <div className={cls} style={style}>{data}</div>
}

export default withRender(DetailTitle);
