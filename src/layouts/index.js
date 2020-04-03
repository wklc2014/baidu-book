/**
 * 主体布局组件
 */
import React, { Component } from 'react';
import { Route } from "react-router-dom";
import { Provider } from 'react-redux'
import { HashRouter as Router } from "react-router-dom";
import Scrollbar from 'react-smooth-scrollbar';
import get from 'lodash/get';
import store from '../models/stores/index.js';
import MouleTab from '../components/module-tab/index.js';

import PageHeader from './components/page-header/index.js';

import PageBagList from '../pages/bag/list-container.js';
import PageSearch from '../pages/search/index-container.js';
import PageSearchInput from '../pages/search/input-container.js';
import PageSearchResult from '../pages/search/result-container.js';
import PageCateList from '../pages/cate/list-container.js';
import PageCateDetail from '../pages/cate/detail-container.js';
import PageRankList from '../pages/rank/list-container.js';
import PageRankDetail from '../pages/rank/detail-container.js';
import PagePickList from '../pages/pick/list-container.js';
import PagePickDetail from '../pages/pick/detail-container.js';
import PageBookDetail from '../pages/book/detail.js';
import { PAGE_ROUTES, PAGE_TABS } from '../utils/enum.js';

const App = (props) => {
  const pathname = get(props, 'location.pathname');
  window.scrollTo(0, 0);

  switch (pathname) {
    case PAGE_ROUTES.bag:
    case PAGE_ROUTES.pick:
    case PAGE_ROUTES.rank:
    case PAGE_ROUTES.cate:
      return (
        <PageHeader>
          <MouleTab tabs={PAGE_TABS} />
          <Route path={PAGE_ROUTES.bag} component={PageBagList} />
          <Route path={PAGE_ROUTES.pick} component={PagePickList} />
          <Route path={PAGE_ROUTES.rank} component={PageRankList} />
          <Route exact path={PAGE_ROUTES.cate} component={PageCateList} />
        </PageHeader>
      );
    case PAGE_ROUTES.cate_detail:
    case PAGE_ROUTES.rank_detail:
    case PAGE_ROUTES.pick_detail:
    case PAGE_ROUTES.search:
    case PAGE_ROUTES.search_result:
      return (
        <PageHeader>
          <Route exact path={PAGE_ROUTES.cate_detail} component={PageCateDetail} />
          <Route exact path={PAGE_ROUTES.rank_detail} component={PageRankDetail} />
          <Route exact path={PAGE_ROUTES.pick_detail} component={PagePickDetail} />
          <Route exact path={PAGE_ROUTES.search} component={PageSearch} />
          <Route exact path={PAGE_ROUTES.search_result} component={PageSearchResult} />
        </PageHeader>
      );
  }
  return (
    <div>
      <Route path={PAGE_ROUTES.book_detail} component={PageBookDetail} />
      <Route path={PAGE_ROUTES.search_input} component={PageSearchInput} />
    </div>
  )
}

const MainLayout = props => (
  <Provider store={store}>
    <Router>
      <Route path="/" component={App} />
    </Router>
  </Provider>
)

export default MainLayout;
