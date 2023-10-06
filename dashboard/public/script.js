Chart.defaults.backgroundColor = "rgb(128, 138, 135)";
const httpRequest = new XMLHttpRequest();
var stored = [[0],[0],[0],[0],[0],[0]]

function draw_line_chart(data, element_id, label="數據", color="rgb(128, 138, 135)") {
      const ctx = document.getElementById(element_id);
      const chart = new Chart(ctx, {
        type: "line",
        data: {
          labels: [[0]],
          datasets: [{
            label: label,
            data: data,
            borderWidth: 3,
            borderColor: color,
          }]
        },
        options: {
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: false, 
            }
          }
        }
      });

      return chart
}





charts = []

for (i = 0; i < stored.length - 1; i++) {
  charts.push(draw_line_chart(stored[i], `chart${i+1}`, `數據${i+1}`));
}



function shortPolling() {
    httpRequest.open("GET",  `http://192.168.68.102:5000`, false)
    httpRequest.setRequestHeader('Access-Control-Allow-Headers', '*');
    httpRequest.setRequestHeader('Content-type', 'application/ecmascript');
    httpRequest.setRequestHeader('Access-Control-Allow-Origin', '*');
    httpRequest.send();
    var data = JSON.parse(httpRequest.responseText);

    value1 = Number(data.p1);
    charts[0].data.datasets[0].data.push(value1);
    value2 = Number(data.p2);
    charts[1].data.datasets[0].data.push(value2);
    value3 = Number(data.p3);
    charts[2].data.datasets[0].data.push(value3);
    value4 = Number(data.p4);
    charts[3].data.datasets[0].data.push(value4);
    value5 = Number(data.p5);
    charts[4].data.datasets[0].data.push(value5);
    date = new Date(data.time*1000)
    value6 = date.toString()
      for (i = 0; i < 5 ; i++) {
        charts[i].data.labels.push(value6.substring(4, 10) + value6.substring(15, 21));
      }
    

    charts.forEach(element => {
      element.update()
    });
   }
;

setInterval(shortPolling, 2000);
