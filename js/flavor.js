 // 多个柱状图
(function() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.querySelector(".key11"));

//本人的影视小站(gaze.run)案例

var name_arrs = ['一星','二星','三星','四星','五星'];


option = {
    title: {
        text: '素媛星评',
        x: 'center',
        y: 'top',
        textAlign: 'left',
        textStyle:{
            color:'#FFFFFF',
            fontSize:12,
        },
        top:"3%"
    },
    itemStyle: {
        normal: {
            barBorderRadius: 10,
        },
    },




    color: ['#B8B2CA'],
    grid: {
        left: '4%',
        right: '4%',
        bottom: '4%',
        top: 30,
        //图形位置包含坐标轴的刻度标签
        //如果图形位置调整好却不包含坐标轴，坐标轴信息会显示不全
        containLabel: true
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: function(params) {
            return '<img style="height: 35px;width: 35px;" src="images/' + params[0].name + '.png"><br>&nbsp' + name_arrs[params[0].dataIndex] + '<br>&nbsp' + params[0].value + '%';
        }
    },
    xAxis: {
        axisLine: {
            show: false,

        },
        splitLine: {
            show: false,
            // lineStyle: {
            //     color: '#1D3039'
            // }
        },
        type: 'value',
        // min: 0,
        max: 100,
        axisLabel: {
            // formatter: '{value}'
            show:false
        },
        axisTick: {
            show:false
     
        },
    },
    yAxis: {
        name: '',
        type: 'category',
        data: [ 'yixing', 'erxing', 'sanxing', 'sixing', 'wuxing'],
        //y轴线样式
        axisLine: {
            show: false,
            
        },
        //设置与x轴平行的线(分割线)不显示
        splitLine: {
            show: false,
        },
        axisTick: {
            alignWithLabel: true,
            lineStyle:{
                color:'#FFFFFF'},
     
        },
        axisLabel: {
            formatter: function(value, index) {
                // console.log(index);
                return '{' + value + '|}\n' + name_arrs[index] + ' ' + '';
            },
            interval:0,
            margin: 16,
            height: 40,
            color:'#FFFFFF',
            rich: {
                value: {
                    lineHeight: 65,
                    align: 'right',
                    color: '#34495e',
                    // backgroundColor: {
                    //     image: 'http://gaze.run/static/img/echarts_svg/terror.svg'
                    // }
                },




                yixing: {
                    lineHeight: 36,
                    height: 30,
                    align: 'right',
                    backgroundColor: {
                        image: "images/yixing.png"
                    }
                },

                erxing: {
                    lineHeight: 36,
                    height: 30,
                    align: 'right',
                    backgroundColor: {
                        image: "images/erxing.png"
                    }
                },

                sanxing: {
                    lineHeight: 36,
                    height: 30,
                    align: 'right',
                    backgroundColor: {
                        image: "images/sanxing.png"
                    }
                },

                sixing: {
                    lineHeight: 36,
                    height: 30,
                    align: 'right',
                    backgroundColor: {
                        image: "images/sixing.png"
                    }
                },

                wuxing: {
                    lineHeight: 36,
                    height: 30,
                    align: 'right',
                    backgroundColor: {
                        image: "images/wuxing.png"
                    }
                },

            }
        }
    },
    series: [{
        type: 'bar',
        barGap:'0',
        barWidth: '23',
        itemStyle: {
            normal: {
                barBorderRadius: 3,
            }
        },
        data: [
            
  
            {
                value: 0.1
            },
            {
                value: 0.2
            },
            {
                value: 3.7
            },
            {
                value: 26.6
            },
            {
                value: 69.4
            },
        ],
        label: {
            normal: {
                formatter: function(data) {
                    return data.value + '%';
                },
                show: true,
                position: 'right',
                distance: 5,
                color: 'white',
                // backgroundColor: '#1D3039',
                // padding: 0,
                // borderRadius: 20
            }
        },
    }]
};

  
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function() {
      myChart.resize();
    });
  })();

(function() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.querySelector(".key12"));

//本人的影视小站(gaze.run)案例

var name_arrs = ['一星','二星','三星','四星','五星'];


