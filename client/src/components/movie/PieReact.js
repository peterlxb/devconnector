import React, { Component } from "react";

//导入echarts
var echarts = require("echarts/lib/echarts"); //必须
require("echarts/lib/chart/pie"); //图表类型
require("echarts/lib/component/title"); //标题插件

const ref = React.createRef();

export class PieReact extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.setPieOption = this.setPieOption.bind(this);
    this.initPie = this.initPie.bind(this);
  }

  initPie() {
    const { data } = this.props; //外部传入的data数据
    let myChart = echarts.init(this.myRef); //初始化echarts

    //我们要定义一个setPieOption函数将data传入option里面
    let options = this.setPieOption(data);
    //设置options
    myChart.setOption(options);
  }

  componentDidMount() {
    this.initPie();
  }

  componentDidUpdate() {
    this.initPie();
  }

  setPieOption(data) {
    return {
      series: [
        {
          name: "比例",
          type: "pie",
          radius: ["70%", "90%"],
          avoidLabelOverlap: true,
          data: data, //传入外部的data数据
          label: {
            normal: {
              show: false,
              position: "center",
              textStyle: {
                fontSize: "18"
              },
              formatter: "{d}% \n{b}"
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: "18"
              }
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          }
        }
      ]
    };
  }

  render() {
    return (
      <div className="pie-react">
        <div ref={this.myRef} style={{ width: "100%", height: "200px" }} />
      </div>
    );
  }
}
