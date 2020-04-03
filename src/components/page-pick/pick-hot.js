/**
 * 热门阅读
 */
import React from 'react';
import propTypes from 'prop-types';
import is from 'is_js';
import { Link } from 'react-router-dom';
import { PAGE_ROUTES } from '../../utils/enum.js';

function PickHot(props) {

  const { model } = props;
  const { novelList } = model;
  if (is.not.array(novelList)) return null;

  return (
    <div className="pick-hot">
      {novelList.map((v, i) => {
        const key = v.id || i;
        return (
          <Link  key={key} to={PAGE_ROUTES.book_detail} className="item">
            <img src={v.cover} alt="" />
          </Link>
        );
      })}
    </div>
  )
}

PickHot.propTypes = {
  model: propTypes.object,
}

PickHot.defaultProps = {
  model: {},
}

export default PickHot;
