/**
 * 分类框
 */
import React from 'react';
import propTypes from 'prop-types';
import is from 'is_js';
import querystring from 'querystring';
import { Link } from 'react-router-dom';
import { PAGE_ROUTES } from '../../utils/enum.js';

function CateCard(props) {

  const { cateData } = props;
  const { title, cateList, queryParams, appendParams } = cateData;
  if (is.not.array(cateList)) return null;

  return (
    <section className="cate-card cate-card">
      <div className="cate-card-title">{title}</div>
      <div className="cate-card-body uk-flex uk-flex-wrap">
        {cateList.map((v, i) => {
          const key = i;
          const str = getUrlString({ text: v.text, queryParams, appendParams });
          const url = `${PAGE_ROUTES.cate_detail}?${str}`;
          const LinkProps = {
            key,
            className: "cate-card-body-item",
            to: url,
          }
          return <Link {...LinkProps}>{v.text}</Link>;
        })}
      </div>
    </section>
  )
}

CateCard.propTypes = {
  cateData: propTypes.object,
}

CateCard.defaultProps = {
  cateData: {},
}

export default CateCard;

// 组装url查询字符串
function getUrlString(params = {}) {
  const { text, queryParams, appendParams } = params;
  const urlQuery = {};
  if (is.array(queryParams)) {
    queryParams.forEach(v => {
      if (is.object(v)) {
        Object.assign(urlQuery, v);
      }
    })
  }
  if (is.array(appendParams)) {
    appendParams.forEach(v => {
      if (is.object(v)) {
        Object.assign(urlQuery, { [v.type]: text });
      }
    })
  }
  urlQuery.query = text;
  return querystring.stringify(urlQuery);
}
