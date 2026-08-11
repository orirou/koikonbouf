

/* --------------------------------------------------------- */
            /* FICHIER ORGANISÉ POUR LES RECETTES */
/* --------------------------------------------------------- */

const recettes =  [
    {
        nom:"Pasta Carbonara",
        id:"pâtes pates carbonara oeufs",
        type:"pasta",
        image:"IMAGES/pasta_carbonara.png",
        prep_active:10,
        prep_totale:20,
        fait:true,
        vegetarien:false,
        etoiles:3,
        saison:"",
        nb_personnes:"1 personne",
        ustensiles:["cuisson"],
        repere1: "",
        repere2: "",
        repere3: "",
        ingredients1Name:"",
        ingredients1:["100g de pâtes (spaghettis/penne/torti)", "1/2 œuf", "50-75g de lardons", "Fromage râpé (ou parmesan)", "Crème fraîche", "Sel + Poivre + Herbes de provence"],
        ingredients2:[],
        ingredients3Name:"",
        ingredients3:[],
        preparation1:["Faire bouillir de l'eau",
            "Une fois que l'eau bout, verser les pâtes.",
            "À mi-cuisson, faire revenir les lardons dans une poêle avec les herbes de provence.",
            "Une fois les lardons grillés, ajouter la crème fraîche, le sel et le poivre.",
            "Ajouter enfin les œufs et les pâtes écumées dans la poêle. Éteindre le feu et laisser prendre.",
            "Mettre le tout dans un plat et servir chaud, avec le fromage râpé et/ou le parmesan."],
        preparation2:"",
        preparation3:"",
    },
    {
        nom:"Fondant au chocolat",
        id:"fondant gateau chocolat oeufs",
        type:"dessert",
        image:"IMAGES/fondant_au_chocolat.jpeg",
        prep_active:15,
        prep_totale:30,
        fait:true,
        vegetarien:false,
        etoiles:3,
        saison:"",
        nb_personnes:"6 personnes",
        ustensiles:["four", "batteur électrique"],
        repere1: "",
        repere2: "",
        repere3: "",
        ingredients1Name:"",
        ingredients1:["200 g de Nestlé Dessert Corsé", "5 œufs", "115g de beurre", "100g de sucre en poudre"],
        ingredients2Name:"",
        ingredients2:[],
        ingredients3Name:"",
        ingredients3:[],
        preparation1:["Beurrer et fariner un moule à tarte puis le mettre au frigo.",
            "Faire fondre le chocolat au bain-marie. Ajouter le beurre en petits morceaux.",
            "Séprarer les jaunes et les blancs des œufs. Blanchir les jaunes avec le sucre. Monter les blancs en neige ferme.",
            "Préchauffer le four à 200°C",
            "Lorsque le chocolat est presque fondu, retirer du bain marie et laisser fondre doucement. Le verser ensuite sur les jaunes d'œufs et mélanger.",
            "Incorporer délicatement les blancs d'œufs à la préparation précédente.",
            "Enfourner pendant 15 minutes."
        ],
        preparation2:"",
        preparation3:"",
    },
    {
        nom:"Flan des îles",
        id:"flan caramel oeufs été",
        type:"dessert",
        image:"IMAGES/flan_des_iles.webp",
        prep_active:15,
        prep_totale:60,
        fait:true,
        vegetarien:false,
        etoiles:3,
        saison:[6,7,8],
        nb_personnes:"8 personnes",
        ustensiles:["four", "batteur électrique"],
        repere1: "",
        repere2: "",
        repere3: "",
        ingredients1Name:"",
        ingredients1:["3 œufs", "400mL de lait concentré sucré", "400mL de lait", "100g de noix de coco râpée", "100g de caramel"],
        ingredients2Name:"",
        ingredients2:[],
        ingredients3Name:"",
        ingredients3:[],
        preparation1:["Napper un fond de tarte de caramel et réserver au frigo. ",
            "Mélanger les jaunes d’œuf avec le lait concentré et la noix de coco. Ajouter le lait.",
            "Monter les blancs en neige et ajouter au mélange.",
            "Verser dans le plat à tarte.",
            "Mettre au bain marie (175°c) dans le four pendant 45min."],
        preparation2:"",
        preparation3:"",
    },
    {
        nom:"Tiramisu",
        id:"tiramisu oeufs italienne",
        type:"dessert",
        image:"IMAGES/tiramisu.jpeg",
        prep_active:20,
        prep_totale:140,
        fait:true,
        vegetarien:false,
        etoiles:3,
        saison:[2,3],
        nb_personnes:"8 personnes",
        ustensiles:["batteur électrique"],
        repere1: "Préparation de la base de spéculoos (optionnel)",
        repere2: "Préparation de la crème",
        repere3: "Biscuits & dressage",
        ingredients1Name:"",
        ingredients1:["500g de mascarpone", "15 biscuits à la cuillère", "50 g de sucre", "5 œufs", "6 cas de cacao amer", "1 tasse de café", "Optionnel : 10 spéculos"],
        ingredients2Name:"",
        ingredients2:[],
        ingredients3Name:"",
        ingredients3:[],
        preparation1:["Égrainer les spéculos (à l'aide d'un rouleau à pâtisser).",
                "Ajouter un peu de beurre fondu pour faire coller les spéculos. En tapisser le fond du moule.",],
        preparation2:["Sortir le mascarpone un peu à l'avance pour qu'il soit plus souple. Casser les œufs en séparant les blancs des jaunes. Blanchir les jaunes d'œufs avec le sucre.",
            "Ajouter le mascarpone et fouetter jusqu'à l'obtention d'un mélange homogène.",
            "Battre les blancs en neige ferme avec une pincée de sel. Les incorporer délicatement au mélange jaunes-mascarpone, en soulevant la masse. Réserver au frais.",
            ],
        preparation3:["Mettre du café froid dans une assiette creuse. Tremper rapidement les biscuits un à un dans l'assiette de café pour en ranger une couche.",
            "Couvrir ces biscuits de crème au mascarpone, poudrer la surface d'un voile de cacao amer en le tamisant dans une petite passoire. Recommencer l'opération jusqu'à épuisement des ingrédients.",
            "Mettre au moins 2h au frais (une nuit c'est bien).",
            "Au moment de servir, poudrer la surface de cacao amer tamisé."],
    },
    {
        nom:"Tiramisu au citron",
        id:"tiramisu citron été frais oeufs italienne",
        type:"dessert",
        image:"IMAGES/tiramisu_citron.webp",
        prep_active:60,
        prep_totale:180,
        fait:true,
        vegetarien:false,
        etoiles:3,
        saison:[5,6],
        nb_personnes:"8 personnes",
        ustensiles:["batteur électrique", "cuisson"],
        repere1: "Préparation du lemon curd",
        repere2: "Préparation de la base de spéculoos",
        repere3: "Crème, biscuits & dressage",
        ingredients1Name:"",
        ingredients1:["500g de mascarpone", "15 biscuits à la cuillère", "1 bol de lait", "30g de beurre fondu", "Optionnel : 125g de spéculos",],
        ingredients2Name:"Lemon curd",
        ingredients2:[ "3 citrons", "4 œufs", "80g de sucre", "30g de beurre"],
        ingredients3Name:"",
        ingredients3:[],
        preparation1:["Dans une casserole, mélanger le sucre avec le zeste de 2 citrons (ne pas couper les citrons en 2).",
                "Mettre le zeste du troisième citron avec le lait dans une assiette creuse. Couper quelques tranches du citron pour la décoration future. " ,
                "Ajouter les 2 œufs et les 2 jaunes d’œufs dans la casserole. Conserver de côté les 2 blancs restant. Ajouter le jus de citron pressé.",
                "Chauffer le tout à feu fort jusqu’à épaississement en remuant constamment.",
                "Retirer du feu et ajouter les 30g de beurre. Laisser fondre en remuant.",
                "Mettre au frais",],
        preparation2:["Égrainer les spéculos (à l'aide d'un rouleau à pâtisser).",
                "Ajouter un peu de beurre fondu pour faire coller les spéculos. En tapisser le fond du moule.",],
        preparation3:["Monter les 2 blancs en neige.",
                "Mélanger le mascarpone avec la moitié du lemon curd, quand ce dernier est entièrement frais. Ajouter délicatement les blancs montés en neige.",
                "Tremper les biscuits à la cuillères dans le lait citronné.",
                "Disposer les biscuits à la cuillère, la crème, encore des biscuits à la cuillères puis encore de la crème et enfin le reste du lemon curd en topping.",
                "Mettre au moins 2h au frais (une nuit c'est bien).",],
    },
    {
        nom:"Coca cola maison",
        id:"coca_cola_maison",
        type:"boisson",
        image:"IMAGES/coca_cola_maison.jpeg",
        prep_active:"?",
        prep_totale:"?",
        fait:false,
        vegetarien:false,
        etoiles:0,
        saison:[],
        nb_personnes:"1 personne",
        ustensiles:["c de la buisson"],
        repere1: "",
        repere2: "",
        repere3: "",
        ingredients1Name:"",
        ingredients1:["2 cuillères à soupe de sucre (brun si possible)", "15 cl d’eau", "2 zestes d’orange", "1 zeste de citron jaune",
            "1 zeste de citron vert","1 badiane ","4 grains de coriandre","3 grains de poivre noir","1 bâtonnet de cannelle",
            "1 noix de muscade à râper","Limonade pour boire avec",],
        ingredients2Name:"",
        ingredients2:[],
        ingredients3Name:"",
        ingredients3:[],
        preparation1:["Faire caraméliser du sucre brun",
            "Rajouter 15cl d’eau et laisser réduire 5 minutes",
            "Ajouter les zestes d’orange, de citron vert et jaune, et les épices (sauf la noix de muscade) et laisser réduire 15 minutes",
            "Ajouter les quartiers d’agrume puis la noix de muscade et laisser réduire 15 minutes",
            "Filtrer en écrasant pour récolter le max de jus",],
        preparation2:"",
        preparation3:"",
    },
    {
        nom:"Bœuf aux épices",
        id:"boeuf_aux_epices",
        type:"viande",
        image:"IMAGES/boeuf_aux_epices.jpeg",
        prep_active:30,
        prep_totale:30,
        fait:true,
        vegetarien:false,
        etoiles:3,
        saison:[7,8],
        nb_personnes:"4 personnes",
        ustensiles:["cuisson"],
        repere1: "",
        repere2: "",
        repere3: "",
        ingredients1Name:"",
        ingredients1:["400g de rumsteack coupé en morceaux",  "2 poivrons (1 rouge et 1 vert)", "Optionnel : des nouilles chinoises ou du riz"],
        ingredients2Name:"Marinade",
        ingredients2:["1 échalote", "1 gousse d'ail", "4 cas de sauce soja salée", "3 cas d'huile neutre", "1 cas d'huile de sésame (ou 2 cas d’huile d’olive)", "1 gingembre coupé en lamelles (ou 1/2 cas de gingembre en poudre)",],
        ingredients3Name:"",
        ingredients3:[],
        preparation1:["Préparer la marinade dans un plat creux : émincer l'échalotte et hâcher l'ail, puis ajouter les sauces et les épices.",
            "Découper la viande en petits morceaux, et l'ajouter à la marinade pour 10 minutes.",
            "Egrainer les poivrons et les couper en lamelles de 5mm de large.",
            "Faire bouillir de l'eau pour les nouilles ou le riz.",
            "Egoutter la viande, tout en conservant la marinade. Dans une poêle bien chaude, à feu vif, la faire dorer (2 minutes à peine). L'égoutter de nouveau dans un plat.",
            "Faire ensuite revenir les poivrons à mi-feu, avec la marinade. Puis, ajouter la viande dorée.",
            "Remuer quelques minutes et servir chaud, avec les nouilles ou le riz.",],
        preparation2:"",
        preparation3:"",
    },
    {
        nom:"Baguette tomate-pesto-mozza",
        id:"baguette_tomatepestomozza",
        type:"aperitif",
        image:"IMAGES/baguette_pesto_mozzarella.jpeg",
        prep_active:10,
        prep_totale:25,
        fait:true,
        vegetarien:false,
        etoiles:2,
        saison:"",
        nb_personnes:"4 personnes",
        ustensiles:["four"],
        repere1: "",
        repere2: "",
        repere3: "",
        ingredients1Name:"",
        ingredients1:["1 baguette", "100g de pesto", "125g de mozzarella", "2 tomates rouge clair (pas cotelées)",
            "15mL d’huile d'olive", "Persil / Ciboulette",],
        ingredients2Name:"",
        ingredients2:[],
        ingredients3Name:"",
        ingredients3:[],
        preparation1:["Entailler la baguette tous les deux cm de manière oblique.",
            "Étaler le pesto sur chaque tranche avec une cuillère, puis insérer une rondelle de tomate et une rondelle de mozzarella entre chaque tranche.",
            "Verser un peu d'huile d'olive.",
            "Faire cuire 15 minutes à 180 degrés, chaleur tournante.",
            "Ajouter le persil/la ciboulette.",
            "On peut également faire la même chose façon mini-brushetta avec des grandes tranches fines de pain !"],
        preparation2:"",
        preparation3:"",
    },
    {
        nom:"Pasta saumon-gingembre",
        id:"pates saumon-gingembre",
        type:"pasta",
        image:"IMAGES/pasta_saumon_gingembre.webp",
        prep_active:10,
        prep_totale:25,
        fait:true,
        vegetarien:false,
        etoiles:2,
        saison:[3,4],
        nb_personnes:"4 personnes",
        ustensiles:["cuisson"],
        repere1: "",
        repere2: "",
        repere3: "",
        ingredients1Name:"",
        ingredients1:["350 g de fusilli", "160 g de saumon fumé", "40 g de gingembre épluché et coupé en rondelles",
            "1 citron vert ou jaune", "20 cl de crème épaisse", "Ciboulette/coriandre ciselée", "Sel/poivre",
            "1L d'eau","fromage râpé/parmesan",],
        ingredients2Name:"",
        ingredients2:[],
        ingredients3Name:"",
        ingredients3:[],
        preparation1:["Mettre tous les ingrédients dans une grande casserole en commençant par les pâtes et en finissant par l'eau.",
            "Laisser cuire 15 à 20 minutes sur feu moyen en remuant régulièrement. Il doit rester 2 cm de liquide à la fin.",
            "Retirer les rondelles de gingembre et servir avec de la coriandre/ciboulette fraîche et du fromage râpé/parmesan.",],
        preparation2:"",
        preparation3:"",
    },
    {
        nom:"Risotto aux cèpes",
        id:"risotto_aux_cepes",
        type:"riz",
        image:"IMAGES/risotto_aux_cepes.avif",
        prep_active:10,
        prep_totale:30,
        fait:true,
        vegetarien:true,
        etoiles:2,
        saison:[9,10],
        nb_personnes:"4 personnes",
        ustensiles:["cuisson"],
        repere1: "",
        repere2: "",
        repere3: "",
        ingredients1Name:"",
        ingredients1:["300 g de riz arborio", "1 blanc de poireau émincé", "500 g de cèpes frais ou surgelés",
            "1 grosse pincée de safran", "1 cube de bouillon de poulet", "2 échalotes émincées", "20 g de beurre",
            "2 cuillères à soupe d'huile d'olive","1 L d'eau","Sel/poivre", "Parmesan",],
        ingredients2Name:"",
        ingredients2:[],
        ingredients3Name:"",
        ingredients3:[],
        preparation1:["Couper les cèpes frais ou utiliser les cèpes surgelés tels quels.",
            "Mettre les ingrédients dans une cocotte ou une casserole sauf l'eau et les cèpes s'ils sont surgelés.",
            "Faire cuire 5 minutes sur feu vif en remuant.",
            "Ajouter l'eau et les champignons surgelés. Faire cuire 15 minutes sur feu doux.",
            "Servir avec du parmesan râpé.",],
        preparation2:"",
        preparation3:"",
    },
    {
        nom:"Croque hermaphrodite",
        id:"croque monsieur croque madame oeufs",
        type:"pain",
        image:"IMAGES/croque_hermaphrodite.jpeg",
        prep_active:5,
        prep_totale:10,
        fait:true,
        vegetarien:false,
        etoiles:3,
        saison:"",
        nb_personnes:"1 personne",
        ustensiles:["cuisson"],
        repere1: "",
        repere2: "",
        repere3: "",
        ingredients1Name:"",
        ingredients1:["2 tranches de pain de mie", "1 tranche de jambon", "Fromage râpé", "beurre",
            "1 œuf", "Sel/poivre/ciboulette"],
        ingredients2Name:"",
        ingredients2:[],
        ingredients3Name:"",
        ingredients3:[],
        preparation1:["Étaler du beurre sur une tranche de pain de mie.",
            "Ajouter dessus une tranche de jambon ainsi que du fromage râpé. Refermer avec l'autre tranche et la beurrer.",
            "Si le croque se sent plutôt madame, faire cuire un œuf sur le plat sans une poêle.",
            "Faire griller sur la poëlle 5 minutes par côté.",
            "Servir et ajouter l'œuf sur le plat sur le dessus."],
        preparation2:"",
        preparation3:"",
    },
    {
        nom:"Escalope sauce forestière",
        id:"dinde sauce forestière poulet",
        type:"viande",
        image:"IMAGES/dinde_roquefort_champignons.jpeg",
        prep_active:30,
        prep_totale:30,
        fait:true,
        vegetarien:false,
        etoiles:2,
        saison:[],
        nb_personnes:"4 personnes",
        ustensiles:["cuisson"],
        repere1: "",
        repere2: "",
        repere3: "",
        ingredients1Name:"",
        ingredients1:["4 escalopes de dinde", "250g de champignons de Paris", "1 échalotte", "2 gousses d'ail", "20cL de crème fraîche", "Sel / Poivre / Basilic / Cumin", "Optionnel : lardons, roquefort",],
        ingredients2Name:"",
        ingredients2:[],
        ingredients3Name:"",
        ingredients3:[],
        preparation1:["Dans une poêle huilée, faire revenir l'échalotte avec les gousses d'ail.",
            "Faire ensuite griller les lardons. Ajouter les champignons.",
            "Débarrasser la préparation, puis mettre à griller la dinde.",
            "Lorsque la dinde est dorée, ajouter la crème fraîche (+ le roquefort).",
            "Verser la préparation précédente, ajouter les épices, et c'est prêt !",
        ],
        preparation2:"",
        preparation3:"",
    },
    {
        nom:"Pasta chèvre-miel",
        id:"pasta_chevre_miel",
        type:"pasta",
        image:"IMAGES/pasta_chevre.webp",
        prep_active:"?",
        prep_totale:"?",
        fait:false,
        vegetarien:false,
        etoiles:0,
        saison:"",
        nb_personnes:"1 personne",
        ustensiles:["cuisson"],
        repere1: "",
        repere2: "",
        repere3: "",
        ingredients1Name:"",
        ingredients1:["100g de pâtes", "50g de Lardons", "Chèvre", "Miel", "Oignon", "Poivre/Herbes de provence",],
        ingredients2Name:"",
        ingredients2:[],
        ingredients3Name:"",
        ingredients3:[],
        preparation1:["Faire bouillir de l'eau avec du gros sel.",
            "Couper les oignons et le chèvre en morceaux.",
            "Une fois que l'eau bout, verser les pâtes.",
            "À mi-cuisson, faire revenir les lardons dans une poêle.",
            "Une fois les lardons grillés, ajouter les oignons puis le chèvre.",
            "Ajouter enfin les pâtes écumées dans la poêle. Éteindre le feu.",
            "Mettre le tout dans un plat et servir chaud."],
        preparation2:"",
        preparation3:"",
    },
    {
        nom:"Fondant au caramel au beurre salé",
        id:"fondant_au_caramel",
        type:"dessert",
        image:"IMAGES/fondant_caramel.jpg",
        prep_active:"?",
        prep_totale:"?",
        fait:false,
        vegetarien:false,
        etoiles:0,
        saison:[12],
        nb_personnes:"8 personnes",
        ustensiles:["cuisson", "four"],
        ingredients1Name:"",
        ingredients1:["180g de sucre", "200mL de crème liquide", "150 de beurre demi sel", "3 oeufs", "80g de farine",
            "1 cuillère à café de levure chimique",],
        ingredients2Name:"",
        ingredients2:[],
        ingredients3Name:"",
        ingredients3:[],
        repere1: "Préparation du caramel",
        repere2: "Préparation du gâteau",
        repere3: "",
        preparation1:["Mettre le sucre à fondre dans une poêle (en 3 fois). Ne pas remuer.",
            "Lorsque le sucre est fondu, hors du feu, ajouter la crème liquide chauffée au préalable. Bien mélanger.",
            "Ajouter le beurre coupé en petits morceaux et bien mélanger.",
            "Verser la caramel dans un saladier et laisser refroidir. Garder 4 cuillères à soupe de côté",],
        preparation2:["Mettre les 3 oeufs dans le caramel. Bien fouetter.",
            "Ajouter la farine et la levure. Bien mélanger",
            "Verser la pâte dans un moule bien beurré et fariné. Faire cuire entre 15 à 20 min à 180 degrés. Bien surveiller la cuisson pour conserver le centre coulant.",
            "Verser le caramel mis de côté sur le gâteau. Déguster tiède.",],
        preparation3:"",
    },
    {
        nom:"Banoffee pie",
        id:"banoffee_pie",
        type:"dessert",
        image:"IMAGES/banoffee_pie.webp",
        prep_active:60,
        prep_totale:180,
        fait:true,
        vegetarien:false,
        etoiles:2,
        saison:[5,6],
        nb_personnes:"8 personnes",
        ustensiles:[],
        ingredients1Name:"",
        ingredients1:["125-140 g de spéculoos", "50 g de sucre", "90 g de beurre mou", "20cl de crème fraîche liquide entière (pas allégée)",
            "250 g de mascarpone", "4 petites bananes ou 2 grosses", "Caramel au beurre salé",],
        ingredients2Name:"",
        ingredients2:[],
        ingredients3Name:"",
        ingredients3:[],
        repere1: "Préparation de la base de spéculoos",
        repere2: "Préparation des bananes et du caramel",
        repere3: "Préparation de la crème",
        preparation1:["Réduire les spéculoos en miettes dans un mixer.",
            "Ajouter le beurre mou et continuer à mixer jusqu'à obtenir une pâte homogène.",
            "Sortir la pâte, la poser entre 2 films plastiques/papiers cuisson et la travailler avec un rouleau à pâtisserie jusqu'à ce qu'elle tienne bien et qu'elle soit uniforme.",
            "Déposer la pâte au fond du cercle à pâtisser et sur les côtés sur 3-4 cm de hauteur. Réserver.",],
        preparation2:["Recouvrir de tranches de banane de 2 ou 3 mm d’épaisseur.",
            "Ajouter une généreuse quantité de sauce de caramel (légèrement chauffée pour un étalage plus homogène). Réserver.",],
        preparation3:["Dans un récipient bien froid, mettre la crème fraîche liquide, puis le mascarpone et le sucre et les monter en une chantilly bien ferme.",
           "Déposer la chantilly dans le moule, lisser la surface et réserver au frais pendant 1 à 2 heures.",
           "À la sortie du frigo, ôter délicatement le moule et le papier cuisson. Parsemer de quelques miettes de spéculoos et déposer une tranche de banane.",]
    },
    {
        nom:"Poulet Marry Me",
        id:"poulet_marry_me",
        type:"viande",
        image:"IMAGES/poulet_marry_me.jpg",
        prep_active:"?",
        prep_totale:"?",
        fait:false,
        vegetarien:false,
        etoiles:0,
        saison:[9,10],
        nb_personnes:"4 personnes",
        ustensiles:["cuisson"],
        ingredients1Name:"",
        ingredients1:["4 cuisses de poulet", "Farine", "20 cL de crème fraîche liquide ou crème fleurette", "2 gousses d'ail", "Beurre",
            "15cL de bouillon de volaille", "Parmesan", "Tomates séchées", "Paprika / Thym / Piment en flocons",
            "Sel/poivre", "Persil/ciboulette",],
        ingredients2Name:"",
        ingredients2:[],
        ingredients3Name:"",
        ingredients3:[],
        repere1: "Préparation du poulet",
        repere2: "Préparation de la sauce",
        repere3: "",
        preparation1:["Fariner 4 cuisses de poulet de tous les côtés.",
            "Les faire revenir dans une poële avec du beurre pendant 5 minutes jusqu'à ce qu'elles dorent..",
            "Mettre de côté.",],
        preparation2:["Dans la même poële, faire griller les deux gousses d'ail hachées.",
            "Verser le bouillon de volaille, puis la crème fleurette. Mélanger.",
            "Ajouter le parmesan, les tomates séchées et les épices. Mélanger.",
            "Ajouter les cuisses de poulet et laisser réduire pendant 10 minutes à feu doux.",
            "Couper le feu, ajouter les herbes et déguster.",],
        preparation3:"",
    },
    {
        nom:"Mini croissants apéritifs",
        id:"mini_croissants",
        type:"aperitif",
        image:"IMAGES/mini_croissants.webp",
        prep_active:"?",
        prep_totale:"?",
        fait:false,
        vegetarien:false,
        etoiles:0,
        saison:"",
        nb_personnes:"18 croissants",
        ustensiles:["four"],
        ingredients1Name:"Mini croissants fromage frais, saumon fumé & sésame",
        ingredients1:["1 pâte feuilletée", "fromage frais (type boursin, St-Morêt)", "Saumon fumé", "Graines de sésame",],
        ingredients2Name:"Mini croissants sauce tomate & fromage râpé",
        ingredients2:["1 pâte feuilletée", "sauce tomate", "fromage râpé", "Herbes de provence", ],
        ingredients3Name:"Mini croissants jambon, cheddar/mimolette & crème fraîche",
        ingredients3:["1 pâte feuilletée", "Jambon", "Cheddar/mimolette", "Crème Fraîche",],
        repere1: "",
        repere2: "",
        repere3: "",
        preparation1:["Découper la pâte feuilletée en 18 triangles.",
            "Déposer la garniture choisie. Rouler le croissant.",
            "Placer sur une plaque recouverte de papier cuisson et dorer avec un pinceau et du jaune d’œuf.",
            "Enfourner 20 minutes à 180°C.",],
        preparation2:[],
        preparation3:[],
    },
    {
        nom:"Salmon Rolls",
        id:"salmon_rolls",
        type:"aperitif",
        image:"IMAGES/salmon_rolls.png",
        prep_active:"?",
        prep_totale:"?",
        fait:false,
        vegetarien:false,
        etoiles:0,
        saison:[7,8],
        nb_personnes:"4 personnes",
        ustensiles:[],
        ingredients1Name:"",
        ingredients1:["1 concombre","1 boîte de fromage frais (St Morêt)","2 tranches de saumon fumé","Graines de sésame",],
        ingredients2Name:"",
        ingredients2:[],
        ingredients3Name:"",
        ingredients3:[],
        repere1: "",
        repere2: "",
        repere3: "",
        preparation1:["Éplucher le concombre puis détailler des fines bandes à l’aide d’un économe.",
        "Placer les bandes dans un torchon pour enlever l’excédent d’eau puis disposer sur un film plastique.",
        "Étaler le fromage frais, ajouter les tranches de saumon et les graines de sésame puis rouler le tout.",
        "Découper le boudin en morceaux de 4-5cm et c’est prêt à déguster.",],
        preparation2:"",
        preparation3:"",
    },
    {
        nom:"Samoussas au bœuf",
        id:"samoussas_au_boeuf",
        type:"aperitif",
        image:"IMAGES/samoussa_boeuf.webp",
        prep_active:40,
        prep_totale:60,
        fait:true,
        vegetarien:false,
        etoiles:2,
        saison:"",
        nb_personnes:"16 samoussas",
        ustensiles:["four"],
        ingredients1Name:"",
        ingredients1:["300g de viande hachée","1 carotte", "1/2 oignon", "1 gousse d’ail", "2 cuillères à soupe de sauce soja sucrée",
            "Persil/curry", "1 cuillère à café de gingembre (ou très très peu de gingembre râpé)", "8 feuilles de brick", "2 jaunes d’œuf",],
        ingredients2Name:"",
        ingredients2:[],
        ingredients3Name:"",
        ingredients3:[],
        repere1: "",
        repere2: "",
        repere3: "",
        preparation1:["Hacher la carotte, l’oignon et l’ail.",
            "Ajouter tous les ingrédients dans un saladier et bien mélanger.",
            "Découper les feuilles de bricks en deux puis, à l’aide d’un pinceau, badigeonner d’œuf battu.",
            "Replier les feuilles de brick en deux et ajouter une cuillère de la préparation précédente à une extrémité.",
            "Plier les samoussas en triangle dans la longueur.",
            "Les placer sur une plaque recouverte de papier sulfurisé et les badigeonner encore avec l’œuf avant d’enfourner 20 minutes à 190°.",],
        preparation2:"",
        preparation3:"",
    },
    {
        nom:"Cheesecake vanille-pistache",
        id:"cheesecake_van_pis",
        type:"dessert",
        image:"IMAGES/cheesecake_van_pis.jpeg",
        prep_active:"?",
        prep_totale:"?",
        fait:false,
        vegetarien:false,
        etoiles:0,
        saison:[],
        nb_personnes:"8 personnes",
        ustensiles:[],
        ingredients1Name:"",
        ingredients1:["200g de speculoos", "90g de beurre", "300g de cream cheese à température ambiante", "150g de crème fraîche", "Crème de pistache", "Vanille en poudre"],
        ingredients2Name:"",
        ingredients2:[],
        ingredients3Name:"",
        ingredients3:[],
        repere1: "La base aux speculoos",
        repere2: "La crème",
        repere3: "Le topping pistache",
        preparation1:["Mixer les spéculoos et ajouter le beurre fondu",
            "Verser dans le moule (cercle), étaler puis réserver au frais le temps de préparer la garniture.",
        ],
        preparation2:["Mélanger le cream cheese, la crème fraîche, la vanille en poudre et une cuillère à soupe de crème de pistache.",
            "Disposer sur la base de speculoos."
        ],
        preparation3:["Chauffer la crème de pistache et ajouter sur le dessus.",
            "Réserver au frais",
        ],
    },
    {
        nom:"Gâteau invisible aux pommes",
        id:"gateau pommes Cyril Lignac oeufs",
        type:"dessert",
        image:"IMAGES/gateau_invisible_pommes2.jpeg",
        prep_active:45,
        prep_totale:95,
        fait:true,
        vegetarien:false,
        etoiles:3,
        saison:[9,10],
        nb_personnes:"8 personnes",
        ustensiles:["four"],
        ingredients1Name:"",
        ingredients1:["4 pommes", "1 citron", "75g de farine", "50g de sucre", "50g de beurre à moitié fondu", "100ml de lait", "2 œufs", "1 sachet (10g) de levure chimique", "Optionnel : vanille en poudre, sucre glace pour le topping, canelle..."],
        ingredients2Name:"",
        ingredients2:[],
        ingredients3Name:"",
        ingredients3:[],
        repere1: "Les pommes",
        repere2: "Préparation de la pâte",
        repere3: "",
        preparation1:["Beurrer et fariner un moule (soit long soit rond) puis le réserver au frigo",
            "Peler les pommes et les couper en fines et grandes lamelles",
            "Mettre toutes les tranches des pommes dans un saladier et arroser de jus de citron pour éviter qu’elles s'oxydent."
        ],
        preparation2:["Préchauffer le four à 180°C.",
            "Tamiser la farine et la mélanger avec la levure chimique. Creuser un puits et y déposer les œufs.",
            "Battre les œufs progressivement avec la farine, puis ajouter le sucre, le beurre fondu, puis le lait et la vanille.",
            "Bien mélanger pour ne pas laisser de grumeaux, jusqu’à obtenir un mélange homogène semi-liquide.",
            "Sortir le moule du frigo, y disposer toutes les lamelles de pommes puis verser la préparation sur les pommes.",
            "Enfourner pendant environ 55 minutes à 180°C."
        ],
        preparation3:"",
    },
    {
        nom:"Rougail saucisse",
        id:"rougail_saucisse",
        type:"viande",
        image:"IMAGES/rougail.webp",
        prep_active:30,
        prep_totale:60,
        fait:true,
        vegetarien:false,
        etoiles:2,
        saison:"",
        nb_personnes:"4 personnes",
        ustensiles:["cuisson"],
        ingredients1Name:"",
        ingredients1:["4-6 saucisses fumées (selon l'épaisseur)", "4 tomates", "2 oignons", "4 gousses d'ail", "Sel / Poivre", "Curcuma / Thym / Laurie / Piment",],
        ingredients2Name:"",
        ingredients2:[],
        ingredients3Name:"",
        ingredients3:[],
        repere1: "",
        repere2: "",
        repere3: "",
        preparation1:["Faire bouillir de l'eau dans une marmitte",
            "Piquer les saucisses et les mettre dans l'eau bouillante pendant 10 minutes",
            "Émincer les oignons, l'ail et les tomates.",
            "Vider la marmite. Réserver les saucisses. Faire chauffer de l'huile d'olive (ne pas lésiner dessus) dans la même marmite.",
            "Faire revenir les oignons émincés et l'ail écrasé sans qu'ils soient trop colorés.",
            "Couper les saucisses en troncons de 1,5 cm et les faire revenir avec les oignons.",
            "Au bout de 5 minutes, ajouter les tomates coupées en petits morceaux et les aromates.",
            "Mélanger le tout puis laisser mijoter sur feu doux au moins 20 minutes en ôtant le couvercle de temps à autre pour éliminer l'excès d'eau.",
            "Déguster avec du riz, c'est meilleur...",
        ],
        preparation2:"",
        preparation3:"",
    },
    {
        nom:"Salade grecque",
        id:"salade_grecque",
        type:"entree",
        image:"IMAGES/salade_grecque.png",
        prep_active:30,
        prep_totale:30,
        fait:true,
        vegetarien:true,
        etoiles:3,
        saison:[6,7,8],
        nb_personnes:"6 personnes",
        ustensiles:[],
        ingredients1Name:"",
        ingredients1:["500g de tomates cerises (ou tomates normales)", "1 concombre", "1 oignon rouge", "1 poivron vert",
            "120g d'olives noires dénoyautées", "200g de feta à l'origan", "2 gousses d'ail", "Huile / vinaigre / moutarde", "1 demi-citron", "Sel / poivre"],
        ingredients2Name:"",
        ingredients2:[],
        ingredients3Name:"",
        ingredients3:[],
        repere1: "Préparation des crudités",
        repere2: "Préparation de la vinaigrette",
        repere3: "Préparation de la salade",
        preparation1:["Couper les tomates en cubes.",
            "Peler le concombre avec un éplucheur puis le couper en cubes",
            "Peler l'oignon rouge, et le détailler en lamelles pas trop larges.",
            "Prélever la partie chair du poivron vert et découper en lanières.",
            "Réserver de côté les olives noires.",
            "Détailler la feta en petits cubes.",
        ],
        preparation2:["Peler les gousses d'ail, les couper en deux, les écraser avec la lame du couteau et les hacher finement.",
            "Placer l'ail haché dans un récipient pour réaliser la sauce.",
            "Ajouter la moutarde et le vinaigre. Mélanger vigoureusement.",
            "Ajouter l'huile. Mélanger vigoireusement.",
            "Ajouter le jus du demi-citron fraîchement pressé et mélanger de nouveau.",
        ],
        preparation3:["Dans un saladie, verser les tomates, les concombres, les poivrons, l'oignon rouge, les olives noires et l'assaisonnement.",
            "Mélanger soigneusement. Ajouter les cubes de feta au dernier moment, car c'est un fromage fragile qui risque de s'émietter s'il est incorporé dès le départ.",
            "Mélanger doucement afin de ne pas abîmer la feta. Réserver au frais jusqu'au moment du service."
        ],
    },
    {
        nom:"Feuilletés au chorizo",
        id:"feuilletes chorizo oeufs apero",
        type:"aperitif",
        image:"IMAGES/chorizo.jpeg",
        prep_active:10,
        prep_totale:50,
        fait:true,
        vegetarien:false,
        etoiles:3,
        saison:"",
        nb_personnes:"Proportions unitaires",
        ustensiles:["four", "mixeur"],
        ingredients1Name:"",
        ingredients1:["1 chorizo doux", "1 œuf", "100-150g de gruyère râpé", "1 pâte feuilletée", "1 mixeur avec une lame (optionnel)"],
        ingredients2Name:"",
        ingredients2:[],
        ingredients3Name:"",
        ingredients3:[],
        repere1: "Préparation des feuilletés",
        repere2: "Découpage et cuisson",
        repere3: "",
        preparation1:["Enlever la peau du chorizo et découper en rondelles.",
            "Mixer les rondelles de chorizo avec l'œuf et le fromage râpé.",
            "Étaler la mixture sur la pâte feuilletée. Rouler la pâte.",
            "Mettre 30 minutes au congélateur ou 2h au moins au réfrigérateur.",
        ],
        preparation2:["Sortir la pâte du congélateur/réfrigérateur. Découper en fines rondelles et placer sur une plaque de cuisson avec un papier cuisson.",
            "Enfourner à 180°C pendant 10 minutes.",
        ],
        preparation3:"",
    },
    {
        nom:"Tagine",
        id:"tagine",
        type:"legume",
        image:"IMAGES/tagine.jpeg",
        prep_active:45,
        prep_totale:135,
        fait:true,
        vegetarien:false,
        etoiles:2,
        saison:"",
        nb_personnes:"4 personnes",
        ustensiles:["cuisson"],
        ingredients1Name:"",
        ingredients1:["2 oignons", "2 carottes", "2 tomates", "1 courgette", "1 poivron rouge", "2-3 gousses d'ail", "200g de pois chiches (cuits, en boîte)", "Épices : cumin, paprika, gingembre en poudre, canelle, sel et poivre, coriandre", "Viandes : agneau, poulet (cuisses ou hâché), veau, merguez..."],
        ingredients2Name:"",
        ingredients2:[],
        ingredients3Name:"",
        ingredients3:[],
        repere1: "Préparation du tagine de légumes",
        repere2: "Variations de recette",
        repere3: "",
        preparation1:["Émincer les oignons et l'ail.",
            "Dans une grande casserole, verser un peu d'huile d'olive et faire revenir les oignons et l'ail.",
            "Ensuite, faire cuire/dorer la viande dans la même casserole et ajouter les épices (1 cac de cumin, de paprika, de gingembre, de cannelle + sel et poivre).",
            "Couper les carottes en rondelles et les poivrons en dés. Les incorporer, ajouter également les pois chiches.",
            "Verser environ 100mL d'eau pour créer une sauce, couvrir le plat et laisser mijoter. Ajouter un peu d’eau en cours de cuisson si nécessaire.",
            "Concasser ensuire les tomates et les courgettes.",
            "Au bout d'une heure de cuisson, les incorporer. Au bout d'une heure et demi à deux heures, arrêter la cuisson.",
            "Servir le tagine chaud (garni de coriandre fraîche et/ou de citron pressé).",
        ],
        preparation2:["Fruits secs : raisins secs, abricots secs...",
            "Légumes : olives, aubergines, concentré de tomates...",
            "Féculents : semoule de blé, pommes de terre, frites, pita..."
        ],
        preparation3:"",
    },
    {
        nom:"Pâte à crêpes",
        id:"crepes oeufs bretagne bretonne",
        type:"pate",
        image:"IMAGES/crepes.jpeg",
        prep_active:15,
        prep_totale:45,
        fait:true,
        vegetarien:false,
        etoiles:3,
        saison:[2],
        nb_personnes:"20 crêpes environ",
        ustensiles:[],
        ingredients1Name:"",
        ingredients1:["5 œufs", "300g de farine", "1L de lait", "75g de sucre (plus si elles sont natures)", "50g de beurre salé", "vanille"],
        ingredients2Name:"",
        ingredients2:[],
        ingredients3Name:"",
        ingredients3:[],
        repere1: "",
        repere2: "",
        repere3: "",
        preparation1:["Dans un saladier, tamiser la farine et la mélanger au sucre (et sel si y en a).",
            "Ajouter les œufs au centre et remuer.",
            "Faire fondre le beurre au micro-ondes, puis le verser dans la préparation.",
            "Ajouter enfin le lait et bien mélanger pour éviter les grumeaux. Ajouter une bonne dose de vanille.",
        ],
        preparation2:"",
        preparation3:"",
    },
    {
        nom:"Quiches",
        id:"quiches tartes oeufs",
        type:"pain",
        image:"IMAGES/quiche.jpeg",
        prep_active:20,
        prep_totale:50,
        fait:true,
        vegetarien:false,
        etoiles:1,
        saison:[11,12],
        nb_personnes:"4 personnes",
        ustensiles:["four"],
        ingredients1Name:"",
        ingredients1:["1 rouleau de pâte brisée", "4 œufs", "250g (=25cL) de crème fraîche", "1 Oignon", "Poivre / sel / épices", "Gruyère râpé", "Protéïnes / légumes"],
        ingredients2Name:"",
        ingredients2:[],
        ingredients3Name:"",
        ingredients3:[],
        repere1: "Base de la recette",
        repere2: "Ingrédients supplémentaires",
        repere3: "",
        preparation1:["Beurrer et fariner un moule rond. Laisser reposer au réfrigérateur.",
            "Dans un saladier, mélanger les œufs et la crème frâiche. Ajouter le fromage, le poivre, le sel et les épices.",
            "Émincer l'oignon et le rajouter à la préparation.",
            "Préchauffer le four à 200°C.",
            "Ajouter les ingrédients phare de la quiche.",
            "Sortir le moule du réfrigérateur et étaler la pâte, puis faire des trous avec une fourchette.",
            "Verser la préparation et enfourner 30 minutes à 200°C (surveiller la cuisson)."
        ],
        preparation2:["Quiche lorraine (lardons - oignons - gruyère)",
            "Quiche saumon - gruyère - oignons",
            "Quiche thon - gruyère - oignons",  
            "Voir la recette de la <button class='link' id='quiche_thon' onclick='link(this.id)'>quiche au thon</button>",
            "Quiche aux légumes (courgettes - tomates - oignons - lardons - gruyère)",
            "Quiche moutarde - tomate - gruyère.",
            "Quiche sauce tomate - aubergines - oignons rouges.",
            "Quiche ricotta - tomates - courgettes.",
            "Quiche oignons confits - chèvre.",
            "Quiche tapenade - tomates - courgettes - aubregines.",
            "Quiche sauce tomate - poivrons rouges - pignons de pin - gruyère."
        ],
        preparation3:"",
    },
    {
        nom:"Far breton",
        id:"far flan breton bretagne oeufs",
        type:"dessert",
        image:"IMAGES/far_aux_pruneaux.jpeg",
        prep_active:30,
        prep_totale:75,
        fait:true,
        vegetarien:false,
        etoiles:2,
        saison:[3,4],
        nb_personnes:"4 personnes",
        ustensiles:["cuisson", "four"],
        ingredients1Name:"",
        ingredients1:["250 à 350g max de pruneaux dénoyautés", "6 œufs", "1L de lait", "250g de farine", "150g de sucre + un peu pour le moule", "100g de beurre salé + un peu pour le moule", "Optionnel : vanille"],
        ingredients2Name:"",
        ingredients2:[],
        ingredients3Name:"",
        ingredients3:[],
        repere1: "",
        repere2: "",
        repere3: "",
        preparation1:["Beurrer un moule large et saupoudrer l'intérieur d'un peu de sucre en poudre. Garder au réfrigérateur.",
                    "Préchauffer le four à 200°C. Faire bouillir 1L de lait à la casserole.",
                    "Dans un saladier, tamiser la farine et mélanger avec le sucre et le sel. Ajouter les œufs et mélanger.",
                    "Verser ensuite le lait bouillant et mélanger jusqu'à ce qu'il n'y ait plus de grumeaux.",
                    "Ajouter enfin les pruneaux.",
                    "Verser la préparation dans le moule beurré et enfourner 15 minutes à 200°C, puis 30 minutes à 170°C. Le far doit dorer et gonfler.",
                    "Laisser reposer une nuit au réfrigérateur.",
        ],
        preparation2:"",
        preparation3:"",
    },
    {
        nom:"Pasta Bolognaise",
        id:"pates_pâtes_bolognese",
        type:"pasta",
        image:"IMAGES/spaghettis_bolognaise.png",
        prep_active:30,
        prep_totale:45,
        fait:true,
        vegetarien:false,
        etoiles:3,
        saison:"",
        nb_personnes:"4 personnes",
        ustensiles:["cuisson"],
        ingredients1Name:"",
        ingredients1:["400g de pâtes", "300g de bœuf haché", "2 tomates", "1 carotte", "2 oignons", "2 gousse d'ail", "40cL (400g) de purée de tomate", "Gruyère râpé / parmesan", "Poivre / Sel / Épices (Basilic, Thym, Laurier)", "Optionnel : un carreau de chocolat"],
        ingredients2Name:"Alternative veggie",
        ingredients2:["bœuf hâché --> champignons de Paris"],
        ingredients3Name:"",
        ingredients3:[],
        repere1: "",
        repere2: "",
        repere3: "",
        preparation1:["Émincer les oignons et l'ail. Concasser les tomates et les carottes.",
            "Faire revenir les oignons dans une poêle huilée en mélangeant, sans qu'ils ne dorent trop.",
            "Ajouter la viande de bœuf hachée dans la poêle, et poursuivre la cuisson pendant 3 min sans cesser de mélanger pour la détacher en petits bouts, jusqu'à ce qu'elle ne soit plus rosée.",
            "Incorporer les carottes, puis les tomates, la purée et les épices. Saler et poivrer. Baissez sur feu doux et laissez mijoter pendant 30 min au moins, en remuant régulièrement.",
            "Faire bouillir de l'eau pour les pâtes et les cuire. Les ajouter ensuite dans la poêle. Éteindre le feu et laisser prendre.",
            "Mettre le tout dans un plat et servir chaud, avec le fromage râpé et/ou le parmesan."],
        preparation2:"",
        preparation3:"",
    },
    {
        nom:"Saumon en papillote",
        id:"saumon_papillote",
        type:"viande",
        image:"IMAGES/saumon_papillotte.webp",
        prep_active:5,
        prep_totale:30,
        fait:true,
        vegetarien:false,
        etoiles:3,
        saison:"",
        nb_personnes:"1 personne",
        ustensiles:["four"],
        ingredients1Name:"",
        ingredients1:["1 filet de saumon", "1 filet d'huile d'olive", "Sel / poivre / herbes de provence", "Optionnel : citron",],
        ingredients2Name:"",
        ingredients2:[],
        ingredients3Name:"",
        ingredients3:[],
        repere1: "",
        repere2: "",
        repere3: "",
        preparation1:["Préchauffer le four à 220°C.",
            "Dans un papier aluminium, déposer le filet de saumon.",
            "Verser un filet d'huile d'olive, saler, poivrer et épicer.",
            "Refermer la paillote et enfourner 25-30 minutes."
        ],
        preparation2:"",
        preparation3:"",
    },
    {
        nom:"Cheese naans",
        id:"naans_au_fromage",
        type:"pain",
        image:"IMAGES/naans.jpeg",
        prep_active:45,
        prep_totale:135,
        fait:true,
        vegetarien:false,
        etoiles:1,
        saison:"",
        nb_personnes:"12 naans",
        ustensiles:["cuisson"],
        ingredients1Name:"",
        ingredients1:["500 g de farine", "200 mL d’eau", "125 g de yaourt bulgare (soit 1 pot)", "4 cas d’huile végétale", "1 cac de sel", "1 sachet (11g) de levure chimique", "12 portions de vache qui rit",],
        ingredients2Name:"",
        ingredients2:[],
        ingredients3Name:"",
        ingredients3:[],
        repere1: "Préparation de la pâte",
        repere2: "Préparation des naans",
        repere3: "",
        preparation1:["Mélanger tous les ingrédients secs : farine, levure, sel et sucre.",
            "Faire un puits dans cette farine, et ajoutez les ingrédients liquides : huile, yaourt et eau",
            "Pétrir la pâte 10 à 15 minutes",
            "Laisser lever la pâte au minimum 1h30 dans un endroit tempéré en la recouvrant d'un torchon",
        ],
        preparation2:["Former 12 petites boules de taille identique et les étaler avec le rouleau à pâtisserie sur le plan de travail fariné.",
            "Etaler de la vache qui rit sur un la moitié de la pâte, en laissant 1 cm tout autour, refermer la pâte en deux et souder les bords.",
            "Faire cuire 5 minutes par face, et servir.",],
        preparation3:"",
    },
    {
        nom:"Salade de chou",
        id:"salade de chou oeufs",
        type:"entree",
        image:"IMAGES/salade_de_chou.webp",
        prep_active:"?",
        prep_totale:"?",
        fait:false,
        vegetarien:true,
        etoiles:0,
        saison:"",
        nb_personnes:"6 personnes",
        ustensiles:[],
        ingredients1Name:"",
        ingredients1:["1/2 chou blanc", "2 carottes", "2 tomates", "3 œufs", "1 oignon", "Sauce soja", "Poivre, ciboulette..."],
        ingredients2Name:"",
        ingredients2:[],
        ingredients3Name:"",
        ingredients3:[],
        repere1: "",
        repere2: "",
        repere3: "",
        preparation1:["Faire cuire les œufs dans l'eau bouillante pour en faire des œufs durs.",
            "Râper les carottes, concasser les tomates et émincer finement l'oignon.",
            "Couper le chou en fine lamelles.",
            "Mettre le tout dans un grand plat, assaisonner de sauce soja et épicer.",
        ],
        preparation2:"",
        preparation3:"",
    },
    {
        nom:"Brownie aux noix de pécan",
        id:"brownie gateau chocolat oeufs",
        type:"dessert",
        image:"IMAGES/brownie.webp",
        prep_active:35,
        prep_totale:60,
        fait:true,
        vegetarien:false,
        etoiles:3,
        saison:[9,10],
        nb_personnes:"6 personnes",
        ustensiles:["cuisson", "four"],
        ingredients1Name:"",
        ingredients1:["200g de Nestlé Dessert Corsé", "2 œufs", "115g de beurre", "60g de sucre", "40g de farine", "50g de pépites de chocolat"],
        ingredients2Name:"Noix de pécan caramélisées",
        ingredients2:["100g de noix de pécan", "75g de sucre", "50mL (50g) d'eau"],
        ingredients3Name:"",
        ingredients3:[],
        repere1: "",
        repere2: "Noix de pécan",
        repere3: "Base de chocolat",
        preparation1:["Beurrer et fariner un moule rectangulaire puis le mettre au frigo.",
        ],
        preparation2:[
            "Faire chauffer le sucre et l'eau, à feu fort, dans une casserole. Lorsque le caramel se forme, couper le feu, verser les noix et les caraméliser.",
            "Déposer les noix de pécan sur une plaque métallique et laisser refroidir.",
        ],
        preparation3:["Faire fondre le chocolat au bain-marie. Ajoutez le beurre en morceaux.",
            "Couper au couteau les noix caramélisées.",
            "Préchauffez le four à 170°C.",
            "Blanchir les œufs avec le sucre. Ajouter la farine tamisée. Mélanger.",
            "Incorporer le chocolat fondu, puis les noix puis les pépites de chocolat.",
            "Mettre la préparation dans le plat et enfourner 25 minutes.",
            "Déguster à température ambiante ou après réfrigération, deux aspects différents du brownie tout aussi excellents."],
    },
    {
        nom:"Gâteau au yaourt",
        id:"gateau yaourt oeufs",
        type:"dessert",
        image:"IMAGES/gateau_au_yaourt.webp",
        prep_active:"?",
        prep_totale:"?",
        fait:false,
        vegetarien:false,
        etoiles:0,
        saison:"",
        nb_personnes:"8 personnes",
        ustensiles:["four"],
        ingredients1Name:"",
        ingredients1:["2 yaourts nature (ou à la vanille)", "3 œufs", "100g de beurre salé", "1 pot 1/2 de sucre en poudre", "3 pots de farine", "1 sachet de levure chimique",],
        ingredients2Name:"",
        ingredients2:[],
        ingredients3Name:"",
        ingredients3:[],
        repere1: "",
        repere2: "",
        repere3: "",
        preparation1:["Beurrer et fariner un moule rond ou long, selon préférence, et mettre au réfrigérateur.",
            "Préchauffer le four à 180°C.",
            "Fouetter les œufs avec le sucre. Ajouter les yaourts. Mélanger à nouveau.",
            "Incorporer la farine en la tamisant. Faire de même avec la levure.",
            "Verser dans le moule et enfourner 25 minutes à 180°C. Laisser ensuite le gâteau dans le four éteint pendant 5 à 10 minutes.",
        ],
        preparation2:"",
        preparation3:"",
    },
    {
        nom:"Aubergines à la parmigiana",
        id:"aubergines parmigiana parmesane ratatouille gratin italie",
        type:"legume",
        image:"IMAGES/aubergine_parmigiana.webp",
        prep_active:70,
        prep_totale:95,
        fait:true,
        vegetarien:true,
        etoiles:3,
        saison:[8,9],
        nb_personnes:"4 personnes",
        ustensiles:["four", "cuisson"],
        ingredients1Name:"",
        ingredients1:["1kg d'aubergines", "250g de mozzarella (2 sachets)", "1 sachet (70g) de parmesan",],
        ingredients2Name:"Sauce tomate",
        ingredients2:["1kg de tomates concassées (ou pelées) en conserve", "2 oignons", "2 gousses d'ail", "70g de concentré de tomate", "Poivre / sel / origan / basilic",],
        ingredients3Name:"",
        ingredients3:[],
        repere1: "Préparation de la sauce tomate (20 minutes)",
        repere2: "Préparation des aubergines (40 minutes)",
        repere3: "Montage (10 minutes)",
        preparation1:["Émincer l'ail et les oignons et concasser les tomates.",
            "Dans une casserole, faire dorer l'ail et les oignons avec de l'huile d'olive.",
            "Ajoutez les tomates concassées ainsi que le concentré. Bien remuer, saler et poivrer.",
            "Couvrir et laisser mijoter pendant 40 minutes à feux doux.",
        ],
        preparation2:["Préchauffer le four à 200°C (chaleur tournante).",
            "Couper les aubergines en tranches de 5mm de large dans le sens de la longueur (sans les éplucher).",
            "Disposer les lamelles d'aubergines sur une plaque couverte de papier cuisson.",
            "Enfourner 20 minutes, en les retournant à mi-cuisson, jusqu'à ce qu'elles soient tendres.",
            "Couper la mozzarella en dés, faire la vaisselle et préparer un plat à gratin.",
        ],
        preparation3:["Lorsque les aubergines sont prêtes, les sortir du four.",
            "Retirer le jus de tomate si c'est trop liquide, car la sauce doit être le moins liquide possible.",
            "Disposer dans un plat à gratin les tranches d'aubergines en alternance avec la sauce tomate puis la mozzarella. Finir avec une couche d'aubergines, la sauce tomate et du parmesan râpé.",
            "Enfourner 25 minutes à 200°C."
        ],
    },
    {
        nom:"Lasagnes bolognaises",
        id:"lasagnes_bolognaise_bolognese",
        type:"pasta",
        image:"IMAGES/lasagnes.png",
        prep_active:90,
        prep_totale:120,
        fait:true,
        vegetarien:false,
        etoiles:3,
        saison:[],
        nb_personnes:"5 à 6 personnes",
        ustensiles:["cuisson", "four"],
        ingredients1Name:"",
        ingredients1:["350g de pâtes à lasagnes fraîches (ou 200g de pâtes à lasagnes sèches)", "300g d'emmental râpé",],
        ingredients2Name:"Sauce bolognaise",
        ingredients2:["400g de bœuf hâché", "700/800g de jus de tomate (Tomacouli par exemple)"," 1 carotte", "3 oignons", "2 gousses d'ail", "Poivre / Herbes de Provence / Basilic / Paprika",],
        ingredients3Name:"Béchamel",
        ingredients3:["70g de beurre", "70g de farine", "500mL de lait", "Noix de muscade"],
        repere1: "Préparation de la sauce bolognaise (20 minutes)",
        repere2: "Préparation de la béchamel (30 minutes)",
        repere3: "Assemblage des lasagnes (10 minutes)",
        preparation1:["Hâcher finement le bœuf en petits morceaux pour faciliter sa cuisson après.",
            "Couper la carotte en petits dés. Émincer les oignons et les gousses d'ail. Les faire revenir à feu vif dans une grande casserole avec de l'huile d'olive.",
            "Y ajouter le bœuf hâché et le faire cuire pendant 2 minutes tout en remuant vivement avec une cuillère en bois.",
            "Baisser le feu et ajouter les dés de carottes puis la pulpe de tomate. Saler, poivrer, et ajouter les arômes.",
            "Laisser mijoter à feu doux pendant au moins 1h, en couvrant la casserole."
        ],
        preparation2:["Beurrer et fariner un plat à gratin. Réserver au frais.",
            "Préparer une <button class='link' id='béchamel' onclick='link(this.id)'>sauce béchamel</button> avec des proportions multipliées par 2.",
        ],
        preparation3:["Lorsque la sauce bolognaise est prête, préchauffer le four à 180°C.",
            "Dans le plat à gratin, déposer une couche de lasagnes, puis la sauce bolognaise et l'emmental râpé. Faire cette opération 2 fois.",
            "Déposer enfin une dernière couche de lasagnes, puis ajouter la béchamel et de l'emmental râpé par dessus pour qu'elle gratine au four.",
            "Enfourner pendant 30 minutes environ : les lasagnes doivent être bien gratinées."
        ],
    },
    {
        nom:"Chili con carne",
        id:"chiliconcarne",
        type:"riz",
        image:"IMAGES/Chili-con-carne.webp",
        prep_active:15,
        prep_totale:40,
        fait:true,
        vegetarien:false,
        etoiles:2,
        saison:"",
        nb_personnes:"4 personnes",
        ustensiles:["cuisson"],
        ingredients1Name:"",
        ingredients1:["250g de bœuf haché", "1 petite boite de haricots rouges", "70g de concentré de tomate", "200g de pulpe de tomates/tomates pelées", "1 oignon", "1 gousse d'ail", "Sel / Poivre / 1 cac de sucre", "2 cac de cumin / 1 cac de chili ou 1 cac de paprika + origan + tabasco selon goût / un carré de chocolat noir", "Optionnel: 1 petite boîte de maïs + bouillon de bœuf"],
        ingredients2Name:"",
        ingredients2:[],
        ingredients3Name:"",
        ingredients3:[],
        repere1: "",
        repere2: "",
        repere3: "",
        preparation1:["Hacher l'oignon et l'ail.",
            "Dans une cocotte, faire fondre le beurre, et ensuite dorer doucement l'oignon et l’ail.",
            "Incorporer le boeuf haché et laisser cuire doucement 5 petites minutes.",
            "Mélanger le chili, le cumin, le concentré de tomates, et incorporer le tout au boeuf. Ajouter les haricots, du sel et du poivre.",
            "Couvrir et laisser cuire 25 min à feu doux.",
            "Servir chaud avec du riz",
        ],
        preparation2:["",],
        preparation3:[""],
    },
    {
        nom:"Pâte sablée",
        id:"pate sablee oeufs",
        type:"pate",
        image:"IMAGES/pate_sablee.jpg",
        prep_active:30,
        prep_totale:45,
        fait:true,
        vegetarien:false,
        etoiles:3,
        saison:[6,7,8],
        nb_personnes:"1 tarte (26/27cm de diamètre)",
        ustensiles:["four"],
        ingredients1Name:"",
        ingredients1:["200g de farine", "125g de beurre demi-sel pommade", "50g de sucre", "1 œuf", "100g de poudre d'amandes", "25g de graines de pavot (optionnel)"],
        ingredients2Name:"",
        ingredients2:[],
        ingredients3Name:"",
        ingredients3:[],
        repere1: "Préparation de la pâte (20 minutes)",
        repere2: "Pré-cuisson de la pâte (25 minutes)",
        repere3: "",
        preparation1:["Sortir le beurre à l'avance pour qu'il ramolisse.",
            "Dans un saladier, déposer la farine tamisée, le sucre et la poudre d'amandes (+ pavot).",
            "Ajouter le beurre mou en morceaux. Mélanger avec les doigts jusqu'à l'obtention d'une sorte de sable.",
            "Faire un puits et y verser un œuf. Mixer sommairement avec les mains : coller les morceaux de pâte plutôt que de vouloir former une pâte homogène.",
            "Lorsque la pâte est formée, la mettre en boule. L'étaler dans un film plastique et laisser reposer au moins 30 minutes au frigo (1h c'est bien).",
        ],
        preparation2:["Préchauffer le four à 180°C",
            "Beurrer un moule classique. On pourra ajouter du sucre sur les bords selon l'envie.",
            "Sortir la pâte du réfrigérateur et la travailler encore puis l'étaler. L'insérer dans le moule (conseil : faire des bords épais parce que c'est meilleur !).",
            "Enfourner pour 15 minutes à 180°C.",
            "Pour une dorure parfaite : étaler un jaune d'œuf battu avec de l'eau sur la tarte, et réenfourner 5 minutes à 180°C."
        ],
        preparation3:[""],
    },
    {
        nom:"Cookies aux noix de pécan",
        id:"cookies levain bakery oeufs",
        type:"dessert",
        image:"IMAGES/cookies2.jpeg",
        prep_active:30,
        prep_totale:105,
        fait:true,
        vegetarien:false,
        etoiles:3,
        saison:[11,12],
        nb_personnes:"8 à 10 gros cookies",
        ustensiles:["four", "congélateur"],
        ingredients1Name:"",
        ingredients1:["200g de farine T55", "100g de beurre demi-sel pommade", "75g de sucre vergeoise", "50g de sucre", "100g de Nestlé Dessert Corsé", "1 œuf",],
        ingredients2Name:"Noix de pécan caramélisées",
        ingredients2:["50g de noix de pécan", "50g de sucre", "35mL (35g) d'eau"],
        ingredients3Name:"",
        ingredients3:[],
        repere1: "Noix de pécan",
        repere2: "Pâte à cookie",
        repere3: "",
        preparation1:["Faire chauffer, à feu fort, le sucre et l'eau. Lorsque le caramel se forme, verser les noix et les caraméliser.",
            "Déposer les noix de pécan sur une plaque métallique et laisser refroidir.",
        ],
        preparation2:["Mélanger les ingrédients secs (farine, sucre, sucre vergeoise).",
            "Ajouter le beurre mou à la préparation et pétrir à la main.",
            "Lorsque la pâte est sableuse, incoporer doucement l'œuf. Ne pas mélanger à l'excès.",
            "Découper en morceaux la tablette de chocolat (conseil : en demi-carreaux) et couper des morceaux de noix de pécan. Ajouter le tout à la préparation.",
            "Former 8 boules pas trop grosses (ni trop hautes) et les placer au congélateur pendant 1h (pour qu'ils soient moelleux au centre).",
            "Préchauffer le four à 220°C puis enfourner pendant 13 minutes.",],
        preparation3:[""],
    },
    {
        nom:"Rose des sables",
        id:"rose_des_sables",
        type:"dessert",
        image:"IMAGES/roses_des_sables.jpg",
        prep_active:20,
        prep_totale:80,
        fait:true,
        vegetarien:false,
        etoiles:3,
        saison:[12,1],
        nb_personnes:"12 roses",
        ustensiles:["cuisson", "congélateur"],
        ingredients1Name:"",
        ingredients1:["100g de beurre demi-sel", "200g de Nestlé Dessert Corsé", "120g de corn flakes"],
        ingredients2Name:"",
        ingredients2:[],
        ingredients3Name:"",
        ingredients3:[],
        repere1: "",
        repere2: "",
        repere3: "",
        preparation1:["Faire fondre le chocolat noir au bain marie. Ajouter le beurre en morceaux.",
            "Lorsque le chocolat est fondu, verser les corn flakes et mélanger.",
            "Confectionner les roses sur un papier cuisson et mettre au congélateur au moins 1h."
        ],
        preparation2:["",],
        preparation3:[""],
    },
    {
        nom:"Sauce au poivre",
        id:"sauce_poivre",
        type:"sauce",
        image:"IMAGES/sauce_au_poivre.jpg",
        prep_active:10,
        prep_totale:10,
        fait:false,
        vegetarien:false,
        etoiles:0,
        saison:"",
        nb_personnes:"Proportions unitaires",
        ustensiles:["cuisson",],
        ingredients1Name:"",
        ingredients1:["1 échalotte", "Pur jus de volaille/de bœuf", "Crème fraîche liquide", "Beurre salé", "Poivre"],
        ingredients2Name:"",
        ingredients2:[],
        ingredients3Name:"",
        ingredients3:[],
        repere1: "",
        repere2: "",
        repere3: "",
        preparation1:["Cuire d'abord la viande et laisser le gras dans la poële.",
            "Émincer une échalotte et la faire revenir dans la poële.",
            "Ajouter du poivre, puis du pur jus de volaille/de boeuf. Attendre l'ébullition.",
            "Verser ensuite de la crème fraîche liquide.",
            "Ajouter des morceaux de beurre pour la texture.",
        ],
        preparation2:["",],
        preparation3:[""],
    },
    {
        nom:"Quiche au thon",
        id:"quiche thon oeufs",
        type:"pain",
        image:"IMAGES/quiche_thon.webp",
        prep_active:30,
        prep_totale:60,
        fait:true,
        vegetarien:false,
        etoiles:3,
        saison:[11],
        nb_personnes:"4 personnes",
        ustensiles:["cuisson", "four"],
        ingredients1Name:"",
        ingredients1:["1 pâte feuilletée", "1 boite de thon à la tomate", "1 oignon", "Des légumes au choix (tomates, courgettes, etc)", "20cl de crème fraîche", "3 œufs", "100g de gruyère râpé", "Sel / poivre / moutarde / noix de muscade"],
        ingredients2Name:"",
        ingredients2:[],
        ingredients3Name:"",
        ingredients3:[],
        repere1: "",
        repere2: "",
        repere3: "",
        preparation1:["Beurrer un moule puis le fariner. Réserver au frigo",
            "Émincer un oignon et les légumes (tomates, courgette, aubergine...)",
            "Faire revenir l'oignon à la poële, puis ajouter les légumes et laisser mijoter 20 minutes. Enlever le couvercle à la fin pour enlever l'excès d'eau.",
            "Préchauffer le four à 180°C",
            "Pendant ce temps, battre les œufs puis ajouter la crème fraîche et les condiments.",
            "Étaler la pâte dans le plat à tarte. Badigeonner le fond de tarte avec la moutarde. Ajoutez le thon, les légumes puis versez la préparation au-dessus et parsemez de fromage râpé.",
            "Enfourner 30 min",
        ],
        preparation2:["",],
        preparation3:[""],
    },
    {
        nom:"Soupe au potimarron",
        id:"soupe_potimarron",
        type:"entree",
        image:"IMAGES/soupe_potimarron.webp",
        prep_active:20,
        prep_totale:80,
        fait:true,
        vegetarien:true,
        etoiles:3,
        saison:[10,11],
        nb_personnes:"4 personnes",
        ustensiles:["cuisson",],
        ingredients1Name:"",
        ingredients1:["1 petit potimarron", "1  oignon", "250ml de crème fraîche liquide", "2 bouillon-cube de légumes (8g)", "Sel / poivre / noix de muscade"],
        ingredients2Name:"",
        ingredients2:[],
        ingredients3Name:"",
        ingredients3:[],
        repere1: "",
        repere2: "",
        repere3: "",
        preparation1:["Couper le potimarron en deux (sans enlever la peau). À l’aide d’une cuillère, retirer les fibres et les graines puis tailler le potimarron en gros dés. Peler et émincer l’oignon.",
            "Faire chauffer un peu d’huile dans une casserole. Faire bien revenir l’oignon émincé et les dés de potimarron.",
            "Verser de l'eau jusqu’à recouvrir les dés de potimarron. Ajouter deux bouillon cube (8g).",
            "Couvrir et laisser mijoter pendant 20 à 30 minutes.",
            "Une fois que les dés de potimarron sont tendres, mixer le tout. Ajouter à la soupe de la crème fraîche liquide, puis assaisonner avec du poivre et de la noix de muscade.",
        ],
        preparation2:["",],
        preparation3:[""],
    },
    {
        nom:"Cocos paimpolais",
        id:"coco_paimpol",
        type:"legume",
        image:"IMAGES/coco_paimpol.jpg",
        prep_active:20,
        prep_totale:110,
        fait:true,
        vegetarien:true,
        etoiles:2,
        saison:"",
        nb_personnes:"4 personnes",
        ustensiles:["cuisson",],
        ingredients1Name:"",
        ingredients1:["500g de cocos paimpolais", "300g de tomates", "2 carottes", "1 bouillon-cube (4g)", "2 gousses d'ail", "2 oignons", "2 échalotes", "Thym / sel /poivre"],
        ingredients2Name:"",
        ingredients2:[],
        ingredients3Name:"",
        ingredients3:[],
        repere1: "",
        repere2: "",
        repere3: "",
        preparation1:["Émincer les oignons, les échalottes et l'ail.",
            "Faire revenir les oignons émincés.",
            "Arroser avec le bouillon de pot-au-feu et portez à ébullition.",
            "Couper les tomates et les carottes",
            "Rajouter l’ail et les échalotes, les tomates, les carottes et le thym.",
            "Ajouter les cocos paimpolais, puis saler et poivrer. Ils doivent être impérativement recouverts de bouillon.",
            "Pour une bonne cuisson des cocos, les laisser mijoter pendant au moins une heure et demi."
        ],
        preparation2:["",],
        preparation3:[""],
    },
    {
        nom:"Galette des rois",
        id:"galette des rois frangipane oeufs",
        type:"dessert",
        image:"IMAGES/galette_des_rois.jpg",
        prep_active:50,
        prep_totale:110,
        fait:true,
        vegetarien:false,
        etoiles:3,
        saison:[1],
        nb_personnes:"8 personnes",
        ustensiles:["cuisson", "four", "congélateur"],
        ingredients1Name:"",
        ingredients1:["2 pâtes feuilletées de 250 à 300g environ (ou 600g de <button class='link' id='pate_feuilletee' onclick='link(this.id)'>pâte feuilletée</button> maison)", "1 œuf"
        ],
        ingredients2Name:"Crème pâtissière",
        ingredients2:["1 œuf", "20g de farine", "50g de sucre", "250mL de lait", "un peu de vanille"],
        ingredients3Name:"Crème d'amande",
        ingredients3:["125g de poudre d'amande", "2 œufs", "100g de beurre pommade","50g de sucre",],
        repere1: "Préparation de la crème pâtissière (15 minutes)",
        repere2: "Préparation de la crème d'amande (10 minutes)",
        repere3: "Assemblage de la galette",
        preparation1:["Préparer une <button class='link' id='crème_patissière' onclick='link(this.id)'> crème patissière</button> callibrée sur 1 œuf.",
        ],
        preparation2:["Dans un saladier, mélanger le sucre avec le beurre pommade. Ajouter ensuite la poudre d’amande.",
            "Ajouter les 2 œufs un à un et bien mélanger pour obtenir une crème homogène. Réserver.",
        ],
        preparation3:["Étaler une première pâte feuilletée sur un papier cuisson (la plus épaisse possible.). À l'aide d'un cercle à patîsser, découper un rond de 30 cm de diamètre. Utiliser le surplus de pâte pour faire une fine bande à poser sur la pâte aux niveaux des contours.",
            "Récupérer la crème pâtissière à température ambiante et la mélanger vivement pour lui redonner son homogénéité. Prélever 150g et l'incorporer dans la crème d'amande. Étaler le mélange sur la pâte puis y enterrer une fève.", 
            "Recouvrir avec l’autre pâte (ajouter un peu d'eau pour qu'elles se soudent), puis égaliser les bords en coupant le surplus à l'aide d'un cercle à pâtisser. Souder les contours de la galette.",
            "Réserver au congélateur pendant 30 minutes.",
            "Battre un jaune d’œuf avec 2 cuillères à soupe d’eau.",
            "Sortir la galette, la retourner et badigeonner la galette de jaune d'œuf. Puis, réserver au congélateur encore 10 minutes.",
            "Préchauffer le four à 200°C.",
            "À la sortie du congélateur, badigeonner à nouveau de jaune d'œuf, puis décorer la galette à l'aide du dos d'un couteau (astuce : mettre la pointe du couteau en biais pour faire un trait épais).",
            "À l'aide d'un curdent, percer la galette de petites cheminées pour que l'air puisse s'échapper lors de la cuisson.",
            "Enfourner à 200 degrés pendant 40 minutes environ.",
        ],
    },
    {
        nom:"Pâte feuilletée",
        id:"pate_feuilletee",
        type:"pate",
        image:"IMAGES/pate_feuilletee.jpg",
        prep_active:60,
        prep_totale:90,
        fait:true,
        vegetarien:false,
        etoiles:2,
        saison:"",
        nb_personnes:"600g de pâte feuilletée",
        ustensiles:[],
        ingredients1Name:"",
        ingredients1:["250g de farine T55/65", "250g de beurre doux", "1 cac bombée de sel", "100g d'eau"],
        ingredients2Name:"",
        ingredients2:[],
        ingredients3Name:"",
        ingredients3:[],
        repere1: "Détrempe et beurrage (40 minutes)",
        repere2: "Principe du tourage (5 + 15 minutes/tour)",
        repere3: "Tourages",
        preparation1:["Dans un récipient, tamiser la farine puis ajouter le sel.",
            "Sabler la farine avec 50g de beurre doux fondu.",
            "Ajouter l'eau en une seule fois, puis pétrir jusqu'à l'obtention d'une pâte homogène.",
            "Former un rectangle de 20cm de large environ et l'envelopper dans du film plastique. Laisser reposer au congélateur pendant 10 minutes.",
            "Assouplir 200g de beurre dans une feuille de papier cuisson pliée en un rectangle de (15x20)cm. Mettre au frais.",
            "Sortir la détrempe et l'étaler pour qu'elle ait une longueur 3 fois plus grande que le beurre.",
            "Poser le beurre dessus, et replier la détrempe autour du beurre en colllant les bords. Faire en sorte que la jointure soit verticale.",
        ],
        preparation2:["Pour chaque tour, il faudra penser à entailler au couteau au niveau des plis pour faire apparaître le beurre, ainsi qu'à tourner d'un quart de tour la pâte après chaque tour.",
            "Faire maximum 2 tours par sortie du congélateur, sinon le beurre se réchauffe.",
            "Pour un tour simple : abaisser la pâte selon une taille (3x1). Pour un tour double : abaisser la pâte selon une taille (4x1).",
            "Penser à retenir le sens du tourage. Filmer au contact et laisser reposer au moins 30 minutes au réfrigérateur ou 15 minutes au congélateur.",
        ],
        preparation3:["Pour une pâte feuilletée rapide : faire un tour simple et un tour double avant de mettre au congélateur 15 minutes. Puis, refaire 2 tours doubles. Enfin, faire un dernier tour double puis abaisser la pâte pour utilisation.",
            "Pour une pâte feuilletée optimale : laisser au moins 30 minutes au réfrigérateur. Entrecouper au maximum les tours par un repose au réfrigérateur, et remettre au frais entre le dernier tour et l'utilisation.",
        ],
    },
    {
        nom:"Lasagnes veggie-express",
        id:"lasagnes_express",
        type:"pasta",
        image:"IMAGES/lasagnes_express.webp",
        prep_active:45,
        prep_totale:90,
        fait:true,
        vegetarien:true,
        etoiles:3,
        saison:"",
        nb_personnes:"3 personnes",
        ustensiles:["cuisson", "four"],
        ingredients1Name:"",
        ingredients1:["6 feuilles de lasagnes", "1 sachet (70g) d'emmental râpé",],
        ingredients2Name:"Sauce tomate",
        ingredients2:["2 grosses tomates", "1 légume de saison (courgette/aubergine/carotte)", "1 gros oignon", "1 gousse d'ail", "70g de concentré/sauce de tomate", "Sel / Poivre / Herbes de provence"],
        ingredients3Name:"Béchamel",
        ingredients3:["35g de beurre", "35g de farine", "250mL de lait", "Noix de muscade"],
        repere1: "Préparation de la sauce tomate",
        repere2: "Préparation de la béchamel",
        repere3: "Assemblage des lasagnes",
        preparation1:["Beurrer un plat et le mettre au frais.",
            "Émincer l'oignon et la gousse d'ail. Les faire revenir dans une casserole avec de l'huile d'olive. Démarrer la cuisson à feu vif puis baisser le feu pour ne pas que les oignons brûlent.",
            "Couper les légumes.",
            "Lorsque les oignons sont dorés, ajouter les légumes. Saler, poivrer et ajouter les arômes.",
            "Laisser mijoter à feu doux pendant au moins 15 minutes."
        ],
        preparation2:["Préparer une <button class='link' id='béchamel' onclick='link(this.id)'>sauce béchamel</button> aux proportions unitaires.",
        ],
        preparation3:["Préchauffer le four à 180°C.",
            "Sortir le plat beurré. Y déposer une couche de lasagnes, puis l'emmental râpé et enfin la sauce aux légumes. Faire cette opération 2 fois.",
            "À la fin, terminer par une couche de lasagnes, et enfin une couche de béchamel et du fromage râpé pour que les lasagnes gratinent au four.",
            "Enfourner pendant 50 minutes environ : les lasagnes doivent être bien gratinées."
        ],
    },
    {
        nom:"Chokladfarn",
        id:"chokladfarn",
        type:"dessert",
        image:"IMAGES/chokladfarn.webp",
        prep_active:45,
        prep_totale:90,
        fait:false,
        vegetarien:false,
        etoiles:0,
        saison:"",
        nb_personnes:"3 personnes",
        ustensiles:["cuisson", "four"],
        ingredients1Name:"",
        ingredients1:["150g de flocons d'avoine", "200 g de Nestlé Dessert Corsé", "50g de farine", "100g de sucre", "100g de beurre demi-sel pommade", "1 oeuf", "1/2 sachet de levure chimique (5g)", "1 pincée de sel"],
        ingredients2Name:"",
        ingredients2:[],
        ingredients3Name:"",
        ingredients3:[],
        repere1: "",
        repere2: "",
        repere3: "",
        preparation1:["Préchauffer le four à 150°.",
            "Mixer légèrement les flocons d'avoine puis les mélanger dans un saladier avec le sucre, la farine et la levure.",
            "Ajouter l'oeuf, le beurre fondu et mélanger le tout.",
            "Façonner des petites boules, les déposer sur une plaque tapissée de papier sulfurisé en prenant soin de les espacer suffisamment.",
            "Enfourner pendant 12 minutes puis laisser refroidir sur une grille.",
            "Faire fondre le chocolat au bain marie. Laisser tiédir. Tremper un biscuit dans le chocolat et le recouvrir avec un second biscuit. Laisser refroidir quelques instants le temps de laisser le chocolat prendre et dégustez."
        ],
        preparation2:"",
        preparation3:"",
    },
    {
        nom:"Pâte à galette",
        id:"galette bretagne bretonnes",
        type:"pate",
        image:"IMAGES/galette.jpeg",
        prep_active:10,
        prep_totale:40,
        fait:true,
        vegetarien:false,
        etoiles:3,
        saison:"",
        nb_personnes:"10 galettes environ",
        ustensiles:[],
        ingredients1Name:"",
        ingredients1:["400g de farine de blé noir", "1 pincée de sel", "900mL d'eau (2/3 puis 1/3)", "Optionnel : 1 œuf"],
        ingredients2Name:"",
        ingredients2:[],
        ingredients3Name:"",
        ingredients3:[],
        repere1: "",
        repere2: "",
        repere3: "",
        preparation1:["Dans un grand saladier, tamiser la farine de blé noir. Ajouter une bonne pincée de sel.",
            "Verser 600mL d'eau petit à petit pour éviter de former des grumeaux, en mélangeant doucement.",
            "Laisser reposer au moins 30 minutes (plus longtemps c'est mieux).",
            "Au moment de chauffer les galettes, délayer encore la préparation dans 300mL d'eau jusqu'à ce qu'elle ait une texture semi-liquide.",
        ],
        preparation2:"",
        preparation3:"",
    },
    {
        nom:"Pâte à gaufres",
        id:"gaufres oeufs",
        type:"pate",
        image:"IMAGES/gaufres.webp",
        prep_active:15,
        prep_totale:75,
        fait:true,
        vegetarien:false,
        etoiles:2,
        saison:[],
        nb_personnes:"12 gaufres environ",
        ustensiles:[],
        ingredients1Name:"",
        ingredients1:["250g de farine", "2 œufs", "500mL de lait", "50g de beurre fondu", "1 sachet de levure chimique", "50g de sucre (pour des gaufres sucrées)"],
        ingredients2Name:"",
        ingredients2:[],
        ingredients3Name:"",
        ingredients3:[],
        repere1: "",
        repere2: "",
        repere3: "",
        preparation1:["Mélanger la farine, la levure et le sucre.",
            "Ajouter les œufs battus et bien mélanger.",
            "Ajouter peu à peu le lait, en remuant avec un fouet, pour éviter les grumeaux.",
            "Incorporer le beurre fondu et bien mélanger.",
            "Laisser reposer 1h au réfrigérateur.",
            "Confectionner les gaufres dans un gaufrier chauffé, en les cuisant 3 à 5 minutes.",
        ],
        preparation2:"",
        preparation3:"",
    },
    {
        nom:"Tarte aux fraises",
        id:"tarte aux fraises pate sablee oeufs",
        type:"tarte",
        image:"IMAGES/tarte-aux-fraises.jpg",
        prep_active:75,
        prep_totale:75,
        fait:true,
        vegetarien:false,
        etoiles:2,
        saison:[4,5],
        nb_personnes:"8 personnes",
        ustensiles:["cuisson", "four"],
        ingredients1Name:"",
        ingredients1:["500g de fraises",],
        ingredients2Name:"Crème pâtissière",
        ingredients2:["1 œuf", "20g de farine", "50g de sucre", "250mL de lait", "un peu de vanille"],
        ingredients3Name:"Pâte sablée",
        ingredients3:["200g de farine", "125g de beurre demi-sel bien mou", "100g de poudre d'amandes", "50g de sucre", "1 œuf"],
        repere1: "Préparation de la pâte sablée",
        repere2: "Préparation de la crème pâtissière",
        repere3: "Dressage de la tarte",
        preparation1:["En amont, suivre la préparation de la <button class='link' id='patesablee' onclick='link(this.id)'>pâte sablée</button> pour 6 personnes.",
            "Réserver la pâte au frais pour 30 minutes."
        ],
        preparation2:["Pendant le temps de réfrigération, préparer une <button class='link' id='crème_patissière' onclick='link(this.id)'>crème patissière</button> callibrée pour un œuf entier.",
            "Faire la vaisselle et préparer le plan de travail fariné, le cercle à pâtisser, la plaque de cuisson et le papier sulfurisé. Préchauffer le four à 180°C.",
        ],
        preparation3:["Suivre la recette de la cuisson de la <button class='link' id='patesablee' onclick='link(this.id)'>pâte sablée</button>.",
            "Une fois la pâte au four, laver et couper en deux les fraises.",
            "Lorsque la pâte est cuite, étaler la crème patissière et dispoer joliment les fraises."
        ],
    },
    {
        nom:"Crème pâtissière",
        id:"crème patissière oeufs",
        type:"sauce",
        image:"IMAGES/creme_patissiere.jpg",
        prep_active:15,
        prep_totale:15,
        fait:true,
        vegetarien:false,
        etoiles:3,
        saison:"",
        nb_personnes:"Proportions unitaires",
        ustensiles:["cuisson",],
        ingredients1Name:"",
        ingredients1:["1 œuf", "20g de farine", "50g de sucre", "250mL de lait", "un peu de vanille"],
        ingredients2Name:"",
        ingredients2:[],
        ingredients3Name:"",
        ingredients3:[],
        repere1: "",
        repere2: "",
        repere3: "",
        preparation1:["Dans une casserole, faire chauffer le lait avec la vanille à feu moyen.",
            "Fouetter un œuf (pas nécessairement tout le blanc selon la quantité de crème voulue) avec le sucre puis ajouter la farine et mélanger jusqu'à obtenir un mélange pâle et homogène.",
            "Verser une partie du lait chaud sur ce mélange en fouettant, puis reverser le tout dans la casserole et cuire à feu moyen en remuant sans arrêt jusqu’à épaississement (1 à 2 minutes après ébullition).",
            "Hors du feu, filmer au contact et laisser refroidir.",
        ],
        preparation2:"",
        preparation3:"",
    },
    {
        nom:"Sauce béchamel",
        id:"béchamel",
        type:"sauce",
        image:"IMAGES/bechamel.webp",
        prep_active:20,
        prep_totale:20,
        fait:true,
        vegetarien:false,
        etoiles:3,
        saison:"",
        nb_personnes:"Proportions unitaires",
        ustensiles:["cuisson",],
        ingredients1Name:"",
        ingredients1:["35g de beurre", "35g de farine", "250mL de lait", "Sel / Poivre / Noix de muscade"],
        ingredients2Name:"",
        ingredients2:[],
        ingredients3Name:"",
        ingredients3:[],
        repere1: "",
        repere2: "",
        repere3: "",
        preparation1:["Dans une casserole, faire fondre le beurre.",
            "Ajouter ensuite la même quantité de farine hors du feu, puis mélanger pour que le beurre soit absorbé.",
            "Verser le lait très progressivement en mélangeant pour empêcher la formation de grumeaux.",
            "Replacer sur feu moyen et laisser épaissir pendant quelques minutes (ne pas mélanger).",
            "Saler, poivrer et ajouter une bonne pincée de noix de muscade.",
        ],
        preparation2:"",
        preparation3:"",
    },
    {
        nom:"Tarte à la rhubarbe",
        id:"tarte rhubarbe pate sablee oeuf",
        type:"tarte",
        image:"IMAGES/tarte-rhubarbe.jpg",
        prep_active:100,
        prep_totale:120,
        fait:true,
        vegetarien:false,
        etoiles:3,
        saison:[5],
        nb_personnes:"8 personnes",
        ustensiles:["cuisson", "four"],
        ingredients1Name:"",
        ingredients1:["1kg de rhubarbe, à l'achat (7 à 8 tiges)", "100g de fraises", "80g de sucre", "un peu de vanille"],
        ingredients2Name:"Crème d'amandes",
        ingredients2:["40g de sucre", "50g de poudre d'amandes", "40g de beurre pommade", "2 œufs",],
        ingredients3Name:"Pâte sablée (28cm de diamètre)",
        ingredients3:["200g de farine", "125g de beurre demi-sel bien mou", "100g de poudre d'amandes", "50g de sucre", "1 œuf",],
        repere1: "Préparation de la compotée fraise-rhubarbe",
        repere2: "Préparation de la crème d'amandes",
        repere3: "Montage de la tarte",
        preparation1:["Sortir le beurre à l'avance : 125g pour la pâte sablée et 40g pour la crème d'amandes.",
            "En amont, suivre la préparation de la <button class='link' id='patesablee' onclick='link(this.id)'>pâte sablée</button> pour 6 personnes.",
            "Réserver la pâte au frais pour 30 minutes.",
            "Pendant le temps de réfrigération, éplucher et couper toutes les rhubarbes en tronçons réguliers de forme losange. Garder de côté 65 tronçons pour la décoration.",
            "Dans une casserole, mettre le reste des tronçons de rhubarbes, avec 80g de sucre. Couper les fraises en morceaux et les ajouter au mélange.",
            "Chauffer le tout à feu doux et couvrir pendant 30 minutes en remuant régulièrement."
        ],
        preparation2:[
            "Préchauffer le four à 180°C.",
            "Suivre la recette de la cuisson de la <button class='link' id='patesablee' onclick='link(this.id)'>pâte sablée</button>. Enfourner pour seulement 10 minutes.",
            "Pendant la précuisson, dans un saladier, mixer le beurre pommade avec 40g de sucre. Ajouter la poudre d'amande et mélanger.",
            "Intégrer un à un les 2 œufs au mélange, afin d'obtenir une texture homogène. Laisser la préparation de côté.",
        ],
        preparation3:["Sortir la pâte du four, retirer le cercle à pâtisser et les noyaux de cerise, et étaler la crème d'amande sur le fond de tarte.",
            "Enfourner à nouveau 5 minutes à 180°C pour cuire la crème d'amande.",
            "Sortir la tarte du four, y étaler la compotée fraise-rhubarbe puis placer joliment les morceaux de rhubarbe. Astuce : placer les losanges verticalement en colonne, puis combler les trous avec des losanges horizontaux, de manière à former des fleurs.",
            "Enfourner une dernière fois pour 20 minutes à 180°C."
        ],
    },
    {
        nom:"Poulet Tikka Massala",
        id:"poulet_tikka_massala",
        type:"viande",
        image:"IMAGES/poulet_tikka.jpg",
        prep_active:"?",
        prep_totale:"?",
        fait:false,
        vegetarien:false,
        etoiles:0,
        saison:[],
        nb_personnes:"4 personnes",
        ustensiles:["cuisson",],
        ingredients1Name:"",
        ingredients1:["4 blancs de poulet", "1 oignon", "1 gousse d'ail", "150g de yaourt", "1 tomate", "1 citron vert", "70g de concentré de tomate", "Poivre / Piment / Cumin / Curcuma / Gingembre / Garam massala (voir ci-dessous)", "Optionnel : noix de cajou"],
        ingredients2Name:"",
        ingredients2:[],
        ingredients3Name:"",
        ingredients3:[],
        repere1: "Préparation du poulet Tikka",
        repere2: "Préparer son propre Garam massala",
        repere3: "",
        preparation1:["Couper les blancs de poulet en morceaux et les déposer dans un saladier.",
            "Saupoudrer de cumin, de curcuma, de garam massala et de gingembre en poudre. Verser le jus de citron, mélanger et laisser mariner 1h au frais.",
            "Émincer l'oignon et l'ail.",
            "Dans une poële huilée, faire suer l’oignon.",
            "Ajouter ensuite les morceaux de poulet et les faire dorer.",
            "Incorporer le piment et l’ail. Verser le yaourt, le lait de coco et le concentré de tomate.",
            "Poivrer, mélanger et laisser mijoter 30 minutes.",
            "Servir avec des cheese naans ou du riz.",
        ],
        preparation2:["2 cac de cumin en poudre",
            "1 cac de cardamome en poudre",
            "1 cac de coriandre moulue",
            "1 cac de poivre noir",
            "1 pincée de cannelle en poudre",
            "1 pincée de noix de muscade en poudre",
            "1 clou de girofle réduit en poudre",
            "Placer les épices dans une poêle anti-adhésive et les faire revenir à feu vif jusqu’a ce qu'elles embaument (quelques minutes seulement). Laisser refroidir, mélanger, et c’est prêt !"
            
        ],
        preparation3:[
        ],
    },
    {
        nom:"Limonade brésilienne",
        id:"limonade_brasil",
        type:"boisson",
        image:"IMAGES/limonade_bresilienne.webp",
        prep_active:10,
        prep_totale:10,
        fait:true,
        vegetarien:false,
        etoiles:1,
        saison:[7],
        nb_personnes:"4 personnes",
        ustensiles:["mixeur"],
        ingredients1Name:"",
        ingredients1:["5 citrons verts bio (de préférence des brésiliens car la peau est fine)", "200g de lait concentré sucré", "50g de sucre", "500mL d'eau + de l'eau gazeuse", "Optionnel : 150g de fraises ou de framboises (pour une limonade à la fraise/framboise)"],
        ingredients2Name:"",
        ingredients2:[],
        ingredients3Name:"",
        ingredients3:[],
        repere1: "",
        repere2: "",
        repere3: "",
        preparation1:["Couper les citrons verts en quartiers, en laissant la peau.",
            "Mixer les citrons verts avec 500mL d'eau.",
            "Filtrer la préparation au tamis pour enlever tous les morceaux.",
            "Ajouter le lait concentré et le sucre. Bien mélanger.",
            "Servir avec beaucoup de glaçons, et allonger la préparation à l'eau gazeuse.",
        ],
        preparation2:"",
        preparation3:"",
    },
    {
        nom:"Pâte à choux",
        id:"pate à chou profiteroles oeufs",
        type:"pate",
        image:"IMAGES/patachou.jpg",
        prep_active:40,
        prep_totale:70,
        fait:true,
        vegetarien:false,
        etoiles:3,
        saison:[],
        nb_personnes:"8 à 10 gros choux",
        ustensiles:["cuisson", "four"],
        ingredients1Name:"Pâte à choux",
        ingredients1:["150g de farine", "100g de beurre demi-sel", "250mL d'eau", "4 œufs",],
        ingredients2Name:"Craquelin",
        ingredients2:["40g de beurre demi-sel", "50g de farine", "50g de sucre roux"],
        ingredients3Name:"",
        ingredients3:[],
        repere1: "",
        repere2: "Préparation du craquelin (10 minutes)",
        repere3: "Préparation de la pâte à choux (30 minutes)",
        preparation1:["Sortir le beurre à l'avance : 100g (choux) et 40g (craquelin).",
        ],
        preparation2:["Mélanger le sucre roux, 40g de beurre mou et 50g de farine.",
            "Entre deux feuilles de papier sulfurisé, étaler la préparation sur 1 à 2mm d'épaisseur.",
            "Détailler des cercles avec un verre.",
            "Laisser la pâte entre les deux feuilles de papier sulfurisé et réserver au congélateur pendant 20 minutes.",
        ],
        preparation3:[
            "Dans une casserole, faire bouillir l'eau avec 100g de beurre coupé en morceaux.",
            "À la première ébullition, retirer la casserole du feu et verser 150g de farine d'un seul bloc. Mélanger avec une maryse, puis reporter sur le feu en mélangeant jusqu'à ce qu'elle se détache complètement de la casserole.",
            "Préchauffer le four à 180°C.",
            "Hors du feu, ajouter les oeufs, un par un, en les incorporant à chaque fois complètement à la pâte. La pâte ne doit pas trop s'ammolir, donc réserver une partie du dernier œuf au cas où il n'est pas nécessaire.",
            "En faire des petits tas et les disposer sur une plaque recouverte de papier sulfurisé (astuce : confectionner une poche à douille avec du papier sulfurisé !)",
            "Sortir les craquelins du congélateur, et les disposer sur les choux.",
            "Enfourner pendant 25-30 minutes à 180°C."],
    },
    {
        nom:"Profiteroles",
        id:"profiteroles oeufs pate à choux",
        type:"dessert",
        image:"IMAGES/profiteroles.webp",
        prep_active:50,
        prep_totale:90,
        fait:true,
        vegetarien:false,
        etoiles:3,
        saison:[],
        nb_personnes:"",
        ustensiles:["cuisson", "four"],
        ingredients1Name:"",
        ingredients1:["100g de Nestlé Dessert Corsé", "20g de beurre", "100mL de lait", "Crème glacée à la vanille", "Optionnel : amandes effilées"],
        ingredients2Name:"Pâte à choux",
        ingredients2:["(150g + 60g) de farine", "(100g + 50g) de beurre demi-sel", "250mL d'eau", "4 œufs", "60g de sucre roux",],
        ingredients3Name:"",
        ingredients3:[],
        repere1: "Préparation de la pâte à chou (40 minutes)",
        repere2: "Assemblage des profiteroles",
        repere3: "",
        preparation1:["Préparer des choux en suivant entièrement la recette de la <button class='link' id='patachou' onclick='link(this.id)'> pâte à choux</button>.",
        ],
        preparation2:["Faire fondre le chocolat au bain marie, avec le beurre et le lait.",
            "Lorsque les choux sont prêts, les laisser refroidir puis les découper horizontalement en deux et les garnir de glace à la vanille.",
            "Ajouter des amandes effilées, la sauce au chocolat, et c'est prêt !"
        ],
        preparation3:[],
    },
    {
        nom:"Gratin dauphinois",
        id:"gratin patates oeufs",
        type:"legume",
        image:"IMAGES/gratin_dauphinois.webp",
        prep_active:"?",
        prep_totale:"?",
        fait:true,
        vegetarien:false,
        etoiles:2,
        saison:[],
        nb_personnes:"4 personnes",
        ustensiles:["four"],
        ingredients1Name:"",
        ingredients1:["800g de pommes de terre", "500mL de lait", "100g (1 sachet) de gruyère râpé", "2 œufs", "Sel / Poivre / Noix de muscade", "Optionnel : <button class='link' id='béchamel' onclick='link(this.id)'>sauce béchamel</button> aux proportions multipliées par 2"],
        ingredients2Name:"",
        ingredients2:[],
        ingredients3Name:"",
        ingredients3:[],
        repere1: "",
        repere2: "",
        repere3: "",
        preparation1:["Beurrer un plat et le réserver au réfrigérateur.",
            "Éplucher les pommes de terre, les laver et les couper en findes rondelles.",
            "Dans une casserole, faire bouillir le lait.",
            "Battre les œufs, et ajouter le lait bouillant petit à petit. Saler, poivrer et ajouter de la noix de muscade en poudre.",
            "Préchauffer le four à 200°C.",
            "Dans le plat beurré, disposer une couche de pommes de terre et une couche de gruyère râpé en alternance.",
            "Au-dessus du gratin, verser le mélange œufs-lait, saupoudrer de gruyère râpé et parsemer de noisettes de beurre. On pourra aussi étaler de la béchamel par dessus.",
            "Enfourner 1h à 200°C."   
        ],
        preparation2:[],
        preparation3:[],
    },
    {
        nom:"Œufs mimosa",
        id:"oeufs mimosa",
        type:"entree",
        image:"IMAGES/oeufs_mimosa.webp",
        prep_active:"20",
        prep_totale:"20",
        fait:false,
        vegetarien:false,
        etoiles:0,
        saison:[],
        nb_personnes:"4 personnes",
        ustensiles:["cuisson"],
        ingredients1Name:"",
        ingredients1:["4 œufs", "1 jaune d'œuf", "1 cac de moutarde", " 1 cac de vinaigre balsamique", "Huile / Sel / Poivre / Ciboulette / Persil",],
        ingredients2Name:"",
        ingredients2:[],
        ingredients3Name:"",
        ingredients3:[],
        repere1: "",
        repere2: "Préparation de la mayonnaise",
        repere3: "Dressage",
        preparation1:["Faire bouillir de l'eau dans une casserole. Y faire cuire les œufs pendant 10 minutes.",
        ],
        preparation2:["Pendant ce temps, dans un bol, déposer un jaune d'œuf, la moutarde et le vinaigre, et fouetter le tout.",
            "Toujours en fouettant, ajouter goutte à goutte l'huile jusqu'à ce que la mayonnaise commence à prendre. Lorsqu'elle est bien “accrochée”, continuer en ajoutant l’huile en filet, toujours en fouettant.",
            "Lorsque la mayonnaise est prête, saler et poivrer."
             ],
        preparation3:["Quand les œufs sont cuits, les mettre une minute dans de l'eau très froid pour stopper la cuisson.",
            "Enlever la coquille, les couper dans la longueur et récupérer délicatement les jaunes.",
            "Émietter les jaunes d’œufs durs à la fourchette. Ajouter les épices, et les mélanger avec la mayonnaise.",
            "Remplir les demi-blancs avec la préparation, et servir avec de la ciboulette par-dessus."
        ],
    },
    {
        nom:"Poireaux vinaigrette",
        id:"poireaux vinaigrette",
        type:"entree",
        image:"IMAGES/poireaux_vinaigrette.webp",
        prep_active:"?",
        prep_totale:"?",
        fait:false,
        vegetarien:false,
        etoiles:0,
        saison:[],
        nb_personnes:"2 personnes",
        ustensiles:["cuisson"],
        ingredients1Name:"",
        ingredients1:["2 poireaux assez fins", "1 échalotte", "1 vinaigrette riche en moutarde", "Poivre / Ciboulette", "Optionnel : 1 bouillon kub de légumes"],
        ingredients2Name:"",
        ingredients2:[],
        ingredients3Name:"",
        ingredients3:[],
        repere1: "",
        repere2: "",
        repere3: "",
        preparation1:["Rincer les poireaux, puis couper des tronçons de 2 à 3cm de largeur (ne pas garder la partie verte).",
            "Les faire cuire dans une casserole avec de l'eau (on pourra ajouter un bouillon de légume) pendant 10 à 15 minutes.",
            "Préparer une vinaigrette : moutarde, vinaigre, huile, sel et poivre.",
            "Émincer finement la ciboulette et l'échalotte.",
            "Égoutter et laisser refroidir les poireaux. Les disposer dans un plat, parsemer de ciboulette et d'échalotte et verser un peu de vinaigrette par dessus.",
        ],
        preparation2:[""],
        preparation3:[""],
    },
    {
        nom:"Tagliatelles fraîches maison",
        id:"pâte à pâtes nouilles oeufs",
        type:"pate",
        image:"IMAGES/pates_fraiches.jpeg",
        prep_active:"40",
        prep_totale:"90",
        fait:false,
        vegetarien:false,
        etoiles:0,
        saison:[],
        nb_personnes:"1 personne",
        ustensiles:["cuisson"],
        ingredients1Name:"Règle de base : 1 œuf pour 100g de farine",
        ingredients1:["100g de farine", "1 œuf", "1 pincée de sel",],
        ingredients2Name:"",
        ingredients2:[],
        ingredients3Name:"",
        ingredients3:[],
        repere1: "Préparation de la pâte à pâtes",
        repere2: "Création des tagliatelles",
        repere3: "",
        preparation1:["Verser la farine, tamisée et mélangée au sel, sur le plan de travail et former un puits.",
            "Casser les oeufs au centre du puits.",
            "Avec une fourchette (ou à la main), mélanger en incorporant petit à petit la farine. Pétrir ensuite à la main pendant 10 minutes pour obtenir une pâte lisse et homogène.",
            "Filmer la pâte et la laisser reposer 30 minutes au frais."
        ],
        preparation2:["Disposer un torchon propre et sec sur une surface plane.",
            "Sortir la boule de pâte du réfrigérateur et la couper en 2. Fariner le plan de travail.",
            "Étaler la pâte très finement à l’aide d’un rouleau à pâtisserie pour former un ovale (l'épaisseur sera celle des tagliatelles).",
            "La plier ensuite en éventail en commençant par un des petits côté de l'ovale.",
            "À l’aide d’un couteau, couper des lamelles de largeur souhaitée. Défaire les rubans de tagliatelles, et les mettre à sécher sur le torchon.",
            "Réitérez toutes ces étapes avec le deuxième paton.",
            "Finalement, faire bouillir un grand volume d’eau avec un peu de sel et y mettre les tagliatelles pour 3 minutes."],
        preparation3:[""],
    },
    {
        nom:"Beurre persillé à l'ail",
        id:"tartinade persil beurre ail",
        type:"sauce",
        image:"IMAGES/beurre_persille.webp",
        prep_active:"5",
        prep_totale:"5",
        fait:true,
        vegetarien:false,
        etoiles:2,
        saison:[],
        nb_personnes:"4 personnes",
        ustensiles:[],
        ingredients1Name:"",
        ingredients1:["40g de beurre demi-sel", "4 brins de persil", "2 gousses d'ail"],
        ingredients2Name:"",
        ingredients2:[],
        ingredients3Name:"",
        ingredients3:[],
        repere1: "",
        repere2: "",
        repere3: "",
        preparation1:["Sortir le beurre à l'avance pour qu'il ramolisse.",
            "Hâcher finement les gousses d'ail. Laver puis couper le persil en morceaux très fins.",
            "Mélanger le persil, l'ail et le beurre à la fourchette."
        ],
        preparation2:[""],
        preparation3:[""],
    },
    {
        nom:"Tartinade thon & fromage frais",
        id:"tartinade thon crème blanche st moret saint morêt",
        type:"sauce",
        image:"IMAGES/thon_st_moret.webp",
        prep_active:"5",
        prep_totale:"5",
        fait:true,
        vegetarien:false,
        etoiles:3,
        saison:[],
        nb_personnes:"Proportions unitaires",
        ustensiles:[],
        ingredients1Name:"",
        ingredients1:["300g de Saint-Morêt", "1 boîte de thon à l'eau", "1 yaourt grec", "1 citron", "1 gros bouquet de ciboulette"],
        ingredients2Name:"",
        ingredients2:[],
        ingredients3Name:"",
        ingredients3:[],
        repere1: "",
        repere2: "",
        repere3: "",
        preparation1:["Presser le citron, couper finement la ciboulette.",
            "Émietter le thon avec une fourchette.",
            "Mélanger tous les ingrédients. Réserver au frais."
        ],
        preparation2:[""],
        preparation3:[""],
    },
    {
        nom:"Crumble de légumes",
        id:"crumble légumes salé",
        type:"legume",
        image:"IMAGES/crumble_legumes.webp",
        prep_active:"55",
        prep_totale:"80",
        fait:true,
        vegetarien:true,
        etoiles:2,
        saison:[],
        nb_personnes:"4 personnes",
        ustensiles:["four", "cuisson"],
        ingredients1Name:"Crumble",
        ingredients1:["200g de farine", "125g de beurre demi-sel", "70g (1 sachet) de parmesan"],
        ingredients2Name:"Garniture de courgette",
        ingredients2:["1kg de courgettes", "1 oignon", "2 gousses d'ail", "Poivre / Noix de muscade / Herbes de provence / Basilic"],
        ingredients3Name:"Des alternatives",
        ingredients3:["Légumes : Aubergines / Poireaux / Tomates / Poivron rouge", "Fromages : chèvre / mozzarella"],
        repere1: "",
        repere2: "Préparation des légumes", 
        repere3: "Préparation du crumble",
        preparation1:["Sortir le beurre à l'avance pour qu'il ramollisse.",
            "Beurrer et fariner un plat à gratin, puis le mettre au réfrigérateur.",
        ],
        preparation2:["Émincer l'oignon et les gousses d'ail. Concasser les courgettes (et/ou autres légumes) en petit cubes (sans les éplucher).",
            "Dans une casserole huilée, faire revenir les oignons.",
            "Incorporer ensuite les autres légumes, ajouter les épices, et laisser mijoter pendant au moins 30 minutes.", 
        ],
        preparation3:["Préchauffer le four à 220°C.",
            "Mélanger la farine avec le beurre mou pour former du sable. Ajouter ensuite le parmesan et mélanger. Réserver au frais.",
            "Lorsque les légumes sont précuits (pas besoin qu'ils soient cuits entièrement), les transvaser dans le plat à gratin. Parsemer le crumble par dessus.",
            "Enfourner pour 25 minutes à 220°C.",],
    },
    {
        nom:"Entremets aux 3 chocolats",
        id:"gateau chocolat praliné génoise oeufs",
        type:"dessert",
        image:"IMAGES/entremets_3_chocolats.jpg",
        prep_active:"?",
        prep_totale:"?",
        fait:true,
        vegetarien:false,
        etoiles:3,
        saison:[],
        nb_personnes:"8 à 10 personnes",
        ustensiles:["four", "cuisson", "congelateur", "batteur"],
        ingredients1Name:"Génoise chocolat-noisette",
        ingredients1:["2 œufs", "50g de sucre", "30g de farine", "10g de cacao amer", "15g de poudre de noisettes"],
        ingredients2Name:"Croustillant praliné",
        ingredients2:["170g de Nestlé Dessert Praliné (pralinoise)", "100g de crêpes dentelles nature", "70g de Nestlé Dessert Lait"],
        ingredients3Name:"Mousses au chocolat",
        ingredients3:["200g de Nestlé Dessert Corsé", "100g de Nestlé Dessert Lait", "165g de chocolat blanc pâtissier peu sucré", 
            "85cL (35cL + 25cL + 25cL) de crème liquide entière 30% de matière grasse", "9g (3g x 3) de feuilles de gélatine Vahiné (1,5 x3)",
        ],
        repere1: "Préparation de la génoise",
        repere2: "Préparation du praliné",
        repere3: "Préparation des mousses",
        preparation1:["Préchauffer le four à 170°C.",
            "Mélanger la farine, la poudre de noisette et le cacao.",
            "Monter les blancs en neige : dès qu'ils moussent, ajouter le sucre en poudre. Une fois prêts, incorporer les jaunes d'oeufs puis les ingrédients secs en plusieurs fois à l'aide d'une spatule pour ne pas trop casser les blancs.",
            "Étaler le mélange sur une plaque à génoise (ou sur un papier cuisson), dans le cercle à pâtisserie réglé sur 22cm.",
            "Enfourner 13 minutes. Laisser tiédir puis décoller la génoise de la plaque.",
            "Disposer le cercle sur un support plat puis garnir les côtés de ruban rhodoïd (cela permet de démouler plus proprement à la fin). Déposer la génoise dans le fond."
        ],
        preparation2:["Faire fondre la pralinoise et le chocolat au lait au bain marie.",
            "Ajouter les crêpes dentelles émiettées puis tasser le mélange sur la génoise dans le cercle.",
            "Réfrigérer en attendant la suite."
        ],
        preparation3:["Ramollir la gélatine dans l'eau froide.",
            "Dans une casserole, chauffer à feu doux un tiers de la dose de crème liquide avec le chocolat noir en morceaux pour le faire fondre.",
            "Hors du feu, ajouter la gélatine égouttée.",
            "Fouetter les deux tiers restants de crème en chantilly puis ajouter le chocolat fondu en deux fois, à l'aide d'une spatule.",
            "Verser la mousse au dessus du gâteau, puis mettre 30 minutes au congélateur afin de la solidifier.",
            "Recommencer l'opération 2 fois avec le chocolat au lait, puis avec le chocolat blanc.",
            "Enfin, réserver l'entremets au frais pour une nuit au moins.",],
    },
    {
        nom:"Pissaladière",
        id:"pissaladière tarte anchois anchoïade pizza provençale",
        type:"pain",
        image:"IMAGES/pissaladiere.webp",
        prep_active:"80",
        prep_totale:"150",
        fait:true,
        vegetarien:false,
        etoiles:1,
        saison:[],
        nb_personnes:"8 personnes",
        ustensiles:["four", "cuisson",],
        ingredients1Name:"Pâte à pain",
        ingredients1:["300g de farine", "150mL (150g) d'eau", "15g de levure boulangère fraîche ou 1 sachet (5,5g) de levure boulangère sèche", "15g d'huile d'olive", "1 cac de sel"],
        ingredients2Name:"Garniture",
        ingredients2:["50g de filets d'anchois", "600g d'oignons", "2 gousses d'ail", "10 olives noires dénoyautées", "1 boîte de sardines à l'huile" , "Poivre / Herbes de provence"],
        ingredients3Name:"",
        ingredients3:"",
        repere1: "Préparation de la pâte",
        repere2: "Préparation de la garniture",
        repere3: "Assemblage",
        preparation1:["Déposer la farine dans un saladier. Y ajouter le sel et la levure boulangère. Mélanger.",
            "Verser l'huile d'olive et l'eau. Remuer d’abord avec les doigts puis pétrir jusqu’à ce que la pâte soit homogène, lisse et élastique (la pâte doit se détacher des doigts).",
            "Mettre la pâte en boule. Couvrir le saladier d’un torchon et laisser gonfler la pâte pendant 1h à température ambiante."
        ],
        preparation2:["Peler et émincer finement les oignons et l'ail.",
            "Dans une grande casserole, faire revenir les oignons émincés avec un peu d’huile d’olive.",
            "Remuer pendant 5 minutes, ajouter l'ail, le poivre et les herbes de provence.",
            "Couvrir et laisser mijoter à feu très doux pendant 1h30.",
            "Pendant ce temps, préparer le pissalat : disposer les filets d’anchois sur du papier absorbant pour les sécher. Garder une petite dizaine des plus beaux anchois de côté pour la décoration.",
            "Piler les autres dans un mortier avec les sardines jusqu’à obtenir une pâte homogène."
        ],
        preparation3:["Étaler la pâte à pain à la main sur une feuille de papier cuisson, faire un rebord pour retenir la garniture.",
            "La placer sur la plaque du four. Laisser pousser encore 1h à l’abri des courants d’air.",
            "Préchauffer le four à 200°C. En fin de pousse de la pâte, enfourner pour 10 minutes.",
            "Lorsque les oignons sont bien confits, ajouter le pissalat dans la casserole et bien mélanger. Laisser refroidir la garniture.",
            "Répartir les oignons confits sur la pâte précuite et disposer joliment quelques anchois et olives noires.",
            "Pour une finition optimale : cuire à nouveau la pissaladière pendant 15 minutes à 200°C."
    ],
    },
    {
        nom:"Salade estivale",
        id:"salade fraîche été crudités",
        type:"entree",
        image:"IMAGES/salade_estivale.jpg",
        prep_active:"15",
        prep_totale:"15",
        fait:true,
        vegetarien:true,
        etoiles:2,
        saison:[],
        nb_personnes:"4 personnes",
        ustensiles:[],
        ingredients1Name:"",
        ingredients1:["1/2 melon", "1/2 pastèque", "1 concombre", "1 oignon rouge", "1 bloc de feta", "Poivre / menthe"],
        ingredients2Name:"",
        ingredients2:[""],
        ingredients3Name:"",
        ingredients3:[""],
        repere1: "",
        repere2: "", 
        repere3: "",
        preparation1:["Détailler tous les fruits et légumes en cubes. Couper la fêta en morceaux. Émincer finement l'oignon. Mélanger tous les ingrédients",
            "Ajouter la menthe frâiche et réserver au frais."
        ],
        preparation2:[""],
        preparation3:[""],
    },
    {
        nom:"Granola maison",
        id:"cereales cruesli muesli quakers petit dejeuner gouter",
        type:"pate",
        image:"IMAGES/granola.webp",
        prep_active:"10",
        prep_totale:"30",
        fait:true,
        vegetarien:false,
        etoiles:2,
        saison:[],
        nb_personnes:"350g de granola",
        ustensiles:["four"],
        ingredients1Name:"",
        ingredients1:["200g de flocons d'avoine", "50g de mélange de noix (noix, noisettes, amandes, pistaches...)", "30g d'eau", "4 cas de miel", "1 pincée de sel", "50g de Nestlé dessert Corsé (optionnel)", "1 cas de canelle (optionnel)",],
        ingredients2Name:"",
        ingredients2:[],
        ingredients3Name:"",
        ingredients3:[""],
        repere1: "",
        repere2: "", 
        repere3: "",
        preparation1:["Préchauffer le four à 150°C.",
            "Dans un saladier, mélanger les flocons d'avoine avec les noix concassées. Ajouter le sel et la canelle.",
            "Ajouter le miel et l'eau puis mélanger avec une cuillère en écrasant le plus possible pour agglomérer les flocons et les noix.",
            "Verser la préparation sur une plaque protégée de papier sulfurisé. Enfourner pour 20 minutes.",
            "Couper 50g de la tablette de chocolat en petits carrés.",
            "À la sortie du four, laisser bien refroidir puis ajouter le chocolat.",
        ],
        preparation2:[""],
        preparation3:[""],
    },
    {
        nom:"Tarte aux prunes",
        id:"tartes fruits mirabelles prune reine claude oeufs pate sablee",
        type:"tarte",
        image:"IMAGES/tarte_aux_prunes.webp",
        prep_active:"30",
        prep_totale:"90",
        fait:true,
        vegetarien:false,
        etoiles:2,
        saison:[8],
        nb_personnes:"8 personnes",
        ustensiles:["four"],
        ingredients1Name:"",
        ingredients1:["30 prunes (recette calibrée pour des Reine Claude)",],
        ingredients2Name:"Pâte sablée au pavot",
        ingredients2:["200g de farine", "125g de beurre demi-sel bien mou", "50g de sucre", "1 œuf", "100g de poudre d'amandes", "30g de graines de pavot (optionnel)"],
        ingredients3Name:"",
        ingredients3:[""],
        repere1: "Préparation de la pâte sablée",
        repere2: "Préparation de la tarte", 
        repere3: "",
        preparation1:["En amont, suivre la préparation de la <button class='link' id='patesablee' onclick='link(this.id)'>pâte sablée</button>.",
            "Enfourner la pâte pendant 15 minutes à 180°C.",
        ],
        preparation2:["Pendant le temps de précuisson de la pâte, laver, dénoyauter, puis couper en deux toutes les prunes.",
            "Lorsque la pâte sort du four, disposer les prunes sur le fond de tarte, face bombée vers le haut. Saupoudrer de sucre roux.",
            "Enfourner à nouveau pour 20 minutes.",
        ],
        preparation3:[""],
    },
    {
        nom:"Salade de riz",
        id:"salade crudité riz frais été plat froid oeufs",
        type:"entree",
        image:"IMAGES/salade_de_riz.webp",
        prep_active:"30",
        prep_totale:"90",
        fait:true,
        vegetarien:true,
        etoiles:2,
        saison:[],
        nb_personnes:"4 personnes",
        ustensiles:["cuisson"],
        ingredients1Name:"",
        ingredients1:["1 verre de riz",  "4 œufs durs"],
        ingredients2Name:"Crudités",
        ingredients2:["1 boîte de thon à la tomate", "2 tomates", "1 oignon", "1 boîte de maïs",
            "1/2 poivron (optionnel)", "des cubes de fromage (optionnel)",],
        ingredients3Name:"",
        ingredients3:[""],
        repere1: "",
        repere2: "", 
        repere3: "",
        preparation1:["Faire bouillir de l'eau dans une casserole, puis y déposer le riz et les œufs (pendant 10 minutes).",
            "Pendant ce temps, préparer les crudités : couper finement l'oignon, les tomates, et les autres ingrédients.",
            "Au bout de 10 minutes, enlever les œufs durs et laisser refroidir. Récupérer le riz cuit.",
            "Dans un saladier, mélanger tous les ingrédients. Réserver au frais.",
        ],
        preparation2:[""],
        preparation3:[""],
    },
]


