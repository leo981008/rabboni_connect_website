httpRequest.open("GET",  `http://192.168.68.102:5000/chart/`, false)
httpRequest.setRequestHeader('Access-Control-Allow-Headers', '*');
httpRequest.setRequestHeader('Content-type', 'application/ecmascript');
httpRequest.setRequestHeader('Access-Control-Allow-Origin', '*');
httpRequest.send();
var data = JSON.parse(httpRequest.responseText);

const ctx = document.getElementById('pie');
     const chart =  new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
            label: '資料統整',
            data: [1, 2, 3, 4, 5, 6],
            borderWidth: 3,
          }]
        }
      });

chart.data.dataset[0].data = data.data;
chart.data.dataset[0].lable = data.lable;
