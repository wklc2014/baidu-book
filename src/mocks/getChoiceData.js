import Mock from 'mockjs';

const result = {
  "errno": 0,
  "msg": "success",
  "data": [
    {
      "type": "hotRead",
      "novelList": [
        {
          "cover": "https://wise-novel-authority-logo.su.bcebos.com/%E6%9E%81%E5%93%81%E6%8D%89%E5%A6%96%E7%B3%BB%E7%BB%9F.jpg",
          "id": "4316055993",
          "function": "openDetail"
        },
        {
          "cover": "https://wise-novel-authority-logo.su.bcebos.com/%E6%A0%A1%E5%9B%AD%E5%85%A8%E8%83%BD%E7%8E%8B%E7%89%8C%E5%B0%91%E5%A5%B3800-400.jpg",
          "id": "4308896954",
          "function": "openDetail"
        }
      ]
    },
    {
      "type": "navigation",
      "title": "导航条",
      "novelList": [
        {
          "text": "男生",
          "title": "男生",
          "function": "openChannel",
          "id": "18",
          "url": "",
          "pic": ""
        },
        {
          "text": "女生",
          "title": "女生",
          "function": "openChannel",
          "id": "19",
          "url": "",
          "pic": ""
        },
        {
          "text": "完本",
          "title": "完本",
          "function": "openChannel",
          "id": "20",
          "url": "",
          "pic": ""
        }
      ]
    },
    {
      "type": "recommend",
      "title": "重磅推荐",
      "novelList": [
        {
          "cover": "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2943824810,898563985&fm=179&app=35&f=JPEG?w=267&h=356&s=6100DD1B49516BE514E8A5E703006023",
          "title": "这个光头很危险",
          "tagList": [
            "男频",
            "玄幻",
            "东方玄幻"
          ],
          "description": "",
          "id": "4308642889",
          "function": "openDetail"
        },
        {
          "cover": "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=695726174,1940780155&fm=179&app=35&f=JPEG?w=267&h=356&s=4E03EA0B5A7849AF415954CB010080B1",
          "title": "从绝地求生开始的大明星",
          "tagList": [
            "男频",
            "都市",
            "娱乐明星"
          ],
          "description": "",
          "id": "4308893545",
          "function": "openDetail"
        },
        {
          "cover": "https://ss3.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/boxapp_novel/wh%3D267%2C357/sign=cd0cfaf2bf19ebc4c02d7e9bb411e3cf/bd3eb13533fa828b12235874f11f4134970a5a21.jpg",
          "title": "重生八零锦绣盛婚",
          "tagList": [
            "女频",
            "现代言情",
            "重生异能"
          ],
          "description": "重回转折点，恶霸盯上她",
          "id": "4316087096",
          "function": "openDetail"
        }
      ]
    },
    {
      "type": "tabRead",
      "title": "男生爱看",
      "novelList": [
        [
          {
            "cover": "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1999090494,195520609&fm=179&app=35&f=JPEG?w=189&h=272&s=2BB6378A02616BA932A029650300F062",
            "title": "近战狂兵",
            "tagList": [
              "男频",
              "都市小说",
              "都市激战"
            ],
            "description": "",
            "id": "4306075682",
            "function": "openDetail"
          },
          {
            "cover": "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3118772393,1765992726&fm=179&app=35&f=JPEG?w=267&h=356&s=C5456DA68C5231EF4229F8BA03003011",
            "title": "王牌赢家",
            "tagList": [
              "男频",
              "都市",
              "都市生活"
            ],
            "description": "",
            "id": "4306180099",
            "function": "openDetail"
          },
          {
            "cover": "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=4082034137,303317849&fm=179&app=35&f=JPEG?w=267&h=356&s=F14BA5AE8CD30DFD12057C000300709A",
            "title": "极品狂医-二两馒头",
            "tagList": [
              "男频",
              "都市",
              "都市超能\n"
            ],
            "description": "",
            "id": "4306299828",
            "function": "openDetail"
          },
          {
            "cover": "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3016849761,166271160&fm=179&app=35&f=JPEG?w=267&h=357&s=8CF071941A535BFD94A0B5CA030020A1",
            "title": "神医不凡",
            "tagList": [
              "男频",
              "都市",
              "乡村生活"
            ],
            "description": "",
            "id": "4308812025",
            "function": "openDetail"
          }
        ],
        [
          {
            "cover": "https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2607016480,2626370609&fm=179&app=35&f=JPEG?w=240&h=320&s=8CF1698600CB80F7825120B503001002",
            "title": "天道天骄",
            "tagList": [
              "男频",
              "玄幻",
              "古典仙侠"
            ],
            "description": "",
            "id": "4295122947",
            "function": "openDetail"
          },
          {
            "cover": "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1811790894,807376668&fm=179&app=35&f=JPEG?w=200&h=250",
            "title": "至尊狂神",
            "tagList": [
              "女频",
              "古代言情",
              "穿越重生"
            ],
            "description": "",
            "id": "4305535583",
            "function": "openDetail"
          },
          {
            "cover": "https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=842476870,2383678625&fm=179&app=35&f=JPEG?w=267&h=357&s=E9150998CC93CFF95A1730DA030080B9",
            "title": "丹师剑宗",
            "tagList": [
              "男频",
              "玄幻",
              "现代修真"
            ],
            "description": "",
            "id": "4305989967",
            "function": "openDetail"
          },
          {
            "cover": "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3718279085,368644679&fm=179&app=35&f=JPEG?w=267&h=356&s=A3703B8868D313E7B0A9F9870300E081",
            "title": "无上丹尊-梦醒泪殇",
            "tagList": [
              "男频",
              "玄幻",
              "东方玄幻"
            ],
            "description": "",
            "id": "4307970268",
            "function": "openDetail"
          }
        ],
        [
          {
            "cover": "https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=824216986,3585685635&fm=179&app=35&f=JPEG?w=267&h=356&s=E017559C48115FED8E9E55DE030080BA",
            "title": "妙手仙医-1",
            "tagList": [
              "男频",
              "都市",
              "都市超能\n"
            ],
            "description": "",
            "id": "4305535598",
            "function": "openDetail"
          },
          {
            "cover": "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=4184115918,1439520077&fm=179&app=35&f=JPEG?w=189&h=272&s=4843689C1AB345B52D11E0C9030030B1",
            "title": "网游之九转轮回",
            "tagList": [
              "男频",
              "游戏",
              "网游生涯"
            ],
            "description": "",
            "id": "4305583140",
            "function": "openDetail"
          },
          {
            "cover": "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2268369495,1819136934&fm=179&app=35&f=JPEG?w=267&h=356&s=E764B1574891D3E3162C3CEF03007060",
            "title": "玄阳天尊",
            "tagList": [
              "男频",
              "玄幻",
              "古典仙侠"
            ],
            "description": "",
            "id": "4306289329",
            "function": "openDetail"
          },
          {
            "cover": "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=4099628771,4083888197&fm=179&app=35&f=JPEG?w=267&h=357&s=0EA68D0848D16BFBC2710BC5030070B6",
            "title": "我在丹田种棵树",
            "tagList": [
              "男频",
              "玄幻",
              "东方玄幻"
            ],
            "description": "",
            "id": "4308812018",
            "function": "openDetail"
          }
        ],
        [
          {
            "cover": "https://ss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/boxapp_novel/wh%3D315%2C423/sign=5d06f3dc56ee3d6d22938fc872234116/d01373f082025aafa8349eb0f4edab64034f1a42.jpg",
            "title": "秦时兵皇",
            "tagList": [
              "男频",
              "历史",
              "历史传奇"
            ],
            "description": "",
            "id": "4306131829",
            "function": "openDetail"
          },
          {
            "cover": "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3444925484,3650423187&fm=179&app=35&f=JPEG?w=255&h=357&s=C1009D1A599361E3002989C5030080A2",
            "title": "重生之老子是皇帝",
            "tagList": [
              "女频",
              "古代言情",
              "穿越重生"
            ],
            "description": "",
            "id": "4306258837",
            "function": "openDetail"
          },
          {
            "cover": "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=815685923,2802716232&fm=179&app=35&f=JPEG?w=240&h=320&s=6B0CC10B4A716BA710C9B0DB0100E0B1",
            "title": "跃马大明",
            "tagList": [
              "男频",
              "历史",
              "架空历史"
            ],
            "description": "",
            "id": "4308038272",
            "function": "openDetail"
          },
          {
            "cover": "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=1154621057,1561511540&fm=179&app=35&f=JPEG?w=204&h=255&s=F73454CE5EF38BDE4CC1343603007049",
            "title": "雄霸大明朝",
            "tagList": [
              "男频",
              "历史",
              "两宋元明"
            ],
            "description": "",
            "id": "4315660959",
            "function": "openDetail"
          }
        ]
      ],
      "category": [
        "都市",
        "玄幻",
        "精选",
        "历史"
      ],
      "bottom": {
        "title": "进入男生爱看",
        "function": "openChannel",
        "id": "18",
        "query": "男频",
        "path": "choicechannel",
        "queryParams": [
          {
            "page_id": "18"
          }
        ]
      }
    },
    {
      "type": "tabRead",
      "title": "女生爱看",
      "novelList": [
        [
          {
            "cover": "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2417917749,2971814127&fm=179&app=35&f=JPEG?w=267&h=356&s=0E728D1A595353FD54FC5BD80300E0B4",
            "title": "心尖蜜宠：帝国总裁疼入骨",
            "tagList": [
              "女频",
              "现代言情",
              "都市纯爱"
            ],
            "description": "",
            "id": "4306301378",
            "function": "openDetail"
          },
          {
            "cover": "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=578953476,2288963651&fm=179&app=35&f=JPEG?w=267&h=356&s=7FCEFF16034140E47569D9FF0300B02A",
            "title": "高冷boss抱回家",
            "tagList": [
              "女频",
              "现代言情",
              "总裁豪门"
            ],
            "description": "",
            "id": "4307983399",
            "function": "openDetail"
          },
          {
            "cover": "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3914416160,2071278947&fm=179&app=35&f=JPEG?w=267&h=357&s=77C2981B06C166F45425B2A403002025",
            "title": "双宝来袭：爹地狂傲如火",
            "tagList": [
              "女频",
              "现代言情",
              "浪漫言情"
            ],
            "description": "",
            "id": "4308502670",
            "function": "openDetail"
          },
          {
            "cover": "https://ss1.baidu.com/-4o3dSag_xI4khGko9WTAnF6hhy/boxapp_novel/wh%3D315%2C423/sign=30751ea08513632715b8ca30a0ba8cd8/7a899e510fb30f24630d6e7fc795d143ad4b0332.jpg",
            "title": "婚情蜜宠：宋太太，有点甜",
            "tagList": [
              "女频",
              "现代言情",
              "总裁豪门"
            ],
            "description": "",
            "id": "4308688626",
            "function": "openDetail"
          }
        ],
        [
          {
            "cover": "https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1756463263,2459945985&fm=179&app=35&f=JPEG?w=267&h=356&s=17C7DC1659D37FEB00F76BEE0300703C",
            "title": "重回儿时拐男神",
            "tagList": [
              "女频",
              "现代言情",
              "婚里婚外"
            ],
            "description": "",
            "id": "4306301910",
            "function": "openDetail"
          },
          {
            "cover": "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=1040106866,1891033670&fm=179&app=35&f=JPEG?w=187&h=250&s=2C30069ED8D107E1569C86F7030050A5",
            "title": "爆宠萌妃：腹黑王爷太霸道",
            "tagList": [
              "女频",
              "古代言情",
              "穿越重生"
            ],
            "description": "",
            "id": "4307970654",
            "function": "openDetail"
          },
          {
            "cover": "https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1644191872,2939361946&fm=179&app=35&f=JPEG?w=267&h=356",
            "title": "穿越之背靠系统好乘凉",
            "tagList": [
              "*",
              "古代言情",
              "架空历史"
            ],
            "description": "",
            "id": "4308612049",
            "function": "openDetail"
          },
          {
            "cover": "https://ss1.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/boxapp_novel/wh%3D315%2C423/sign=56f2bf6f7d0e0cf3a0a246f83b73de2b/78310a55b319ebc471e564e48d26cffc1e171629.jpg",
            "title": "重生八零：发家致富养崽崽",
            "tagList": [
              "女频",
              "现代言情",
              "总裁豪门"
            ],
            "description": "",
            "id": "4308688604",
            "function": "openDetail"
          }
        ],
        [
          {
            "cover": "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3889483034,1788388955&fm=179&app=35&f=JPEG?w=240&h=320&s=4010EA3A5AD16DFD3FA100E103007036",
            "title": "重生之庶女凰后",
            "tagList": [
              "女频",
              "古代言情",
              "穿越重生"
            ],
            "description": "",
            "id": "4305980289",
            "function": "openDetail"
          },
          {
            "cover": "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3670054545,2771526647&fm=179&app=35&f=JPEG?w=267&h=356&s=48D1CD10695353E11CDF65CB0300E0AA",
            "title": "庶女绝色，鬼帝大人求放过",
            "tagList": [
              "女频",
              "古代言情",
              "穿越重生"
            ],
            "description": "",
            "id": "4306383253",
            "function": "openDetail"
          },
          {
            "cover": "https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=977284351,2834436208&fm=179&app=35&f=JPEG?w=267&h=356&s=A6D630DF69D1E1FB0219116403003070",
            "title": "农家傻女",
            "tagList": [
              "女频",
              "古代言情",
              "宅斗种田"
            ],
            "description": "",
            "id": "4307970562",
            "function": "openDetail"
          },
          {
            "cover": "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2800038072,2454458840&fm=179&app=35&f=JPEG?w=267&h=356&s=F7FE15D649D163F54579D5F00300A036",
            "title": "农家小厨娘",
            "tagList": [
              "穿越重生",
              "*",
              "*"
            ],
            "description": "",
            "id": "4308508778",
            "function": "openDetail"
          }
        ],
        [
          {
            "cover": "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2120003714,45446439&fm=179&app=35&f=JPEG?w=189&h=272&s=A0527A877521B6F84E65348C0100E081",
            "title": "橙红年代",
            "tagList": [
              "男频",
              "都市",
              "都市生活"
            ],
            "description": "他从最底层的物业保安做起，奋战在橙红色的年代！",
            "id": "4305521250",
            "function": "openDetail"
          },
          {
            "cover": "https://ss3.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/boxapp_novel/wh%3D315%2C423/sign=ef8e0351982bd4074292dbfe4abcb265/bd315c6034a85edf6b1b635a46540923dd547530.jpg",
            "title": "初晨，是我故意忘记你2",
            "tagList": [
              "出版",
              "小说",
              "言情"
            ],
            "description": "",
            "id": "4305600530",
            "function": "openDetail"
          },
          {
            "cover": "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=4139608542,4057994795&fm=179&app=35&f=JPEG?w=267&h=357&s=4B370AC2E44128E7FA9EDFB50300D00D",
            "title": "悟空传",
            "tagList": [
              "男频",
              "奇幻",
              "领主魔法"
            ],
            "description": "{",
            "id": "4305630473",
            "function": "openDetail"
          },
          {
            "cover": "https://ss1.baidu.com/-4o3dSag_xI4khGko9WTAnF6hhy/boxapp_novel/wh%3D267%2C357/sign=ebcee127a4773912c4738d63ce2eaa2b/d0c8a786c9177f3e7ac45b977dcf3bc79e3d56b3.jpg",
            "title": "美人为馅",
            "tagList": [
              "女频",
              "现代言情",
              "都市生活"
            ],
            "description": "{",
            "id": "4315646983",
            "function": "openDetail"
          }
        ]
      ],
      "category": [
        "豪门",
        "幻想",
        "穿越",
        "出版"
      ],
      "bottom": {
        "title": "进入女生爱看",
        "function": "openChannel",
        "id": "19",
        "query": "女频",
        "path": "choicechannel",
        "queryParams": [
          {
            "page_id": "19"
          }
        ]
      }
    },
    {
      "type": "topicRead",
      "title": "类型阅读",
      "novelList": [
        {
          "cover": "https://internal-amis-res.cdn.bcebos.com/images/2020-1/1578639968626/be099d4322d9.jpg",
          "title": "王者回归，战破九荒",
          "tagList": [
            ""
          ],
          "description": "历尽万千，重获新生。王者回归，战破九荒！",
          "id": "1412",
          "moduleType": 2,
          "function": "openSpecial"
        },
        {
          "cover": "https://internal-amis-res.cdn.bcebos.com/images/2020-1/1578639878158/a00c06c78f22.jpg",
          "title": "看那些年的追妻火葬场",
          "tagList": [
            ""
          ],
          "description": "虐妻一时爽，追妻火葬场啊大佬们！自己作的死还能怎么办？跪着呗！",
          "id": "1411",
          "moduleType": 2,
          "function": "openSpecial"
        }
      ],
      "bottom": {
        "title": "查看全部专题",
        "function": "openSpecialList",
        "id": null,
        "path": "subjectlist"
      }
    }
  ],
  "s_log": "403e4ad3ad6b468f8e3edb3d4156f5d4",
  "s_father_log": "403e4ad3ad6b468f8e3edb3d4156f5d4",
  "s_root_log": "403e4ad3ad6b468f8e3edb3d4156f5d4"
}

Mock.mock('/api/getChoiceData', 'get', (url, type, body) => {
  return {
    success: true,
    data: result.data,
  };
})
