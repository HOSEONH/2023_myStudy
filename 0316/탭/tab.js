const btnList = document.querySelectorAll(".list .btn");

for(let i=0; i<btnList.length; i++) {
    btnList[i].addEventListener("click", onTab)
}

function onTab(e) {
    e.preventDefault();
    for(let i=0; i<btnList.length; i++) {
        btnList[i].parentNode.classList.remove("on");
    }
    e.target.parentNode.classList.add("on");
}