$(Document).ready(function(){
    $("#button").click(function(){
        function getdata(){
        let pokemon = {
            name: $("#name").val(),
            level: $("#level").val(),
            type: $("#type").val()
        };
        return pokemon;
    }
    function storeDataToLocalStorage() {
        if (!localStorage.getItem("pokemon")) {
            localStorage.setItem("pokemon", JSON.stringify(getdata()));
        } else {
            localStorage.removeItem("pokemon");
            localStorage.setItem("pokemon", JSON.stringify(getdata()));
        }
    }
    storeDataToLocalStorage();
    window.location.href="display.html"

    });
});