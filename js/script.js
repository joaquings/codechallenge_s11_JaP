const API_ENDPOINT = 'https://jsonplaceholder.typicode.com/users'
const enviarBtn = document.getElementById('enviar')


enviarBtn.addEventListener('click', function(){
    let nameInput = document.getElementById('name').value
    let lastnameInput = document.getElementById('lastname').value
    let birthdateInput = document.getElementById('birthdate').value
    let completeName = nameInput+' '+lastnameInput

    console.log(completeName)
    fetch(API_ENDPOINT, {
        method: "POST",
        body: JSON.stringify({
          name: completeName,
          username: birthdateInput
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
        .then((response) => response.json())
        .then((json) => {console.log(json)
        
        let showJSONcontainer = document.getElementById('showJSON')
        let data = JSON.stringify(json)
        showJSONcontainer.innerHTML += `<div style='background-color:yellow; border-radius:10px; padding:10px'><span>${data}</span></div>`
        
        });

    
})

