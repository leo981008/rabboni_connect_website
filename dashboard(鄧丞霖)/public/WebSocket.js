var ws = new WebSocket('');
  function shortPolling() {
    ws.addEventListener('message', function(e) {
      var data = JSON.parse(e.data);
      value = [(Number(data))]
    })
  }
  setInterval(shortPolling, 1000);