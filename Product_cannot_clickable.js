window.addEventListener('DOMContentLoaded',(event)=>{
document.querySelectorAll('[data-pf-type="MainMedia"][data-href]').forEach(e=>{
e.onclick=()=>window.location.href=e.getAttribute('data-href')
})
});
