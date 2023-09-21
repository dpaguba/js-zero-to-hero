const btn = document.querySelector(".btn");
const container = document.querySelector(".search");

function expandSearchBar(){
    container.classList.toggle("active");
}

btn.addEventListener("click", expandSearchBar);