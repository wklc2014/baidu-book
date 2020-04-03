/**
 * 排行
 */
import React, { Component, useEffect } from 'react';
import propTypes from 'prop-types';
import is from 'is_js';
import ModuleLoading from '../../components/module-loading/index.js';
import ModuleCard from '../../components/module-card/index.js';
import CommonEmpty from '../../components/common-empty/index.js';
import { PAGE_ROUTES } from '../../utils/enum.js';

class PageRankList extends Component {

  static defaultProps = {
    list: [],
  }

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getRankData();
  }

  render() {
    const { list, loading } = this.props;

    if (!loading && (is.not.array(list) || list.length === 0)) {
      return <CommonEmpty />;
    }

    return (
      <ModuleLoading loading={loading}>
        <section className="page-rank-container">
          {list.map((v, i) => {
            const key = i;
            const ModuleCardProps = {
              key,
              cardModel: {
                ...v,
                head: v.title,
                body: {
                  list: v.novelList,
                  tab: v.category,
                },
                foot: v.bottom,
              },
              config: {
                head: {
                  visible: !!v.title,
                  style: { color: '#917b5f' },
                },
                body: {
                  visible: !!v.novelList,
                  image: {
                    visible: true,
                    style: { width: 56 },
                  },
                  read: false,
                  author: false,
                  check: false,
                  tag: {
                    className: 'tag-line',
                    visible: true,
                  },
                  url: PAGE_ROUTES.book_detail,
                },
                foot: {
                  visible: !!v.bottom,
                  url: PAGE_ROUTES.rank_detail,
                }
              },
            }
            return <ModuleCard {...ModuleCardProps} />;
          })}
        </section>
      </ModuleLoading>
    )
  }
}

PageRankList.propTypes = {
  list: propTypes.array,
}

export default PageRankList;