option = {
    title: {
        text: '熔炉星评',
        x: 'center',
        y: 'top',
        textAlign: 'left',
        textStyle:{
            color:'#FFFFFF',
            fontSize:12,
        },
        top:"3%"
    },
    itemStyle: {
        normal: {
            barBorderRadius: 10,
        },
    },
    color: ['#F6E3A6'],
    grid: {
        left: '4%',
        right: '4%',
        bottom: '4%',
        top: 30,
        //图形位置包含坐标轴的刻度标签
        //如果图形位置调整好却不包含坐标轴，坐标轴信息会显示不全
        containLabel: true
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: function(params) {
            return '<img style="height: 35px;width: 35px;" src="images/' + params[0].name + '.png"><br>&nbsp' + name_arrs[params[0].dataIndex] + '<br>&nbsp' + params[0].value + '%';
        }
    },
    xAxis: {
        axisLine: {
            show: false,

        },
        splitLine: {
            show: false,
            // lineStyle: {
            //     color: '#1D3039'
            // }
        },
        type: 'value',
        // min: 0,
        max: 100,
        axisLabel: {
            // formatter: '{value}'
            show:false
        },
        axisTick: {
            show:false
     
        },
    },
    yAxis: {
        name: '',
        type: 'category',
        data: [ 'yi', 'er', 'san', 'si', 'wwwww'],
        //y轴线样式
        axisLine: {
            show: false,
            
        },
        //设置与x轴平行的线(分割线)不显示
        splitLine: {
            show: false,
        },
        axisTick: {
            alignWithLabel: true,
            lineStyle:{
                color:'#FFFFFF'},
     
        },
        axisLabel: {
            formatter: function(value, index) {
                // console.log(index);
                return '{' + value + '|}\n' + name_arrs[index] + ' ' + '';
            },
            interval:0,
            margin: 16,
            height: 40,
            color:'#FFFFFF',
            rich: {
                value: {
                    lineHeight: 65,
                    align: 'right',
                    color: '#34495e',
                    // backgroundColor: {
                    //     image: 'http://gaze.run/static/img/echarts_svg/terror.svg'
                    // }
                },



                yi: {
                    lineHeight: 36,
                    height: 30,
                    align: 'right',
                    backgroundColor: {
                        image: "images/yi.png"
                    }
                },

                er: {
                    lineHeight: 36,
                    height: 30,
                    align: 'right',
                    backgroundColor: {
                        image: 'images/er.png'
                    }
                },

                san: {
                    lineHeight: 36,
                    height: 30,
                    align: 'right',
                    backgroundColor: {
                        image: "images/san.png"
                    }
                },

                si: {
                    lineHeight: 36,
                    height: 30,
                    align: 'right',
                    backgroundColor: {
                        image: "images/si.png"
                    }
                },

                wwwww: {
                    lineHeight: 36,
                    height: 30,
                    align: 'right',
                    backgroundColor: {
                        image: "images/wwwww.png"
                    }
                },

            }
        }
    },
    series: [{
        type: 'bar',
        barGap:'0',
        barWidth: '23',
        itemStyle: {
            normal: {
                barBorderRadius: 3,
            }
        },
        data: [
            
  
            {
                value: 0.1
            },
            {
                value: 0.2
            },
            {
                value: 3.3
            },
            {
                value: 24.9
            },
            {
                value: 71.5
            },
        ],
        label: {
            normal: {
                formatter: function(data) {
                    return data.value + '%';
                },
                show: true,
                position: 'right',
                distance: 5,
                color: 'white',
                // backgroundColor: '#1D3039',
                // padding: 0,
                // borderRadius: 20
            }
        },
    }]
};

  
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function() {
      myChart.resize();
    });
  })();


(function() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.querySelector(".key21"));

//本人的影视小站(gaze.run)案例

var name_arrs = ['金相浩','金海淑','李来','严志媛','薛景求'];


