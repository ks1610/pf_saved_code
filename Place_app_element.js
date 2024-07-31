const interval = setInterval(() => {
  //find the class of the app element
  const append_test = document.querySelector('.app_element')
  console.log(append_test)
  if (append_test) {
    clearInterval(interval)
    //add block element to PF and add id name
    document.querySelector('#block_id').append(append_test);
  }
}, 10)
setTimeout(() => {
  clearInterval(interval)
}, 3000)
