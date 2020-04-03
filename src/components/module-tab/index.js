/**
 * tab
 */
import React from 'react';
import propTypes from 'prop-types';
import classnames from 'classnames';
import get from 'lodash/get';
import is from 'is_js';
import { withRouter, Link } from 'react-router-dom';

function ModuleTab(props) {

  const { tabs, active } = props;

  if (is.not.array(tabs)) return null;

  const pathname = get(props, 'location.pathname');
  const widthClass = `uk-child-width-1-${tabs.length}`;

  return (
    <section className="module-tab">
      <div className={`tab-box ${widthClass}`}>
        {tabs.map((v, i) => {
          const key = i;
          const cls = classnames({
            "tab-item": true,
            "active": active !== undefined ? active === i : pathname === `/${v.id}`,
          })
          const CommonProps = {
            key,
            className: cls,
          }
          if (active !== undefined) {
            return <div {...CommonProps} onClick={() => props.onTab(i)}>{v.name}</div>
          }
          return <Link {...CommonProps} to={v.id}>{v.name}</Link>
        })}
      </div>
    </section>
  )
}

ModuleTab.propTypes = {
  tabs: propTypes.array,
  active: propTypes.any,
}

ModuleTab.defaultProps = {
  tabs: [],
  active: undefined,
}

export default withRouter(ModuleTab);
