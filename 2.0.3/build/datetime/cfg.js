define('kg/kcharts/5.0.0/datetime/cfg',[],function(require, exports, module) {

	var clsPrefix = "ks-chart-",
		themeCls = clsPrefix + "default",
		COLOR_TPL = "{COLOR}";
	return {
				themeCls: themeCls,
				autoRender: true,
				comparable: false,
				lineType: "straight",
				colors: [],
				title: {
					content: "",
					css: {
						"text-align": "center",
						"font-size": "16px"
					},
					isShow: true
				},
				subTitle: {
					content: "",
					css: {
						"text-align": "center",
						"font-size": "12px"
					},
					isShow: true
				},
				
				points: {
					isShow:false,
					attr: {
						type: "circle",
						stroke: "#fff",
						"r": 0,
						"stroke-width": 1.5,
						"fill": COLOR_TPL
					},
					hoverAttr: {
						type: "circle",
						stroke: "#fff",
						"r": 3,
						"fill": COLOR_TPL,
						"stroke-width": 1
					}
				},
				xLabels: {
					isShow: true,
					css: {
						"color": "#666",
						"font-size": "12px",
						"white-space": "nowrap",
						"position": "absolute" 
					}
				},
				yLabels: {
					isShow: true,
					css: {
						"color": "#666",
						"font-size": "12px",
						"white-space": "nowrap",
						"position": "absolute" 
					}
				},
				
				xAxis: {
					isShow: true,
					css: {
						zIndex: 10
					}
				},
				
				yAxis: {
					isShow: true,
					css: {
						zIndex: 10
					},
					num: 5
				},
				
				xGrids: {
					isShow: false,
					css: {}
				},
				
				yGrids: {
					isShow: true,
					css: {}
				},
				
				areas: {
					isShow: true,
					attr: {
						"fill": "90-#fff-" + COLOR_TPL,
						"stroke-width": 0,
						"opacity": 0.5
					}
				},
				
				line: {
					isShow: true,
					attr: {
						"stroke-width": "3px"
					},
					hoverAttr: {
						"stroke-width": "4px"
					}
				},
				
				pointLine: {
					isShow: false,
					css: {}
				},
				legend: {
					isShow: false
				},
				tip: {
					isShow: true,
					clsName: "",
					template: "",
					css: {

					},
					offset: {
						x: 0,
						y: 0
					},
					boundryDetect: true
				}

			};
})