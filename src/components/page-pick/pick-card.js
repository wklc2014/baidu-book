/**
 * 精选通用卡片
 */
import React from 'react';
import propTypes from 'prop-types';
import ModuleCard from '../../components/module-card/index.js';
import { PAGE_ROUTES } from '../../utils/enum.js';

function PickCard(props) {

  const { model } = props;

  return (
    <section className="pick-card">
      {model.map((v, i) => {
        const key = i;
        const ModuleCardProps = {
          key,
          cardModel: {
            ...v,
            head: v.title,
            body: {
              list: v.novelList,
              tab: v.category,
            },
            foot: v.bottom,
          },
          config: {
            head: {
              visible: !!v.title,
              style: { color: '#917b5f' },
            },
            body: {
              visible: !!v.novelList,
              image: {
                visible: true,
                style: { width: 56 },
              },
              read: false,
              author: false,
              check: false,
              tag: {
                className: 'tag-line',
                visible: true,
              },
              url: PAGE_ROUTES.book_detail,
            },
            foot: {
              visible: !!v.bottom,
              url: PAGE_ROUTES.pick_detail,
            }
          },
        }
        return <ModuleCard {...ModuleCardProps} />;
      })}
    </section>
  )
}

PickCard.propTypes = {
  model: propTypes.array,
}

PickCard.defaultProps = {
  model: [],
}

export default PickCard;
