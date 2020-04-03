/**
 * 书
 * 书封面
 * 书名
 * 作者
 * 描述
 * 阅读量
 * 标签
 */
import React from 'react';
import propTypes from 'prop-types';
import Image from './image.js';
import ImageCover from './image-cover.js';
import ImageMask from './image-mask.js';
import Detail from './detail.js';
import DetailTitle from './detail-title.js';
import DetailRead from './detail-read.js';
import DetailTag from './detail-tag.js';
import DetailAuthor from './detail-author.js';
import DetailDescription from './detail-description.js';
import Check from './check.js';
import CommonIcon from '../common-icon/index.js';

function ModuleBook(props) {

  const { config, bookModel, onBookUrl, onChecked } = props;
  const { cover, title, author, description, tagList, followersNum, isGenuine, selected } = bookModel;

  return (
    <article className="module-book" onClick={onBookUrl}>
      <Image config={config.image}>
        <ImageCover config={config.cover} data={cover} />
        <ImageMask config={config.mask} data={isGenuine} />
      </Image>
      <Detail config={config.detail}>
        <div className="uk-flex">
          <DetailTitle config={config.title} data={title} />
          <DetailRead config={config.read} data={followersNum} />
        </div>
        <DetailTag config={config.tag} data={tagList} />
        <DetailAuthor config={config.author} data={author} />
        <DetailDescription config={config.description} data={description} />
      </Detail>
      <Check config={config.check}>
        <span onClick={onChecked}>
          {selected && <CommonIcon type="check" />}
        </span>
      </Check>
    </article>
  )
}

ModuleBook.propTypes = {
  config: propTypes.object,
  bookModel: propTypes.object,
  onBookUrl: propTypes.func,
  onChecked: propTypes.func,
}

ModuleBook.defaultProps = {
  config: {},
  bookModel: {},
  onBookUrl: () => {},
  onChecked: () => {},
}

export default ModuleBook;
