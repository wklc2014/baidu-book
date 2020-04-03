/**
 * 精选
 */
import React, { Component, useEffect } from 'react';
import propTypes from 'prop-types';
import is from 'is_js';
import ModuleLoading from '../../components/module-loading/index.js';
import CommonEmpty from '../../components/common-empty/index.js';
import PickHot from '../../components/page-pick/pick-hot.js';
import PickNav from '../../components/page-pick/pick-nav.js';
import PickCard from '../../components/page-pick/pick-card.js'

class PagePickList extends Component {

  static defaultProps = {
    list: [],
  }

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getChoiceData();
  }

  render() {
    const { list, loading } = this.props;

    if (!loading && (is.not.array(list) || list.length === 0)) {
      return <CommonEmpty />;
    }

    const hotData = list.find(v => v.type === 'hotRead');
    const navData = list.find(v => v.type === 'navigation');
    const cardData = list.filter(v => v.type !== 'hotRead' && v.type !== 'navigation');

    return (
      <ModuleLoading loading={loading}>
        <section className="page-pick-container">
          <PickHot model={hotData} />
          <PickNav model={navData} />
          <PickCard model={cardData} />
        </section>
      </ModuleLoading>
    )
  }
}

PagePickList.propTypes = {
  list: propTypes.array,
}

export default PagePickList;
