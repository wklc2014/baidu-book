/**
 * 书标签
 */
import React from 'react';
import propTypes from 'prop-types';
import classnames from 'classnames';
import is from 'is_js';
import withRender from '../common-with/with-render.js';

function DetailTag(props) {

  const { data, className, style } = props;
  const cls = classnames({
    "tag": true,
    [className]: !!className,
  })

  if (is.array(data)) {
    return (
      <div className={`${cls} uk-flex uk-flex-wrap`} style={style}>
        {data.map((v, i) => {
          const key = i;
          return <span key={key}>{v}</span>
        })}
      </div>
    )
  }

  return <div className={cls} style={style}>{data}</div>
}

export default withRender(DetailTag);
