 // 右侧受教育情况
 (function() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.querySelector(".right .up"));

    var getName =['酒后起兴','一时糊涂','早有预谋','觉得刺激','求爱不得'];
    var getValue =
       [19108,
        16024,
        14999,
        11480,
        11055,
        
       
        ];
    var max = Math.max.apply(null, getValue);
    var getMax=[];
    for(i=0;i<getName.length;i++){
        getMax.push(max)
    }
    console.log(getMax) ;
    
    option = {
        //  backgroundColor:"#003366",//右侧背景图
        grid: {
            left: '11%',
            right: '5%',
            bottom: '1%',
            top: '10%',
            containLabel: true
        },
        title: {
            text: '| 强奸案被告人动机',
            left:'4%',
            y: 'top',
            textAlign: 'left',
            textStyle:{
                color:'#FFFFFF',
                fontSize:16,
            },
            top:"3.5%"
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'none'
            },
            formatter: function(params) {
                return params[0].name  + ' : ' + params[0].value
            }
        },
        xAxis: {
            show: false,
            type: 'value'
        },
        yAxis: [{
            type: 'category',
            inverse: true,
            offset: 100,
            
            axisLabel: {
                show: true,
                margin:10,
                align: 'left',
                textStyle: {
                    color: '#66cc00',
                 
                },
                formatter: function(value,index) {
                         var num = ''
                         var str = ''
                         no = 'NO.';
                         num= (index + 1);
                         if (index === 0) {
                             str = '{no1|' + no + '} {num1|' + num + '} {title1|' + value + '}'
                         } else if (index === 1) {
                             str = '{no2|' + no + '} {num2|' + num + '} {title2|' + value + '}'
                         }else if (index === 2) {
                             str = '{no3|' + no + '} {num3|' + num + '} {title3|' + value + '}'
                         }else {
                             str = '{no|' + no + '} {num|' + num + '} {title|' + value + '}'
                         }
                         return str;
                         
                     },
                rich:{
                    no:{
                        color: 'rgb(254,218,144)',
                        fontSize:14,
                      
                    },
                    no1:{
                        color: '#9cc2e7',
                        fontSize:14,
                      
                    },
                    no2:{
                        color: 'rgb(127,195,196)',
                        fontSize:14,
                      
                    },
                    no3:{
                        color: '#a99abe',
                        fontSize:14,
                      
                    },
                    num:{
                        color: '#fff',
                        backgroundColor: 'rgb(254,218,144)',
                        width: 17,
                        height: 17,
                        fontSize:10,
                        align: 'center',
                        borderRadius: 100
                    },
                    num1:{
                        color: '#fff',
                        backgroundColor: '#9cc2e7',
                        width: 17,
                        height: 17,
                        fontSize:10,
                        align: 'center',
                        borderRadius: 100
                    },
                    num2:{
                        color: '#fff',
                        backgroundColor: 'rgb(127,195,196)',
                        width: 17,
                        height: 17,
                        fontSize:10,
                        align: 'center',
                        borderRadius: 100
                    },
                    num3:{
                        color: '#fff',
                        backgroundColor: '#a99abe',
                        width: 17,
                        height: 17,
                        fontSize:10,
                        align: 'center',
                        borderRadius: 100
                    },
                    title:{
                        
                        color: 'rgb(254,218,144)',
                    },
                    title1:{
                        
                        color: '#9cc2e7',
                    },
                    title2:{
                        
                        color: 'rgb(127,195,196)',
                    },
                    title3:{
                        
                        color: '#a99abe',
                    },
                }
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            data: getName
        }, {
            type: 'category',
            inverse: true,
            offset: -10,
            axisTick: 'none',
            axisLine: 'none',
            show: true,
            axisLabel: {
                textStyle: {
                    color: '#ffffff',
                    fontSize: '13',
                    fontWeight:'lighter',
                    fontFamily:"Arial"
                },
                
            },
            data:getValue
        }],
        series: [{
                name: '值',
                type: 'bar',
                zlevel: 1,
                itemStyle: {
                    normal: {
                        barBorderRadius: 15,
                        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                            offset: 0,
                            color: 'rgb(240,222,204)'
                        }, {
                            offset: 0.7,
                            color: 'rgb(240,222,204)'
                        },{
                            offset: 1,
                            color: 'rgb(195,211,224)'
                        },
                    ]),
                    },
                },
                barWidth: 15,
                
                data: getValue,
                // label: {
                //     normal: {
                //         formatter: function(data) {
                //             return data.value ;
                //         },
                //         show: true,
                //         position: 'right',
                //         // distance: 5,
                //         color: 'white',
                //         fontSize: '12'
                //         // backgroundColor: '#1D3039',
                //         // padding: 0,
                //         // borderRadius: 20
                //     }
                // },
            },
            {
                name: '背景',
                type: 'bar',
                barWidth: 15,
                barGap: '-100%',
                
                data: getMax,
                label:{show:false},
                itemStyle: {
                    normal: {
                        color: 'rgba(24,31,68,1)',
                        barBorderRadius: 30,
                    }
                },
            },
        ]
    };

  
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function() {
      myChart.resize();
    });
  })();



  //左侧倾诉对象
  (function() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.querySelector(".left .down"));
    option = {
        tooltip: {
            position: 'top',
            formatter: function(params) {
                return option.yAxis.data[params.value[1]] + '：'  + params.value[2];
            }
        },
        legend: {
            show:false
        },
        grid: {
            left: '10%',
            right: '26%',
            bottom: '6%',
            top: '9%',
            //图形位置包含坐标轴的刻度标签
            //如果图形位置调整好却不包含坐标轴，坐标轴信息会显示不全
            containLabel: true
        },
        title: {
            text: '| 受害者倾诉率',
            x: 'left',
            y: 'top',
            textAlign: 'left',
            textStyle:{
                // color:'#FFFFFF',
                fontSize:16,
            },
            top:"2.3%"
        },
        xAxis: {
            name: "单位：百分率",
            nameLocation: "center",
            nameGap: 30,
            type: 'category',
            data: ["男","女"],
            boundaryGap: false,
            splitLine: {
                show: false
            },
            axisLine: {
                show: false
            }
        },
        yAxis: {
            name: "受害者的倾诉对象",
            nameLocation: "center",
            nameGap: 100,
            type: 'category',
            data: ["同事","上司","妇联","公安机关","网友/陌生人","亲属（同辈）","其他","学校老师"],
            axisLabel: {
                margin: 20
            },
            splitLine: {
                show:true,
                lineStyle: {
                    type: "dashed"
                }
            },
            axisLine: {
                show: false
            }
        },
        series: [{
                name: "同事",
                type: "scatter",
                symbolSize: function (val) {
                  return val[2] * 2.8;
                },
                data: [[0, 0, 1.94],[1, 0, 0.41]],
                animationDelay: function (idx) {
                  return idx * 5;
                },
                label:{
                  show: true,
                  formatter: param => {
                    return param.data[2];
                  },
                  position: 'right'
                },
              },
              {
                name: "上司",
                type: "scatter",
                symbolSize: function (val) {
                  return val[2] * 2.8;
                },
                 data: [[0, 1, 2.06],[1, 1, 0.68]],
                animationDelay: function (idx) {
                  return idx * 5;
                },
                label:{
                  show: true,
                  formatter: param => {
                    return param.data[2];
                  },
                  position: 'right'
                },
              },
              {
                name: "妇联",
                type: "scatter",
                symbolSize: function (val) {
                  return val[2] * 2.8;
                },
                 data: [[0, 2, 1.41],[1, 2, 2.50]],
                animationDelay: function (idx) {
                  return idx * 5;
                },
                label:{
                  show: true,
                  formatter: param => {
                    return param.data[2];
                  },
                  position: 'right'
                },
              },
              {
                name: "公安机关",
                type: "scatter",
                symbolSize: function (val) {
                  return val[2] * 2.8;
                },
                 data: [[0, 3, 5.21],[1, 3, 3.29]],
                animationDelay: function (idx) {
                  return idx * 5;
                },                
                label:{
                  show: true,
                  formatter: param => {
                    return param.data[2];
                  },
                  position: 'right'
                },
              },
              {
                name: "网友/陌生人",
                type: "scatter",
                symbolSize: function (val) {
                  return val[2] * 2.8;
                },
                 data: [[0, 4, 4.91],[1, 4, 7.02]],
                animationDelay: function (idx) {
                  return idx * 5;
                },                label:{
                  show: true,
                  formatter: param => {
                    return param.data[2];
                  },
                  position: 'right'
                },
              },
              
              {
                name:"亲属（同辈）",
                type: "scatter",
                symbolSize: function (val) {
                  return val[2] * 2.8;
                },
                 data: [[0, 5, 7.51],[1, 5, 5.93]],
                animationDelay: function (idx) {
                  return idx * 5;
                },
                label:{
                  show: true,
                  formatter: param => {
                    return param.data[2];
                  },
                  position: 'right'
                },
              },
              {
                name: "其他",
                type: "scatter",
                symbolSize: function (val) {
                  return val[2] * 2.8;
                },
                 data: [[0, 6, 6.97],[1, 6, 6.44]],
                animationDelay: function (idx) {
                  return idx * 5;
                },                label:{
                  show: true,
                  formatter: param => {
                    return param.data[2];
                  },
                  position: 'right'
                },
              },
              {
                name: "学校老师",
                type: "scatter",
                symbolSize: function (val) {
                  return val[2] * 2.8;
                },
                 data: [[0, 7, 10.41],[1, 7, 4.95]],
                animationDelay: function (idx) {
                  return idx * 5;
                },
                label:{
                  show: true,
                  formatter: param => {
                    return param.data[2];
                  },
                  position: 'right'
                },
              }, 
            ]
    };

  
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function() {
      myChart.resize();
    });
  })();