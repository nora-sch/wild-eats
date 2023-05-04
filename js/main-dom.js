console.log(restaurants[0].nom)

const section = document.querySelector("section")
section.insertAdjacentHTML("beforeend", 
`
<div class="div-card">
<div class="div-wrap-img">
   
   
    <img class="pizza-radius" src="https://media.discordapp.net/attachments/1098254523581075487/1098901457425670154/emy-XoByiBymX20-unsplash.jpg?width=702&height=468" alt="">
    
</div>

<div class="div-wrap-information-deux">
    <div class="wrap-information">
        <div class="wrap-titre-deux">
            <h2 class="titre">${restaurants[0].nom}</h2>
            <br>
           <p>lorem ipsum</p>
           
        </div>   
        <div class="wrap-button-deux">
            <div class="btn-organisation take-away">lorem</div>
            <div class="btn-organisation on-place">loremipsumler</div>
            <div class="btn-organisation delivery">lorempom</div>
        </div>
    </div>
    <div class="div-description">
        <p>Lorem ipsum dolor sit amet consectetur
             adipisicing elit. Sint obcaecati minus non offi ducimus facere,
              doloremque laudantium ipsum commodi fuga ea praesentium volup itaque 
              facilis optio reiciendis quae magnam est?
        </p>
    </div>
    <div class="div-information-deux">
        <p>information</p>
        <p>numero telephone</p>
    </div>
</div>   
</div>      

`)


