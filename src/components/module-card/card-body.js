/**
 * 卡片内容部分
 */
import React, { useState } from 'react';
import propTypes from 'prop-types';
import classnames from 'classnames';
import is from 'is_js';
import { useHistory } from 'react-router-dom';
import withRender from '../common-with/with-render.js';
import ModuleBook from '../module-book/index.js';
import ModuleTab from '../module-tab/index.js';
import { PAGE_ROUTES } from '../../utils/enum.js';

function CardBody(props) {

  const { data, ...restProps } = props;
  const history = useHistory();
  const [active, onChange] = useState(0);
  if (is.not.array(data.list)) return null;
  const tabs = data.tab ? data.tab : [];

  const targetList = data.tab ? data.list[active] : data.list;
  const targetTab = tabs.map((v, i) => ({ name: v, id: i }));

  return (
    <article className="module-card-body">
      {targetTab.length > 0 && (
        <div className="body-tab">
          <ModuleTab
            tabs={targetTab}
            active={active}
            onTab={onChange}
          />
        </div>
      )}
      <div className="tab-list">
        {targetList.map((v, i) => {
          const key = i;
          const ModuleBookProps = {
            key,
            bookModel: v,
            config: restProps,
            onBookUrl: () => {
              history.push(PAGE_ROUTES.book_detail);
            }
          }
          return <ModuleBook {...ModuleBookProps} />;
        })}
      </div>
    </article>
  )
}

export default withRender(CardBody);
