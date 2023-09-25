Chart.defaults.backgroundColor = 'rgb(128, 138, 135)';
var stored = [[0], [0], [0], [0], [0], [0]];



const ctx1 = document.getElementById('chart1');
      const chart1 = new Chart(ctx1, {
        type: 'line',
        data: {
          labels: stored[6],
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

const ctx2 = document.getElementById('chart2') 

      const chart2 = new Chart(ctx2, {
      type: 'line',
      data: {
        labels: stored[6],
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
      labels: stored[6],
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
      labels: stored[6],
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
      labels: stored[6],
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
var ws = new WebSocket('ws:127.0.0.1:80 ');
   ws.addEventListener('message', function(e) {
    var data = JSON.parse(e.data);
    value1 = Number(data.p1);
    chart1.data.datasets[0].data.push(value);
    value2 = Number(data.p2);
    chart2.data.datasets[0].data.push(value);
    value3 = Number(data.p3);
    chart3.data.datasets[0].data.push(value);
    value4 = Number(data.p4);
    chart4.data.datasets[0].data.push(value);
    value5 = Number(data.p5);
    chart5.data.datasets[0].data.push(value);
    value6 = toString(data.time);    
    chart1.data.labels.push(value);
    chart2.data.labels.push(value);
    chart3.data.labels.push(value);
    chart4.data.labels.push(value);
    chart5.data.labels.push(value);
   })
};
setInterval(shortPolling, 2000);
