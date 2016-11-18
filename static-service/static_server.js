const express = require('express');
const app = express();

app.use(express.static(__dirname + '/static'));

app.get('/hello', (reg, res) => {
  res.send('Static Server says Hello');
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Static file server listening on port ${PORT}`);
});
