"use strict";

var countEl = documentElementById('count');
updateVisitCount();

function updateVisitCount() {
  fetch('https://api.countapi.xyz/create?namespace=https://tamik-w.github.io/Views/$enable_reset=1').then(function (res) {
    return res.json();
  }).then(function (res) {
    countEl.innerHTML = res.value;
  });
}