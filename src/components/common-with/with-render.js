/**
 * 高阶组件
 * 子组件是否渲染
 * 子组件额外属性透传
 */
import React from 'react';
import propTypes from 'prop-types';
import is from 'is_js';

export default function withRender(ChildComponent) {

  function Render(props) {

    const { config, ...restProps } = props;

    // 如果没有配置
    // 或者配置的是 true
    // 则：直接渲染，不透传额外属性
    if (config === undefined || config === true) {
      const ChildComponentProps = {
        ...restProps,
      }
      return <ChildComponent {...ChildComponentProps} />;
    }

    // 如果配置为 boolean
    if (config === false) return null;

    // 如果配置为 object
    // 且 visible = true
    // 则：渲染组件，且透传配置的属性
    if (is.object(config) && config.visible) {

      // 取出配置属性
      const { visible, ...restConfig } = config;
      const ChildComponentProps = {
        ...restProps,
        ...restConfig,
      }
      return <ChildComponent {...ChildComponentProps} />;
    }

    // 其他情况都不渲染
    return null;
  }

  Render.propTypes = {
    config: propTypes.any,
  }

  Render.defaultProps = {
    config: true,
  }

  return Render;
}
