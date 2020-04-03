/**
 * 编辑书架
 */
import React, { Fragment, useState } from 'react';
import propTypes from 'prop-types';

function BagEdit(props) {

  const { amount, status, onChange, onDelete } = props;

  return (
    <div className="bag-edit uk-flex uk-flex-between">
      <div className="edit-item">
        您正在阅读<span className="amount">{amount}</span>本书
      </div>
      <div className="edit-item">
        {status ? (
          <Fragment>
            <span className="cancel" onClick={onChange}>取消</span>
            <span className="delete" onClick={onDelete}>删除</span>
          </Fragment>
        ) : <span className="edit" onClick={onChange}>编辑</span>}
      </div>
    </div>
  )
}

BagEdit.propTypes = {
  amount: propTypes.number,
  onDelete: propTypes.func,
  onChange: propTypes.func,
}

BagEdit.defaultProps = {
  amount: 0,
  onDelete: null,
  onChange: null,
}

export default BagEdit;
