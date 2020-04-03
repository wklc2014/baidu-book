/**
 * 热门导航条
 */
import React from 'react';
import propTypes from 'prop-types';
import is from 'is_js';
import { Link } from 'react-router-dom';
import { PAGE_ROUTES } from '../../utils/enum.js';

function PickNav(props) {

  const { model } = props;
  const { novelList } = model;
  if (is.not.array(novelList)) return null;

  return (
    <div className="pick-nav">
      {novelList.map((v, i) => {
        const key = v.id || i;
        return (
          <Link  key={key} to={PAGE_ROUTES.pick_detail + '?query=' + v.text} className="item">
            <span>{v.text}</span>
          </Link>
        );
      })}
    </div>
  )
}

PickNav.propTypes = {
  model: propTypes.object,
}

PickNav.defaultProps = {
  model: {},
}

export default PickNav;
