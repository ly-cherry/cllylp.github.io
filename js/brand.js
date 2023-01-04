// 旭日图
(function() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.querySelector(".column .left .up"));

    var data = [
        {
          name: '非配偶',
          itemStyle: {
            color: 'rgb(255,169,100)'
          },
          children: [
            {
              name: '54%',
              value: 1,
              itemStyle: {
                color: 'rgb(250,241,208)'
              },
              children:[
                  {name: '全体',
                  value: 1,
                  itemStyle: {
                    color: 'rgb(190,225,201)'
                  }
                }]
            },
                  {
              name: '44%',
              value: 1,
              itemStyle: {
                color: 'rgb(250,241,208)'
              },
              children:[
                  {name: '男',
                  value: 1,
                  itemStyle: {
                    color: 'rgb(190,225,201)'
                  }
                }]
            },
                  {
              name: '58%',
              value: 1,
              itemStyle: {
                color: 'rgb(250,241,208)'
              },
              children:[
                  {name: '女',
                  value: 1,
                  itemStyle: {
                    color: 'rgb(190,225,201)'
                  }
                }]
            }
          ]
        },
        
        
        
          {
          name: '配偶',
          itemStyle: {
            color: 'rgb(255,169,100)'
          },
          children: [
            {
              name: '30%',
              value: 1,
              itemStyle: {
                color: 'rgb(250,241,208)'
              },
              children:[
                  {name: '全体',
                  value: 1,
                  itemStyle: {
                    color: 'rgb(190,225,201)'
                  }
                }]
            },
                  {
              name: '40%',
              value: 1,
              itemStyle: {
                color: 'rgb(250,241,208)'
              },
              children:[
                  {name: '男',
                  value: 1,
                  itemStyle: {
                    color: 'rgb(190,225,201)'
                  }
                }]
            },
                  {
              name: '25%',
              value: 1,
              itemStyle: {
                color: 'rgb(250,241,208)'
              },
              children:[
                  {name: '女',
                  value: 1,
                  itemStyle: {
                    color: 'rgb(190,225,201)'
                  }
                }]
            }
          ]
        },
        
          {
          name: '长辈',
          itemStyle: {
            color: 'rgb(255,169,100)'
          },
          children: [
            {
              name: '24%',
              value: 1,
              itemStyle: {
                color: 'rgb(250,241,208)'
              },
              children:[
                  {name: '全体',
                  value: 1,
                  itemStyle: {
                    color: 'rgb(190,225,201)'
                  }
                }]
            },
                  {
              name: '15%',
              value: 1,
              itemStyle: {
                color: 'rgb(250,241,208)'
              },
              children:[
                  {name: '男',
                  value: 1,
                  itemStyle: {
                    color: 'rgb(190,225,201)'
                  }
                }]
            },
                  {
              name: '27%',
              value: 1,
              itemStyle: {
                color: 'rgb(250,241,208)'
              },
              children:[
                  {name: '女',
                  value: 1,
                  itemStyle: {
                    color: 'rgb(190,225,201)'
                  }
                }]
            }
          ]
        },
        
          {
          name: '老师',
          itemStyle: {
            color: 'rgb(255,169,100)'
          },
          children: [
            {
              name: '6%',
              value: 1,
              itemStyle: {
                color: 'rgb(250,241,208)'
              },
              children:[
                  {name: '全体',
                  value: 1,
                  itemStyle: {
                    color: 'rgb(190,225,201)'
                  }
                }]
            },
                  {
              name: '10%',
              value: 1,
              itemStyle: {
                color: 'rgb(250,241,208)'
              },
              children:[
                  {name: '男',
                  value: 1,
                  itemStyle: {
                    color: 'rgb(190,225,201)'
                  }
                }]
            },
                  {
              name: '5%',
              value: 1,
              itemStyle: {
                color: 'rgb(250,241,208)'
              },
              children:[
                  {name: '女',
                  value: 1,
                  itemStyle: {
                    color: 'rgb(190,225,201)'
                  }
                }]
            }
          ]
        },
        
          {
          name: '其他',
          itemStyle: {
            color: 'rgb(255,169,100)'
          },
          children: [
            {
              name: '6%',
              value: 1,
              itemStyle: {
                color: 'rgb(250,241,208)'
              },
              children:[
                  {name: '全体',
                  value: 1,
                  itemStyle: {
                    color: 'rgb(190,225,201)'
                  }
                }]
            },
                  {
              name: '7%',
              value: 1,
              itemStyle: {
                color: 'rgb(250,241,208)'
              },
              children:[
                  {name: '男',
                  value: 1,
                  itemStyle: {
                    color: 'rgb(190,225,201)'
                  }
                }]
            },
                  {
              name: '6%',
              value: 1,
              itemStyle: {
                color: 'rgb(250,241,208)'
              },
              children:[
                  {name: '女',
                  value: 1,
                  itemStyle: {
                    color: 'rgb(190,225,201)'
                  }
                }]
            }
          ]
        },
        
          {
          name: '同辈',
          itemStyle: {
            color: 'rgb(255,169,100)'
          },
          children: [
            {
              name: '6%',
              value: 1,
              itemStyle: {
                color: 'rgb(250,241,208)'
              },
              children:[
                  {name: '全体',
                  value: 1,
                  itemStyle: {
                    color: 'rgb(190,225,201)'
                  }
                }]
            },
                  {
              name: '7%',
              value: 1,
              itemStyle: {
                color: 'rgb(250,241,208)'
              },
              children:[
                  {name: '男',
                  value: 1,
                  itemStyle: {
                    color: 'rgb(190,225,201)'
                  }
                }]
            },
                  {
              name: '5%',
              value: 1,
              itemStyle: {
                color: 'rgb(250,241,208)'
              },
              children:[
                  {name: '女',
                  value: 1,
                  itemStyle: {
                    color: 'rgb(190,225,201)'
                  }
                }]
            }
          ]
        },
        
          {
          name: '网友',
          itemStyle: {
            color: 'rgb(255,169,100)'
          },
          children: [
            {
              name: '6%',
              value: 1,
              itemStyle: {
                color: 'rgb(250,241,208)'
              },
              children:[
                  {name: '全体',
                  value: 1,
                  itemStyle: {
                    color: 'rgb(190,225,201)'
                  }
                }]
            },
                  {
              name: '5%',
              value: 1,
              itemStyle: {
                color: 'rgb(250,241,208)'
              },
              children:[
                  {name: '男',
                  value: 1,
                  itemStyle: {
                    color: 'rgb(190,225,201)'
                  }
                }]
            },
                  {
              name: '7%',
              value: 1,
              itemStyle: {
                color: 'rgb(250,241,208)'
              },
              children:[
                  {name: '女',
                  value: 1,
                  itemStyle: {
                    color: 'rgb(190,225,201)'
                  }
                }]
            }
          ]
        },
        
          {
          name: '公安机关',
          itemStyle: {
            color: 'rgb(255,169,100)'
          },
          children: [
            {
              name: '3%',
              value: 1,
              itemStyle: {
                color: 'rgb(250,241,208)'
              },
              children:[
                  {name: '全体',
                  value: 1,
                  itemStyle: {
                    color: 'rgb(190,225,201)'
                  }
                }]
            },
                  {
              name: '5%',
              value: 1,
              itemStyle: {
                color: 'rgb(250,241,208)'
              },
              children:[
                  {name: '男',
                  value: 1,
                  itemStyle: {
                    color: 'rgb(190,225,201)'
                  }
                }]
            },
                  {
              name: '3%',
              value: 1,
              itemStyle: {
                color: 'rgb(250,241,208)'
              },
              children:[
                  {name: '女',
                  value: 1,
                  itemStyle: {
                    color: 'rgb(190,225,201)'
                  }
                }]
            }
          ]
        }
      ];

    option = {
        title: {
          text: '/ 沉默的性侵受害者，报案率仅3.88%/',
          textStyle: {
            fontSize: 14,
            align: 'center',
            color:'#FFFFFF'
            
          },
          bottom:'10px',
          right:'17%'
        },
        series: {
          type: 'sunburst',
          data: data,
          center:['50%','45%'],
          radius: [0, '95%'],
          sort: undefined,
          emphasis: {
            focus: 'ancestor'
          },
          levels: [
            {},
            {
              r0: '20%',
              r: '45%',
              label: {
                rotate: 'tangential'
              },
              itemStyle: {
                borderWidth: 1
              }
            },
            {
              r0: '45%',
              r: '56%',
              label: {
                rotate: 'tangential',
                fontSize: 10,
                color: 'rgb(65,57,52)'
              }
            },
            {
              r0: '58%',
              r: '61%',
              label: {
                position: 'outside',
                // padding: 3,
                // silent: false,
                fontSize: 10.5,
                fontFamily:'sans-serif',
                // color: 'rgb(0,0,0)'
                color: 'rgb(190,225,201)'
              },
              itemStyle: {
                borderWidth: 2
              }
            }
          ]
        }
      };;
  
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function() {
      myChart.resize();
    });
  })();


