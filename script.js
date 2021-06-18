var $searchBtn = document.getElementById("searchBtn");
var $navHeader = document.getElementById("navHeader");
var openSearch = -1;
var $h2 = document.getElementById('h2async');
function showSearchBar() {
    var $searchBar = document.getElementById("searchBar");
    if (openSearch == -1) {
        $searchBar.style.opacity = "1";
        $searchBar.style.visibility = "visible";
    } else if (openSearch == 1) {
        $searchBar.style.opacity = "0";
        $searchBar.style.visibility = "hidden";
    }
    openSearch *= -1;
    return openSearch;
}

function changeNavShadow() {
    var bodyElement = document.querySelector("body");
    if (this.scrollY > 2 || this.scrollY < 2) {
        if(openSearch == -1)
            $navHeader.style.boxShadow = "0px 0px 5px 1px rgb(0, 0, 0, 0.25)";
    }
    if (this.scrollY == 0  || openSearch == 1) {
        $navHeader.style.boxShadow = "0px 0px 0px 0px rgb(0, 0, 0, 0.25)";
    }
}
window.addEventListener("scroll", changeNavShadow, false);
$searchBtn.addEventListener("click", showSearchBar);

//var myDate = new Date();
//$h2.innerHTML = myDate.getFullYear() + ", " + myDate.getDate() + " " + myDate.getMonth();