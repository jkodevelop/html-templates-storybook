import './css/style.scss';
console.log('start',$);

const container = document.getElementById('Container');
function updateSize(){
  container.setAttribute('data-wf', `Content width: ${window.innerWidth} px`);
}
window.addEventListener('resize', updateSize);
updateSize();
