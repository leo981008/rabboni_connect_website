Chart.defaults.backgroundColor = 'rgb(128, 138, 135)';

const chart1 = document.getElementById('chart1');

      new Chart(chart1, {
        type: 'line',
        data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
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
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
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
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
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
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
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
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
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