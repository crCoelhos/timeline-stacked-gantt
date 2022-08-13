am5.ready(function() {

// Create root element
// https://www.amcharts.com/docs/v5/getting-started/#Root_element
var root = am5.Root.new("chartdiv");
root.dateFormatter.setAll({
  dateFormat: "yyyy-MM-dd",
  dateFields: ["valueX", "openValueX"]
});


// Set themes
// https://www.amcharts.com/docs/v5/concepts/themes/
root.setThemes([
  am5themes_Animated.new(root)
]);


// Create chart
// https://www.amcharts.com/docs/v5/charts/xy-chart/
var chart = root.container.children.push(am5xy.XYChart.new(root, {
  panX: false,
  panY: false,
  wheelX: "panX",
  wheelY: "zoomX",
  layout: root.verticalLayout
}));


// Add legend
// https://www.amcharts.com/docs/v5/charts/xy-chart/legend-xy-series/
var legend = chart.children.push(am5.Legend.new(root, {
  centerX: am5.p50,
  x: am5.p50
}))

var colors = chart.get("colors");

// Data
var data = [
  {
    category: "Edge",
    fromDate: "2022-01-01 08:00",
    toDate: "2022-02-01 08:00",
    columnSettings: {
      fill: am5.Color.brighten(colors.getIndex(0), 0)
    }
  },
  {
    category: "Edge",
    fromDate: "2022-02-01 08:00",
    toDate: "2022-03-01 08:00",
    columnSettings: {
      fill: am5.Color.brighten(colors.getIndex(0), 0.8)
    }
  },
  {
    category: "Edge",
    fromDate: "2022-03-01 08:00",
    toDate: "2022-04-01 08:00",
    columnSettings: {
      fill: am5.Color.brighten(colors.getIndex(0), 0.8)
    }
  },
  {
    category: "Edge",
    fromDate: "2022-04-01 08:00",
    toDate: "2022-05-01 08:00",
    columnSettings: {
      fill: am5.Color.brighten(colors.getIndex(0), 3.4)
    }
  },
  {
    category: "Edge",
    fromDate: "2022-05-01 08:00",
    toDate: "2022-06-01 08:00",
    columnSettings: {
      fill: am5.Color.brighten(colors.getIndex(0), 0.8)
    }
  },





  {
    category: "Razr",
    fromDate: "2022-02-01 09:00",
    toDate: "2022-03-01 12:00",
    columnSettings: {
      fill: am5.Color.brighten(colors.getIndex(2), 0)
    }
  },
  {
    category: "Razr",
    fromDate: "2022-03-01 09:00",
    toDate: "2022-04-01 12:00",
    columnSettings: {
      fill: am5.Color.brighten(colors.getIndex(2), 0.4)
    }
  },
  {
    category: "Razr",
    fromDate: "2022-04-01 09:00",
    toDate: "2022-05-01 12:00",
    columnSettings: {
      fill: am5.Color.brighten(colors.getIndex(2), 0.4)
    }
  },
  {
    category: "Razr",
    fromDate: "2022-05-01 09:00",
    toDate: "2022-06-01 12:00",
    columnSettings: {
      fill: am5.Color.brighten(colors.getIndex(2), 0.4)
    }
  },
  {
    category: "Razr",
    fromDate: "2022-06-01 09:00",
    toDate: "2022-07-01 12:00",
    columnSettings: {
      fill: am5.Color.brighten(colors.getIndex(2), 3.4)
    }
  },
  {
    category: "Razr",
    fromDate: "2022-07-01 09:00",
    toDate: "2022-08-01 12:00",
    columnSettings: {
      fill: am5.Color.brighten(colors.getIndex(2), 0.4)
    }
  },

  




  {
    category: "Teste",
    fromDate: "2022-06-01 09:00",
    toDate: "2022-07-01 12:00",
    columnSettings: {
      fill: am5.Color.brighten(colors.getIndex(9), 0)
    }
  },
  {
    category: "Teste",
    fromDate: "2022-07-01 09:00",
    toDate: "2022-08-01 12:00",
    columnSettings: {
      fill: am5.Color.brighten(colors.getIndex(9), 0.4)
    }
  },
  {
    category: "Teste",
    fromDate: "2022-08-01 09:00",
    toDate: "2022-09-01 12:00",
    columnSettings: {
      fill: am5.Color.brighten(colors.getIndex(9), 0.4)
    }
  },
  {
    category: "Teste",
    fromDate: "2022-09-01 09:00",
    toDate: "2022-10-01 12:00",
    columnSettings: {
      fill: am5.Color.brighten(colors.getIndex(9), 0.4)
    }
  },
  {
    category: "Teste",
    fromDate: "2022-10-01 09:00",
    toDate: "2022-11-01 12:00",
    columnSettings: {
      fill: am5.Color.brighten(colors.getIndex(9), 3.4)
    }
  },
  {
    category: "Teste",
    fromDate: "2022-11-01 09:00",
    toDate: "2022-12-01 12:00",
    columnSettings: {
      fill: am5.Color.brighten(colors.getIndex(9), 0.4)
    }
  }
];


// Create axes
// https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
var yAxis = chart.yAxes.push(
  am5xy.CategoryAxis.new(root, {
    categoryField: "category",
    renderer: am5xy.AxisRendererY.new(root, { inversed: false }),
    tooltip: am5.Tooltip.new(root, {
      themeTags: ["axis"],
      animationDuration: 200
    })
  })
);

yAxis.data.setAll([
  { category: "Edge" },
  { category: "Razr" },
  { category: "Teste" }
]);

var xAxis = chart.xAxes.push(
  am5xy.DateAxis.new(root, {
    baseInterval: { timeUnit: "month", count: 1 },
    renderer: am5xy.AxisRendererX.new(root, {})
  })
);


// Add series
// https://www.amcharts.com/docs/v5/charts/xy-chart/series/
var series = chart.series.push(am5xy.ColumnSeries.new(root, {
  xAxis: xAxis,
  yAxis: yAxis,
  openValueXField: "fromDate",
  valueXField: "toDate",
  categoryYField: "category",
  legendLabelText: "ROGERIO",
  sequencedInterpolation: true
}));

series.columns.template.setAll({
  templateField: "columnSettings",
  strokeOpacity: 1,
  legendLabelText: "ROGERIO",
  // tooltipText: "{category}: {openValueX.formatDate('yyyy-MM-dd HH:mm')} - {valueX.formatDate('yyyy-MM-dd HH:mm')}" //STD PATTERN OF EXHIBITION ON MOUSEOVER
  tooltipText: "JORGE"
});

series.data.processor = am5.DataProcessor.new(root, {
  dateFields: ["fromDate", "toDate"],
  dateFormat: "yyyy-MM-dd HH:mm"
});
series.data.setAll(data);

series.bullets.push(function () {
  return am5.Bullet.new(root, {
    locationY: 0.5,
    sprite: am5.Label.new(root, {
      text: "<PESSOA>",
      fill: root.interfaceColors.get("alternativeText"),
      centerY: am5.percent(50),
      centerX: am5.percent(50),
      populateText: true
    })
  });
})

// Add scrollbars
// chart.set("scrollbarX", am5.Scrollbar.new(root, {
//   orientation: "horizontal"
// }));

// Make stuff animate on load
// https://www.amcharts.com/docs/v5/concepts/animations/
series.appear();
chart.appear(1000, 100);

}); // end am5.ready()
