// Data retrieved https://www.eia.gov/totalenergy/data/annual/showtext.php?t=ptb0901
Highcharts.chart('container', {
    chart: {
        type: 'line'
    },
    title: {
        text: 'NUCLEAR OPERATING UNIT'
    },
    subtitle: {
        text: 'Source: ' +
            '<a href="https://www.eia.gov/totalenergy/data/annual/showtext.php?t=ptb0901" '
    },
    xAxis: {
        categories: ['1970', '1971', '1973', '1975', '1979', '1982', '1985', '1987', '1990', '1993', '1995', '1997','2000','2005','2007','2009','2011','2015','2017','2020','2022']
    },
    yAxis: {
        title:{
            text:'TERM'
            [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
        }      
},

    plotOptions: {
        line: {
            dataLabels: {
                enabled: true
            },
            enableMouseTracking: false
        }
    },
    series: [{
        name: 'VALUE',
        data: [94.659,95.546,96.501,98.119,99.433,99.629,99.565,98.672,98.569,99.24,101.885,101.419,101.167,101.004,100.755,100.266,100.334,99.988,99.628,99.209,98.657,98.159,97.86,97.411,97.07,99.716,100.784,99.515,99.148,99.041,98.985,99.589,99.624,98.161,94.695,93.583,85.241,79.397,69.652,63.009,60.035,56.042,51.81,49.747,50.824,46.303,43.822,37.267,31.867,22.683,14.481,9.033,7.004
            ]
    }],
    
});
