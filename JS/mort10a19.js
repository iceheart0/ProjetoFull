var chart = c3.generate({
   // bindto: '#chart',
    data: {
      x: 'x',
      columns: [
        ['x','2000-01-01', '2001-01-01', '2002-01-01', '2003-01-01', '2004-01-01', '2005-01-01', '2006-01-01', '2007-01-01', '2008-01-01', '2009-01-01', '2010-01-01', '2011-01-01', '2012-01-01', '2013-01-01', '2014-01-01', '2015-01-01'],
        ['Causas Externas', 2765.00, 2558.00, 2687.00, 2615.00, 2541.00, 2509.00, 2427.00, 2401.00, 2420.00, 2361.00, 2478.00, 2524.00, 2534.00, 2434.00, 2374.00, 2132.00],
        ['Aparelho Respiratório', 449.00, 502.00, 462.00, 425.00, 426.00, 403.00, 416.00, 367.00, 361.00, 460.00, 386.00, 378.00, 397.00, 394.00, 358.00, 346.00],
        ['Neoplasias', 656.00, 661.00, 649.00, 631.00, 715.00, 707.00, 734.00, 724.00, 675.00, 721.00, 679.00, 713.00, 714.00, 650.00, 624.00, 690.00],
        ['Sistema Nervoso', 330.00, 349.00, 320.00, 378.00, 354.00, 346.00, 404.00, 398.00, 397.00, 397.00, 443.00, 452.00, 455.00, 513.00, 448.00, 428.00],
        ['Sintomas e sinais', 703.00, 667.00, 625.00, 645.00, 529.00, 460.00, 390.00, 368.00, 412.00, 394.00, 397.00, 375.00, 327.00, 321.00, 362.00, 352.00]
      ],
  //    axes: {
  //      data2: 'y2'
  //    },
      types: {
        'Causas Externas': 'bar',
        'Aparelho Respiratório': 'bar',
        'Neoplasias': 'bar',
        'Sistema Nervoso': 'bar',
        'Sintomas e sinais': 'bar'
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
        max: 3000,
        min: 300,
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