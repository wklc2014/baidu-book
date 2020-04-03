/**
 * 加载状态
 */
import React from 'react';
import classnames from 'classnames';
import propTypes from 'prop-types';

function ModuleLoading(props) {

  const { loading, tip, children } = props;
  const cls = classnames({
    "module-loading": true,
    finished: !loading,
  })

  return (
    <div className={cls}>
      <div className="module-loading-icon">
        <div className="loading"></div>
        {tip && <div className="text">{tip}</div>}
      </div>
      <div className="module-loading-body">
        {children}
      </div>
    </div>
  )
}

ModuleLoading.propTypes = {
  loading: propTypes.bool,
  tip: propTypes.string,
}

ModuleLoading.defaultProps = {
  loading: false,
  tip: '',
}

export default ModuleLoading;
