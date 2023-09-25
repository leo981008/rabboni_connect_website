Chart.defaults.backgroundColor = "rgb(128, 138, 135)";
var stored = [[0], [0], [0], [0], [0], [0]];

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
var ws = new WebSocket("ws:127.0.0.1:80 ");
   ws.addEventListener("message", function(e) {
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
