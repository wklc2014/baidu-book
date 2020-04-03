/**
 * 头部左侧返回按钮
 */
import React from 'react';
import propTypes from 'prop-types';
import { useHistory } from "react-router-dom";
import CommonIcon from '../../../components/common-icon/index.js';

function HeaderBack(props) {

  const history = useHistory();

  function onBack() {
    window.scrollTo(0, 0);
    history.go(-1);
  }

  return (
    <div className="header-item" onClick={onBack}>
      <CommonIcon type="chevron-left" ratio={1.5} />
    </div>
  )
}

HeaderBack.propTypes = {

}

HeaderBack.defaultProps = {

}

export default HeaderBack;
