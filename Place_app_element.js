const interval = setInterval(() => {
  const append_test = document.querySelector('.app_element')
  console.log(append_test)
  if (append_test) {
    clearInterval(interval)
    document.querySelector('.block_id').append(append_test);
  }
}, 10)
setTimeout(() => {
  clearInterval(interval)
}, 3000)
