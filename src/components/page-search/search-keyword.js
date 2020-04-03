/**
 * 搜索输入页
 */
import React from 'react';
import propTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import CommonIcon from '../../components/common-icon/index.js';
import { PAGE_ROUTES } from '../../utils/enum.js';

function SearchKeyword(props) {

  const { text } = props;
  const history = useHistory();
  const onGoUrl = () => {
    history.push(PAGE_ROUTES.search_input);
  }

  return (
    <div className="search-keyword" onClick={onGoUrl}>
      <div className="item">
        <CommonIcon type="search" ratio={1} />
      </div>
      <div className="item text">{text}</div>
    </div>
  )
}

SearchKeyword.propTypes = {
  text: propTypes.string,
}

SearchKeyword.defaultProps = {
  text: '请输入小说名/作者名',
}

export default SearchKeyword;
