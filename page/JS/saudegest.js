var chart = c3.generate({
   // bindto: '#chart',
    data: {
      x: 'x',
      columns: [
        ['x','2000-01-01', '2001-01-01', '2002-01-01', '2003-01-01', '2004-01-01', '2005-01-01', '2006-01-01', '2007-01-01', '2008-01-01', '2009-01-01', '2010-01-01', '2011-01-01', '2012-01-01', '2013-01-01', '2014-01-01'],
        ['Gestantes com 7 ou mais consultas de pré-natal / ano', 43.70, 45.54, 47.83, 49.91, 51.97, 52.76, 54.54, 55.82, 56.98, 57.85, 60.57, 61.28, 61.69, 62.42, 64.60],
        ['Proporção de partos normais', 67.45, 67.14, 65.79, 65.27, 63.25, 60.88, 59.02, 57.34, 55.20, 53.43, 50.91, 46.00, 44.17, 43.17],
        ['Percentual de óbitos de mulheres em idade fértil investigados', null, null, null, null, null, null, null, null, null, 55.28, 76.56, 79.66, 84.95, 87.63]
      ],
  //    axes: {
  //      data2: 'y2'
  //    },
      types: {
        'Gestantes com 7 ou mais consultas de pré-natal / ano': 'bar',
        'Proporção de partos normais': 'bar',
        'Percentual de óbitos de mulheres em idade fértil investigados': 'bar'
      }
    },
    axis: {
      x : {
            type : 'timeseries',
            tick: {
                format: function (x) { return x.getFullYear(); }
              //format: '%Y' // format string is also available for timeseries data
            }
          },
      y: {
        max: 100,
        min: 10,
        label: {
          text: 'Percentual',
          position: 'outer-middle'
        },
      },
 /*     y2: {
        show: true,
        label: {
          text: 'Y2 Label',
          position: 'outer-middle'
        }
      }*/
    }
});
/*
setTimeout(function () {
    chart.transform('line', 'Gestantes com 7 ou mais consultas de pré-natal / ano');
}, 2000);

setTimeout(function () {
    chart.transform('line', 'Proporção de partos normais');
}, 4000);

setTimeout(function () {
    chart.transform('line', 'Percentual de óbitos de mulheres em idade fértil investigados');
}, 6000);

setTimeout(function () {
    chart.transform('area');
}, 8000);

setTimeout(function () {
    chart.transform('pie');
}, 10000);

setTimeout(function () {
    chart.transform('spline');
}, 15000);

setTimeout(function () {
    chart.transform('area-spline');
}, 17000);

setTimeout(function () {
    chart.transform('donut');
}, 19000);

setTimeout(function () {
    chart.transform('scatter');
}, 21000);

setTimeout(function () {
    chart.transform('bar');
}, 23000);



  //    axes: {
  //      data2: 'y2'
  //    },
     
/*
chart.load({
  columns: [
    ['data1', 300, 100, 250, 150, 300, 150, 500],
    ['data2', 100, 200, 150, 50, 100, 250]
  ]
});
*/

/*
chart.unload({
    ids: ['data2', 'data3']
});
*/

/*
chart.hide(['data2', 'data3']);
chart.show(['data2', 'data3']);
*/