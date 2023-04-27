const restaurants = [
    {
        id: 1,
        nom: "Faubourg 46",
        description: "Le Faubourg 46 est un restaurant brasserie sur Aix en Provence proposant différentes ambiances, petit déjeuner, brunch, déjeuner et dîner dans une atmosphère festive, DJs. Nous sommes à deux pas des allées Provençale et du cours Mirabeau au pied de la fontaine Pascal sur le cours Sextius Vous pourrez aussi juste venir siroter notre sélection de cocktails avec et sans alcool et spiritueux sur notre terrasse ombragée pour l'apéritif en happy hour ;-) Ouvert 7 jours sur 7 en continu. Service jusqu'à 23h et minuit vendredi et samedi.",
        note: 4,
        adresse: "46 Cr Sextius, 13100 Aix-en-Provence",
        telephone: "04 42 61 50 13",
        specialite: 'Français',
        prix: 19.99,
        regime: ['vegan', 'végétarien', 'sans gluten'],
        website: "https://faubourg46.fr",
        organisation:{
            surPlace: true,
            aEmporte: false,
            livraison: false
        },
        mainImage: "https://img.delicious.com.au/F_C2-w6_/w759-h506-cfill/del/2015/11/summer-cocktails-24374-3.jpg",
	images: [
	"https://faubourg46.fr/wp-content/uploads/2022/05/BURGER-PDJ.jpeg",
	"https://faubourg46.fr/wp-content/uploads/2020/02/FBG-46-SALLE-W-GRP_6430.jpeg", 
	"https://res.cloudinary.com/tf-lab/image/upload/w_600,h_337,c_fill,q_auto,f_auto/restaurant/78a362b9-1179-474b-9f06-e146b5db5673/cd494c38-a50a-4ce3-8cd2-81b2e52526ac.jpg",
	"https://faubourg46.fr/wp-content/uploads/2019/12/faubourg46-home-1024x659.jpeg"
	]     
    },
    {
        id: 2,
        nom: "Chapitre Vin - Le Bistrot Gourmand, Le Caviste & Le Bar à Vins",
        description: "C'est un 🍽Bistrot, une 🍾Cave à Vins & un 🍻Bar à Vins. Maison artisanale depuis 2021 décernée par Gault&Millau Top 100 des Meilleures Cartes de Vins décerné par Terre de vins 🍽 Le Bistrot Gourmand : 12h00 / 14h30 du lundi au vendredi 🍷 La Cave : 9h00 / 16h00 lundi 9h00 / 19h00 mardi 9h00 / 20h00 du mercredi au vendredi 10h00 / 13h00 le samedi 🥂Venez découvrir un système unique sur la région, vous permettant de choisir votre verre de vin parmi 24 propositions. 🍷Le Bar à Vins : Mercredi et Jeudi 16h00 / 22h00 Vendredi 16h00 / 20h00 N'hésitez pas à nous contacter si vous souhaitez privatiser",
        note: 4,
        adresse: "Centre Commercial L'Ensoleillée, 724 Av. du Club Hippique, 13090 Aix-en-Provence",
        telephone: "04 42 52 24 59",
        specialite: 'Francais',
        prix: 29.99,
        regime: [],
        website: "https://www.chapitre-vin.com/",
        organisation:{
            surPlace: true,
            aEmporte: false,
            livraison: false
        },
        mainImage: "https://www.saq.com/media/magefan_blog/shutterstock_234110785_1300x975-900x675.jpg",
	images: [
	"https://enostore.fr/wp-content/uploads/2023/03/Enomatic_Enostore_Chapitre-Vin-768x380.png",
	"https://www.community-exchange.fr/admin/upload/2019-10-16AVA_2445.jpg",
	"https://static.apidae-tourisme.com/filestore/objets-touristiques/images/0/80/8278016.jpg"
	]     
    },
    {
        id: 3,
        nom: "LA CANTINE By FEMEZON",
        description: "Nous vous accueillons à La Cantine by Femezon dans les Bouches-du-Rhône dans un cadre privilégié pour vous proposer une cuisine bistronomique raffinée. Nous mettons notre savoir-faire et notre expérience à votre service pour vous proposer des plats au goût unique. Parce que votre satisfaction est au cœur de nos préoccupations, vous pouvez également choisir la livraison de vos repas à domicile. Venez découvrir les vraies saveurs de notre région ! Nous vous suggérons des recettes typiques qui raviront vos convives.",
        note: 4,
        adresse: "11 Av. Jean et Marcel Fontenaille, 13100 Aix-en-Provence",
        telephone: "07 82 04 90 15",
        specialite: 'Français',
        prix: 17.99,
        regime: [],
        website: "https://www.la-cantine-aix.fr/fr",
        organisation:{
            surPlace: true,
            aEmporte: true,
            livraison: true
        },
        mainImage:"https://d397xw3titc834.cloudfront.net/images/original/2/ec/2eca36a5c9468ce0ecfa25ff29e6c720.jpg",
	images: [
	"https://10619-2.s.cdn12.com/rests/original/109_510601936.jpg",
	"https://d397xw3titc834.cloudfront.net/images/original/4/98/498cfa481f54324d329cab087d5591f7.jpg"
	]     
    },
    {
        id: 4,
        nom: "Grenache",
        description: "Le Faubourg 46 est un restaurant brasserie sur Aix en Provence proposant différentes ambiances, petit déjeuner, brunch, déjeuner et dîner dans une atmosphère festive, DJs. Nous sommes à deux pas des allées Provençale et du cours Mirabeau au pied de la fontaine Pascal sur le cours Sextius Vous pourrez aussi juste venir siroter notre sélection de cocktails avec et sans alcool et spiritueux sur notre terrasse ombragée pour l'apéritif en happy hour ;-) Ouvert 7 jours sur 7 en continu. Service jusqu'à 23h et minuit vendredi et samedi.",
        note: 3,
        adresse: "2 Pl. Joachim Gasquet, 13100 Aix-en-Provence",
        telephone: "09 80 82 85 92",
        specialite: 'Français',
        prix: 19.99,
        regime: ['végétarien'],
        website: "https://faubourg46.fr/restaurant/",
        organisation:{
            surPlace: true,
            aEmporte: false,
            livraison: false
        }
        ,
        mainImage: "https://media-cdn.tripadvisor.com/media/photo-s/28/21/a0/18/studio-80.jpg",
	images: [
	"https://aix-en-provence.love-spots.com/wp-content/uploads/sites/4/2018/11/Restaurant-Aix-en-Provence_Grenache_Love-Spots_07.jpg",
	"https://media-cdn.tripadvisor.com/media/photo-p/15/50/89/c7/img-20181109-231832-255.jpg",
	"https://aixclam.fr/wp-content/uploads/2021/09/Grenache-scaled.jpg"
	]     
    },
    {
        id: 5,
        nom: "Le Poivre D'Ane",
        description: "Pour la situation sur la belle place des Cardeurs, en haut de la vieille ville, et pour une cuisine d'aujourd'hui qui fait l'effort d'un brin d'originalité et de personnalité, notamment au travers d'un «menu du moment» à 46 € qui laisse le choix : salpicon de poulpe de roche basilic et citron lomo de bellota, sériole de Méditerranée algues wakamé shiitakés et leche de tigre, cheesecake framboise litchi pour une séquence bien équilibrée dans un cadre contemporain simple et agréable.",
        note: 4,
        adresse: "40 Place des Cardeurs, 13100 Aix-en-Provence ",
        telephone: "04 42 61 50 13",
        specialite: 'Européen',
        prix: 46,
        regime: ['sans gluten'],
        website: "https://www.facebook.com/profile.php?id=100054663570513",
        organisation:{
            surPlace: true,
            aEmporte: false,
            livraison: false
        },
        mainImage: "https://cdn.website.dish.co/media/a7/5f/251109/592E70AA-2AD9-4DC7-9F56-868324D19D48.jpg",
	images: [
	"https://media-cdn.tripadvisor.com/media/photo-s/01/e6/e2/09/terrasse.jpg"	
	]     
    },
    {
        id: 6,
        nom: "Le Comptoir du Parc",
        description: "Le Comptoir du Parc est un véritable restaurant à plancha situé dans un écrin de nature au sein du Parc du Golf à Aix-en-Provence Les Milles. Une carte faite de petits plats façon tapas de qualité. C’est à son comptoir, en salle ou en terrasse que le restaurant propose des produits frais cuisinés minute. Nous sommes ouverts tous les midis du Lundi au Vendredi A l’heure du déjeuner, vous pouvez composer votre menu à partir de notre carte ou choisir une formule du jour. Nous privatisons également le restaurant pour vos évènements. Cyril, Pierre-Laurent et toute l'équipe du Comptoir du Parc",
        note: 4,
        adresse: "350 avenue JRGG de la Lauziere, Parc du Golf, 13290 Aix-en-Provence",
        telephone: "04 42 20 45 08",
        specialite: 'Français',
        prix: 19.99,
        regime: ['vegan'],
        website: "https://www.nosrestaurantslecomptoir.com/accueil-le-comptoir-du-parc",
        organisation:{
            surPlace: true,
            aEmporte: true,
            livraison: false
        },
        mainImage: "https://static.wixstatic.com/media/d1617d_929e3374aa0a48948dbbfe2e3e2c4cf6~mv2.jpg/v1/fill/w_560,h_560,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/18155961_996825870453420_7266165324290600462_o.jpg",
	images: [
	"https://res.cloudinary.com/tf-lab/image/upload/w_600,h_337,c_fill,q_auto,f_auto/restaurant/5ffaae99-e580-400f-a9c6-5392301ce146/5ed7ec41-0f7b-439b-8420-46683998bdc8.jpg",
	"https://res.cloudinary.com/tf-lab/image/upload/w_600,h_337,c_fill,q_auto,f_auto/restaurant/5ffaae99-e580-400f-a9c6-5392301ce146/77ee757e-9429-410e-8c5b-358e2b0efe69.jpg",
	"https://media-cdn.tripadvisor.com/media/photo-s/1d/21/e9/fd/fish-chips.jpg"
	]     
    },
    {
        id: 7,
        nom: "La Mado",
        description: "",
        note: 3,
        adresse: "4 Pl. des Prêcheurs, 13100 Aix-en-Provence",
        telephone: "04 42 38 28 02",
        specialite: 'Marocain',
        prix: 35,
        regime: ['halal'],
        website: "https://lamado.fr/",
        organisation:{
            surPlace: true,
            aEmporte: true,
            livraison: true
        },
        mainImage: "https://media-cdn.tripadvisor.com/media/photo-s/0b/0b/f8/17/sunny.jpg",
	images: [
	"https://lamado.fr/wp-content/uploads/2015/07/Accueil-1.jpg",
	"https://cdm0lfbn.cloudimg.io/v7/_images_base_/image_uploader/photos/1c/original/la-mado-restaurant-aix-en-provence-exterior.png?ua=1647433372&p=large",
	"https://media-cdn.tripadvisor.com/media/photo-s/1a/30/52/5b/noix-de-saint-jacques.jpg",
	"https://res.cloudinary.com/tf-lab/image/upload/restaurant/9a6ca251-ff7b-4faf-a79a-e2ae216deac0/ce309de5-e571-42ee-a67d-dee1cd981cfd.jpg",
	"https://images.ctfassets.net/pujs1b1v0165/3JFWka7DVwBY39o0Ls3Ih0/c7c85b173f30102458775ff565f78724/Venison_Carpaccio.jpg?w=1280",
	"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/30/52/39/burger-de-la-mado.jpg?w=800&h=600&s=1"	
	]     
    },
     {
        id: 8,
        nom: "La Braise",
        description: "Qu'est-ce qu'on vous prépare pour ce soir ? 🤔😋👌🏼 Qualité des produits garantie ! 💯 Nous sommes ouverts tous les jours à partir de 19h sauf le mercredi. Pensez à réserver, on fait chauffer la Braise ! 🔥",
        note: 4,
        adresse: "14 Rue des Bernardines, 13100 Aix-en-Provence",
        telephone: "04 42 29 53 55",
        specialite: 'Français',
        prix: 35,
        regime: ['halal'],
        website: "https://www.facebook.com/LaBraiseAix",
        organisation:{
            surPlace: true,
            aEmporte: true,
            livraison: true
        },
        mainImage: "https://storage.googleapis.com/mon-resto-halal/restaurants/989e5686-8607-4ea0-ba69-ee0a56efe518/thumb@1024_ddb363db-1c53-4408-b3a2-94f72a3008da.jpg",
	images: [
	"https://storage.googleapis.com/mon-resto-halal/restaurants/989e5686-8607-4ea0-ba69-ee0a56efe518/thumb@1024_f742e823-521a-4956-9e0a-3542e8f46886.jpg",
	"https://api.halalfoodtrip.com/images/4011_6fcf4a31-8710-4401-b98b-a52c26533895.jpg"	
	]     
    },
     {
        id: 9,
        nom: "Le Petit Chef",
        description: "Bienvenue chez LE PETIT CHEF , notre restaurant rapide propose une cuisine variée avec des burgers, des tacos et des spécialités arabes fraîches et savoureuses. Nous utilisons des ingrédients de qualité pour offrir une expérience culinaire unique à chaque client. Que vous soyez en quête de saveurs originales ou de comfort food classique, nous avons quelque chose pour vous. Venez découvrir nos plats délicieux et notre ambiance accueillante dès aujourd'hui!",
        note: 5,
        adresse: "29 Cr Sextius, 13100 Aix-en-Provence",
        telephone: "07 82 15 71 49",
        specialite: 'Marocain',
        prix: 35,
        regime: ['halal'],
        website: "",
        organisation:{
            surPlace: true,
            aEmporte: true,
            livraison: true
        },
        mainImage: "https://tb-static.uber.com/prod/image-proc/processed_images/1e95316d3fecb8027b82bd980ad4cfe6/719c6bd2757b08684c0faae44d43159d.jpeg",
	images: []     
    },
     {
        id: 10,
        nom: "Le Riad",
        description: "Situé au cœur du centre historique de la ville, Le Riad a su s’intégrer avec harmonie, dans l’ancien cloître des Cordeliers. Ce monumen​​t historique a conservé sa part de raffinement et de charme discret sur fond de style marocain. Au cœur de la Provence, cet établissement vous propose un voyage dans la culture culinaire des traditions marocaines. Aux beaux jours, vous pourrez profiter du patio à l'ombre d'un tilleul centenaire, rafraîchit par le clapotis des deux fontaines. Le restaurant Le Riad, offre un cadre rêvé à un dîner romantique ou à une soirée raffinée entre amis amateurs de beau et de bon. Que ce soit dans l’intimité de la salle de restaurant ou bien dans l’éclat du patio, vous pourrez y apprécier une cuisine délicate et subtile associant en une harmonie unique les saveurs de la gastronomique marocaine traditionnelle.",
        note: 4,
        adresse: "21 Rue Lieutaud, 13100 Aix-en-Provence",
        telephone: "04 42 26 15 79",
        specialite: 'Marocain',
        prix: 25,
        regime: ['halal'],
        website: "http://www.leriad.com/",
        organisation:{
            surPlace: true,
            aEmporte: true,
            livraison: false
        },
        mainImage: "https://static.apidae-tourisme.com/filestore/objets-touristiques/images/233/247/8910825.jpg",
	images: [
	"https://media-cdn.tripadvisor.com/media/photo-s/10/37/8d/80/le-soir.jpg",
	"https://media-cdn.tripadvisor.com/media/photo-s/10/37/90/e1/invitation-voyage.jpg",
	"https://petitfute.twic.pics/medias/professionnel/292714/premium/originale/600a1cffa0b24ec566933951bea5d9b6_le-riad_le-riad.png?twic=v1/cover=780x520"
	]     
    },
     {
        id: 11,
        nom: "Via Veneto",
        description: "",
        note: 5,
        adresse: "6 Rue du Griffon, 13100 Aix-en-Provence",
        telephone: "04 42 57 89 63",
        specialite: 'Italian',
        prix: 20,
        regime: [],
        website: "",
        organisation:{
            surPlace: true,
            aEmporte: false,
            livraison: false
        },
        mainImage: "https://media-cdn.tripadvisor.com/media/photo-s/1d/4e/0e/b1/via-veneto.jpg",
	images: [
	"https://lh5.googleusercontent.com/p/AF1QipMgmeD64mItBREjP4pl5dK42p66M8M1HCCWEfE=w740-h420-k-no",
	"https://media-cdn.tripadvisor.com/media/photo-s/03/6f/fc/d0/interieur-du-restaurant.jpg",
	]     
    },
     {
        id: 12,
        nom: "La tradizionale",
        description: "Notre restaurant spécialisé en pizza au feu de bois et plats italiens, établi depuis 2014 entre le cours Mirabeau et la place de la mairie, se situe au cœur du centre-ville d'Aix-en-Provence et bénéficie d'une jolie terrasse ombragée et chauffée selon la saison. La Tradizionale est un restaurant italien, situé place Ramus sous la ramure d'un majestueux Platane tricentenaire. Mario, formé à l'école hôtelière de Turin réalise toutes les pizza au feu de bois sur place ou à emporter. Venez découvrir notre nouvelle carte originale élaborée à partir de produits frais, vous pourrez déguster des plats inédits de Risotti, ravioli et pâtes fraîches, typiquement conçus à partir de véritables recettes italiennes . Ils s'accompagnent de nos meilleurs vins rouges, blancs et rosés méditerranéens. Par la suite, laissez vous tenter par notre carte de desserts, confectionnés par nos soins, avec une suggestion spéciale pour notre tiramisu. Mario et sa dynamique équipe vous accueillent tous les jours, sauf le mardi en hiver, de 12h00 à 14h00 et de 19h00 à 22h30 au 12 place Ramus 13100 Aix en Provence. Pensez à Réserver !",
        note: 4,
        adresse: "12 Pl. Ramus, 13100 Aix-en-Provence",
        telephone: "04 42 26 28 51",
        specialite: 'Italian',
        prix: 30,
        regime: [],
        website: "https://www.la-tradizionale-restaurant-aix-en-provence.com/",
        organisation:{
            surPlace: true,
            aEmporte: true,
            livraison: true
        },
        mainImage: "https://www.la-tradizionale-restaurant-aix-en-provence.com/websites/5ea8a76a4f01c91a0de67513cf51a1bf/img/bc879ed4504a629d80b1682780e4d575.jpg",
	images: [
	"https://www.la-tradizionale-restaurant-aix-en-provence.com/websites/5ea8a76a4f01c91a0de67513cf51a1bf/img/3e27b0cace6f70490dbfa29d7c0d81c5.jpg",
	"https://www.la-tradizionale-restaurant-aix-en-provence.com/websites/5ea8a76a4f01c91a0de67513cf51a1bf/img/0211002b26f058c83a120fce0d660bb5.jpg",
	"https://www.la-tradizionale-restaurant-aix-en-provence.com/websites/5ea8a76a4f01c91a0de67513cf51a1bf/img/13021f70eda1a382338246c3724119b9.jpg",
	"https://www.la-tradizionale-restaurant-aix-en-provence.com/websites/5ea8a76a4f01c91a0de67513cf51a1bf/img/abf7e338e2cf1f8302ae53e3c078b4d1.jpg"		
	]     
    },
     {
        id: 13,
        nom: "Le Maharaja",
        description: "On est ouvert tous les jours midi et soir sauf le lundi midi et dimanche midi livraison tous les jours. 10%sur Plats emporter. On travail avec uber eat et deliveroo. L'Inde pays au multiple visage, a envouté tous les voyageurs depuis les temps les plus anciens.Célèbre pour la richesse, la diversité de ses cultures et de ses paysages, l'Inde l'est aussi pour sa cuisine. Nous sommes ravis de vous faire découvrir les spécialités de l'Inde, telles que sa douce cuisine du Kashmir, ses curries parfumés du Bengale, ses grillades cuites au Tandoor du Rajasthan...",
        note: 3,
        adresse: "16 Rue des Tanneurs, 13100 Aix-en-Provence",
        telephone: "04 42 58 98 54",
        specialite: 'Indian',
        prix: 25,
        regime: [''],
        website: "https://www.maharaja-aix.com/shop/boutique/index.php",
        organisation:{
            surPlace: true,
            aEmporte: true,
            livraison: true
        },
        mainImage: "http://www.maharaja-aix.com/shop/boutique/userfiles/image/maharaja.jpg",
	images: [
	"https://storage.googleapis.com/mon-resto-halal/restaurants/ad74be1c-de92-4f0a-857b-64ff42010e67/thumb@1024_f715ba43-63d2-4240-a1d9-16f580cfd2a1.jpg",
	"https://storage.googleapis.com/mon-resto-halal/restaurants/ad74be1c-de92-4f0a-857b-64ff42010e67/thumb@1024_8a9dbbe2-da75-4fc2-b91a-4a0f4d998452.jpg"	
	]     
    },
     {
        id: 14,
        nom: "Phatsara - Saveurs de Thaïlande",
        description: "Restaurant traditionnel Thaïlandais familial qui allie les plats typiques du Siam avec des vins et des bières de notre belle Provence.",
        note: 5,
        adresse: "4 Rue Van Loo, 13100 Aix-en-Provence",
        telephone: "09 82 55 50 55",
        specialite: 'Thailandais',
        prix: 20,
        regime: ['végétarien', 'vegan', 'sans gluten'],
        website: "https://phatsara.fr/fr/booking",
        organisation:{
            surPlace: true,
            aEmporte: true,
            livraison: true
        },
        mainImage: "https://static.apidae-tourisme.com/filestore/objets-touristiques/images/76/197/16696652.jpg",
	images: [
	"https://tb-static.uber.com/prod/image-proc/processed_images/87896282845200a28b583c5f863f736e/5954bcb006b10dbfd0bc160f6370faf3.jpeg",
	"https://image.ville-data.com/aix-en-provence-phatsara-saveurs-de-thailande-1.jpg",
	"https://static.apidae-tourisme.com/filestore/objets-touristiques/images/78/197/16696654.jpg",
	"https://static.apidae-tourisme.com/filestore/objets-touristiques/images/71/197/16696647.jpg",
	"https://media-cdn.tripadvisor.com/media/photo-s/10/78/2d/da/cay-tam.jpg",
	"https://img-4.linternaute.com/qM2ZC01vcS1MRAj0vbNrErqua34=/fit-in/550x550/6d331fb62a224b76af56993733fb6372/restaurant/203650.jpg",
	"https://img-4.linternaute.com/fYalgdq-QCOBNnzsWyQ10uacIAg=/fit-in/550x550/431775c9c2984859a36373e51e0ed03e/restaurant/203646.jpg",
	"https://media-cdn.tripadvisor.com/media/photo-s/14/2b/6f/42/fresh-box.jpg",
	"https://static.apidae-tourisme.com/filestore/objets-touristiques/images/75/197/16696651.jpg",
	"https://static.apidae-tourisme.com/filestore/objets-touristiques/images/67/197/16696643.jpg"	
	]     

    },
     {
        id: 15,
        nom: "Pitaya Thaï Street Food",
        description: "Pitaya, c’est une immersion immédiate dans les rues de Bangkok et sa street food colorée et savoureuse. Des produits frais et de qualité cuisinés au wok à la minute devant vos yeux, proposés toute l’année sur place, à emporter ou en livraison à domicile.",
        note: 3,
        adresse: "1 bis Cr Mirabeau, 13100 Aix-en-Provence",
        telephone: "07 85 94 85 20",
        specialite: 'Thailandais',
        prix: 35,
        regime: ['végétarien', 'vegan', 'sans gluten'],
        website: "https://www.pitaya-thaistreetfood.com/",
        organisation:{
            surPlace: true,
            aEmporte: true,
            livraison: true
        },
        mainImage: "https://tb-static.uber.com/prod/image-proc/processed_images/ad9e266606bf40730166a9f1030436e1/16bb0a3ab8ea98cfe8906135767f7bf4.jpeg",
	images: [
	"https://www.pitaya-thaistreetfood.com/wp-content/uploads/2023/03/From-Bangkok-to-Bordeaux-768x497.png",
	"https://media-cdn.tripadvisor.com/media/photo-s/16/04/02/e0/devanture.jpg",
	"https://resofrance.eu/wp-content/uploads/2016/05/pitaya-franchise.jpg",
	"https://hr-infos.fr/wp-content/uploads/2023/01/Pitaya-facebook.jpg",
	"https://www.snacking.fr/upload/images/2017-03/pitayaconcept.jpg",
	]     
    }
]