/* -------------- */

history.scrollRestoration = "manual"
window.scrollTo(0, 0)

window.addEventListener("load", loader);

const catalogue = document.getElementById("katalaug")
const header = document.getElementById("header");
const surheader = document.getElementById("sur-header");
const ul = document.getElementById("ul-header");
const slider = document.getElementById("slider");
const imgslider1 = document.getElementById("slider1grand");
const imgslider2 = document.getElementById("slider2grand");
const slider_grand = document.getElementById("slider_grand");
const menu_deroulant = document.getElementById("menuderoulant");
const input = document.getElementById("big-think")
const searchbar = document.getElementById("searchbar");
const boutonRecherche = document.getElementById("li2");
const recette = document.getElementById("conteneur");
const menu_de_filtrage = document.getElementById("filter_menu");
const croix = document.getElementById("croix");
const barrederecherche = document.getElementById("barrerecherche");
const slider_a = document.getElementById("main-icon-slider");


/* FONCTIONS ADDEVENTLISTENERs */

barrederecherche.addEventListener("input", function(e) {
    rechercher();
});

input.addEventListener("click", () => {
    apparaitre_searchbar();
});

document.addEventListener("click", (e) => {
    // Si la searchbar n'est pas affichée, on ne fait rien
    if (searchbar.classList.contains("cache")){
        return
    };

    // Si on clique dans la searchbar ou sur le bouton de recherche, on ne fait rien
    if (searchbar.contains(e.target) || boutonRecherche.contains(e.target) || menu_de_filtrage.contains(e.target) || recette.contains(e.target) || croix.contains(e.target)) {
        return;
    }
    // Sinon on la ferme
    disparaitre_searchbar();
});

