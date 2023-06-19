const searchInput = document.querySelector("#search-input");

searchInput.addEventListener("click", function(event){
    if (event.code === "Enter"){
        search();
    }
});
function search() {
    const input = searchInput.value;

    window.location.href ="https://www.google.com/search?q="+ input ;
}

