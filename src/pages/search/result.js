/**
 * 搜索
 */
import React, { Component } from 'react';
import propTypes from 'prop-types';
import is from 'is_js';
import querystring from 'querystring';
import { Link } from 'react-router-dom';
import CommonEmpty from '../../components/common-empty/index.js';
import SearchKeyword from '../../components/page-search/search-keyword.js';
import ModuleBook from '../../components/module-book/index.js';
import ModuleLoading from '../../components/module-loading/index.js';
import { PAGE_ROUTES } from '../../utils/enum.js';

class PageSearchResult extends Component {

  static defaultProps = {

  }

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { location = {} } = this.props;
    const queryObj = querystring.parse(location.search.substring(1));
    this.props.updateKeyWords(queryObj.word);
    this.props.getSearchResultData();
  }

  render() {
    const { list, loading, keywords } = this.props;

    if (!loading && (is.not.array(list) || list.length === 0)) {
      return <CommonEmpty />;
    }

    return (
      <section className="page-search-container">
        <SearchKeyword text={keywords} />
        <ModuleLoading loading={loading}>
          <div className="search-result">
            {list.map((book, index) => {
              const key = book.bookId || index;
              const ModuleBookProps = {
                key,
                bookModel: {
                  ...book,
                  author: `作者：${book.author}`,
                  description: `摘要：${book.description}`,
                },
                config: {
                  title: {
                    className: 'sub-title',
                    visible: true,
                  },
                  check: false,
                },
                onBookUrl: () => {
                  this.props.history.push(PAGE_ROUTES.book_detail);
                }
              }
              return <ModuleBook {...ModuleBookProps} />;
            })}
          </div>
        </ModuleLoading>
      </section>
    )
  }

}

PageSearchResult.propTypes = {

}

export default PageSearchResult;
