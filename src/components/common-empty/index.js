/**
 * 空数据
 */
import React from 'react';
import propTypes from 'prop-types';
import picEmpty from '../../assets/images/empty.png';

function CommonEmpty(props) {

  const { text } = props;

  return (
    <div className="empty-container">
      <img src={picEmpty} />
      {text && <span>{text}</span>}
    </div>
  )
}

CommonEmpty.propTypes = {
  text: propTypes.string,
}

CommonEmpty.defaultProps = {
  text: '暂无数据',
}

export default CommonEmpty;
