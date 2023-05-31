$(document).ready(function () {
    getdata();
});
function getdata() {
    let localStorageData = localStorage.getItem("pokemon");
    let pokemon = JSON.parse(localStorageData);
    console.log(pokemon);
    $("#name").text(pokemon.name);
    $("#level").text(pokemon.level);
    $("#type").text(pokemon.type);
}