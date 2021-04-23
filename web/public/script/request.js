let $search = document.querySelector('#search');
let $create = document.querySelector('#create');
let $message = document.querySelector(".message");
let $content_search = document.querySelector("#content_search");

if($search){$search.addEventListener("submit", search_client);}
if($create){$create.addEventListener("submit", create_client);}

function message(type, text){
    $message.classList.add('text-'+type);
    $message.innerHTML = text;
}


function search_client(e){
    e.preventDefault();

    let $query = document.querySelector("#inptxt");
    if($query.value.trim()){
        var data = {"query": $query.value.trim()};
        fetch(`${url}/client/search`, 
            {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(data),
            }    
        )
        .then(response => response.json())
        .then(res => {
            if((res.status>=200 && res.status<=299)){
                $content_search.innerHTML = '';
                let content = ``;
                console.log(res.data);
                res.data.forEach(element => {
                    content+=`
                        <a href="?p=client&id=${id}" class="notification__block--selector">
                        <div class="notification__block__historic__note__avis">
                                <div class="avis__name">
                                    <p class="avis__name-name">${element.fullname}</p>
                                </div>
                                <h2 class="id_code">${element.uniqid}</h2>
                                <div>`;

                                    if(!element.Rates.length){
                                        content+= `<i>pas encore noté</i>`;
                                    }
                                    element.Rates.forEach(el => {
                                        var rating = Math.round(el.Rates.rating/2);
                                        for (let index = 0; index < rating; index++) {
                                            content+= `<i class="fa fa-star fa__avis"></i>`;
                                        }
                                    });
                               content+= `</div>
                                <p class="nb__avis">${element.Rates.length}</p>
                            </div>
                        </a>
                        <hr class="notification__note__separator">
                    `
                });
                $content_search.innerHTML = content;
            } else {
                $content_search.innerHTML = `<p class="center text-danger">${res.response}</p>`;
            }
        })
        .catch(error => {
            console.log(error);
            //message("danger","Erreur sur serveur");
        })
    }
}


function create_client(e){
    e.preventDefault();

    let nbError = 0;
    let $input = document.querySelectorAll(".require");

    $input.forEach(element => {
        if(element.value.trim()===""){
            nbError++;
        }
    });

    if(nbError !== 0){
        message("danger","Veuillez remplir tous les champs obligatoires");
    } else {
        var data = {
            "fullname": document.querySelector('#fullname').value.trim(),
            "pseudo": document.querySelector('#pseudo').value.trim(),
            "phone": document.querySelector('#phone').value.trim(),
            "email": document.querySelector('#email').value.trim(),
            "sexe": document.querySelector('#sexe').value.trim()
        };
        
        fetch(`${url}/client/create`, 
            {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(data),
            }    
        )
        .then(response => response.json())
        .then(res => {
            if((res.status>=200 && res.status<=299)){
                message("success",res.response);
                document.querySelector('#fullname').value="";
                document.querySelector('#pseudo').value="";
                document.querySelector('#phone').value="";
                document.querySelector('#email').value="";
            } else {
                message("danger",res.response);
            }
        })
        .catch(error => {
            console.log(error);
            message("danger","Erreur sur serveur");
        })
    }
}