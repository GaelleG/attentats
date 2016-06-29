var dao = require('./dao.js');

dao.getList()
  .then((data) => { console.log('resolve',data); })
  .catch((data) => { console.log('reject',data); });