/**
 * 项目枚举值
 */
const PAGE_TITLE = '百度小说';

export default PAGE_TITLE;

// 路由映射
export const PAGE_ROUTES = {
  book_detail: '/book/detail',
  bag: '/bag',
  pick: '/pick',
  pick_detail: '/pick/detail',
  rank: '/rank',
  rank_detail: '/rank/detail',
  cate: '/cate',
  cate_detail: '/cate/detail',
  search: '/search',
  search_input: '/search/input',
  search_result: '/search/result',
}

export const PAGE_TABS = [
  {
    id: 'bag',
    name: '书包',
  },
  {
    id: 'pick',
    name: '精选',
  },
  {
    id: 'rank',
    name: '排行',
  },
  {
    id: 'cate',
    name: '分类',
  },
]

export const CATE_TABS = [
  {
    id: PAGE_ROUTES.cate,
    name: '全部',
  },
  {
    id: PAGE_ROUTES.cate,
    name: '连载',
  },
  {
    id: PAGE_ROUTES.cate,
    name: '完结',
  },
]
