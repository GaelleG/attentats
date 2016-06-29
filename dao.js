var fs = require('fs');
var _ = require('lodash');

const TYPES = {
  DONE: '+',
  ABORTED: '-',
  UNCONFIRMED: '?'
};
const FIELDS = ['date', 'country', 'deaths', 'injuries', 'type'];

module.exports = {
  getList: getList
};

function getList() {
  return new Promise((resolve, reject) => {
    fs.readFile('./src/attentats.csv', 'utf8', (err, data) => {
      if (err) reject(err);
      try {
        resolve(_(data.split('\n'))
          .map((line) => { return line.split(','); })
          .map((line) => { 
            return {
              date: line[0],
              country: line[1],
              deaths: line[2],
              injuries: line[3],
              type: line[4]
            };
          })
          .orderBy('date', 'desc')
          .value());
      } catch (e) {
        reject(e.toString());
      }
    });
  });
}