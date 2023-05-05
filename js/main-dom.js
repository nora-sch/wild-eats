

console.log(restaurants[0].nom)
restaurants.forEach((element)=>{
    const section = document.querySelector("section")
section.insertAdjacentHTML("beforeend", 
`
<div class="div-card">
<div class="div-wrap-img">
   
   
    <img class="pizza-radius" src="${element.mainImage}" alt="">
    
</div>

<div class="div-wrap-information-deux">
    <div class="wrap-information-deux">
        <div class="wrap-titre-deux">
            <h2 class="titre">${element.nom}</h2>
           <p>${element.note}</p>
           
        </div>   
        <div class="wrap-button-deux">
            <div class="btn-organisation take-away">${element.regime[0]}</div>
            <div class="btn-organisation on-place">${element.regime[1]}</div>
            <div class="btn-organisation delivery">${element.regime[2]}</div>
        </div>
    </div>
    <div class="div-description">
        <p>
        ${element.description}
        </p>
    </div>
    <div class="div-information-deux">
        <p>${element.adresse}</p>
        <p>${element.website}</p>
        <p>${element.telephone}</p>
    </div>
</div>   
</div>      

`)
})



