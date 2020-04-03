/**
 * 统一处理 uikit 的 icon
 */
import React, { useEffect } from 'react';
import propTypes from 'prop-types';
UIkit.use(UIkitIcons);

function CommonIcon(props) {

  const { type, ratio } = props;

  return <span data-uk-icon={`icon: ${type}; ratio: ${ratio};`}></span>;
}

CommonIcon.propTypes = {
  type: propTypes.string.isRequired,
  ratio: propTypes.number,
}

CommonIcon.defaultProps = {
  ratio: 1,
}

export default CommonIcon;
