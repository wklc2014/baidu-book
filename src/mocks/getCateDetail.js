import Mock from 'mockjs';

const result = {
  "total": 10,
  "hasMore": 1,
  "dispNum": "579",
  "novelList": [
    {
      "bookId": "4315646950",
      "title": "武炼巅峰",
      "movie_name": null,
      "author": "莫默",
      "cover": "https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2476079491,3455683904&fm=179&app=35&f=JPEG?w=120&h=150&s=4C11629F88D361F3141891F70300C062",
      "description": "武之巅峰，是孤独，是寂寞，是漫漫求索，是高处不胜寒逆境中成长，绝地里求生，不屈不饶，才能堪破武之极道。凌霄阁试炼弟子兼扫地小厮杨开偶获一本无字黑书，从此踏上漫漫武道。",
      "status": "连载",
      "tagList": [
        "男频",
        "玄幻",
        "东方玄幻"
      ],
      "category": "男频_玄幻_东方玄幻",
      "followersNum": "2428000",
      "function": "openDetail"
    },
    {
      "bookId": "4315646971",
      "title": "万古神帝",
      "movie_name": null,
      "author": "飞天鱼",
      "cover": "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=999565691,1505120102&fm=179&app=35&f=JPEG?w=267&h=356&s=B50F9D579AD471EF5A4045E103005030",
      "description": "八百年前，明帝之子张若尘，被他的未婚妻池瑶公主杀死，一代天骄，就此陨落。八百年后，张若尘重新活了过来，却发现曾经杀死他的未婚妻，已经统一昆仑界，开辟出第一中央帝国，号称“池瑶女皇”。池瑶女皇——统御天下，威临八方；青春永驻，不死不灭。张若尘站在诸皇祠堂外，望着池瑶女皇的神像，心中燃烧起熊熊的仇恨烈焰，“待我重修十三年，敢叫女皇下黄泉”。…………",
      "status": "连载",
      "tagList": [
        "男频",
        "玄幻",
        "东方玄幻"
      ],
      "category": "男频_玄幻_东方玄幻",
      "followersNum": "1644000",
      "function": "openDetail"
    },
    {
      "bookId": "4305156123",
      "title": "逆天邪神",
      "movie_name": null,
      "author": "火星引力",
      "cover": "https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1981950820,903084067&fm=179&app=35&f=JPEG?w=267&h=357&s=948641B30CD3BDE71E9195BE0300F001",
      "description": "掌天毒之珠，承邪神之血，修逆天之力，一代邪神，君临天下！",
      "status": "连载",
      "tagList": [
        "男频",
        "玄幻",
        "东方玄幻"
      ],
      "category": "男频_玄幻_东方玄幻",
      "followersNum": "1671000",
      "function": "openDetail"
    },
    {
      "bookId": "4315646974",
      "title": "斗破苍穹",
      "movie_name": null,
      "author": "天蚕土豆",
      "cover": "https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1714022596,3570728104&fm=179&app=35&f=JPEG?w=267&h=356&s=8111C5307F9247E35DC8A1C30300A0B7",
      "description": "这里是属于斗气的世界，没有花俏艳丽的魔法，有的，仅仅是繁衍到巅峰的斗气！新书等级制度：斗者，斗师，大斗师，斗灵，斗王，斗皇，斗宗，斗尊，斗圣，斗帝。……吴磊、林允主演的同名电视剧9月3日起周一到周三每晚22：00登陆湖南卫视，腾讯视频全网独播。",
      "status": "完结",
      "tagList": [
        "男频",
        "玄幻",
        "东方玄幻"
      ],
      "category": "男频_玄幻_东方玄幻",
      "followersNum": "1722000",
      "function": "openDetail"
    },
    {
      "bookId": "4315647048",
      "title": "遮天",
      "movie_name": null,
      "author": "辰东",
      "cover": "https://ss0.bdstatic.com/9uR1bjWwKgQIm2_p8IuM_a/mcoweb-searchbox/tmp/1517205179_4621.jpg",
      "description": "冰冷与黑暗并存的宇宙深处，九具庞大的龙尸拉着一口青铜古棺，亘古长存。这是太空探测器在枯寂的宇宙中捕捉到的一幅极其震撼的画面。九龙拉棺，究竟是回到了上古，还是来到了星空的彼岸？一个浩大的仙侠世界，光怪陆离，神秘无尽。热血似火山沸腾，激情若瀚海汹涌，欲望如深渊无止境……登天路，踏歌行，弹指遮天。",
      "status": "完结",
      "tagList": [
        "男频",
        "玄幻",
        "东方玄幻"
      ],
      "category": "男频_玄幻_东方玄幻",
      "followersNum": "1729000",
      "function": "openDetail"
    },
    {
      "bookId": "4315789421",
      "title": "圣墟",
      "movie_name": null,
      "author": "辰东",
      "cover": "https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3217995283,1144737636&fm=179&app=35&f=JPEG?w=267&h=356&s=1B35CF04521955EF1C7035C7030080A2",
      "description": "在破败中崛起，在寂灭中复苏。沧海成尘，雷电枯竭，那一缕幽雾又一次临近大地，世间的枷锁被打开了，一个全新的世界就此揭开神秘的一角……",
      "status": "连载",
      "tagList": [
        "男频",
        "玄幻",
        "东方玄幻"
      ],
      "category": "男频_玄幻_东方玄幻",
      "followersNum": "1603500",
      "function": "openDetail"
    },
    {
      "bookId": "4305713956",
      "title": "元尊",
      "movie_name": null,
      "author": "天蚕土豆",
      "cover": "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2460754629,3137692230&fm=179&app=35&f=JPEG?w=240&h=320&s=4D47CF0854A12DA5E11845D3010050B2",
      "description": "天地为炉，万物为铜，阴阳为炭，造化为工。气运之争，蟒雀吞龙。究竟是蟒雀为尊，还是圣龙崛起，凌驾众生？这是气掌乾坤的世界，磅礴宏伟，一气可搬山，可倒海，可翻天，可掌阴阳乾坤。世间源气分九品，三品称玄，六品成天，九品号圣。吾有一口玄黄气，可吞天地日月星。",
      "status": "连载",
      "tagList": [
        "男频",
        "玄幻",
        "东方玄幻"
      ],
      "category": "男频_玄幻_东方玄幻",
      "followersNum": "1497500",
      "function": "openDetail"
    },
    {
      "bookId": "4305661491",
      "title": "修罗武神",
      "movie_name": null,
      "author": "善良的蜜蜂",
      "cover": "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2485787981,976165778&fm=179&app=35&f=JPEG?w=189&h=272&s=C881C510536068B34FC41DD00300E0B6",
      "description": "论潜力，不算天才，可玄功武技，皆可无师自通。论实力，任凭你有万千至宝，但定不敌我界灵大军。我是谁？天下众生视我为修罗，却不知，我以修罗成武神。…………………………想看修罗武神番外。",
      "status": "连载",
      "tagList": [
        "男频",
        "玄幻",
        "东方玄幻"
      ],
      "category": "男频_玄幻_东方玄幻",
      "followersNum": "1767000",
      "function": "openDetail"
    },
    {
      "bookId": "4305505419",
      "title": "不灭武尊",
      "movie_name": null,
      "author": "梁家三少",
      "cover": "https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3915558238,3086131827&fm=179&app=35&f=JPEG?w=189&h=272&s=7013C530D7C568E07AF405C9030060B1",
      "description": "一门被视为垃圾的功法，一个被同门视作废人的修炼狂人，在得到一枚阴阳玉佩之后，一切将彻底改变。十倍修炼速度，令古飞一再突破武道极限，千百年来已被人认定的铁律，被古飞一一打破！奇迹……古飞不相信奇迹，他相信的只有血和汗，在这个武道已经没落，真正的武道奥义已经失传的腾龙大陆修炼界，且看古飞如何以武逆天，脚踏道术神通，拳打妖魔鬼怪，怀抱红颜绝色，成就不灭武尊！（空）（满）！（未满）！梁三完本作品：《都市之古武风流》！！",
      "status": "连载",
      "tagList": [
        "男频",
        "玄幻奇幻",
        "东方玄幻"
      ],
      "category": "男频_玄幻奇幻_东方玄幻",
      "followersNum": "1797000",
      "function": "openDetail"
    },
    {
      "bookId": "4305547728",
      "title": "剑来",
      "movie_name": null,
      "author": "烽火戏诸侯",
      "cover": "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3542694972,4291235572&fm=179&app=35&f=JPEG?w=262&h=356&s=B421DB1712C37BEDB62054A50300E0A1",
      "description": "大千世界，无奇不有。我陈平安，唯有一剑，可搬山，倒海，降妖，镇魔，敕神，摘星，断江，摧城，开天！我叫陈平安，平平安安的平安。我是一名剑客。",
      "status": "连载",
      "tagList": [
        "男频",
        "玄幻",
        "东方玄幻"
      ],
      "category": "男频_玄幻_东方玄幻",
      "followersNum": "1480000",
      "function": "openDetail"
    }
  ]
}

Mock.mock('/api/getCateDetail', 'get', (url, type, body) => {

  // console.error('body>>>', body);
  return {
    success: true,
    data: result,
  }
})
