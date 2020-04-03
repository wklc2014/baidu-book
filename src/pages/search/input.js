/**
 * 搜索 - 输入
 */
import React, { useState } from 'react';
import propTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { PAGE_ROUTES } from '../../utils/enum.js';

function PageSearchInput(props) {

  const history = useHistory();
  const [keywords, onChangeKeywrods] = useState('');
  const onConfirm = () => {
    history.push(`${PAGE_ROUTES.search_result}?query=搜索结果&word=${keywords}`);
  }
  const onChange = (e) => {
    onChangeKeywrods(e.target.value);
  }
  const onGoUrl = () => {
    history.push(PAGE_ROUTES.search);
  }

  return (
    <div className="page-search-input-container">
      <div className="input-control">
        <input value={keywords} onChange={onChange} />
      </div>
      <div className="input-btn">
        {keywords
          ? <span className="btn" onClick={onConfirm}>确认</span>
          : <span className="btn" onClick={onGoUrl}>取消</span>}
      </div>
    </div>
  )
}

PageSearchInput.propTypes = {
}

PageSearchInput.defaultProps = {
}

export default PageSearchInput;
