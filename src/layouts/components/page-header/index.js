/**
 * 顶部
 */
import React, { Fragment } from 'react';
import propTypes from 'prop-types';
import { Route, useHistory, useLocation, useParams } from "react-router-dom";
import HeaderInfo from './info.js';
import HeaderBack from './back.js';
import HeaderTitle from './title.js';

function PageHeader(props) {

  return (
    <Fragment>
      <section className="page-header-container">
        <HeaderBack />
        <HeaderTitle />
        <HeaderInfo />
      </section>
      {props.children}
    </Fragment>
  );
}

PageHeader.propTypes = {
}

PageHeader.defaultProps = {
}

export default PageHeader;
