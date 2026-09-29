//! What is fatch() API ?? 
//* A fatch is a function in JS 
// * Also it is considered as API in  between client and server to communicate transfer the data 

let fetchUserDate = () =>{
    try {
        let response = fetch("http://localhost:3000/user");
        console.log(response)

        let data = response.json();

        console.log(data)
        document.getElementById("container").innerHTML = data.map((user,idex)=>{
            return `<div>
            <h2></h2>
            </div>`
        })
    } catch (error) {
        console.log(error);
    }
}