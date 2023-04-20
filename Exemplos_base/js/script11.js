let url = "https://randomuser.me/api/?format=json&results=10";

fetch(url)
    .then((resp) => resp.json())
    .then(function(data){
        let div = document.querySelector("#lista");
        div.innerHTML="";
        let usuarios = data.results;
        usuarios.forEach(function(user,i){
            div.innerHTML += `<img src='${user.picture.large}'><br>${user.name.first}<br>`
        });
    })