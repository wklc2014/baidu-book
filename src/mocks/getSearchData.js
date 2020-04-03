import Mock from 'mockjs';

const result = {
  "errno": 0,
  "msg": "success",
  "data": {
    "total": 9,
    "hasMore": 1,
    "dispNum": "564",
    "wordList": [
      "武炼巅峰",
      "大主宰",
      "完美世界",
      "最强弃少",
      "凡人修仙传",
      "逆天邪神",
      "万古神帝",
      "全职法师",
      "斗破苍穹",
    ],
    "subpage": {
      "name": "《庆余年》",
      "content": "一切为了庆国，一切为陛下，一切为了天下，这是你的态度，却不是我的态度，为了我在意的人，即便死上千万人又如何？而你没有替我做到这一切……所以，我不原谅你。"
    }
  },
  "s_log": "c15104bf961c60ebe895ac064b8e91fa",
  "s_father_log": "c15104bf961c60ebe895ac064b8e91fa",
  "s_root_log": "c15104bf961c60ebe895ac064b8e91fa"
}

Mock.mock('/api/getSearchData', 'get', (url, type, body) => {
  return {
    success: true,
    data: result.data,
  };
})
