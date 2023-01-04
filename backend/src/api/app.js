const express = require('express');
const cors = require('cors');
const { routes } = require('./routes');

const PORT = 3001;

class App {
  constructor(app = express()) {
    this.app = app;
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use(routes);
  }

  startServer() {
    this.app.listen(PORT, () => {
      console.log(`API rodando na porta ${PORT}`);
    });
  }
}

module.exports = { App };
