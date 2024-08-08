
document.getElementById('fetchProduits')
.addEventListener('click',function(){

//todhreb 3ala api 
 
const URLAPI="https://jsonplaceholder.typicode.com/users"

//axios methode http request lien url tjib el data , req ,res 

axios.get(URLAPI)
.then( function(response){
    
const users = response.data  
console.log('users => ',response)
//ul tag 
const userList = document.getElementById('product_list')
userList.innerHTML=''
//ajouter chaque user mtE"i list 

users.forEach(function(el){
    const list = document.createElement('li')
    list.textContent = `${el.name} || ${el.email}`
    userList.appendChild(list)
})

}  )
.catch(err=>{
    console.log(err)
})


})



