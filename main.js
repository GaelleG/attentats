var _ = require('lodash');

var attacks = require('./src/attentats.json');
var chronos = document.querySelector('#chronos');

_(attacks)
  .orderBy('date', 'desc')
  .each(addAttackEl);

function addAttackEl(attack) {
  var el = document.createElement('div');
  el.classList.add('attack');
  el.innerHTML = '<div class="attack__date">' + attack.date + '</div>' +
    '<div class="attack__country">' + attack.country + '</div>' +
    '<div class="attack__deaths">' + attack.deaths + '</div>' +
    '<div class="attack__injuries">' + attack.injuries + '</div>';
  chronos.appendChild(el);
}