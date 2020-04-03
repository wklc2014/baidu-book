/**
 * 渲染回调
 */
function WithChildren(props) {

  const { config, children, ...restProps } = props;

  const newProps = {
    ...restProps,
    ...config,
  }

  return children(newProps);
}
