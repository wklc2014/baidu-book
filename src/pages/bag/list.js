/**
 * 排行详情
 */
import React, { Component, Fragment } from 'react';
import propTypes from 'prop-types';
import is from 'is_js';
import ModuleBook from '../../components/module-book/index.js';
import ModuleLoading from '../../components/module-loading/index.js';
import BagEdit from '../../components/page-bag/bag-edit.js';
import CommonEmpty from '../../components/common-empty/index.js';
import CommonIcon from '../../components/common-icon/index.js';
import { PAGE_ROUTES } from '../../utils/enum.js';

class PageBagList extends Component {

  static defaultProps = {

  }

  constructor(props) {
    super(props);
    this.state = {
      status: false,
      checkList: [],
    }
    this.handleBagDelete = this.handleBagDelete.bind(this);
    this.handleBagStatus = this.handleBagStatus.bind(this);
    this.handleBagChecked = this.handleBagChecked.bind(this);
  }

  componentDidMount() {
    this.props.getBagData();
  }

  handleBagDelete() {

  }

  handleBagChecked(bookId) {
    const { checkList } = this.state;
    let newCheckList = [];
    if (is.inArray(bookId, checkList)) {
      newCheckList = checkList.filter(v => v !== bookId);
    } else {
      newCheckList = [...checkList, bookId];
    }
    this.setState({ checkList: newCheckList });
  }

  handleBagStatus() {
    const { status } = this.state;
    this.setState({ status: !status });
  }

  render() {
    const { list, loading } = this.props;
    const { status, checkList } = this.state;

    if (!loading && (is.not.array(list) || list.length === 0)) {
      return <CommonEmpty />;
    }

    return (
      <Fragment>
        <div className="page-bag-container">
          <BagEdit
            status={status}
            amount={list.length}
            onChange={this.handleBagStatus}
            onDelete={this.handleBagDelete}
          />
          <ModuleLoading loading={loading}>
            <div className="bag-list">
              {list.map((book, index) => {
                const key = book.bookId || index;
                const ModuleBookProps = {
                  key,
                  bookModel: {
                    ...book,
                    description: '还没有阅读记录哦~',
                    selected: is.inArray(book.bookId, checkList),
                  },
                  config: {
                    read: false,
                    author: false,
                    tag: {
                      className: 'tag-line',
                      visible: true,
                    },
                    check: {
                      visible: status,
                    },
                  },
                  onChecked: () => {
                    this.handleBagChecked(book.bookId);
                  },
                }
                return <ModuleBook {...ModuleBookProps} />;
              })}
            </div>
          </ModuleLoading>
        </div>
      </Fragment>
    )
  }

}

PageBagList.propTypes = {

}

export default PageBagList;
