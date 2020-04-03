/**
 * 卡片头
 */
import React from 'react';
import propTypes from 'prop-types';
import classnames from 'classnames';
import withRender from '../common-with/with-render.js';

function CardHead(props) {

  const { data, className, style } = props;
  const cls = classnames({
    "module-card-head": true,
    [className]: !!className,
  })

  return (
    <article className={cls} style={style}>
      {data}
    </article>
  )
}

export default withRender(CardHead);
