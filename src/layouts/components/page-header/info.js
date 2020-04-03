/**
 * 头部右侧信息区
 */
import React, { Fragment } from 'react';
import { useLocation, Link } from "react-router-dom";
import propTypes from 'prop-types';
import { PAGE_ROUTES } from '../../../utils/enum.js';
import CommonIcon from '../../../components/common-icon/index.js';

function HeaderInfo(props) {

  const location = useLocation();
  const { pathname } = location;

  switch (pathname) {
    case PAGE_ROUTES.bag:
    case PAGE_ROUTES.pick:
    case PAGE_ROUTES.rank:
    case PAGE_ROUTES.cate:
      return (
        <Fragment>
          <div className="header-search">
            <Link to={PAGE_ROUTES.search}>
              <CommonIcon type="search" />
            </Link>
          </div>
          <div className="header-item">
            <CommonIcon type="user" />
          </div>
        </Fragment>
      );
    case PAGE_ROUTES.cate_detail:
    case PAGE_ROUTES.rank_detail:
    case PAGE_ROUTES.pick_detail:
    case PAGE_ROUTES.search_result:
      return <div className="header-item"><Link to={PAGE_ROUTES.pick}>精选</Link></div>;
  }

  return <div className="header-item"></div>
}

HeaderInfo.propTypes = {
}

HeaderInfo.defaultProps = {
}

export default HeaderInfo;