document.addEventListener("click", (e) => {
    // Si la searchbar n'est pas affichée, on ne fait rien
    if (recette.classList.contains("cache")) {return};

    // Si on clique dans la searchbar ou sur le bouton de recherche, on ne fait rien
    if (recette.contains(e.target)) {
        return;
    }
    // Sinon on la ferme
    enlever_recette();
});

window.addEventListener("scroll", (event) => {
    let conteneur = document.getElementById("conteneur");
    let didacticiel = document.getElementById("tuto");
    let recherche = document.getElementById("searchbar");
    let tutoriel = document.getElementById("tuto");
    let contient1 = conteneur.classList.contains("cache");
    let contient5 = tutoriel.classList.contains("cache");

    let x = window.scrollX;
    let y = conteneur.scrollTop;

    let mql1 = window.matchMedia("(width < 800px)");
    let mql2 = window.matchMedia("(width < 1200px)");

        if (y === 0 && contient1 === false && mql1.matches){
            enlever_recette()
        }
        else if (x > 0 && contient5 === false && mql2.matches){
            suivant_tutoriel()
            setTimeout(500);
        }
        else if (x < 0 && contient5 === false && mql2.matches){
            precedent_tutoriel()
            setTimeout(500);
        }
    });

let dernierScrollCatalogue = 0;
let dernierScrollAccueil = 0;
    
