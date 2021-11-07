let hamburguer = document.querySelector(".hamburguer")
console.log(hamburguer)

 hamburguer.addEventListener("click", function(){
   document.querySelector(".container").classList.toggle("show-menu")
   console.log(hamburguer)
 })
