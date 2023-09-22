Chart.defaults.backgroundColor = 'rgb(128, 138, 135)';
stored = [[0], [0], [0], [0], [0], [0]]

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

function shortPolling() {
var ws = new WebSocket('ws:127.0.0.1:5000');
   ws.addEventListener('message', function(e) {
    var data = JSON.parse(e.data);
    value = Number(data.p1);
    stored[0].push(value);
    chart1.update();
    value = Number(data.p2);
    stored[1].push(value);
    chart2.update();
    value = Number(data.p3);
    stored[2].push(value);
    chart3.update();
    value = Number(data.p4);
    stored[3].push(value);
    chart4.update();
    value = Number(data.p5);
    stored[4].push(value);
    chart5.update();
   })
}
setInterval(shortPolling, 1000);
