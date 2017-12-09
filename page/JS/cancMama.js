var chart = c3.generate({
   // bindto: '#chart',
    data: {
      columns: [
        ['SUS', 5711, 66374, 50856, 2102, 322175, 92621, 36738, 81459, 70330, 31394, 652531, 46026, 28471, 48277, 84519, 208392, 47691, 285550, 264780, 44657, 11536, 4079, 324000, 185005, 37228, 1228249, 28124],
        ['não SUS', 2783, 31495, 24886, 1035, 214607, 50517, 20976, 47013, 35419, 16778, 393317, 24801, 14548, 25494, 49943, 129460, 27828, 171706, 158459, 23796, 5690, 1905, 186126, 113724, 19509, 692722, 16180]
        ],
  //    axes: {
  //      data2: 'y2'
  //    },
      types: {
        'SUS': 'bar',
        'não SUS': 'bar' 
      }
    },
    axis: {
      x : {
            type : 'category',
            categories : ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO']
            },
      y: {
        max: 1400000,
        min: 1000,
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