let $submit = document.querySelector('#submit');
let $message = document.querySelector(".message");

$submit.addEventListener("click", user_login);

function message(text){
    $message.classList.add('text-danger');
    $message.innerHTML = text;
}

function user_login(e){
    e.preventDefault();

    let nbError = 0;
    let $input = document.querySelectorAll(".require");

    $input.forEach(element => {
        if(element.value.trim()===""){
            nbError++;
        }
    });

    if(nbError !== 0){
        message("Veuillez remplir tous les champs");
    } else {
        var data = {
            "email": document.querySelector('#inputEmail').value.trim(), 
            "password": document.querySelector('#inputPassword').value.trim()
        };
        
        fetch(`${url}/client/login`, 
            {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(data),
            }    
        )
        .then(response => response.json())
        .then(res => {
            if((res.status>=200 && res.status<=299)){
                console.log(res.data);
                fetch(urlLogin, 
                    {
                        method: 'POST',
                        body: JSON.stringify(res.data),
                    }    
                )
                .then(r => r.json())
                .then(t => {
                    console.log(t);
                    location.href = "?p=dashboard";
                })
                .catch(error => {
                    console.log(error);
                })
            } else {
                message(res.response);
            }
        })
        .catch(error => {
            console.log(error);
            message("Erreur sur serveur");
        })
    }
}