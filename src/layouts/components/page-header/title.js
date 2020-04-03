/**
 * 头部标题
 */
import React from 'react';
import propTypes from 'prop-types';
import querystring from 'querystring';
import { useLocation } from "react-router-dom";
import PAGE_TITLE, { PAGE_ROUTES } from '../../../utils/enum.js';

function HeaderTitle(props) {

  const location = useLocation();
  const { pathname } = location;

  let title = '';
  const queryObj = querystring.parse(location.search.substring(1))

  switch(pathname) {
    case PAGE_ROUTES.cate_detail:
    case PAGE_ROUTES.rank_detail:
    case PAGE_ROUTES.pick_detail:
      title = queryObj.query;
      break;
    case PAGE_ROUTES.search:
      title = '搜索';
      break;
    case PAGE_ROUTES.search_result:
      title = '搜索结果';
      break;
    default:
      title = PAGE_TITLE;
  }

  return <div className="header-text">{title}</div>
}

HeaderTitle.propTypes = {

}

HeaderTitle.defaultProps = {

}

export default HeaderTitle;
