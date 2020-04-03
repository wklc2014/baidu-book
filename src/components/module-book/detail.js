/**
 * 书 - 详情信息
 * 书名
 * 书阅读量
 * 书标签
 * 书作者
 * 书描述
 */
import React from 'react';
import propTypes from 'prop-types';
import classnames from 'classnames';
import withRender from '../common-with/with-render.js';

function Detail(props) {

  const { children, className, style } = props;
  const cls = classnames({
    "book-detail": true,
    [className]: !!className,
  })

  return <div className={cls} style={style}>{children}</div>
}

export default withRender(Detail);
