Chart.defaults.backgroundColor = 'rgb(128, 138, 135)';
stored = [[0], [0], [0], [0], [0], [0]]
function shortPolling() {
var ws = new WebSocket('ws://localhost:8080');
   ws.addEventListener('message', function(e) {
    var data = JSON.parse(e.data);
    value = Number(data[0])
    stored[0].push(value)
    value1 = Number(data[1])
    stored[1].push(value)
    value2 = Number(data[2])
    stored[2].push(value)
    value3 = Number(data[3])
    stored[3].push(value)
    value4 = Number(data[4])
    stored[4].push(value)
   })

const chart1 = document.getElementById('chart1');
      new Chart(chart1, {
        type: 'line',
        data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
            label: '數據1',
            data: stored[0],
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
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '數據2',
          data: stored[1],
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
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '數據3',
        data: stored[2],
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
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '數據4',
        data: stored[3],
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
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '數據5',
        data: stored[4],
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