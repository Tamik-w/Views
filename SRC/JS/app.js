const countEl = documentElementById('count');

updateVisitCount();

function updateVisitCount(){
    fetch('https://api.countapi.xyz/create?namespace=https://tamik-w.github.io/Views/$enable_reset=1')
    .then(res => res.json())
    .then(res => {
        countEl.innerHTML = res.value;
    });
}