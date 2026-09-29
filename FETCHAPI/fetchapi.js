//! What is fatch() API ?? 
//* A fatch is a function in JS 
// * Also it is considered as API in  between client and server to communicate transfer the data 

let fetchUserData = () =>{
    try {
        let response = await fetch("htpps://localhost:3000/user")
        console.log(response)

        let data = await response.json()
        console.log(data);
        
        document.getElementById("container").innerHTML = data.map((user,index)=>{
            return `<div>
                <h2 class = "user-id">${user.id}</h2>
                <h2 class = "user-name">${user.name}</h2>
                <h2 class = "user-rolw">${user.role}</h2>
            </div>`
        }).join("");

    } catch (error) {
        console.log(error)
    }
}