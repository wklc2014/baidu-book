import Mock from 'mockjs';

const result = {
  "errno": 0,
  "msg": "success",
  "data": {
    "novelList": [
      {
        "bookId": "4308642889",
        "cover": "http://t12.baidu.com/it/u=2943824810,898563985&fm=179&app=35&f=JPEG?w=267&h=356&s=6100DD1B49516BE514E8A5E703006023",
        "title": "这个光头很危险",
        "status": "连载",
        "author": "三千浮世",
        "category": "男频_玄幻_东方玄幻",
        "tagList": [
          "男频",
          "玄幻",
          "东方玄幻"
        ],
        "isGenuine": 1
      },
      {
        "bookId": "4316087096",
        "cover": "http://t12.baidu.com/it/u=3134350652,743142763&fm=179&app=35&f=JPEG?w=267&h=356&s=36CEFD1643BBC9EB10D3ABFA0300903F",
        "title": "重生八零锦绣盛婚",
        "status": "连载",
        "author": "幽非芽",
        "category": "女频_现代言情_重生异能",
        "tagList": [
          "女频",
          "现代言情",
          "重生异能"
        ],
        "isGenuine": 1
      }
    ],
    "recommend": {
      "novelList": [],
      "bottom": {
        "title": "查看全部推荐小说",
        "function": "openChannel"
      }
    },
    "subpage": {
      "name": "《庆余年》",
      "content": "对于我来说，他或者你，都不是可以投注一丝信任的人，因为在你们的心里，都有比伙伴更重要的东西"
    }
  },
  "s_log": "036faffe1bfa0ac18f43b366b643771f",
  "s_father_log": "036faffe1bfa0ac18f43b366b643771f",
  "s_root_log": "036faffe1bfa0ac18f43b366b643771f"
}

Mock.mock('/api/getBagData', 'get', (url, type, body) => {
  return {
    success: true,
    data: result.data,
  }
})
