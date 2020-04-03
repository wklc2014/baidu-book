/**
 * 卡片
 */
import React from 'react';
import propTypes from 'prop-types';
import CardHead from './card-head.js';
import CardBody from './card-body.js';
import CardFoot from './card-Foot.js';

function ModuleCard(props) {

  const { config, cardModel } = props;
  const { head, foot, body } = cardModel;

  return (
    <section className="module-card">
      <CardHead config={config.head} data={head} />
      <CardBody config={config.body} data={body} />
      <CardFoot config={config.foot} data={foot} />
    </section>
  )
}

ModuleCard.propTypes = {
  config: propTypes.object,
  cardModel: propTypes.object,
}

ModuleCard.defaultProps = {
  config: {},
  cardModel: {},
}

export default ModuleCard;