// 极坐标柱状图
(function() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.querySelector(".column .middle .down"));

    const data = [
        [1.6,3.1,2.9],
        [1.5,3.05,2.78],
        [1.3,2.9,2.68],
        [1.15,2.54,2.37],
        [0.96,2.04,1.6],
        [0.88,1.82,1.8],
        [0.79,1.9,1.4],
        [0.65,1.1,1.36]
      ];
      // prettier-ignore
      const cities = ['2021', '2020', '2019', '2018', '2017', '2016', '2015', '2014'];
      const barHeight = 0.3;
      option = {
        title: {
          text: '| 性侵平均每起案例人数',
        //   subtext: 'Data from https://www.numbeo.com',
          textStyle: {
            fontSize: 14   
          },
        },
        legend: {
          show: true,
          top: 'bottom',
          data: ['人数', '增长率']
        },
        grid: {
          top: 100
        },
        angleAxis: {
          type: 'category',
          data: cities
        },
        tooltip: {
          show: true,
          formatter: function (params) {
            const id = params.dataIndex;
            return (
              cities[id] +
              '<br>最低人数：' +
              data[id][0] +'人'+
              '<br>最高人数：' +
              data[id][1] +'人'+
              '<br>平均人数：' +
              data[id][2] + '人'
            );
          }
        },
        radiusAxis: {
            interval:7
        },
        polar: {
          radius: '60%'
        },
        series: [
          {
            type: 'bar',
            itemStyle: {
              color: 'transparent'
            },
            data: data.map(function (d) {
              return d[0];
            }),
            coordinateSystem: 'polar',
            stack: 'Min Max',
            silent: true
          },
          {
            type: 'bar',

    /* background-image: linear-gradient(to right, rgb(255,198,142), rgb(252,241,207), rgb(194,227,201),rgb(179,252,235)); */

            itemStyle: {
                // color: 'rgb(50,149,181)'
                normal: {
                    color: {
                      type: "linear",
                      x: 0,
                      y: 0,
                      x2: 0,
                      y2: 1,
                      colorStops: [
                        {
                          offset: 1,
                          color: "rgba(23,65,139, 1)" // 0% 处的颜色
                        },

                        {
                            offset: 0.2,
                            color: "rgba(23,65,139, 1)" // 0% 处的颜色
                          },
                        {
                          offset: 0,
                          color: "rgba(179,252,235, 1)" // 100% 处的颜色
                        }
                      ],
                      globalCoord: false // 缺省为 false
                    } //渐变颜色
                  }
              },
            data: data.map(function (d) {
              return d[1] - d[0];
            }),
            coordinateSystem: 'polar',
            name: '人数',
            stack: 'Min Max'
          },
          {
            type: 'bar',
            itemStyle: {
              color: 'transparent'
            },
            data: data.map(function (d) {
              return d[2] - barHeight;
            }),
            coordinateSystem: 'polar',
            stack: 'Average',
            silent: true,
            z: 10
          },
          {
            type: 'bar',
            itemStyle: {
                color: 'rgb(255,203,98)'
              },
            data: data.map(function (d) {
              return barHeight * 2;
            }),
            coordinateSystem: 'polar',
            name: '增长率',
            stack: 'Average',
            barGap: '-100%',
            z: 10
          }
        ]
      };
  
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function() {
      myChart.resize();
    });
  })();


