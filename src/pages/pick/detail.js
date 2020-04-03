/**
 * 排行详情
 */
import React, { Component, Fragment } from 'react';
import propTypes from 'prop-types';
import is from 'is_js';
import ModuleBook from '../../components/module-book/index.js';
import ModuleLoading from '../../components/module-loading/index.js';
import CommonEmpty from '../../components/common-empty/index.js';
import { PAGE_ROUTES } from '../../utils/enum.js';

class PageRankDetail extends Component {

  static defaultProps = {

  }

  componentDidMount() {
    this.props.getRankDetailData();
  }

  render() {
    const { list, loading } = this.props;

    if (!loading && (is.not.array(list) || list.length === 0)) {
      return <CommonEmpty />;
    }

    return (
      <ModuleLoading loading={loading}>
        <div className="page-cate-container">
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
    )
  }

}

PageRankDetail.propTypes = {

}

export default PageRankDetail;
