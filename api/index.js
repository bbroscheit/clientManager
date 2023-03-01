const server = require('../api/src/app.js')
require('../api/src/db.js')

server.listen(3002, () => {
      console.log('listening at 3002, server connect'); // eslint-disable-line no-console
    });
  