// 堆叠折线图
(function() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.querySelector(".column .right .up"));

    option = {
        // color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
        // color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
        //  color: ['rgb(192,150,154)', 'rgb(230,188,190)', 'rgb(183,192,165)', 'rgb(226,220,170)', 'rgb(186,174,188)'],
        //  color: ['rgb(203,52,59)', 'rgb(124,148,182)', 'rgb(11,35,63)', 'rgb(151,119,134)', 'rgb(207,184,91)'],
        //  color: ['rgb(40,52,67)', 'rgb(254,168,99)', 'rgb(4,163,170)', 'rgb(247,210,86)', 'rgb(22,64,138)'],
         color: ['rgb(254,168,99)', 'rgb(249,240,207)', 'rgb(190,224,201)', 'rgb(6,156,163)', 'rgb(185,173,187)'],
        title: {
          text: '| 近年来内地强奸拐卖案件',
          top:'10px',
          left:'10px',
          textStyle: {
            fontSize: 14,
            align: 'center',
            color:'rgb(255,255,255)'
            
          },
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        legend: {
          data: ['2014', '2015', '2016', '2017', '2018'],
          top:'35px',
          textStyle: {
            color: 'rgb(255,255,255)',
            fontSize:'5px',
            
        },
        top: 'bottom',
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '12%',
          width:'480px',
          height:'200px',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: ['2000', '2001', '2002', '2003', '2004', '2005', '2006',
            '2007', '2008', '2009', '2010', '2011', '2012', '2013',
            '2014', '2015', '2016', '2017', '2018', '2019', '2020',
            ],
            // splitLine: {
            //     show: true,
            //     lineStyle: {
            //         type: 'dashed',
            //         color: '#FFFFFF'
            //     }
            // },
            axisLine: {
                lineStyle: {
                    color: 'rgb(255,255,255)'
                }
            },
          }
        ],
        yAxis: [
          {
            type: 'value',
            axisLine: {
                lineStyle: {
                    color: 'rgb(255,255,255)',
                    
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    type: 'dashed',
                    color: '#FFFFFF',
                    width:0.3
                }
            },
          },
          
          
        ],
        series: [
          
          {
            name: '2014',
            type: 'line',
            stack: '2',
            smooth: true,
           lineStyle: {
              width: 1.8
            },
            showSymbol: false,
            // areaStyle: {
            //   opacity: 0.8,
            //   color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            //     {
            //       offset: 0,
            //       color: 'rgba(192,150,154,0.3)'
            //     },
            //     {
            //       offset: 1,
            //       color: 'rgba(77, 119, 255,0.1)'
            //     }
            //   ])
            // },
            emphasis: {
              focus: 'series'
            },
            data: ['4341', '4388', '5707', '5749', '4587', '4511', '4668', '4507', '4341', '5864', '5219', '4766', '4601', '4440', '4676', '4672', '5904', '5956', '4938', '4615', '4567', '4300', '4112', '5134', '5390', '4650', '4454', '4759', '4365', '4334']

          },
          {
            name: '2015',
            type: 'line',
            stack: '4',
            smooth: true,
           lineStyle: {
              width: 1.8
            },
            showSymbol: false,
            // areaStyle: {
            //   opacity: 0.8,
            //   color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            //     {
            //       offset: 0,
            //       color: 'rgba(255, 0, 135)'
            //     },
            //     {
            //       offset: 1,
            //       color: 'rgba(135, 0, 157)'
            //     }
            //   ])
            // },
            emphasis: {
              focus: 'series'
            },
            data: ['2898', '3050', '3212', '3266', '3379', '3326', '3977', '3909', '3583', '3896', '3799', '3126', '3035', '2987', '2991', '3110', '3108', '3001', '3226', '2851', '2996', '2683', '2771', '2392', '2348', '2251', '2108', '2066', '2125', '1831']
          },
          {
            name: '2016',
            type: 'line',
            stack: '5',
            smooth: true,
           lineStyle: {
              width: 1.8
            },
            showSymbol: false,
            label: {
              show: true,
              position: 'top'
            },
            // areaStyle: {
            //   opacity: 0.8,
            //   color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            //     {
            //       offset: 0,
            //       color: 'rgba(255, 191, 0)'
            //     },
            //     {
            //       offset: 1,
            //       color: 'rgba(224, 62, 76)'
            //     }
            //   ])
            // },
            emphasis: {
              focus: 'series'
            },
            data: ['1685', '1694', '1766', '1704', '1651', '1676', '1718', '1670', '1696', '1847', '1977', '1839', '2015', '2403', '3286', '1707', '1861', '1769', '1595', '1754', '1737', '1612', '1696', '1743', '1662', '1642', '1626', '1638', '1616', '1732']
          },
          {
            name: '2017',
            type: 'line',
            stack: '1',
            smooth: true,
           lineStyle: {
              width: 1.8
            },
            showSymbol: false,
            // areaStyle: {
            //   opacity: 0.8,
            //   color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            //     {
            //       offset: 0,
            //       color: 'rgba(128, 255, 165)'
            //     },
            //     {
            //       offset: 1,
            //       color: 'rgba(1, 191, 236,0.2)'
            //     }
            //   ])
            // },
            emphasis: {
              focus: 'series'
            },
            data: ['5152', '3774', '3134', '3036', '3186', '2999', '2800', '2829', '2857', '2738', '2732', '2789', '2764', '2806', '2712', '2760', '3142', '3109', '2794', '2776', '2733', '2506', '2575', '2708', '2609', '2665', '2550', '2536', '2717', '2616']
          },
          {
            name: '2018',
            type: 'line',
            stack: '3',
            smooth: true,
           lineStyle: {
              width: 1.8
            },
            showSymbol: false,
            // areaStyle: {
            //   opacity: 0.8,
            //   color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            //     {
            //       offset: 0,
            //       color: 'rgba(55, 162, 255)'
            //     },
            //     {
            //       offset: 0.3,
            //       color: 'rgba(116, 21, 219,0.2)'
            //     }
            //   ])
            // },
            emphasis: {
              focus: 'series'
            },
            data: ['1653', '1625', '1531', '1521', '1759', '1699', '1744', '1622', '1680', '1648', '1559', '1549', '1604', '1782', '1707', '1835', '1684', '1775', '1792', '1796', '1801', '1839', '2875', '2840', '3328', '2677', '2403', '2150', '1995', '1967']
          }
        ]
      };
  
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function() {
      myChart.resize();
    });
  })();


// 水球图
(function() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.querySelector(".column .right .down"));
    options = {
      series: [{
          type: 'liquidFill',
          waveAnimation: false,
          animation: false,
          data: [{
              value: 0.7
          }]
      }]
  };
  
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(options);
    window.addEventListener("resize", function() {
      myChart.resize();
    });
  })();


 