catalogue.addEventListener("scroll", () => {
    let scrollActuelCatalogue = catalogue.scrollTop;

    let mql = window.matchMedia("(width < 800px)");
    
    if (mql.matches){
    // le header se rapetisse
    if (scrollActuelCatalogue > dernierScrollCatalogue + 5 && scrollActuelCatalogue > 0) {
        surheader.classList.add("header-ultra-compact");
        ul.classList.add("ul-compact");
        /* imgslider1.classList.add("imgslider1-compact");
        imgslider2.classList.add("imgslider2-compact"); */
    } else if (scrollActuelCatalogue > dernierScrollCatalogue + 1 && scrollActuelCatalogue > 0){
        surheader.classList.add("header-compact");
    }
    // le header remonte
    else if (scrollActuelCatalogue < dernierScrollCatalogue - 1 && scrollActuelCatalogue > 0) {
        surheader.classList.remove("header-compact");
        surheader.classList.remove("header-ultra-compact");
        slider.classList.remove("slider-compact");
        ul.classList.remove("ul-compact");
        /* imgslider1.classList.remove("imgslider1-compact");
        imgslider2.classList.remove("imgslider2-compact"); */
    }
    }

    dernierScrollCatalogue = scrollActuelCatalogue;
})

window.addEventListener("scroll", () => {
    let scrollActuelAccueil = window.scrollY;

    let mql = window.matchMedia("(width < 800px)");
    
    if (mql.matches){
    // le header se rapetisse
    if (scrollActuelAccueil > dernierScrollAccueil + 5 && scrollActuelAccueil > 0) {
        surheader.classList.add("header-ultra-compact");
        ul.classList.add("ul-compact");
        slider.classList.add("slider-compact");
        slider.classList.remove("slider-déplié");
    } else if (scrollActuelAccueil > dernierScrollAccueil + 1 && scrollActuelAccueil > 0){
        surheader.classList.add("header-compact");
        slider.classList.add("slider-compact");
        slider.classList.remove("slider-déplié");
    }
    // le header remonte
    else if ((scrollActuelAccueil < dernierScrollAccueil - 1 || scrollActuelAccueil <= 0) && (scrollActuelAccueil < 100)){
            slider.classList.remove("slider-compact");
        }
    else if ((scrollActuelAccueil < dernierScrollAccueil - 1) || (scrollActuelAccueil <= 0)) {
        surheader.classList.remove("header-compact");
        surheader.classList.remove("header-ultra-compact");
        ul.classList.remove("ul-compact");
    }
    }

    dernierScrollAccueil = scrollActuelAccueil;
})

