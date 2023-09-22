Chart.defaults.backgroundColor = 'rgb(128, 138, 135)';
stored = [[0, 0, 0, 0, 0, 0]
          [0, 0, 0, 0, 0, 0]
          [0, 0, 0, 0, 0, 0]
          [0, 0, 0, 0, 0, 0]
          [0, 0, 0, 0, 0, 0]]
x = 0
function shortPolling() {
var ws = new WebSocket('ws://localhost:8080');
   ws.addEventListener('message', function(e) {
     var data = JSON.parse(e.data);
     value = Number(data)
     for (var i = 0; i < 6; i++) {
        if (x < 5) {
          stored[i][x] = value
        }else{
          stored[i].push(value)
          stored[i].shift()
        }
     }
     if (x < 5) {
      x++
     }

   })

const chart1 = document.getElementById('chart1');
      new Chart(chart1, {
        type: 'line',
        data: {
          labels: [stored[0][0], stored[0][1], stored[0][2], stored[0][3], stored[0][4], stored[0][5]],
          datasets: [{
            label: '數據1',
            data: [0, 1, 2, 3, 4, 5],
            borderWidth: 3,
            borderColor: 'rgb(128, 138, 135)',
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: false
            }
          }
        }
      });
      

const chart2 = document.getElementById('chart2')

      new Chart(chart2, {
      type: 'line',
      data: {
        labels: [stored[1][0], stored[1][1], stored[1][2], stored[1][3], stored[1][4], stored[1][5]],
        datasets: [{
          label: '數據2',
          data: [0, 1, 2, 3, 4, 4],
          borderWidth: 3,
          borderColor: 'rgb(128, 138, 135)',
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: false
          }
        }
      }
    });

    const chart3 = document.getElementById('chart3')

    new Chart(chart3, {
    type: 'line',
    data: {
      labels: [stored[2][0], stored[2][1], stored[2][2], stored[2][3], stored[2][4], stored[2][5]],
      datasets: [{
        label: '數據3',
        data: [0, 1, 2, 3, 4, 4],
        borderWidth: 3,
        borderColor: 'rgb(128, 138, 135)',
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: false
        }
      }
    }
  });

  const chart4 = document.getElementById('chart4')

    new Chart(chart4, {
    type: 'line',
    data: {
      labels: [stored[3][0], stored[3][1], stored[3][2], stored[3][3], stored[3][4], stored[3][5]],
      datasets: [{
        label: '數據4',
        data: [0, 1, 2, 3, 4, 4],
        borderWidth: 3,
        borderColor: 'rgb(128, 138, 135)',
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: false
        }
      }
    }
  });

  const chart5 = document.getElementById('chart5')

    new Chart(chart5, {
    type: 'line',
    data: {
      labels: [stored[0][0], stored[0][1], stored[0][2], stored[0][3], stored[0][4], stored[4][5]],
      datasets: [{
        label: '數據5',
        data: [0, 1, 2, 3, 4, 4],
        borderWidth: 3,
        borderColor: 'rgb(128, 138, 135)',
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: false
        }
      }
    }
  });
}
setInterval(shortPolling, 1000);