option = {
    title: {
        text: '素媛主演获奖/提名',
        x: 'center',
        y: 'top',
        textAlign: 'left',
        textStyle:{
            color:'#FFFFFF',
            fontSize:12,
        },
        top:"3%"
    },
    itemStyle: {
        normal: {
            barBorderRadius: 10,
        },
    },




    color: ['#F0DECC'],
    grid: {
        left: '4%',
        right: '4%',
        bottom: '4%',
        top: 30,
        //图形位置包含坐标轴的刻度标签
        //如果图形位置调整好却不包含坐标轴，坐标轴信息会显示不全
        containLabel: true
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: function(params) {
            return '<img style="height: 35px;width: 35px;" src="images/' + params[0].name + '.PNG"><br>&nbsp' + name_arrs[params[0].dataIndex] + '<br>&nbsp' + params[0].value + '次';
        }
    },
    xAxis: {
        axisLine: {
            show: false,

        },
        splitLine: {
            show: false,
            // lineStyle: {
            //     color: '#1D3039'
            // }
        },
        type: 'value',
        // min: 0,
        max: 20,
        axisLabel: {
            // formatter: '{value}'
            show:false
        },
        axisTick: {
            show:false
     
        },
    },
    yAxis: {
        name: '',
        type: 'category',
        data: [ 'xiang', 'jin', 'li', 'yan', 'xue'],
        //y轴线样式
        axisLine: {
            show: false,
            
        },
        //设置与x轴平行的线(分割线)不显示
        splitLine: {
            show: false,
        },
        axisTick: {
            alignWithLabel: true,
            lineStyle:{
                color:'#FFFFFF'},
     
        },
        axisLabel: {
            formatter: function(value, index) {
                // console.log(index);
                return '{' + value + '|}\n' + name_arrs[index] + ' ' + '';
            },
            interval:0,
            margin: 16,
            height: 40,
            color:'#FFFFFF',
            rich: {
                value: {
                    lineHeight: 65,
                    align: 'right',
                    color: '#34495e',
                },



                jin: {
                    lineHeight: 36,
                    height: 30,
                    align: 'right',
                    backgroundColor: {
                        image: "images/jin.PNG"
                    }
                },

                yan: {
                    lineHeight: 36,
                    height: 30,
                    align: 'right',
                    backgroundColor: {
                        image: "images/yan.PNG"
                    }
                },

                li: {
                    lineHeight: 36,
                    height: 30,
                    align: 'right',
                    backgroundColor: {
                        image: "images/li.PNG"
                    }
                },

                xue: {
                    lineHeight: 36,
                    height: 30,
                    align: 'right',
                    backgroundColor: {
                        image: "images/xue.PNG"
                    }
                },

                xiang: {
                    lineHeight: 36,
                    height: 30,
                    align: 'right',
                    backgroundColor: {
                        image: "images/xiang.PNG"
                    }
                },

            }
        }
    },
    series: [{
        type: 'bar',
        barGap:'0',
        barWidth: '23',
        itemStyle: {
            normal: {
                barBorderRadius: 3,
            }
        },
        data: [
            
  
            {
                value: 1
            },
            {
                value: 5
            },
            {
                value: 5
            },
            {
                value: 7
            },
            {
                value: 15
            },
        ],
        label: {
            normal: {
                formatter: function(data) {
                    return data.value + '次';
                },
                show: true,
                position: 'right',
                distance: 5,
                color: 'white',
                // backgroundColor: '#1D3039',
                // padding: 0,
                // borderRadius: 20
            }
        },
    }]
};

  
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function() {
      myChart.resize();
    });
  })();

  (function() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.querySelector(".key22"));

//本人的影视小站(gaze.run)案例


var name_arrs = ['白承焕','郑仁絮','金贤秀','郑有美','孔刘'];