/* FONCTIONS PRINCIPALES */


function loader(){
    const Variable_qui_correspond_au_deroulement_de_mon_animation = gsap.timeline();


    Variable_qui_correspond_au_deroulement_de_mon_animation
    //.to("selection de l'objet", {parametres css = objectif})
    .to(".loading-img", {opacity: 1, duration: 0.5, delay: 0.3})
    .add(() => {
        document.getElementById("akeuille").classList.remove("cache");
        window.scrollTo(0, 0)
    })
    .to(".loading-txt", {height: "auto", duration: 0.7, delay: 0, ease: "power2.out"}, "-=0.3")
    .to(".loading-txt h1", {y:0, ease: "power2.out"}, "-=0.8")

    .to(".load-container", {top:"-100%", duration: 0.7, delay: 0, ease:"power2.out"})
    
    /* Variable_qui_correspond_au_deroulement_de_mon_animation */
    /* .to("#slider", {left:"calc(100% - 90px)", duration: 0.4, delay: 0, ease:"power2.out"}, "-=0.3") */
    .to("#slider", {left:"15px", duration: 0.4, delay: 0, ease:"power2.out"}, "-=0.3")
    .add(() => {
        document.getElementById("load-container").classList.add("cache");
    })
    }

function suivant_carrousel(name){
    let ul = document.getElementById(name);
    ul.scrollBy({left: 2 * 220, behavior: "smooth"});
    console.log(ul.scrollLeft + ul.clientWidth + 220);
    document.getElementById(name + "g").disabled = false;
    document.getElementById(name + "d").disabled = false;
    if (ul.scrollLeft + ul.clientWidth + 2 * 220 >= ul.scrollWidth){
        document.getElementById(name + "d").disabled = true;
    }
}

