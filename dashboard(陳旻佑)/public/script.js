Chart.defaults.backgroundColor = 'rgb(128, 138, 135)';
stored = [[0], [0], [0], [0], [0], [0]];



const ctx1 = document.getElementById('chart1');
      const chart1 = new Chart(ctx1, {
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
      stored = [[5]];
    chart1.update();

const ctx2 = document.getElementById('chart2') 

      const chart2 = new Chart(ctx2, {
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

    const ctx3 = document.getElementById('chart3')

    const chart3 = new Chart(ctx3, {
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

  const ctx4 = document.getElementById('chart4')

    const chart4 = new Chart(ctx4, {
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

  const ctx5 = document.getElementById('chart5')

    const chart5 = new Chart(ctx5, {
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
    stored[3].push(wvalue);
    chart4.update();
    value = Number(data.p5);
    stored[4].push(value);
    chart5.update();
   })
}
setInterval(shortPolling, 2000);