option = {
    title: {
        text: '熔炉主演获奖/提名',
        x: 'center',
        y: 'top',
        textAlign: 'left',
        textStyle:{
            color:'#FFFFFF',
            fontSize:12,
        },
        top:"3%"
    },
    itemStyle: {
        normal: {
            barBorderRadius: 10,
        },
    },




    color: ['#C6D3E0'],
    grid: {
        left: '4%',
        right: '4%',
        bottom: '4%',
        top: 30,
        //图形位置包含坐标轴的刻度标签
        //如果图形位置调整好却不包含坐标轴，坐标轴信息会显示不全
        containLabel: true
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: function(params) {
            return '<img style="height: 35px;width: 35px;" src="images/' + params[0].name + '.PNG"><br>&nbsp' + name_arrs[params[0].dataIndex] + '<br>&nbsp' + params[0].value + '次';
        }
    },
    xAxis: {
        axisLine: {
            show: false,

        },
        splitLine: {
            show: false,
            // lineStyle: {
            //     color: '#1D3039'
            // }
        },
        type: 'value',
        // min: 0,
        max: 20,
        axisLabel: {
            // formatter: '{value}'
            show:false
        },
        axisTick: {
            show:false
     
        },
    },
    yAxis: {
        name: '',
        type: 'category',
        data: [ 'bai', 'ren', 'xiu', 'zheng', 'kong'],
        //y轴线样式
        axisLine: {
            show: false,
            
        },
        //设置与x轴平行的线(分割线)不显示
        splitLine: {
            show: false,
        },
        axisTick: {
            alignWithLabel: true,
            lineStyle:{
                color:'#FFFFFF'},
     
        },
        axisLabel: {
            formatter: function(value, index) {
                // console.log(index);
                return '{' + value + '|}\n' + name_arrs[index] + ' ' + '';
            },
            interval:0,
            margin: 16,
            height: 40,
            color:'#FFFFFF',
            rich: {
                value: {
                    lineHeight: 65,
                    align: 'right',
                    color: '#34495e',
                    // backgroundColor: {
                    //     image: 'http://gaze.run/static/img/echarts_svg/terror.svg'
                    // }
                },



                kong: {
                    lineHeight: 36,
                    height: 30,
                    align: 'right',
                    backgroundColor: {
                        image: "images/kong.PNG"
                    }
                },

                zheng: {
                    lineHeight: 36,
                    height: 30,
                    align: 'right',
                    backgroundColor: {
                        image: "images/zheng.PNG"
                    }
                },

                xiu: {
                    lineHeight: 36,
                    height: 30,
                    align: 'right',
                    backgroundColor: {
                        image: "images/xiu.PNG"
                    }
                },

                ren: {
                    lineHeight: 36,
                    height: 30,
                    align: 'right',
                    backgroundColor: {
                        image: "images/ren.PNG"
                    }
                },

                bai: {
                    lineHeight: 36,
                    height: 30,
                    align: 'right',
                    backgroundColor: {
                        image: "images/bai.PNG"
                    }
                },

            }
        }
    },
    series: [{
        type: 'bar',
        barGap:'0',
        barWidth: '23',
        itemStyle: {
            normal: {
                barBorderRadius: 3,
            }
        },
        data: [
            
  
            {
                value: 0
            },
            {
                value: 0
            },
            {
                value: 2
            },
            {
                value: 8
            },
            {
                value: 3
            },
        ],
        label: {
            normal: {
                formatter: function(data) {
                    return data.value + '次';
                },
                show: true,
                position: 'right',
                distance: 5,
                color: 'white',
                // backgroundColor: '#1D3039',
                // padding: 0,
                // borderRadius: 20
            }
        },
    }]
};

  
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function() {
      myChart.resize();
    });
  })();


 // 象形柱状图
 (function() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.querySelector(".right .down"));

    option = {
        title: {
            text: '| “素媛”和“熔炉”的成就',
            left:'1%',
            y: 'top',
            textAlign: 'left',
            textStyle:{
                // color:'#FFFFFF',
                fontSize:14,
            },
            top:"3.5%"
        },
        tooltip:{show: true},
        legend:{show: true,
            top:'3%',right:'3%',icon:'roundRect'},
        // backgroundColor: '#031245',
       grid: {
           left: '1%',
           top: '42%',
           bottom: '16%',
           right: '1%'
       },
       xAxis: {
           data: ['提名', '获奖', '评分', '百度相关（W）','豆瓣讨论量（W）'],
          axisTick: {
               show: false
           },
           axisLine: {
               lineStyle: {
                   color: 'rgba(255, 129, 109,.1)',
                   width: 1 //这里是为了突出显示加上的
               }
           },
           axisLabel: {
               textStyle: {
                   color: '#999',
                   fontSize: 12
               }
           }
       },
       yAxis: [{
               axisTick: {
                   show: false
               },
               axisLine: {
                show: false
                //    lineStyle: {
                //        color: 'rgba(255, 129, 109, 0.1)',
                //        width: 1 //这里是为了突出显示加上的
                //    }
               },
               axisLabel: {
                show: false
                //    textStyle: {
                //        color: '#999'
                //    }
               },
               splitArea: {
                   areaStyle: {
                       color: 'rgba(255,255,255,.5)'
                   }
               },
               splitLine: {
                   show: true,
                   lineStyle: {
                       color: 'rgba(255, 129, 109, 0.1)',
                       width: 0.5,
                       type: 'dashed'
                   }
               }
           }
       ],
       series: [
    {
           name:'素媛    单位：个',
           type: 'pictorialBar',
        //    barCategoryGap: '70%',
           barGap: '90%',
           barWidth:"35%",
           
           symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
           label: {
               show: true,
               position: 'top',
               distance: 15,
               color: 'rgb(250,194,109)',
               fontWeight: 'normal',
               fontSize: 12,
           },
           itemStyle: {
               normal: {
                   color: {
                       type: 'linear',
                       x: 0,
                       y: 0,
                       x2: 0,
                       y2: 1,
                       colorStops: [{
                               offset: 1,
                               color:'rgb(250,194,109)'
                           },
                           {
                               offset: 0,
                               color:'rgba(250,194,109,0.2)'
                           }
                       ],
                       global: false //  缺省为  false
                   }
               },
               emphasis: {
                   opacity: 1
               }
           },
           data: [6,14,9.3,9,14]
       },
       {
        
        barWidth:"35%",
        name:'熔炉      单位：个',
        type: 'pictorialBar',
        barGap: '-35%',
        // barCategoryGap: '70%',
        symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
        label: {
            show: true,
            position: 'top',
            distance: 15,
            color: 'rgb(140,180,229)',
            fontWeight: 'normal',
            fontSize: 12,
        },
  
        itemStyle: {
            normal: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                            offset: 0,
                            color:'rgb(207,246,251)'
                        },
                        {
                            offset: 1,
                            color:'rgb(140,180,229)'
                        }
                    ],
                    global: false //  缺省为  false
                }
            },
            emphasis: {
                opacity: 1
            }
        },
        data: [9,1,9.4,13,20]
    }
    ]
   };


  
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function() {
      myChart.resize();
    });
  })();

 // 饼图
 (function() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.querySelector(".left .down"));

    option = {
        tooltip: {
          trigger: 'item'
        },
        title: {
            text: '| 强奸案中当事人关系',
            left:'3%',
            y: 'top',
            textAlign: 'left',
            textStyle:{
                color:'#FFFFFF',
                fontSize:13,
            },
            top:"2.5%"
        },
        legend: {
          bottom: '5%',
          left: 'center',
          textStyle:{color:'rgb(255,255,255)'},
          
        },
        series: [
          {
            name: '人物关系',
            type: 'pie',
            radius: ['40%', '63%'],
            center: ['50%', '43%'],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: '#fff',
              borderWidth: 2
            },
            label: {
            //   show: false,
              position: 'inside',
              color:'rgb(11,11,11)',
              formatter: '{d}%',
            //   padding: 1,
            },
            // emphasis: {
            //   label: {
            //     show: true,
            //     fontSize: '40',
            //     fontWeight: 'bold'
            //   }
            // },
            labelLine: {
              show: false
            },
            data: [
              { value: 56, name: '网友',itemStyle:{color:'rgb(183,179,204)'} },
              { value: 15, name: '一般朋友',itemStyle:{color:'rgb(243,221,200)'} },
              { value: 8, name: '前男女朋友',itemStyle:{color:'rgb(248,228,159)'} },
              { value: 4, name: '陌生人',itemStyle:{color:'rgb(195,211,224)'}},
            ]
          }
        ]
      };

  
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function() {
      myChart.resize();
    });
  })();