function precedent_carrousel(name){
    const ul = document.getElementById(name);
    console.log(ul.scrollLeft);
    ul.scrollBy({left: -2 * 220, behavior: "smooth"});
    document.getElementById(name + "g").disabled = false;
    document.getElementById(name + "d").disabled = false;
    if (ul.scrollLeft - 2 * 220 <= 0){
        document.getElementById(name + "g").disabled = true;
    }
}  

function vers_le_catalogue(){
    const Variable_qui_correspond_au_deroulement_de_mon_animation = gsap.timeline();

    Variable_qui_correspond_au_deroulement_de_mon_animation
    .add(() => {
        slider.classList.add("slider-compact");
        surheader.classList.remove("header-compact");
        surheader.classList.remove("header-ultra-compact");
        ul.classList.remove("ul-compact");
        document.getElementById("katalaug").classList.remove("cache");
        if(document.getElementById("test1").checked === true){
            document.getElementById("li3bis").classList.remove("cache");
            document.getElementById("li3bis").classList.add("gris");
            document.getElementById("li3").classList.add("cache");
            document.getElementById("li0nuitbis").classList.add("cache");
            document.getElementById("li0nuitbis").classList.remove("gris");
            document.getElementById("li0nuit").classList.remove("cache");
        } else {
            document.getElementById("li0bis").classList.add("cache");
            document.getElementById("li0bis").classList.remove("gris");
            document.getElementById("li0").classList.remove("cache");
            document.getElementById("li1bis").classList.remove("cache");
            document.getElementById("li1bis").classList.add("gris");
            document.getElementById("li1").classList.add("cache");
        }
    })
    .to(".catalogue", {left: "0%", duration: 0.4, delay: 0, ease: "power2.out"},)
    .to(".accueil", {left: "-100%", duration: 0.4, delay: 0, ease: "power2.out"}, "-=0.4")
}

function vers_laccueil(){
    const Variable_qui_correspond_au_deroulement_de_mon_animation = gsap.timeline();

    Variable_qui_correspond_au_deroulement_de_mon_animation
    .add(() => {
        surheader.classList.remove("header-compact");
        surheader.classList.remove("header-ultra-compact");
        ul.classList.remove("ul-compact");
        document.getElementById("akeuille").classList.remove("cache");
        if(document.getElementById("test1").checked === true){
            document.getElementById("li0nuitbis").classList.remove("cache");
            document.getElementById("li0nuitbis").classList.add("gris");
            document.getElementById("li0nuit").classList.add("cache");
            document.getElementById("li3bis").classList.add("cache");
            document.getElementById("li3bis").classList.remove("gris");
            document.getElementById("li3").classList.remove("cache");
        } else {
            document.getElementById("li0bis").classList.remove("cache");
            document.getElementById("li0bis").classList.add("gris");
            document.getElementById("li0").classList.add("cache");
            document.getElementById("li1bis").classList.add("cache");
            document.getElementById("li1bis").classList.remove("gris");
            document.getElementById("li1").classList.remove("cache");
        }
    })
    .to(".accueil", {left: "0%", duration: 0.4, delay: 0, ease: "power2.out"},)
    .to(".catalogue", {left: "100%", duration: 0.4, delay: 0, ease: "power2.out"}, "-=0.4")
    .add(() => {
        if (window.scrollY < 100){
            slider.classList.remove("slider-compact");
        }
    })
}

