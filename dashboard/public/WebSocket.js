var ws = new WebSocket('');
  function shortPolling() {
    ws.addEventListener('message', function(e) {
      var msg = JSON.parse(e.data);
      value = [(Number(msg))]
    })
  }
  setInterval(shortPolling, 1000);