import './css/style.scss';
console.log('start',$);

const ruler = document.getElementById('Ruler');
function updateSize(){
  ruler.innerHTML = `&nbsp;&nbsp; ${window.innerWidth} px &nbsp;&nbsp;`;
}
window.addEventListener("resize", updateSize);
updateSize();




