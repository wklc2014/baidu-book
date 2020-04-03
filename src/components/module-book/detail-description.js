/**
 * 描述
 */
import React from 'react';
import propTypes from 'prop-types';
import classnames from 'classnames';
import withRender from '../common-with/with-render.js';

function DetailDescription(props) {

  const { data, className, style } = props;
  const cls = classnames({
    "description": true,
    "uk-text-truncate": true,
    [className]: !!className,
  })

  return <div className={cls} style={style}>{data}</div>
}

export default withRender(DetailDescription);
