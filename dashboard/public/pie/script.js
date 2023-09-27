const ctx = document.getElementById('pie');
     const chart =  new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
            label: '數據1',
            data: [1, 2, 3, 4, 5, 6],
            borderWidth: 3,
          }]
        }
      });