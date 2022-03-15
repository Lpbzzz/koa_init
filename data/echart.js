const data = {
  // nodes 代表的是图中的各个点。比如 【中航赛维实业发展有限公司】。它最基本的结构是 【id】【name】【relatedNode】【relatedLink】【category】
  //       relatedNode 数组类型数据。指的是：当鼠标移入这个点时，某一个点要高亮，那么这个点的id应该就在这个数组中
  //       relatedLink 数组类型数据。指的是：当鼠标移入这个点时，某一条连线要高亮。那么这条线的id就应该在这个数组中
  //       category    数字类型数据。指的是：需要把某些点设置为同一个颜色时，就把category设置为相同的数字。数字从0开始
  //       其他字段，比如 symbolSize、itemStyle等是用来渲染样式的，可以不存在，由前端遍历添加
  nodes: [
    {
      id: 'a1',
      name: '中航赛维实业发展有限公司',
      symbolSize: 100,
      category: 0,
      itemStyle: {
        opacity: 1,
      },
      relatedNode: ['b1', 'b2', 'b3', 'c1', 'c2', 'c3'],
      relatedLink: ['a1b1_1', 'a1b1_2', 'a1b2_1', 'a1b3_1', 'b2c2_1'],
    },
    {
      id: 'b1',
      name: '仓库1',
      symbolSize: 60,
      category: 1,
    },
    {
      id: 'b2',
      name: '仓库2',
      symbolSize: 60,
      category: 2,
    },
    {
      id: 'b3',
      name: '仓库3',
      symbolSize: 60,
      category: 3,
    },
    {
      id: 'c1',
      name: '项目1',
      symbolSize: 60,
      category: 4,
    },
    {
      id: 'c2',
      name: '项目2',
      symbolSize: 60,
      category: 5,
    },
    {
      id: 'c3',
      name: '项目3',
      symbolSize: 60,
      category: 6,
    },
    {
      id: 'a2',
      name: '沈阳久虹铝膜有限公司',
      symbolSize: 60,
      category: 7,
    },
    {
      id: 'a3',
      name: '浙江宜和新材料有限公司1',
      symbolSize: 60,
      category: 8,
    },
    {
      id: 'a4',
      name: '浙江宜和新材料有限公司2',
      symbolSize: 60,
      category: 9,
    },
    {
      id: 'a5',
      name: '昌宜(天津)模板租赁有限公司',
      symbolSize: 60,
      category: 10,
    },
  ],
  // links 指的是各个点之间的关系。包括【source】【target】【id】【lineStyle】【label】
  //       source 是在关系图中，某条线的起点是哪里，指的是nodes的【id】
  //       target 是在关系图中，某条线的终点是哪里，指的是nodes的【id】
  //       id     是这条线的id是什么， 【nodes】中的 【relatedLink】指的就是它，用来标识高亮。注意唯一性，因为有的时候同一组 source和target 之间有多条线
  //       如果：有两个点之间存在不止一条线，那么要给这个线设置 lineStyle:{ curveness:【number】 } 这个代表的是连线的弯曲度，不同的弯曲度才能让连线不重合。也可以后端出一个标记，把连线区分开来
  //       label:{formatter:【string】}  【string】指的是连线上的文字注释，比如 存储50吨 这个的
  links: [
    {
      source: 'a1',
      target: 'b1',
      lineStyle: {
        curveness: 0.1,
      },
      label: {
        show: true,
        formatter: '存储50吨',
      },
      id: 'a1b1_1',
    },
    {
      source: 'a1',
      target: 'b1',
      lineStyle: {
        curveness: -0.1,
      },
      label: {
        show: true,
        formatter: '存储50吨',
      },
      id: 'a1b1_2',
    },
    {
      source: 'b1',
      target: 'c1',
      lineStyle: {
        curveness: 0.1,
      },
      label: {
        show: true,
        formatter: '进场70吨',
      },
    },
    {
      source: 'c1',
      target: 'b1',
      lineStyle: {
        curveness: 0.1,
      },
      label: {
        show: true,
        formatter: '退场20吨',
      },
    },
    {
      source: 'c1',
      target: 'b1',
      lineStyle: {
        curveness: 0.2,
      },
      label: {
        show: true,
        formatter: '退场50吨',
      },
    },
    {
      source: 'a1',
      target: 'b2',
      lineStyle: {
        curveness: 0.1,
      },
      label: {
        show: true,
        formatter: '存储100吨',
      },
      id: 'a1b2_1',
    },
    {
      source: 'b2',
      target: 'c2',
      lineStyle: {
        curveness: 0.1,
      },
      label: {
        show: true,
        formatter: '进场20吨',
      },
      id: 'b2c2_1',
    },
    {
      source: 'b2',
      target: 'a3',
      lineStyle: {
        curveness: 0.1,
      },
      label: {
        show: true,
        formatter: '租赁50吨',
      },
    },
    {
      source: 'a1',
      target: 'b3',
      lineStyle: {
        curveness: 0.1,
      },
      label: {
        show: true,
        formatter: '存储100吨',
      },
      id: 'a1b3_1',
    },
    {
      source: 'b3',
      target: 'a3',
      lineStyle: {
        curveness: 0.1,
      },
      label: {
        show: true,
        formatter: '租赁50吨',
      },
    },
    {
      source: 'c3',
      target: 'b3',
      lineStyle: {
        curveness: 0.1,
      },
      label: {
        show: true,
        formatter: '退场50吨',
      },
    },
    {
      source: 'a3',
      target: 'a4',
      lineStyle: {
        curveness: 0.1,
      },
      label: {
        show: true,
        formatter: '租赁10吨',
      },
    },
    {
      source: 'a2',
      target: 'c3',
      lineStyle: {
        curveness: 0.1,
      },
      label: {
        show: true,
        formatter: '进场50吨',
      },
    },
    {
      source: 'b3',
      target: 'a2',
      lineStyle: {
        curveness: 0.1,
      },
      label: {
        show: true,
        formatter: '加工50吨',
      },
    },
    {
      source: 'a1',
      target: 'a3',
      lineStyle: {
        // curveness:0.1,
        type: 'dashed',
        color: 'red',
      },
      label: {
        show: true,
        formatter: '租赁100吨',
      },
    },
    {
      source: 'a5',
      target: 'a1',
      lineStyle: {
        // curveness:0.1,
        type: 'dashed',
      },
      label: {
        show: true,
        formatter: '采购100吨',
      },
    },
  ],
};

module.exports =data
