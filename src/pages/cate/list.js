/**
 * 分类
 */
import React, { Component, useEffect } from 'react';
import propTypes from 'prop-types';
import is from 'is_js';
import CateCard from '../../components/page-cate/cate-card.js'
import ModuleLoading from '../../components/module-loading/index.js';
import CommonEmpty from '../../components/common-empty/index.js';

class PageCateList extends Component {

  static defaultProps = {
    list: [],
  }

  componentDidMount() {
    this.props.getCateData();
  }

  render() {
    const { list, loading } = this.props;

    if (!loading && (is.not.array(list) || list.length === 0)) {
      return <CommonEmpty />;
    }

    return (
      <ModuleLoading loading={loading}>
        <section className="page-cate-container module-container">
          {list.map((v, i) => {
            const key = i;
            const CateCardProps = {
              key,
              cateData: v,
            }
            return <CateCard {...CateCardProps} />;
          })}
        </section>
      </ModuleLoading>
    )
  }
}

PageCateList.propTypes = {
  list: propTypes.array,
}

export default PageCateList;
