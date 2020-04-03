/**
 * 分类详情
 */
import React, { Component, Fragment } from 'react';
import propTypes from 'prop-types';
import is from 'is_js';
import MouleTab from '../../components/module-tab/index.js';
import ModuleBook from '../../components/module-book/index.js';
import ModuleLoading from '../../components/module-loading/index.js';
import CommonEmpty from '../../components/common-empty/index.js';
import { PAGE_ROUTES, CATE_TABS } from '../../utils/enum.js';

class PageCateDetail extends Component {

  static defaultProps = {

  }

  constructor(props) {
    super(props);
    this.state = {
      status: '全部',
    }
    this.handleChangeTab = this.handleChangeTab.bind(this);
  }

  componentDidMount() {
    this.props.getCateDetail();
  }

  handleChangeTab(tab) {
    this.setState({ status: tab.name });
  }

  render() {
    const { list, loading } = this.props;
    const { status } = this.state;
    const filterList = list.filter(v => {
      return status === '全部' || (status !== '全部' && v.status === status);
    })

    if (!loading && (is.not.array(filterList) || filterList.length === 0)) {
      return <CommonEmpty />;
    }

    return (
      <Fragment>
        <MouleTab tabs={CATE_TABS} active={status} onTab={this.handleChangeTab} />
        <ModuleLoading loading={loading} tip="页面加载中">
          <div className="page-cate-container">
            {filterList.map((book, index) => {
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
      </Fragment>
    )
  }

}

PageCateDetail.propTypes = {

}

export default PageCateDetail;
