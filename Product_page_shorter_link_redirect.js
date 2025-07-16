document.addEventListener('DOMContentLoaded', function () {
  //When click product view detail button
  document.querySelectorAll('a[data-pf-type*="ProductViewDetails"],[data-pf-type*="ProductTitle"]').forEach(link => {
    const href = link?.getAttribute('href');
    const datahref = link?.getAttribute('data-href');

    const match = href?.match(/\/products\/[a-zA-Z0-9\-]+/);
    const match2 = datahref?.match(/\/products\/[a-zA-Z0-9\-]+/);
    if (match) {
      link.setAttribute('href', match[0]);
    }
    if (match2) {
      link.setAttribute('data-href', match2[0]);

    }
  });
  //When click product title
  document.querySelectorAll('[data-pf-type*="ProductTitle"]').forEach(el => {
    el.onclick = (e) => {
      e.preventDefault()
      window.location.href = el.getAttribute('data-href')
    }
  })
})
