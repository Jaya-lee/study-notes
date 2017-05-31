## 数据可视化

<百度ECharts>

[ECharts](http://echarts.baidu.com)

使用方法：

1.下载echarts.min.js,引入

2.先用一个dom大盒子包裹

3.基于准备好的dom，初始化echarts实例

```js
var myChart = echarts.init(document.getElementById('main'));
```

4.设置图表
myChart.setOption(option);

option为配置项

在api配置项里是一一对应的 修改设置即可
