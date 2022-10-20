var sidenav;
function openNav() {
    document.getElementById("sidenav").style.width = "300px";
    sidenav = true;
  }
  
function closeNav() {
    document.getElementById("sidenav").style.width = "0";
    sidenav = false;
}


var bodyWidth = document.getElementById('body').clientWidth;


if (bodyWidth >= 992) {
    sidenav = true;
    // alert(bodyWidth);
}

if (sidenav == true){
    document.getElementById("sidenav").style.width = "300px";
}

