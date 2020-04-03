/**
 * 书选中状态
 */
import React from 'react';
import propTypes from 'prop-types';
import classnames from 'classnames';
import withRender from '../common-with/with-render.js';

function Check(props) {

  const { children, className, style } = props;
  const cls = classnames({
    "book-check": true,
    [className]: !!className,
  })

  return (
    <div className={cls} style={style}>
      {children}
    </div>
  )
}

export default withRender(Check);
