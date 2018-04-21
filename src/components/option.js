import axios from 'axios'; //引入axios用于ajax请求
export default {
  chart: {
    type: "variablepie", //图表类型
    events: {
      drillup: function (e) {
        // 上钻回调事件
        console.log(e.seriesOptions);
      },
      drilldown: function (e) {
        console.log(e.point.code);
        if (!e.seriesOptions) {
          var chart = this;
          axios.get(`http://localhost:8080/static/data${e.point.code}.json`).then(res => {
            console.log(res.data[0]);
            console.log(e.point.name);
            chart.addSeriesAsDrilldown(e.point, {
              minPointSize: 100,
              innerSize: "20%",
              colorByPoint: true,
              ...res.data[0] //结构返回数据对象
            });
          });

        }
      }
    }
  },

  series: [{
    minPointSize: 100,
    innerSize: "20%",
    colorByPoint: true,
    data: []
  }],
  drilldown: {
    series: []
  }
}
