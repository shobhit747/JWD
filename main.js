var changeslide=1;
function changeslideforword() {
if (changeslide==1) {
    document.getElementById('slide1').style.opacity=0;
    document.getElementById('slide2').style.opacity=1;
    changeslide=2;
  }
}
function changeslidebackword() {
if (changeslide==2) {
    document.getElementById('slide1').style.opacity=1;
    document.getElementById('slide2').style.opacity=0;
    changeslide=1;
  }
}
