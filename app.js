let num = 0;
fetch(`https://jsonplaceholder.typicode.com/users`)
.then((res) => res.json())
.then((res) => {
    console.log(res);


const username = document.getElementById("username")
let nextBtn = document.getElementById("nexBtn")

username.innerHTML = res[num].name


const Nexffn = () => {


    if (num < res.lenght){
        num++
        username.innerHTML = res[num].name
    }else{
        nextBtn.disabled = true
    }
    console.log(nextBtn.disabled);
}   
nextBtn.addEventListener("click",Nexffn)

})