function deplier_slider(){
    const slider = document.getElementById("slider")
    if (slider.classList.contains("slider-déplié")){
        slider.classList.remove("slider-déplié")
    } else {
        slider.classList.add("slider-déplié")
    }
}

function apparaitre_searchbar(){
    ajustement_de_placeholder()

    let mql = window.matchMedia("(width < 800px)");

    if (document.getElementById("searchbar").classList.contains("cache")){
        const MaTimeline = gsap.timeline();
        MaTimeline
        .add(() => {
            document.getElementById("searchbar").classList.remove("cache");
            document.getElementById("barrerecherche").classList.remove("cache");

            if(document.getElementById("test1").checked === true){
            document.getElementById("li4bis").classList.remove("cache");
            document.getElementById("li4").classList.add("cache");
            } else {
            document.getElementById("li2bis").classList.remove("cache");
            document.getElementById("li2").classList.add("cache");
            }

            })

    if (mql.matches) { 
        MaTimeline
        .to(".searchbar", {top:"0px", duration: 0.4, delay: 0, ease: "power2.out"},)
        .to(".searchbar", {left:"0px", duration: 0.4, delay: 0, ease: "power2.out"}, "-=0.4")
    } else {
        MaTimeline
        .to(".searchbar", {top:"0px", duration: 0.4, delay: 0, ease: "power2.out"},)
        .to(".searchbar", {left:"calc(100% - 500px)", duration: 0.4, delay: 0, ease: "power2.out"}, "-=0.4")
    }
    MaTimeline
    .add(() => {
    barrederecherche.focus();
    barrederecherche.select();
    surheader.classList.remove("header-compact");
    console.log("retiré")
    surheader.classList.remove("header-ultra-compact");
    /* slider.classList.remove("slider-compact"); */
    ul.classList.remove("ul-compact");
    /* imgslider1.classList.remove("imgslider1-compact");
    imgslider2.classList.remove("imgslider2-compact"); */
    })

    }
    else {
        disparaitre_searchbar()}
    }

function disparaitre_searchbar(){
    const MaTimeline = gsap.timeline();

    let mql = window.matchMedia("(width < 800px)");
    
    MaTimeline
    .add(() => {
        if(document.getElementById("test1").checked === true){
            document.getElementById("li4bis").classList.add("cache");
            document.getElementById("li4").classList.remove("cache");
            } else {
            document.getElementById("li2bis").classList.add("cache");
            document.getElementById("li2").classList.remove("cache");
            }
        }) 

    if (mql.matches) { 
        MaTimeline
        .to(".searchbar", {top:"100%", duration: 0.4, delay: 0, ease: "power2.out"},)
        .to(".searchbar", {left:"0", duration: 0.4, delay: 0, ease: "power2.out"}, "-=0.4")
    } else {
        MaTimeline
        .to(".searchbar", {left:"120%", duration: 0.4, delay: 0, ease: "power2.out"},)
        .to(".searchbar", {top:"0", duration: 0.4, delay: 0, ease: "power2.out"}, "-=0.4")
    }

    MaTimeline
    .add(() => {
        document.getElementById("searchbar").classList.add("cache");
        document.getElementById("barrerecherche").classList.add("cache");})
    }

function charger_champ_recherche(){
    
    /* tri par ordre alphabétique */
    let liste_noms = [];
    for (let i = 0; i < recettes.length; i++) {
        liste_noms.push([recettes[i].nom, i]);
    };
    liste_noms.sort();

    let contenant_resultats = document.getElementById("searchbar");
    let contenant_recherches = document.createElement("div");
    contenant_recherches.setAttribute("id", "recherches");

    for (let i = 0; i < liste_noms.length; i++){
        let resultat = document.createElement("div");
        resultat.setAttribute("class","resultat");
        let div = document.createElement("div");
        div.setAttribute("id", "biduleparent");
        let titre = document.createElement("h3");
        titre.setAttribute("id","bidule");
        let paragraphe = document.createElement("p");
        let image = document.createElement("img");
        image.setAttribute("src", recettes[liste_noms[i][1]].image);
        image.setAttribute("class", "couverturesearch");
        image.setAttribute("alt", recettes[liste_noms[i][1]].nom);
        let lien = document.createElement("a");
        lien.setAttribute("id", recettes[liste_noms[i][1]].id);
        lien.setAttribute("onclick", "afficher_recette(this.id)");
        lien.setAttribute("class", "seemoresearch");
        titre.innerHTML=recettes[liste_noms[i][1]].nom;
        paragraphe.innerHTML=recettes[liste_noms[i][1]].type.toUpperCase();
        let valider = document.createElement("img");
        valider.setAttribute("src", "IMAGES/validericon5.png");

        if (recettes[liste_noms[i][1]].fait===true){
            valider.setAttribute("class", "validericonsearch");
        } else{
            valider.setAttribute("class", "cache");
        }

        contenant_resultats.appendChild(contenant_recherches);
        div.appendChild(titre);
        div.appendChild(paragraphe);
        lien.appendChild(div);
        lien.appendChild(image);
        lien.appendChild(valider);
        resultat.appendChild(lien);
        contenant_recherches.appendChild(resultat);
        }}

function rechercher() {
    
    /* tri par ordre alphabétique */
    let liste_noms = [];
    for (let i = 0; i < recettes.length; i++) {
        liste_noms.push([recettes[i].nom, i])}
    liste_noms.sort();

    const texte = document.getElementById("barrerecherche").value.toLowerCase();
    const four = document.getElementById("btn-four").checked;
    const cuisson = document.getElementById("btn-cuisson").checked;
    const congelateur = document.getElementById("btn-congelateur").checked;
    const batteur = document.getElementById("btn-fouet-electrique").checked;
    const mixeur = document.getElementById("btn-mixeur").checked;
    const veggie = document.getElementById("veggie").checked;
    const non_veggie = document.getElementById("non-veggie").checked;
    const liste_div = document.querySelectorAll(".resultat, .cacheresultat");

    for (let i = 0; i < recettes.length; i++) {

        let rechercheOK = recettes[liste_noms[i][1]].nom.toLowerCase().includes(texte) || recettes[liste_noms[i][1]].type.toLowerCase().includes(texte) || recettes[liste_noms[i][1]].id.toLowerCase().includes(texte) || recettes[liste_noms[i][1]].ingredients1.some(x => x.toLowerCase().includes(texte));

        let filtreOK = true;

        if ((!four && recettes[liste_noms[i][1]].ustensiles.includes("four")) || (!cuisson && recettes[liste_noms[i][1]].ustensiles.includes("cuisson")) || (!congelateur && recettes[liste_noms[i][1]].ustensiles.includes("congélateur")) || (!batteur && recettes[liste_noms[i][1]].ustensiles.includes("batteur électrique")) || (!mixeur && recettes[liste_noms[i][1]].ustensiles.includes("mixeur")) || (!veggie && recettes[liste_noms[i][1]].vegetarien === true) || (!non_veggie && recettes[liste_noms[i][1]].vegetarien === false)){
            filtreOK = false;
            document.getElementById("filtre").style.backgroundColor = "rgb(254, 207, 52)";
            document.getElementById("img-filtre").classList.add("cache");
            document.getElementById("img-filtre-white").classList.remove("cache");
        }

        if (four && cuisson && congelateur && batteur && mixeur && veggie && non_veggie){
            if (document.getElementById("test1").checked === true){
                document.getElementById("filtre").style.backgroundColor = "rgba(30,30,30,0.9)";
            } else {
                document.getElementById("filtre").style.backgroundColor = "rgba(255,255,255,0.9)";
                document.getElementById("img-filtre").classList.remove("cache");
                document.getElementById("img-filtre-white").classList.add("cache");
            }   
        }

        if (rechercheOK && filtreOK) {
            liste_div[i].classList.add("resultat");
            liste_div[i].classList.remove("cacheresultat");
        }
        else {
            liste_div[i].classList.add("cacheresultat");
            liste_div[i].classList.remove("resultat");
        }
    }}

/* MODES JOUR/NUIT */

function mode_nuit(){
    surheader.classList.remove("header-compact");
    surheader.classList.remove("header-ultra-compact");
    ul.classList.remove("ul-compact");
    if (document.getElementById("test1").checked === true){

        let head = document.getElementById("head");
        let link = document.createElement("link");
        link.setAttribute("rel", "stylesheet")
        link.setAttribute("type", "text/css")
        link.setAttribute("href", "style_modesombre.css?v=2.2")
        link.setAttribute("id", "newstylesheet")
        head.appendChild(link);

        document.getElementById("li0").classList.add("cache");
        document.getElementById("li1").classList.add("cache");
        document.getElementById("li1bis").classList.add("cache");
        document.getElementById("li2").classList.add("cache");
        document.getElementById("li2bis").classList.add("cache");
        document.getElementById("li0bis").classList.add("cache");
        document.getElementById("li0nuit").classList.remove("cache");
        document.getElementById("li3").classList.remove("cache");
        document.getElementById("li4").classList.remove("cache");
        document.getElementById("li4").classList.remove("cache");

        document.getElementById("time1_white").classList.remove("cache");
        document.getElementById("time2_white").classList.remove("cache");
        document.getElementById("time1").classList.add("cache");
        document.getElementById("time2").classList.add("cache");
        document.getElementById("pers").classList.add("cache");  
        document.getElementById("pers_white").classList.remove("cache");  

        document.getElementById("img-filtre-white").classList.remove("cache");
        document.getElementById("img-filtre").classList.add("cache");
        document.getElementById("img-fleche1").classList.add("cache");
        document.getElementById("img-fleche2").classList.remove("cache");

        document.getElementById("credits-img-1").classList.add("cache");
        document.getElementById("credits-img-2").classList.remove("cache");
        document.getElementById("guide-img-1").classList.add("cache");
        document.getElementById("guide-img-2").classList.remove("cache");
        document.getElementById("credits-img-1-grand").classList.add("cache");
        document.getElementById("credits-img-2-grand").classList.remove("cache");
        document.getElementById("guide-img-1-grand").classList.add("cache");
        document.getElementById("guide-img-2-grand").classList.remove("cache");

        document.getElementById("accueil").style.backgroundImage = "url(IMAGES/pattern_bouffe_noir.png)";
        document.getElementById("header").style.boxShadow = "0px 0px 10px black";
        document.getElementById("slider").style.boxShadow = "0px 0px 10px black";
        document.getElementById("slider_grand").style.boxShadow = "0px 0px 10px black";
        document.getElementById("filtre").style.backgroundColor = "rgba(30, 30, 30, 0.8)"
    }

    if (document.getElementById("test1").checked === false){
        let link = document.getElementById("newstylesheet");
        link.remove()
        
        document.getElementById("li0").classList.remove("cache");
        document.getElementById("li1").classList.remove("cache");
        document.getElementById("li2").classList.remove("cache");
        document.getElementById("li0nuit").classList.add("cache");
        document.getElementById("li0nuitbis").classList.add("cache");
        document.getElementById("li3").classList.add("cache");
        document.getElementById("li3bis").classList.add("cache");
        document.getElementById("li4").classList.add("cache");
        document.getElementById("li4bis").classList.add("cache");

        document.getElementById("time1_white").classList.add("cache");
        document.getElementById("time2_white").classList.add("cache");
        document.getElementById("time1").classList.remove("cache");
        document.getElementById("time2").classList.remove("cache");
        document.getElementById("pers").classList.remove("cache");
        document.getElementById("pers_white").classList.add("cache");

        document.getElementById("img-filtre-white").classList.add("cache");
        document.getElementById("img-filtre").classList.remove("cache");
        document.getElementById("img-fleche1").classList.remove("cache");
        document.getElementById("img-fleche2").classList.add("cache");

        document.getElementById("credits-img-1").classList.remove("cache");
        document.getElementById("credits-img-2").classList.add("cache");
        document.getElementById("guide-img-1").classList.remove("cache");
        document.getElementById("guide-img-2").classList.add("cache");
        document.getElementById("credits-img-1-grand").classList.remove("cache");
        document.getElementById("credits-img-2-grand").classList.add("cache");
        document.getElementById("guide-img-1-grand").classList.remove("cache");
        document.getElementById("guide-img-2-grand").classList.add("cache");

        document.getElementById("accueil").style.backgroundImage = "url(IMAGES/pattern_bouffe.jpg)";
        document.getElementById("header").style.boxShadow = "0px 0px 10px grey";
        document.getElementById("slider").style.boxShadow = "0px 0px 10px grey";
        document.getElementById("slider_grand").style.boxShadow = "0px 0px 10px grey";
        document.getElementById("filtre").style.backgroundColor = "rgba(255, 255, 255, 0.8)"
    }
    vers_laccueil()
}

function mode_nuit_defaut(){
    let head = document.getElementById("head");
    let link = document.createElement("link");
    link.setAttribute("rel", "stylesheet")
    link.setAttribute("type", "text/css")
    link.setAttribute("href", "style_modesombre.css?v=2.1")
    link.setAttribute("id", "newstylesheet")
    head.appendChild(link);

    document.getElementById("li0").classList.add("cache");
    document.getElementById("li1").classList.add("cache");
    document.getElementById("li2").classList.add("cache");
    document.getElementById("li0nuitbis").classList.remove("cache");
    document.getElementById("li3").classList.remove("cache");
    document.getElementById("li4").classList.remove("cache");

    document.getElementById("time1_white").classList.remove("cache");
    document.getElementById("time2_white").classList.remove("cache");
    document.getElementById("time1").classList.add("cache");
    document.getElementById("time2").classList.add("cache");
    document.getElementById("pers").classList.add("cache");
    document.getElementById("pers_white").classList.remove("cache");

    document.getElementById("img-filtre-white").classList.remove("cache");
    document.getElementById("img-filtre").classList.add("cache");
    document.getElementById("img-fleche1").classList.add("cache");
    document.getElementById("img-fleche2").classList.remove("cache");

    document.getElementById("credits-img-1").classList.add("cache");
    document.getElementById("credits-img-2").classList.remove("cache");
    document.getElementById("guide-img-1").classList.add("cache");
    document.getElementById("guide-img-2").classList.remove("cache");
    document.getElementById("credits-img-1-grand").classList.add("cache");
    document.getElementById("credits-img-2-grand").classList.remove("cache");
    document.getElementById("guide-img-1-grand").classList.add("cache");
    document.getElementById("guide-img-2-grand").classList.remove("cache");

    document.getElementById("accueil").style.backgroundImage = "url(IMAGES/pattern_bouffe_noir.png)";
    document.getElementById("header").style.boxShadow = "0px 0px 10px black";
    document.getElementById("slider").style.boxShadow = "0px 0px 10px black";
    document.getElementById("slider_grand").style.boxShadow = "0px 0px 10px black";
    document.getElementById("filtre").style.backgroundColor = "rgba(30, 30, 30, 0.8)";
}

/* DIV POUR LE TUTORIEL */ 

let pagetutoriel = 0

function apparaitre_tutoriel(){
    const MaTimeline = gsap.timeline();
        MaTimeline
        .add(() => {
            document.getElementById("tuto").classList.remove("cache");
            document.getElementById("sur-tutoriel").classList.remove("cache");
            document.getElementById("page3").classList.remove("cache");
            document.getElementById("page2").classList.remove("cache");
            /* slider.style.display="none"; */
            })
        .to(".tutoriel", {top:"0", duration: 0.5, delay: 0, ease: "power2.out"},)
}

function suivant_tutoriel(){
    if (pagetutoriel < 2){
        pagetutoriel++
        const MaTimeline = gsap.timeline();
        MaTimeline
        .to(".tutoriel", {left: "-=100%", duration: 0.4, ease: "power2.out"}
        );
    }  else {
        let mql = window.matchMedia("(width < 800px)");

        const MaTimeline = gsap.timeline();
        MaTimeline
        .add(() => {
            document.getElementById("sur-tutoriel").classList.add("cache");
        })
        if (mql.matches) { 
        MaTimeline
        .to(".tutoriel", {top:"100%", duration: 0.5, delay: 0, ease: "power2.out"},)
        }
        MaTimeline
        .to(".tutoriel", {left: "0", duration: 0.4, ease: "power2.out"},)
        .add(() => {
            document.getElementById("tuto").classList.add("cache");
            })
        .add(() => {vers_le_catalogue()}, "-=1.8")
        pagetutoriel = 0
}}

function precedent_tutoriel(){
    const MaTimeline = gsap.timeline();
    MaTimeline
    .to(".tutoriel", {x: "+=100%", duration: 0.4, ease: "power2.out"});
}

/* LES RECETTES */

