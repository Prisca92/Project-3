let filename = 'nuclear_electric_power_prod.csv';

// all of your code should be inside this command
d3.csv('nuclear_electric_power_prod.csv').then(function (data) {
  
  
  let years = [];
  let units = [];

  for (var i = 0; i < data.length; i++) {
    console.log(data[i]);
  }
  Highcharts.chart('container', {
    chart: {
        zoomType: 'x'
    },
    title: {
        text: 'USD to EUR exchange rate over time',
        align: 'left'
    },
    subtitle: {
        text: document.ontouchstart === undefined ?
            'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in',
        align: 'left'
    },
    xAxis: {
        type: 'datetime'
    },
    yAxis: {
        title: {
            text: 'Exchange rate'
        }
    },
    legend: {
        enabled: false
    },
    plotOptions: {
        area: {
            fillColor: {
                linearGradient: {
                    x1: 0,
                    y1: 0,
                    x2: 0,
                    y2: 1
                },
                stops: [
                    [0, Highcharts.getOptions().colors[0]],
                    [1, Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                ]
            },
            marker: {
                radius: 2
            },
            lineWidth: 1,
            states: {
                hover: {
                    lineWidth: 1
                }
            },
            threshold: null
        }
    },

    series: [{
        type: 'area',
        name: 'USD to EUR',
        data: data
    }]
});
})();
  


 
