var _ = require('lodash');
var moment = require('moment');

var attacks = require('./src/attentats.json');
var chronos = document.querySelector('#chronos');

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
    '<div class="attack__deaths">' + attack.deaths + '</div>' +
    '<div class="attack__injuries">' + attack.injuries + '</div>' +
    '</div>';
  chronos.appendChild(el);
}