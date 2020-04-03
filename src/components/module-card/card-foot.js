/**
 * 卡片底部
 */
import React from 'react';
import propTypes from 'prop-types';
import classnames from 'classnames';
import querystring from 'querystring';
import { Link, useHistory } from 'react-router-dom';
import is from 'is_js';
import withRender from '../common-with/with-render.js';

function CardFoot(props) {

  const { data, className, style, url } = props;
  const history = useHistory();
  const cls = classnames({
    "module-card-foot": true,
    [className]: !!className,
  });
  function gotoDetail() {
    const urlString = getUrlString(data);
    const _url = `${url}?${urlString}`;
    history.push(_url);
  }

  return (
    <article className={cls} style={style} onClick={gotoDetail}>
      {data.title}
    </article>
  )
}

export default withRender(CardFoot);

// 组装url查询字符串
function getUrlString(params = {}) {
  const { query, queryParams } = params;
  const urlQuery = {};
  if (is.array(queryParams)) {
    queryParams.forEach(v => {
      if (is.object(v)) {
        Object.assign(urlQuery, v);
      }
    })
  }
  urlQuery.query = query;
  return querystring.stringify(urlQuery);
}