function afficher_recette (id_de_la_recette){

    let mql = window.matchMedia("(width < 800px)");
    /* on fait apparaître la div qui contient la recette */
    const MaTimeline = gsap.timeline();
        MaTimeline
        .add(() => {
            document.getElementById("conteneur").classList.remove("cache");
            document.getElementById("croix").classList.remove("cache");
            /* document.getElementById("fondquichange").style.filter = "brightness(0.5)"; */
            })
        if (mql.matches) { 
            MaTimeline
            .to(".recette", {top:"0px", duration: 0.6, delay: 0, ease: "power2.out"},)
            .to(".croix", {top:"13px", duration: 0.6, delay: 0, ease: "power2.out"}, "-=0.6")
        } else {
            MaTimeline
            .to(".recette", {top:"0px", duration: 0.6, delay: 0, ease: "power2.out"},)
            /* .to(".recette", {opacity:"1", duration: 0.2, delay: 0, ease: "power2.out"}, "-=0.6") */
            .to(".croix", {top:"35px", duration: 0.6, delay: 0, ease: "power2.out"}, /* "-=0.6" */)
        }
        
    /* detections des ESPACES qui vont être à remplir */
    let element_image = document.getElementById("grandeimage");
    let element_nom = document.getElementById("nom");
    let element_prep_active = document.getElementById("prep_active");
    let element_prep_totale = document.getElementById("prep_totale");
    let element_nbpersonnes = document.getElementById("nbpersonnes");

    let element_ingredients1 = document.getElementById("ingredients1");
    let element_ingredients2 = document.getElementById("ingredients2");
    let element_ingredients3 = document.getElementById("ingredients3");
    let nom_ingredients1 = document.getElementById("ingredients1Name");
    let nom_ingredients2 = document.getElementById("ingredients2Name");
    let nom_ingredients3 = document.getElementById("ingredients3Name");

    let element_prep1 = document.getElementById("prep1");
    let element_prep2 = document.getElementById("prep2");
    let element_prep3 = document.getElementById("prep3");
    let element_repere1 = document.getElementById("rep1");
    let element_repere2 = document.getElementById("rep2");
    let element_repere3 = document.getElementById("rep3");
    let div_etoiles = document.getElementById("etoiles");
    let img_etoile1 = document.getElementById("etoile1");
    let img_etoile2 = document.getElementById("etoile2");
    let img_etoile3 = document.getElementById("etoile3");
    let img_vegetarien = document.getElementById("vegetarien");

    /* Reset l'état du bouton "Liste de Course" */
    let new_text = document.getElementById("button-copier-text-content");
    new_text.textContent = "Copier les ingrédients manquants"
    let bouton = document.getElementById("copier");
    bouton.classList.remove("bouton-active-coché")
    bouton.disabled = false

    for (let i = 0; i < recettes.length; i++) {
        if (recettes[i].id === id_de_la_recette) {
            nourriture_actuelle = recettes[i]
            element_nom.innerHTML = recettes[i].nom;

            /* conversion en heure prep active */
            let prep_minutes_1 = recettes[i].prep_active
            let prep_en_heure_1 = 0
            while (prep_minutes_1 >= 60) {
                prep_en_heure_1 = prep_en_heure_1 + 1
                prep_minutes_1 = prep_minutes_1 - 60
            }
            if (prep_en_heure_1 != 0 && prep_minutes_1 === 0){
                variable_finale_1 = prep_en_heure_1 + "h"
                element_prep_active.innerHTML = "Préparation active : " + variable_finale_1;
            } else if (prep_en_heure_1 != 0){
                variable_finale_1 = prep_en_heure_1 + "h" + prep_minutes_1
                element_prep_active.innerHTML = "Préparation active : " + variable_finale_1;
            }
            else {
                element_prep_active.innerHTML = "Préparation active : " + recettes[i].prep_active + " min";
            } 
            
            /* conversion en heure prep totale */
            let prep_minutes = recettes[i].prep_totale
            let prep_en_heure = 0
            while (prep_minutes >= 60) {
                prep_en_heure = prep_en_heure + 1
                prep_minutes = prep_minutes - 60
            }
            if (prep_en_heure != 0 && prep_minutes === 0){
                variable_finale = prep_en_heure + "h"
                element_prep_totale.innerHTML = "Préparation totale : " + variable_finale;
            } else if (prep_en_heure != 0){
                variable_finale = prep_en_heure + "h" + prep_minutes
                element_prep_totale.innerHTML = "Préparation totale : " + variable_finale;
            }
            else {
                element_prep_totale.innerHTML = "Préparation totale : " + recettes[i].prep_totale + " min";
            }

            element_image.src = recettes[i].image;
            element_image.alt = recettes[i].nom;
            element_nbpersonnes.innerHTML = recettes[i].nb_personnes ;

            if (recettes[i].etoiles === 1) {
                div_etoiles.classList.remove("cache");
                img_etoile1.classList.remove("cache");
            } else if (recettes[i].etoiles === 2) {
                div_etoiles.classList.remove("cache");
                img_etoile1.classList.remove("cache");
                img_etoile2.classList.remove("cache");
            } else if (recettes[i].etoiles === 3) {
                div_etoiles.classList.remove("cache");
                img_etoile1.classList.remove("cache");
                img_etoile2.classList.remove("cache");
                img_etoile3.classList.remove("cache");
            } else {
                div_etoiles.classList.add("cache");
            }

            if (recettes[i].vegetarien === true) {
                img_vegetarien.classList.remove("cache")
            }

            element_repere1.innerHTML = recettes[i].repere1;
            element_repere2.innerHTML = recettes[i].repere2;
            element_repere3.innerHTML = recettes[i].repere3;

            nom_ingredients1.innerHTML = recettes[i].ingredients1Name;
            nom_ingredients2.innerHTML = recettes[i].ingredients2Name;
            nom_ingredients3.innerHTML = recettes[i].ingredients3Name;

            /* ingrédients & préparation */
            for (let x = 0; x < recettes[i].ingredients1.length; x++) {  
                span = document.createElement("span");
                span.setAttribute("class","box");
                label = document.createElement("label");
                label.setAttribute("for",1 + [x]);
                label.setAttribute("class","non-coché");
                label.setAttribute("id",1 + [x]);
                checkbox = document.createElement("input");
                checkbox.setAttribute("type", "checkbox");
                checkbox.setAttribute("class", "ingrédients");
                checkbox.setAttribute("onchange", "mettre_lattribut_cocher(this.name, this.checked)");
                checkbox.setAttribute("name",1 + [x]);
                ligne = document.createElement("div");
                ligne.setAttribute("id","test");
                ligne.setAttribute("class","cocher");
                ligne.appendChild(checkbox);
                ligne.appendChild(span);
                ligne.appendChild(label);
                element_ingredients1.appendChild(ligne);
                label.innerHTML = recettes[i].ingredients1[x];
                };

            if (recettes[i].ingredients2 != ""){
                for (let x = 0; x < recettes[i].ingredients2.length; x++) {
                    span = document.createElement("span");
                    span.setAttribute("class","box");
                    label = document.createElement("label");
                    label.setAttribute("for",2 + [x]);
                    label.setAttribute("class","non-coché");
                    label.setAttribute("id",2 + [x]);
                    checkbox = document.createElement("input");
                    checkbox.setAttribute("type", "checkbox");
                    checkbox.setAttribute("class", "ingrédients");
                    checkbox.setAttribute("onchange", "mettre_lattribut_cocher(this.name, this.checked)");
                    checkbox.setAttribute("name",2 + [x]);
                    ligne = document.createElement("div");
                    ligne.setAttribute("id","test");
                    ligne.setAttribute("class","cocher");
                    ligne.appendChild(checkbox);
                    ligne.appendChild(span);
                    ligne.appendChild(label);
                    element_ingredients2.appendChild(ligne);
                    label.innerHTML = recettes[i].ingredients2[x];
                };
            }
            if (recettes[i].ingredients3 != ""){
                for (let x = 0; x < recettes[i].ingredients3.length; x++) {
                    span = document.createElement("span");
                    span.setAttribute("class","box");
                    label = document.createElement("label");
                    label.setAttribute("for",3 + [x]);
                    label.setAttribute("class","non-coché");
                    label.setAttribute("id",3 + [x]);
                    checkbox = document.createElement("input");
                    checkbox.setAttribute("type", "checkbox");
                    checkbox.setAttribute("class", "ingrédients");
                    checkbox.setAttribute("onchange", "mettre_lattribut_cocher(this.name, this.checked)");
                    checkbox.setAttribute("name",3 + [x]);
                    ligne = document.createElement("div");
                    ligne.setAttribute("id","test");
                    ligne.setAttribute("class","cocher");
                    ligne.appendChild(checkbox);
                    ligne.appendChild(span);
                    ligne.appendChild(label);
                    element_ingredients3.appendChild(ligne);
                    label.innerHTML = recettes[i].ingredients3[x];
                };
            }

            for (let x = 0; x < recettes[i].preparation1.length; x++) {
                li = document.createElement("li");
                li.setAttribute("id","test");
                li.setAttribute("class","espacement");
                element_prep1.appendChild(li);
                li.innerHTML = recettes[i].preparation1[x];
            };

            if (recettes[i].preparation2 != ""){
                for (let x = 0; x < recettes[i].preparation2.length; x++) {
                    li = document.createElement("li");
                    li.setAttribute("id","test");
                    li.setAttribute("class","espacement");
                    element_prep2.appendChild(li);
                    li.innerHTML = recettes[i].preparation2[x];
                };
            }
            if (recettes[i].preparation3 != ""){
                for (let x = 0; x < recettes[i].preparation3.length; x++) {
                    li = document.createElement("li");
                    li.setAttribute("id","test");
                    li.setAttribute("class","espacement");
                    element_prep3.appendChild(li);
                    li.innerHTML = recettes[i].preparation3[x];
                };}
        break;   
}}}

function enlever_recette(){

    let mql = window.matchMedia("(width < 800px)");

    let div_etoiles = document.getElementById("etoiles");
    let img_vegetarien = document.getElementById("vegetarien");
    const MaTimeline = gsap.timeline();

    if (mql.matches) { 
            MaTimeline
            .to(".recette", {top:"130%", duration: 0.6, delay: 0, ease: "power2.out"},)
            .to(".croix", {top:"143%", duration: 0.6, delay: 0, ease: "power2.out"}, "-=0.6")
        }

        MaTimeline
        .add(() => {
            let yenaencore = true
            while (yenaencore) {
            if (document.getElementById("test")) {
                document.getElementById("test").remove();
            }
            else {
                yenaencore = false;}
            };
            document.getElementById("etoile1").classList.add("cache")
            document.getElementById("etoile2").classList.add("cache")
            document.getElementById("etoile3").classList.add("cache")
            document.getElementById("conteneur").classList.add("cache");
            div_etoiles.classList.add("cache");
            img_vegetarien.classList.add("cache");
            document.getElementById("croix").classList.add("cache");
            })
};

function mettre_lattribut_cocher(name, ischecked){
    /* let checkbox = document.getElementsByName(name); */
    console.log(ischecked)
    /* console.log(checkbox); */
    let texte_correspondant_au_checkbox = document.getElementById(name);
    if (ischecked){
        console.log("checkbox checked");
        texte_correspondant_au_checkbox.classList.remove("non-coché");
    }
    else {texte_correspondant_au_checkbox.classList.add("non-coché");}
    
    console.log(name);

    let new_text = document.getElementById("button-copier-text-content");
    new_text.textContent = "Copier les ingrédients manquants"
    let bouton = document.getElementById("copier");
    bouton.classList.remove("bouton-active-coché")

    if (document.querySelectorAll(".non-coché").length === 0){
        bouton.disabled = true
    }
    else {bouton.disabled = false}
}

async function copier_ingredients(){
    let elements = document.querySelectorAll(".non-coché");
    let texte_brut = Array.from(elements).map(element => element.textContent).join("\n");

    let new_text = document.getElementById("button-copier-text-content");
    new_text.textContent = "Copié dans le presse-papiers !"
    let bouton = document.getElementById("copier");
    bouton.classList.add("bouton-active-coché")

    await navigator.clipboard.writeText(texte_brut);
    console.log(texte_brut);
    bouton.disabled = true
}

/* CHARGEMENT DES RECETTES */

function charger_recettesveggies(){

    /* tri par ordre alphabétique */
    let liste_noms = [];
    for (let i = 0; i < recettes.length; i++) {
        liste_noms.push([recettes[i].nom, i]);
    };
    liste_noms.sort();

    let caroussel = document.getElementById("a2");

    for (let i = 0; i < liste_noms.length; i++) {
        if (recettes[liste_noms[i][1]].vegetarien === true){
        let slide = document.createElement("li");
        slide.setAttribute("class","slide");
        slide.setAttribute("id", recettes[liste_noms[i][1]].id);
        let div = document.createElement("div");
        let titre = document.createElement("h3");
        titre.setAttribute("class", "restenoir");
        let soustitre = document.createElement("h6");
        soustitre.setAttribute("class", "restenoir");
        let paragraphe = document.createElement("p");
        paragraphe.setAttribute("class", "restenoir");
        let image = document.createElement("img");
        image.setAttribute("src", recettes[liste_noms[i][1]].image);
        image.setAttribute("alt", recettes[liste_noms[i][1]].nom);
        image.setAttribute("class", "couverture");
        image.setAttribute("loading", "lazy");
        let lien = document.createElement("a");
        lien.setAttribute("id", recettes[liste_noms[i][1]].id);
        lien.setAttribute("onclick", "afficher_recette(this.id)");
        lien.setAttribute("class", "seemore");

        titre.innerHTML=recettes[liste_noms[i][1]].nom;
        soustitre.innerHTML=recettes[liste_noms[i][1]].prep_active + " min.  |  " + recettes[liste_noms[i][1]].prep_totale + " min.";
        paragraphe.innerHTML=recettes[liste_noms[i][1]].type.toUpperCase();

        let valider = document.createElement("img");
        valider.setAttribute("src", "IMAGES/valider4.png");
        if (recettes[liste_noms[i][1]].fait===true){
            valider.setAttribute("class", "validericon");
        } else{
            valider.setAttribute("class", "cache");
        }

        let veggie = document.createElement("img");
        veggie.setAttribute("src", "IMAGES/vegetarien.png");
        if (recettes[liste_noms[i][1]].vegetarien===true){
            veggie.setAttribute("class", "veggie");
        } else{
            veggie.setAttribute("class", "cache");
        }

        div.appendChild(titre);
        div.appendChild(soustitre);
        div.appendChild(paragraphe);
        lien.appendChild(image);
        lien.appendChild(div);
        slide.appendChild(lien);
        slide.appendChild(valider);
        slide.appendChild(veggie);
        caroussel.appendChild(slide);
        }}
}

function charger_recettesdumoment(){

    /* tri par ordre alphabétique */
    let liste_noms = [];
    for (let i = 0; i < recettes.length; i++) {
        liste_noms.push([recettes[i].nom, i]);
    };
    liste_noms.sort();

    let caroussel = document.getElementById("a1");
    var date = new Date();
    let saisonactive = date.getMonth()+1;
    for (let i = 0; i < liste_noms.length; i++) {
        if (recettes[liste_noms[i][1]].saison.includes(saisonactive)){
        let slide = document.createElement("li");
        slide.setAttribute("class","slide");
        slide.setAttribute("id", recettes[liste_noms[i][1]].id);
        let div = document.createElement("div");
        let titre = document.createElement("h3");
        titre.setAttribute("class", "restenoir");
        let soustitre = document.createElement("h6");
        soustitre.setAttribute("class", "restenoir");
        let paragraphe = document.createElement("p");
        paragraphe.setAttribute("class", "restenoir");
        let image = document.createElement("img");
        image.setAttribute("src", recettes[liste_noms[i][1]].image);
        image.setAttribute("alt", recettes[liste_noms[i][1]].nom);
        image.setAttribute("class", "couverture");
        image.setAttribute("loading", "lazy");
        let lien = document.createElement("a");
        lien.setAttribute("id", recettes[liste_noms[i][1]].id);
        lien.setAttribute("onclick", "afficher_recette(this.id)");
        lien.setAttribute("class", "seemore");

        titre.innerHTML=recettes[liste_noms[i][1]].nom;
        soustitre.innerHTML=recettes[liste_noms[i][1]].prep_active + " min.  |  " + recettes[liste_noms[i][1]].prep_totale + " min.";
        paragraphe.innerHTML=recettes[liste_noms[i][1]].type.toUpperCase();

        let valider = document.createElement("img");
        valider.setAttribute("src", "IMAGES/valider4.png");
        if (recettes[liste_noms[i][1]].fait===true){
            valider.setAttribute("class", "validericon");
        } else{
            valider.setAttribute("class", "cache");
        }

        let veggie = document.createElement("img");
        veggie.setAttribute("src", "IMAGES/vegetarien.png");
        if (recettes[liste_noms[i][1]].vegetarien===true){
            veggie.setAttribute("class", "veggie");
        } else{
            veggie.setAttribute("class", "cache");
        }

        div.appendChild(titre);
        div.appendChild(soustitre);
        div.appendChild(paragraphe);
        lien.appendChild(image);
        lien.appendChild(div);
        slide.appendChild(lien);
        slide.appendChild(valider);
        slide.appendChild(veggie);
        caroussel.appendChild(slide);
    }
    }

}

function charger_recettesflemme(){

    /* tri par ordre alphabétique */
    let liste_noms = [];
    for (let i = 0; i < recettes.length; i++) {
        liste_noms.push([recettes[i].nom, i]);
    };
    liste_noms.sort();

    let caroussel = document.getElementById("a3");
    for (let i = 0; i < liste_noms.length; i++) {
        if (recettes[liste_noms[i][1]].prep_totale <= 20 && recettes[liste_noms[i][1]].type != "aperitif" && recettes[liste_noms[i][1]].type != "boisson" && recettes[liste_noms[i][1]].type != "dessert" && recettes[liste_noms[i][1]].type != "pate" && recettes[liste_noms[i][1]].type != "sauce" && recettes[liste_noms[i][1]].fait === true){
        let slide = document.createElement("li");
        slide.setAttribute("class","slide");
        slide.setAttribute("id", recettes[liste_noms[i][1]].id);
        let div = document.createElement("div");
        let titre = document.createElement("h3");
        titre.setAttribute("class", "restenoir");
        let soustitre = document.createElement("h6");
        soustitre.setAttribute("class", "restenoir");
        let paragraphe = document.createElement("p");
        paragraphe.setAttribute("class", "restenoir");
        let image = document.createElement("img");
        image.setAttribute("src", recettes[liste_noms[i][1]].image);
        image.setAttribute("class", "couverture");
        image.setAttribute("alt", recettes[liste_noms[i][1]].nom);
        image.setAttribute("loading", "lazy");
        let lien = document.createElement("a");
        lien.setAttribute("id", recettes[liste_noms[i][1]].id);
        lien.setAttribute("onclick", "afficher_recette(this.id)");
        lien.setAttribute("class", "seemore");

        titre.innerHTML=recettes[liste_noms[i][1]].nom;
        soustitre.innerHTML=recettes[liste_noms[i][1]].prep_active + " min.  |  " + recettes[liste_noms[i][1]].prep_totale + " min.";
        paragraphe.innerHTML=recettes[liste_noms[i][1]].type.toUpperCase();
        
        let valider = document.createElement("img");
        valider.setAttribute("src", "IMAGES/valider4.png");
        if (recettes[liste_noms[i][1]].fait===true){
            valider.setAttribute("class", "validericon");
        } else{
            valider.setAttribute("class", "cache");
        }

        let veggie = document.createElement("img");
        veggie.setAttribute("src", "IMAGES/vegetarien.png");
        if (recettes[liste_noms[i][1]].vegetarien===true){
            veggie.setAttribute("class", "veggie");
        } else{
            veggie.setAttribute("class", "cache");
        }

        div.appendChild(titre);
        div.appendChild(soustitre);
        div.appendChild(paragraphe);
        lien.appendChild(image);
        lien.appendChild(div);
        slide.appendChild(lien);
        slide.appendChild(valider);
        slide.appendChild(veggie);
        caroussel.appendChild(slide);
    }
    }
}

function charger_catalogue (){

    /* tri par ordre alphabétique */
    let liste_noms = [];
    for (let i = 0; i < recettes.length; i++) {
        liste_noms.push([recettes[i].nom, i]);
    };
    liste_noms.sort();

    let type_pastas = document.getElementById("c3");
    let type_viandes = document.getElementById("c6");
    let type_desserts = document.getElementById("c1");
    let type_tartes = document.getElementById("c2");
    let type_aperitifs = document.getElementById("c9");
    let type_boissons = document.getElementById("c10");
    let type_pains = document.getElementById("c7");
    let type_riz = document.getElementById("c4");
    let type_entree = document.getElementById("c8");
    let type_legumes = document.getElementById("c5");
    let type_pates = document.getElementById("c11");
    let type_sauces = document.getElementById("c12");

    for (let i = 0; i < liste_noms.length; i++) {
        let slide = document.createElement("li");
        slide.setAttribute("class","slide");
        slide.setAttribute("id", recettes[liste_noms[i][1]].id);
        let div = document.createElement("div");
        let titre = document.createElement("h3");
        titre.setAttribute("class", "restenoir");
        let soustitre = document.createElement("h6");
        soustitre.setAttribute("class", "restenoir");
        let paragraphe = document.createElement("p");
        paragraphe.setAttribute("class", "restenoir");
        let image = document.createElement("img");
        image.setAttribute("src", recettes[liste_noms[i][1]].image);
        image.setAttribute("class", "couverture");
        image.setAttribute("alt", recettes[liste_noms[i][1]].nom);
        image.setAttribute("loading", "lazy");
        let lien = document.createElement("a");
        lien.setAttribute("id", recettes[liste_noms[i][1]].id);
        lien.setAttribute("onclick", "afficher_recette(this.id)");
        lien.setAttribute("class", "seemore");

        titre.innerHTML=recettes[liste_noms[i][1]].nom;
        soustitre.innerHTML=recettes[liste_noms[i][1]].prep_active + " min.  |  " + recettes[liste_noms[i][1]].prep_totale + " min.";
        paragraphe.innerHTML=recettes[liste_noms[i][1]].type.toUpperCase();


        let valider = document.createElement("img");
        valider.setAttribute("src", "IMAGES/valider4.png");
        if (recettes[liste_noms[i][1]].fait===true){
            valider.setAttribute("class", "validericon");
        } else{
            valider.setAttribute("class", "cache");
        }

        let veggie = document.createElement("img");
        veggie.setAttribute("src", "IMAGES/vegetarien.png");
        if (recettes[liste_noms[i][1]].vegetarien===true){
            veggie.setAttribute("class", "veggie");
        } else{
            veggie.setAttribute("class", "cache");
        }

        div.appendChild(titre);
        div.appendChild(soustitre);
        div.appendChild(paragraphe);
        lien.appendChild(image);
        lien.appendChild(div);
        slide.appendChild(lien);
        slide.appendChild(valider);
        slide.appendChild(veggie);

        /* valider.setAttribute("id", `btn_${recettes[liste_noms[i][1]].id}`); */

        if (recettes[liste_noms[i][1]].type === "pate"){
            type_pates.appendChild(slide)}
        else if (recettes[liste_noms[i][1]].type === "viande"){
            type_viandes.appendChild(slide)}
        else if (recettes[liste_noms[i][1]].type === "dessert"){
            type_desserts.appendChild(slide)}
        else if (recettes[liste_noms[i][1]].type === "tarte"){
            type_tartes.appendChild(slide)}
        else if (recettes[liste_noms[i][1]].type === "aperitif"){
            type_aperitifs.appendChild(slide)}
        else if (recettes[liste_noms[i][1]].type === "boisson"){
            type_boissons.appendChild(slide)}
        else if (recettes[liste_noms[i][1]].type === "pain"){
            type_pains.appendChild(slide)}
        else if (recettes[liste_noms[i][1]].type === "riz"){
            type_riz.appendChild(slide)}
        else if (recettes[liste_noms[i][1]].type === "entree"){
            type_entree.appendChild(slide)}
        else if (recettes[liste_noms[i][1]].type === "legume"){
            type_legumes.appendChild(slide)}
        else if (recettes[liste_noms[i][1]].type === "pasta"){
            type_pastas.appendChild(slide)}
        else if (recettes[liste_noms[i][1]].type === "sauce"){
            type_sauces.appendChild(slide)};
    }
}

function ajustement_de_placeholder(){
    let mql = window.matchMedia("(width >= 470px)");
    if (mql.matches){
        let longueur_recette = Object.keys(recettes).length;
        let input_central = document.getElementById("big-think");
        let input_onglet = document.getElementById("barrerecherche");
        input_central.placeholder = "Trouver de l'inspiration parmi " + longueur_recette + " recettes..."
        input_onglet.placeholder = "Trouver de l'inspiration parmi " + longueur_recette + " recettes..."
    } else {
        let longueur_recette = Object.keys(recettes).length;
        let input_central = document.getElementById("big-think");
        let input_onglet = document.getElementById("barrerecherche");
        input_central.placeholder = "Trouver de l'inspiration..."
        input_onglet.placeholder = "Trouver de l'inspiration..."
    }
}

function chargementdesinfos(){
    /* mode_nuit_defaut(); */
    charger_recettesdumoment();
    charger_recettesveggies()
    charger_recettesflemme();
    charger_catalogue();
    charger_champ_recherche();
    ajustement_de_placeholder();
    mode_nuit();
}

function link(id) {
    enlever_recette();
    setTimeout(() => {
    afficher_recette(id);
}, 750);
}