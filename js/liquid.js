var colors = ['rgba(229,116,98,0.7)', '#DECAC1', 'rgb(127,148,165)', '#B2D4C6', "rgb(82,101,107)", 'rgb(227,210,120)', 'rgb(162,169,211)', "#9a60b4", "#ea7ccc"];
    option = {
        // backgroundColor:'',

        grid: {
            top: '10%',
            left: '5%',
            right: '5%',
            bottom: '15%',
        },
        xAxis: [{
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    color: 'rgb(0,0,0)',
                    fontSize: 14
                },
                interval:0
            },
            offset: 5,
            data: ['从未接触', '1周内', '1个月内', '3个月内', '半年内', '1年内', '1年前']
        },
          {
              axisTick: {
                  show: false
              },
              axisLine: {
                  show: false
              },
              axisLabel: {
                  show: false,
              },
              data: [0, 0, 0, 0, 0, 0, 0],
          },
          {
              //name: '单位：件',
              axisTick: {
                  show: false
              },
              axisLine: {
                  show: false
              },
              axisLabel: {
                  show: false,
              },
              nameGap: '60',
              data: [],
          }, ],
        yAxis: {
            type: 'value',
            show: false,
            max: 100,
        },

        title: {
            text: '| 受害人接触或开展过防性侵教育情况 ',
            subtext:'——占比数水球图',
            textStyle: {
              fontSize: 14           
            },
            top:'5%',
            left:'1.5%'
          },
        series: [
        {
            type: 'bar',
            xAxisIndex: 0,
            data: [11, 35, 11, 35,11, 35,11],
            barWidth: 2,
            itemStyle: {
                normal: {
                    color: function (params) {
                        return colors[params.dataIndex];
                    }
                },
            },
            z: 2,
        },
            {
                name: '外框',
                type: 'bar',
                xAxisIndex: 2,
                barGap: '-100%',
                data: [11, 35, 11, 35,11, 35,11],
                barWidth: 2,
                itemStyle: {
                    normal: {
                        color: function (params) {
                            return colors[params.dataIndex];
                        },
                        barBorderRadius: 50,
                    },
                },
                z: 0,
            },
            {
                name: '外圆',
                type: 'scatter',
                hoverAnimation: false,
                data: [0, 0, 0, 0, 0, 0, 0],
                xAxisIndex: 2,
                symbolSize: 8,
                itemStyle: {
                    normal: {
                        color: function (params) {
                            return colors[params.dataIndex];
                        },
                        opacity: 1,
                    },
                },
                z: 0,
            },
                {
                    type: 'liquidFill',
                    radius: '28%',
                    center: ['11.3%', '63%'],
                    data: [0.10], // data个数代表波浪数
                    // color: ['rgba(229,116,98,0.7)'],
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
                                  color: "rgba(211,73,47, 0.8)" // 0% 处的颜色
                                },
        
                                {
                                    offset: 0.7,
                                    color: "rgba(221,104,81, 1)" // 0% 处的颜色
                                  },
                                {
                                  offset: 0.4,
                                  color: "rgba(221,104,81, 0.5)" // 100% 处的颜色
                                },
                                {
                                    offset: 0,
                                    color: "rgba(228,117,98, 0.4)" // 100% 处的颜色
                                  }
                              ],
                              globalCoord: false // 缺省为 false
                            } //渐变颜色
                          }
                      },
                    outline: { // 轮廓设置
                        show: true,
                        borderDistance: 3, // 边框与球中间间距
                        itemStyle: {
                            borderWidth: 2,
                            borderColor: 'rgba(229,116,98,0.7)',
                            shadowBlur: 8,
                            shadowColor: '#fff'
                        }
                    },
                    backgroundStyle: {
                        shadowColor: 'rgba(0, 0, 0, 0)',
                        opacity: 0,
                    },

                    label: {
                        textStyle: {
                            color: 'rgb(11,11,11)',
                            fontSize: 13
                        }
                    }
                }, {
                    type: 'liquidFill',
                    radius: '28%',
                    center: ['24.2%', '45%'],
                    data: [0.0629], // data个数代表波浪数
                    // color: ['#DECAC1'],
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
                                  color: "rgba(179,65,112, 1)" // 0% 处的颜色
                                },
        
                                {
                                    offset: 0.5,
                                    color: "rgba(189,89,139, 1)" // 0% 处的颜色
                                  },
                                {
                                  offset: 0,
                                  color: "rgba(149,184,170, 0.5)" // 100% 处的颜色
                                }
                              ],
                              globalCoord: false // 缺省为 false
                            } //渐变颜色
                          }
                      },





                    outline: { // 轮廓设置
                        show: true,
                        borderDistance: 3, // 边框与球中间间距
                        itemStyle: {
                            borderWidth: 2,
                            borderColor: '#DECAC1',
                            shadowBlur: 8,
                            shadowColor: '#fff'
                        }
                    },
                    backgroundStyle: {
                        shadowColor: 'rgba(0, 0, 0, 0)',
                        opacity: 0,
                    },

                    label: {
                        textStyle: {
                            color: 'rgb(11,11,11)',
                            fontSize: 13
                        }
                    }
                }, {
                    type: 'liquidFill',
                    radius: '28%',
                    center: ['37.1%', '63%'],
                    data: [0.16], // data个数代表波浪数
                    // color: ['rgb(127,148,165)'],
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
                                  offset: 0.6,
                                  color: "rgba(133,154,171, 1)" // 0% 处的颜色
                                },
        
                                {
                                    offset: 0,
                                    color: "rgba(143,161,175, 1)" // 0% 处的颜色
                                  },
                                {
                                  offset: 1,
                                  color: "rgba(23,65,139, 1)" // 100% 处的颜色
                                }
                              ],
                              globalCoord: false // 缺省为 false
                            } //渐变颜色
                          }
                      },
                    outline: { // 轮廓设置
                        show: true,
                        borderDistance: 3, // 边框与球中间间距
                        itemStyle: {
                            borderWidth: 2,
                            borderColor: 'rgb(127,148,165)',
                            shadowBlur: 8,
                            shadowColor: '#fff'
                        }
                    },
                    backgroundStyle: {
                        shadowColor: 'rgba(0, 0, 0, 0)',
                        opacity: 0,
                    },

                    label: {
                        textStyle: {
                             color: 'rgb(11,11,11)',
                            fontSize: 13
                        }
                    }
                }, {
                    type: 'liquidFill',
                    radius: '28%',
                    center: ['50%', '45%'],
                    data: [0.20], // data个数代表波浪数
                    // color: ['#B2D4C6'],

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
                                  color: "rgba(32,106,107, 1)" // 0% 处的颜色
                                },
        
                                {
                                    offset: 0,
                                    color: "rgba(137,199,178, 1)" // 0% 处的颜色
                                  },
                                {
                                  offset: 0.6,
                                  color: "rgba(203,218,205, 1)" // 100% 处的颜色
                                }
                              ],
                              globalCoord: false // 缺省为 false
                            } //渐变颜色
                          }
                      },



                    outline: { // 轮廓设置
                        show: true,
                        borderDistance: 3, // 边框与球中间间距
                        itemStyle: {
                            borderWidth: 2,
                            borderColor: '#B2D4C6',
                            shadowBlur: 8,
                            shadowColor: '#fff'
                        }
                    },
                    backgroundStyle: {
                        shadowColor: 'rgba(0, 0, 0, 0)',
                        opacity: 0,
                    },

                    label: {
                        textStyle: {
                            color: 'rgb(11,11,11)',
                           fontSize: 13
                       }
                    }
                }, {
                    type: 'liquidFill',
                    radius: '28%',
                    center: ['62.9%', '63%'],
                    data: [0.20], // data个数代表波浪数
                    // color: ['rgb(82,101,107)'],
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
                                  color: "rgba(16,28,40, 0.8)" // 0% 处的颜色
                                },
        
                                {
                                    offset: 0.7,
                                    color: "rgba(57,70,79, 1)" // 0% 处的颜色
                                  },
                                {
                                  offset: 0.4,
                                  color: "rgba(82,101,107, 1)" // 100% 处的颜色
                                },
                                {
                                    offset: 0,
                                    color: "rgba(133,146,163, 0.8)" // 100% 处的颜色
                                  }
                              ],
                              globalCoord: false // 缺省为 false
                            } //渐变颜色
                          }
                      },
                    outline: { // 轮廓设置
                        show: true,
                        borderDistance: 3, // 边框与球中间间距
                        itemStyle: {
                            borderWidth: 2,
                            borderColor: 'rgb(82,101,107)',
                            shadowBlur: 8,
                            shadowColor: '#fff'
                        }
                    },
                    backgroundStyle: {
                        shadowColor: 'rgba(0, 0, 0, 0)',
                        opacity: 0,
                    },

                    label: {
                        textStyle: {
                            color: 'rgb(11,11,11)',
                            fontSize: 13
                        }
                    }
                }, {
                    type: 'liquidFill',
                    radius: '28%',
                    center: ['75.8%', '45%'],
                    data: [0.18], // data个数代表波浪数
                    // color: ['rgb(227,210,120)'],
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
                                  color: "rgba(188,138,41, 1)" // 0% 处的颜色
                                },
        
                                {
                                    offset: 0.7,
                                    color: "rgba(213,187,66, 1)" // 0% 处的颜色
                                  },
                                {
                                  offset: 0.4,
                                  color: "rgba(228,211,121, 1)" // 100% 处的颜色
                                },
                                {
                                    offset: 0,
                                    color: "rgba(237,228,173, 1)" // 100% 处的颜色
                                  }
                              ],
                              globalCoord: false // 缺省为 false
                            } //渐变颜色
                          }
                      },

                    outline: { // 轮廓设置
                        show: true,
                        borderDistance: 3, // 边框与球中间间距
                        itemStyle: {
                            borderWidth: 2,
                            borderColor: 'rgb(227,210,120)',
                            shadowBlur: 8,
                            shadowColor: '#fff'
                        }
                    },
                    backgroundStyle: {
                        shadowColor: 'rgba(0, 0, 0, 0)',
                        opacity: 0,
                    },

                    label: {
                        textStyle: {
                             color: 'rgb(11,11,11)',
                            fontSize: 13
                        }
                    }
                }, {
                    type: 'liquidFill',
                    radius: '28%',
                    center: ['88.7%', '63%'],
                    data: [0.10], // data个数代表波浪数
                    // color: ['rgb(127,148,165)'],
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
                                    color: "rgba(73,72,158, 0.8)" // 0% 处的颜色
                                  },
                                {
                                  offset: 0.6,
                                  color: "rgba(96,93,172, 1)" // 0% 处的颜色
                                },
        
                                {
                                    offset: 0.4,
                                    color: "rgba(115,124,189, 1)" // 0% 处的颜色
                                  },
                                {
                                  offset: 0,
                                  color: "rgba(162,169,211, 0)" // 100% 处的颜色
                                }
                              ],
                              globalCoord: false // 缺省为 false
                            } //渐变颜色
                          }
                      },



                    outline: { // 轮廓设置
                        show: true,
                        borderDistance: 3, // 边框与球中间间距
                        itemStyle: {
                            borderWidth: 2,
                            borderColor: 'rgb(162,169,211)',
                            shadowBlur: 8,
                            shadowColor: '#fff'
                        }
                    },
                    backgroundStyle: {
                        shadowColor: 'rgba(0, 0, 0, 0)',
                        opacity: 0,
                    },

                    label: {
                        textStyle: {
                             color: 'rgb(11,11,11)',
                            fontSize: 13
                        }
                    }
                }
        ],
    };

var chart = echarts.init(document.getElementById('chart'));
chart.setOption(option);

window.onresize = function () {
    chart.resize();
};

var _hmt = _hmt || [];
(function() {
var hm = document.createElement('script');
hm.src = '//hm.baidu.com/hm.js?4bad1df23f079e0d12bdbef5e65b072f';
var s = document.getElementsByTagName('script')[0];
s.parentNode.insertBefore(hm, s);
})();
