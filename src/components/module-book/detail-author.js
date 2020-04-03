/**
 * 书作者
 */
import React from 'react';
import propTypes from 'prop-types';
import classnames from 'classnames';
import withRender from '../common-with/with-render.js';

function DetailAuthor(props) {

  const { data, className, style } = props;
  const cls = classnames({
    "author": true,
    [className]: !!className,
  })

  return <div className={cls} style={style}>{data}</div>
}

export default withRender(DetailAuthor);
