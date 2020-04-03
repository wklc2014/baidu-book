/**
 * 书 - 封面相关
 * 书缩略图
 * 书是否加精
 */
import React from 'react';
import propTypes from 'prop-types';
import classnames from 'classnames';
import withRender from '../common-with/with-render.js';

function Image(props) {

  const { className, style, children } = props;
  const cls = classnames({
    "book-image": true,
    [className]: !!className,
  })

  return <div className={cls} style={style}>{children}</div>
}

export default withRender(Image);
