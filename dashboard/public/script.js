Chart.defaults.backgroundColor = "rgb(128, 138, 135)";
var stored = [[0], [0], [0], [0], [0], [0]];
const httpRequest = new XMLHttpRequest();


function draw_line_chart(data, element_id, label="數據", color="rgb(128, 138, 135)") {
      const ctx = document.getElementById(element_id);
      const chart = new Chart(ctx, {
        type: "line",
        data: {
          labels: stored[5],
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
    httpRequest.open("GET", "http://192.168.68.106:5000", true)
    httpRequest.setRequestHeader('Access-Control-Allow-Headers', '*');
    httpRequest.setRequestHeader('Content-type', 'application/ecmascript');
    httpRequest.setRequestHeader('Access-Control-Allow-Origin', '*');
    httpRequest.send();
    httpRequest.onreadystatechange = () => {
      console.log(httpRequest.responseText);
      var data = JSON.parse(httpRequest.responseText);

      value1 = Number(data.p1);
      chart1.data.datasets[0].data.push(value1);
      value2 = Number(data.p2);
      chart2.data.datasets[0].data.push(value2);
      value3 = Number(data.p3);
      chart3.data.datasets[0].data.push(value3);
      value4 = Number(data.p4);
      chart4.data.datasets[0].data.push(value4);
      value5 = Number(data.p5);
      chart5.data.datasets[0].data.push(value5);
      value6 = toString(data.time);    
      chart1.data.labels.push(value);
      chart2.data.labels.push(value);
      chart3.data.labels.push(value);
      chart4.data.labels.push(value);
      chart5.data.labels.push(value);
    };
   }
;

setInterval(shortPolling, 2000);
