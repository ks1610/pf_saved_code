//https://monosnap.com/direct/P8YY06hrE5I0cbgygbv1Ij70piyzWs
//https://monosnap.com/direct/awDnoKU1PBCRk9bVw3BeaOhZtZQ8wB

const stickyPoint = document.querySelector('#stickyPoint')
const handle = (e1, e2) => {
  const p = e1.getBoundingClientRect().top
  if (p > 0) {
    document.querySelectorAll(e2).forEach(el => {
      el.style.display = 'none'
    })
  } else {
    document.querySelectorAll(e2).forEach(el => {
      el.style.display = 'block'
    })
  }
}
handle(stickyPoint, '#stickySec')
window.onscroll = () => {
  handle(stickyPoint, '#stickySec')
}
