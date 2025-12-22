const campoBusca = document.getElementById("campo-busca");
const lista = document.getElementById("lista-sugestoes");

const clubes = [
    /* Lista de clubes com nome e id correspondente ao id do cartão na página HTML */
    /* Clubes da Argentina */
    { nome: "Boca Juniors-ARG", id: "boca-juniors" },
    { nome: "River Plate-ARG", id: "river-plate" },
    { nome: "Independiente-ARG", id: "independiente" },
    { nome: "Racing Club-ARG", id: "racing-club" },
    { nome: "San Lorenzo-ARG", id: "san-lorenzo" },
    { nome: "Estudiantes de La Plata-ARG", id: "estudiantes-de-la-plata" },
    { nome: "Newell's Old Boys-ARG", id: "newells-old-boys" },
    { nome: "Rosario Central-ARG", id: "rosario-central" },
    { nome: "Vélez Sarsfield-ARG", id: "velez-sarsfield" },
    { nome: "Argentinos Juniors-ARG", id: "argentinos-juniors" },
    { nome: "Huracán-ARG", id: "huracan" },
    { nome: "Gimnasia y Esgrima La Plata-ARG", id: "gimnasia-y-esgrima-la-plata" },
    { nome: "Gimnasia y Esgrima de Mendoza-ARG", id: "gimnasia-y-esgrima-de-mendoza" },
    { nome: "Lanús-ARG", id: "lanus" },
    { nome: "Banfield-ARG", id: "banfield" },
    { nome: "Talleres de Córdoba-ARG", id: "talleres-de-cordoba" },
    { nome: "Colón de Santa Fe-ARG", id: "colon-de-santa-fe" },
    { nome: "Unión de Santa Fe-ARG", id: "union-de-santa-fe" },
    { nome: "Defensa y Justicia-ARG", id: "defensa-y-justicia" },
    { nome: "Godoy Cruz-ARG", id: "godoy-cruz" },
    { nome: "Arsenal de Sarandi-ARG", id: "arsenal-de-sarandi" },
    { nome: "Atlético Tucumán-ARG", id: "atletico-tucuman" },
    { nome: "Tigre-ARG", id: "tigre" },
    { nome: "Platense-ARG", id: "platense" },
    { nome: "Barracas Central-ARG", id: "barracas-central" },
    { nome: "Central Córdoba-ARG", id: "central-cordoba" },
    { nome: "Instituto de Córdoba-ARG", id: "instituto-de-cordoba" },
    { nome: "Sarmiento-ARG", id: "sarmiento" },
    { nome: "Belgrano de Córdoba-ARG", id: "belgrano-de-cordoba" },
    { nome: "Patronato-ARG", id: "patronato" },
    { nome: "Aldosivi-ARG", id: "aldosivi" },
    { nome: "Independiente Rivadavia-ARG", id: "independiente-rivadavia" },
    { nome: "Boca Unidos-ARG", id: "boca-unidos" },
    { nome: "Quilmes-ARG", id: "quilmes" },
    { nome: "Almagro-ARG", id: "almagro" },
    { nome: "San Martín de San Juan-ARG", id: "san-martin-de-san-juan" },
    { nome: "San Martín de Tucumán-ARG", id: "san-martin-de-tucuman" },
    { nome: "Gimnasia de Jujuy-ARG", id: "gimnasia-de-jujuy" },
    { nome: "Ferro Carril Oeste-ARG", id: "ferro-carril-oeste" },
    { nome: "Olimpo-ARG", id: "olimpo" },
    { nome: "Tristán Suárez-ARG", id: "tristan-suarez" },
    { nome: "Chacarita Juniors-ARG", id: "chacarita-juniors" },
    { nome: "All Boys-ARG", id: "all-boys" },
    { nome: "Atlético de Rafaela-ARG", id: "atletico-de-rafaela" },
    { nome: "Los Andes-ARG", id: "los-andes" },
    { nome: "Deportivo Riestra-ARG", id: "deportivo-riestra" },
    { nome: "Agropecuario-ARG", id: "agropecuario" },
    { nome: "Brown de Adrogué-ARG", id: "brown-de-adrogué" },
    { nome: "Defensores de Belgrano-ARG", id: "defensores-de-belgrano" },
    { nome: "Deportivo Morón-ARG", id: "deportivo-moron" },
    { nome: "Almirante Brown-ARG", id: "almirante-brown" },
    { nome: "Atlético Mitre-ARG", id: "atletico-mitre" },
    { nome: "Nueva Chicago-ARG", id: "nueva-chicago" },
    { nome: "Santamarina-ARG", id: "santamarina" },
    { nome: "Club Atlético Temperley-ARG", id: "club-atletico-temperley" },
    { nome: "Villa Dálmine-ARG", id: "villa-dalmine" },
    { nome: "Acassuso-ARG", id: "acassuso" },
    { nome: "Argentino de Quilmes-ARG", id: "argentino-de-quilmes" },
    { nome: "El Porvenir-ARG", id: "el-porvenir" },
    { nome: "Defensores de Cambaceres-ARG", id: "defensores-de-cambaceres" }, 
    { nome: "Atlanta-ARG", id: "atlanta-arg" },
    { nome: "Colegiales-ARG", id: "colegiales" },
    { nome: "Comunicaciones-ARG", id: "comunicaciones" },
    { nome: "Club Deportivo Español-ARG", id: "club-deportivo-espanol" },

    /* Clubes da Bolívia */
    { nome: "The Strongest-BOL", id: "the-strongest" },
    { nome: "Bolívar-BOL", id: "bolivar" },
    { nome: "Jorge Wilstermann-BOL", id: "jorge-wilstermann" },
    { nome: "Blooming-BOL", id: "blooming" },  
    { nome: "Oriente Petrolero-BOL", id: "oriente-petrolero" },
    { nome: "Aurora-BOL", id: "aurora" },  
    { nome: "Nacional Potosí-BOL", id: "nacional-potosi" },                      
    { nome: "Real Santa Cruz-BOL", id: "real-santa-cruz" },    
    { nome: "Guabirá-BOL", id: "guabira" },
    { nome: "Royal Pari-BOL", id: "royal-pari" },
    { nome: "Universitario de Vinto-BOL", id: "universitario-de-vinto" },
    { nome: "Independiente Petrolero-BOL", id: "independiente-petrolero" },
    { nome: "Always Ready-BOL", id: "always-ready" },
    { nome: "Real Potosí-BOL", id: "real-potosi" },
    { nome: "San José-BOL", id: "san-jose" },
    { nome: "Universitario de Sucre-BOL", id: "universitario-de-sucre" },
    { nome: "Palmaflor-BOL", id: "palmaflor" },
    { nome: "Vaca Díez-BOL", id: "vaca-diez" },

    /* Clubes do Brasil*/
    { nome: "Santos FC-BRA", id: "santos-fc" },    
    { nome: "Corinthians-BRA", id: "corinthians" },    
    { nome: "Chapecoense-BRA", id: "chapecoense" },
    { nome: "Botafogo-RJ-BRA", id: "botafogo-rj" },
    { nome: "Náutico-RR-BRA", id: "nautico-rr" },
    { nome: "Náutico-PE-BRA", id: "nautico-pe" },
    { nome: "Santa Cruz-PE-BRA", id: "santa-cruz-pe" },
    { nome: "Sport-PE-BRA", id: "sport" },
    { nome: "Globo-RN-BRA", id: "globo-rn" },
    { nome: "Fortaleza-BRA", id: "fortaleza" },    
    { nome: "Ceará-BRA", id: "ceara" },
    { nome: "Floresta-BRA", id: "floresta" },
    { nome: "Cuiabá-BRA", id: "cuiaba" },
    { nome: "Bahia-BRA", id: "bahia" },
    { nome: "Internacional-BRA", id: "internacional" },
    { nome: "Grêmio-BRA", id: "gremio" },
    { nome: "Brusque-BRA", id: "brusque" },
    { nome: "Luverdense-BRA", id: "luverdense" },
    { nome: "Serra Talhada-BRA", id: "serra-talhada" },
    { nome: "Manaus-BRA", id: "manaus" },
    { nome: "Treze - PB-BRA", id: "treze-pb" },
    { nome: "Botafogo- PB-BRA", id: "botafogo-pb" },
    { nome: "Flamengo-BRA", id: "flamengo" },
    { nome: "Palmeiras-BRA", id: "palmeiras" },
    { nome: "Central-BRA", id: "central" },
    { nome: "Porto-PE-BRA", id: "porto-pe" },
    { nome: "Criciúma-BRA", id: "criciuma" },
    { nome: "Belo Jardim-BRA", id: "belo-jardim" },
    { nome: "Chã Grande-BRA", id: "cha-grande" },
    { nome: "São Paulo-BRA", id: "sao-paulo" },
    { nome: "Fluminense-BRA", id: "fluminense" },
    { nome: "Vasco da Gama-BRA", id: "vasco-da-gama" },
    { nome: "Mirassol-BRA", id: "mirassol" },
    { nome: "Cruzeiro-BRA", id: "cruzeiro" },
    { nome: "Athletico Paranaense-BRA", id: "athletico-paranaense" },
    { nome: "Atlético Mineiro-BRA", id: "atletico-mineiro" },
    { nome: "Petrolina-BRA", id: "petrolina" },
    { nome: "Paysandu-BRA", id: "paysandu" },
    { nome: "Avaí-BRA", id: "avai" },
    { nome: "Athletic Club-BRA", id: "athletic-club" },
    { nome: "Atlético Goianiense-BRA", id: "atletico-goianiense" },
    { nome: "Goiás-BRA", id: "goias" },
    { nome: "CRB-BRA", id: "crb" },
    { nome: "Coritiba-BRA", id: "coritiba" },
    { nome: "Paraná Clube-BRA", id: "parana-clube" },
    { nome: "Londrina-BRA", id: "londrina" },
    { nome: "Afogados da Ingazeira-BRA", id: "afogados-da-ingazeira" },
    { nome: "ASA de Arapiraca-BRA", id: "asa-de-arapiraca" },
    { nome: "Ramalat Sport Club-BRA", id: "ramalat-sport-club" },
    { nome: "Rio Branco Football Club-BRA", id: "rio-branco-football-club" },
    { nome: "Atlético Acreano-BRA", id: "atletico-acreano" },
    { nome: "Galvez Esporte Clube-BRA", id: "galvez-esporte-clube" },  
    { nome: "Humaitá Futebol Clube-BRA", id: "humaita-futebol-clube" },
    { nome: "São Francisco Futebol Clube-BRA", id: "sao-francisco-futebol-clube" },
    { nome: "ADESG-BRA", id: "adegs" },
    { nome: "Náuas Esporte Clube-BRA", id: "nauas-esporte-clube" },
    { nome: "São Raimundo-RR-BRA", id: "sao-raimundo-rr" },
    { nome: "Tombense-BRA", id: "tombense" },
    { nome: "XV de Piracicaba-BRA", id: "xv-de-piracicaba" },
    { nome: "Ponte Preta-BRA", id: "ponte-preta" },
    { nome: "Guarani-BRA", id: "guarani" },
    { nome: "Salgueiro-BRA", id: "salgueiro" },
    { nome: "Nacional-AM-BRA", id: "nacional-am" },
    { nome: "Fast Clube-BRA", id: "fast-clube" },
    { nome: "São Raimundo-AM-BRA", id: "sao-raimundo-am" },
    { nome: "Princesa do Solimões Esporte Clube-BRA", id: "princesa-do-solimoes-esporte-clube" },
    { nome: "Penarol-AM-BRA", id: "penarol-am" },
    { nome: "Operário Esporte Clube-BRA", id: "operario-esporte-clube" },
    { nome: "Iranduba Futebol Clube-BRA", id: "iranduba-futebol-clube" },
    { nome: "Rio Negro-BRA", id: "rio-negro" },
    { nome: "Amazonas-BRA", id: "amazonas" },
    { nome: "Boa Esporte-BRA", id: "boa-esporte" },  
    { nome: "Íbis-BRA", id: "ibis" },
    { nome: "E.C.Vitória-BRA", id: "e-c-vitoria" },
    { nome: "Juventude-BRA", id: "juventude" },
    { nome: "Caxias do Sul-BRA", id: "caxias-do-sul" },
    { nome: "Figueirense-BRA", id: "figueirense" },
    { nome: "América Pernambucano-BRA", id: "america-pernambucano" },
    { nome: "América de Natal-BRA", id: "america-de-natal" },
    { nome: "ABC-BRA", id: "abc" },
    { nome: "Confiança-BRA", id: "confianca" },
    { nome: "Lagarto-BRA", id: "lagarto" },
    { nome: "Paragominas-BRA", id: "paragominas" },
    { nome: "Cianorte-BRA", id: "cianorte" },

    /* Clubes da Chile */
    { nome: "Colo-Colo-CHI", id: "colo-colo" },
    { nome: "Club Universidad de Chile-CHI", id: "universidad-de-chile" },
    { nome: "Club Universidad Católica-CHI", id: "universidad-catolica" },
    { nome: "Club Deportivo Union Espaola-CHI", id: "union-espanola" },
    { nome: "Audax Italiano-CHI", id: "audax-italiano" },
    { nome: "Everton de Viña del Mar-CHI", id: "everton-de-vina-del-mar" },
    { nome: "Santiago Wanderers-CHI", id: "santiago-wanderers" },
    { nome: "Nublense-CHI", id: "nublense" },
    { nome: "Huachipato-CHI", id: "huachipato" },
    { nome: "Palestino-CHI", id: "palestino" },
    { nome: "Cobresal-CHI", id: "cobresal" },
    { nome: "Deportes Temuco-CHI", id: "deportes-temuco" },
    { nome: "Rangers de Talca-CHI", id: "rangers-chi" },

    /* Clubes da Colômbia*/
    { nome: "Atlético Nacional-COL", id: "atletico-nacional" },
    { nome: "Millonarios FC-COL", id: "millonarios" },

    /* Clubes do Uruguai */
    { nome: "Nacional-URU", id: "nacional" },
    { nome: "Peñarol-URU", id: "penarol" },

];

campoBusca.addEventListener("input", () => {
    const texto = campoBusca.value.toLowerCase();
    lista.innerHTML = "";

    if (texto === "") {
        lista.style.display = "none";
        return;
    }

    const resultados = clubes.filter(c =>
        c.nome.toLowerCase().includes(texto)
    );

    resultados.forEach(clube => {
        const li = document.createElement("li");
        li.textContent = clube.nome;

        li.onclick = () => {
            // Remove destaque de todos os clubes
            document.querySelectorAll(".cartao-clube h3").forEach(h3 => {
                h3.classList.remove("clube-destaque");
            });

            // Vai até o clube
            const cartao = document.getElementById(clube.id);
            cartao.scrollIntoView({ behavior: "smooth", block: "center" });

            // Destaca o nome do clube
            const titulo = cartao.querySelector("h3");
            titulo.classList.add("clube-destaque");

            lista.style.display = "none";
            campoBusca.value = "";
        };

        lista.appendChild(li);
    });

    lista.style.display = resultados.length ? "block" : "none";
});

