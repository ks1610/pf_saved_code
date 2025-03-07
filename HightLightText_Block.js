//Block Hightlight and Copy event
function killCopy(e){
  return false
}
  function reEnable(){
return true
}
  document.onselectstart=new Function ("return false")
  if (window.sidebar){
    document.onmousedown = killCopy
document.onclick=reEnable
}
