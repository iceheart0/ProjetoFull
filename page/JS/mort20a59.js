var chart = c3.generate({
    bindto: '#chart',
    data: {
      x: 'x',
      columns: [
        ['x','2000-01-01', '2001-01-01', '2002-01-01', '2003-01-01', '2004-01-01', '2005-01-01', '2006-01-01', '2007-01-01', '2008-01-01', '2009-01-01', '2010-01-01', '2011-01-01', '2012-01-01', '2013-01-01', '2014-01-01', '2015-01-01'],
        ['Causas Externas', 9249, 9163, 9706, 9666, 9997, 10374, 10333, 10490, 10912, 11166, 12044, 12220, 12568, 12199, 12590, 11618 ],
        ['Aparelho Circulatório', 25959, 25706, 25688, 26029, 26677, 25943, 26899, 27134, 28129, 27333, 27415, 28027, 27141, 27414, 26523, 26808 ],
        ['Neoplasias', 20766, 21860, 22386, 22952, 23925, 25072, 26191, 26724, 27912, 28959, 29489, 30448, 31204, 31763, 32046, 33063 ],
        ['Infecciosas Parasitárias', 6843, 7039, 6939, 7185, 7147, 7344, 7320, 7353, 7521, 7637, 7634, 7542, 7508, 7727, 7512, 7789 ],
        ['Aparelho Respiratório', 6319, 6504, 6563, 6556, 6580, 6246, 6684, 6459, 6633, 8377, 7269, 7473, 7583, 8204, 7793, 7868 ]
      ],
  //    axes: {
  //      data2: 'y2'
  //    },
      types: {
        'Causas Externas': 'bar',
        'Aparelho Circulatório': 'bar',
        'Neoplasias': 'bar',
        'Infecciosas Parasitárias': 'bar',
        'Aparelho Respiratório': 'bar'
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
        max: 35000,
        min: 6000,
        label: {
          text: 'Número',
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


setTimeout(function () {
    chart.transform('pie');
}, 5000);
/*
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

*/

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