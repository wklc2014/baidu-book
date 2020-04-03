/**
 * 搜索
 */
import React, { Component } from 'react';
import propTypes from 'prop-types';
import is from 'is_js';
import { Link } from 'react-router-dom';
import CommonEmpty from '../../components/common-empty/index.js';
import ModuleLoading from '../../components/module-loading/index.js';
import SearchKeyword from '../../components/page-search/search-keyword.js';
import { PAGE_ROUTES } from '../../utils/enum.js';

class PageSearch extends Component {

  static defaultProps = {

  }

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getSearchData();
  }

  render() {
    const { list, loading } = this.props;

    if (!loading && (is.not.array(list) || list.length === 0)) {
      return <CommonEmpty />;
    }

    return (
      <section className="page-search-container">
        <SearchKeyword />
        <ModuleLoading loading={loading} tip="加载中">
          <div className="search-hotwords">
            <div className="search-hotwords-title">
              <span className="title">热门搜索词</span>
              <span className="change">换一换</span>
            </div>
            <div className="search-hotwords-body">
              {list.map((v, i) => {
                const key = i;
                const url = `${PAGE_ROUTES.search_result}?query=搜索结果&word=${v}`;
                const LinkProps = {
                  key,
                  to: url,
                  className: 'hot-body-item',
                }
                return <Link {...LinkProps}>{v}</Link>;
              })}
            </div>
          </div>
        </ModuleLoading>
      </section>
    )
  }
}

PageSearch.propTypes = {

}

export default PageSearch;
