var _ = require('lodash');
var moment = require('moment');

var attacks = require('./src/attentats.json');
var chronos = document.querySelector('#chronos');
var maxVictims = _.reduce(attacks, (result, attack) => {
  return Math.max(result, parseInt(attack.deaths.replace(/^\D/, '')) + parseInt(attack.injuries.replace(/^\D/, '')));
}, 0);

_(attacks)
  .orderBy('date', 'desc')
  .each(addAttackEl);

function addAttackEl(attack) {
  var el = document.createElement('div');
  el.classList.add('attack');
  el.innerHTML = '<div class="attack__label">' +
    '<div class="attack__date">' + moment(attack.date).format('Y/MM/DD') + '</div>' +
    '<div class="attack__country">' + attack.country + '</div>' +
    '</div>' +
    '<div class="attack__numbers">' +
    '<div class="attack__deaths" style="width:' + (parseInt(attack.deaths.replace(/^\D/, '')) * 100 / maxVictims) + '%">' +
    '<div class="attack__deaths__label">' + attack.deaths + '</div>' +
    '</div>' +
    '<div class="attack__injuries" style="width:' + (parseInt(attack.injuries.replace(/^\D/, '')) * 100 / maxVictims) + '%">' +
    '<div class="attack__injuries__label">' + attack.injuries + '</div>' +
    '</div>' +
    '</div>';
  chronos.appendChild(el);
}