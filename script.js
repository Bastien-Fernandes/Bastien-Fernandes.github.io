function switchTab(tabId) {
    // 1. Masquer tous les contenus
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => {
        content.classList.remove('active');
    });

    // 2. Désactiver tous les onglets du menu
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.classList.remove('active');
    });

    // 3. Afficher le contenu ciblé
    document.getElementById(tabId).classList.add('active');

    // 4. Activer l'onglet correspondant dans le menu (Desktop)
    // On cherche le bouton qui a l'onclick correspondant
    const activeBtn = Array.from(navItems).find(btn => btn.getAttribute('onclick').includes(tabId));
    if (activeBtn) {
        activeBtn.classList.add('active');
    }

    // 5. Fermer le menu mobile si ouvert
    document.getElementById('mobile-menu').classList.add('hidden');
}

// === GESTION DES MODALES DE PROJETS ===

const projectDetails = {
    'sae302': {
        title: "SAÉ 3.02 - Développement d'Application",
        icon: "fas fa-project-diagram text-blue-500",
        subtitle: "Projet de Semestre 3 - BUT Informatique",
        description: `
            <div class="space-y-4 text-sm">
                <div>
                    <h4 class="font-bold text-gray-800 border-b pb-1 mb-2">1. Contexte & Objectifs</h4>
                    <p><strong>Cadre :</strong> SAÉ 3.02 - Travail en équipe (4 étudiants)</p>
                    <p><strong>Objectif :</strong> Conception et développement d'un jeu de labyrinthe 2D complet en Java avec JavaFX, géré via Maven. Le projet propose un mode progression (niveaux) et un mode libre entièrement personnalisable (taille, densité des murs, brouillard de guerre).</p>
                </div>
                
                <div>
                    <h4 class="font-bold text-gray-800 border-b pb-1 mb-2">2. Mon rôle & Résultats</h4>
                    <p><strong>Mon rôle :</strong> Je suis intervenu principalement sur la partie algorithmique du projet.</p>
                    <p><strong>Résultats :</strong> Mise en place d'une génération aléatoire de labyrinthe avec un algorithme robuste pour empêcher les générations "incorrectes" (par exemple, éviter que la porte de sortie ne soit à côté ou sur le point d'apparition du joueur).</p>
                </div>

                <div>
                    <h4 class="font-bold text-gray-800 border-b pb-1 mb-2">3. Compétences mobilisées</h4>
                    <p><strong>Hard Skills (techniques) :</strong> Java 24, JavaFX, Maven, JUnit 5, Git/GitLab, UML.</p>
                    <p><strong>Soft Skills (transversales) :</strong> Travail en équipe et communication (répartition des tâches, suivi continu pour savoir qui fait quoi et quand chaque tâche est terminée).</p>
                </div>

                <div class="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-500 mt-4">
                    <h4 class="font-bold text-blue-900 mb-2">4. Analyse réflexive</h4>
                    <p class="mb-2"><strong>Apprentissages & Difficultés :</strong> Découverte de la gestion des conflits sur Git. La principale difficulté a concerné les résultats des différents algorithmes de génération de labyrinthes. Nous avons résolu cela en nous réunissant tous ensemble pour en discuter et valider collégialement les changements à effectuer.</p>
                    <p><strong>Si c'était à refaire :</strong> Je m'investirais davantage et passerais plus de temps sur l'aspect visuel du projet, que j'avais plutôt laissé de côté en me reposant sur mes camarades qui maîtrisaient mieux cette partie.</p>
                </div>
            </div>
        `,
        link: "https://github.com/bastien-fernandes/sae302"
    },
    'scrum': {
        title: "Méthode Agile SCRUM",
        icon: "fas fa-tasks text-green-500",
        subtitle: "Gestion de Projet - BUT Informatique",
        description: `
            <div class="space-y-4 text-sm">
                <div>
                    <h4 class="font-bold text-gray-800 border-b pb-1 mb-2">1. Contexte & Objectifs</h4>
                    <p><strong>Cadre :</strong> Gestion de Projet (Travail de groupe, 6 personnes)</p>
                    <p><strong>Objectif :</strong> Mise en application concrète de la méthodologie Agile Scrum sur un projet de développement.</p>
                </div>
                
                <div>
                    <h4 class="font-bold text-gray-800 border-b pb-1 mb-2">2. Mon rôle & Résultats</h4>
                    <p><strong>Mon rôle :</strong> Rotation des rôles à chaque sprint (Scrum Master, Product Owner, Développeur) afin de découvrir et d'expérimenter toutes les facettes de la méthode Agile.</p>
                    <p><strong>Résultats :</strong> Réalisation et livraison d'un jeu RPG jouable directement dans un terminal (console) à l'issue des sprints.</p>
                </div>

                <div>
                    <h4 class="font-bold text-gray-800 border-b pb-1 mb-2">3. Compétences mobilisées</h4>
                    <p><strong>Hard Skills :</strong> Java 17, Rédaction de User Stories, Gestion de Backlog.</p>
                    <p><strong>Soft Skills :</strong> Esprit d'équipe, communication continue, organisation, rigueur et adaptabilité (inhérente à la philosophie Agile).</p>
                </div>

                <div class="bg-green-50 p-3 rounded-lg border-l-4 border-green-500 mt-4">
                    <h4 class="font-bold text-green-900 mb-2">4. Analyse réflexive</h4>
                    <p class="mb-2"><strong>Apprentissages & Difficultés :</strong> Découverte et mise en pratique de la méthode Agile. La principale difficulté rencontrée a été l'estimation de l'effort (en Story Points) requis pour chaque tâche lors des sessions de planification.</p>
                </div>
            </div>
        `,
        link: "https://github.com/bastien-fernandes/M-thode-agile-SCRUM"
    },
    'sae201': {
        title: "SAÉ 2.01 & 2.02 - Algorithmique",
        icon: "fas fa-code text-red-500",
        subtitle: "Projet de Semestre 2 - BUT Informatique",
        description: `
            <div class="space-y-4 text-sm">
                <div>
                    <h4 class="font-bold text-gray-800 border-b pb-1 mb-2">1. Contexte & Objectifs</h4>
                    <p><strong>Cadre :</strong> SAÉ 2.01 & 2.02 (Travail en équipe de 3)</p>
                    <p><strong>Objectif :</strong> Réalisation d'une application d’appariement permettant de former des binômes (hôtes/visiteurs) en calculant un "score d'affinité" selon diverses contraintes (âge, hobbies, régime, historique).</p>
                </div>
                
                <div>
                    <h4 class="font-bold text-gray-800 border-b pb-1 mb-2">2. Mon rôle & Résultats</h4>
                    <p><strong>Mon rôle :</strong> Modélisation et implémentation orientée objet des structures de données (Hôtes et Visiteurs) ainsi que la logique de l'algorithme d'affinité et des pénalités (SAE 2.02).</p>
                    <p><strong>Résultats :</strong> Conception d'un système capable de calculer et trier le meilleur appariement par la théorie des graphes (matrices d'adjacence pondérées) de façon optimale tout en gérant les critères rédhibitoires.</p>
                </div>

                <div>
                    <h4 class="font-bold text-gray-800 border-b pb-1 mb-2">3. Compétences mobilisées</h4>
                    <p><strong>Hard Skills :</strong> Java, Mathématiques discrètes (graphes bipartis, matrices d’adjacence), Algorithmique et Optimisation.</p>
                    <p><strong>Soft Skills :</strong> Logique pure, rédaction technique, réflexion mathématique sur les cas limites.</p>
                </div>

                <div class="bg-red-50 p-3 rounded-lg border-l-4 border-red-500 mt-4">
                    <h4 class="font-bold text-red-900 mb-2">4. Analyse réflexive</h4>
                    <p class="mb-2"><strong>Apprentissages & Difficultés :</strong> Le défi principal fut d'équilibrer mathématiquement les affinités et les incompatibilités, car une simple pénalité peut parfois échouer si aucune alternative n'existe. Nous avons dû comprendre et accepter les limites de notre modélisation face à des contraintes contradictoires "réelles".</p>
                </div>
            </div>
        `,
        link: "https://github.com/bastien-fernandes/sae2.01-2.02"
    },
    'portfolio': {
        title: "Portfolio Personnel",
        icon: "fab fa-github text-gray-800",
        subtitle: "Création de mon CV Numérique",
        description: `
            <div class="space-y-4 text-sm">
                <div>
                    <h4 class="font-bold text-gray-800 border-b pb-1 mb-2">1. Contexte & Objectifs</h4>
                    <p><strong>Cadre :</strong> Projet personnel (Évaluation de Communication de Semestre 4)</p>
                    <p><strong>Objectif :</strong> Réaliser un site web vitrine interactif pour présenter mon parcours, mes compétences et mes projets de manière professionnelle et réflexive.</p>
                </div>
                
                <div>
                    <h4 class="font-bold text-gray-800 border-b pb-1 mb-2">2. Mon rôle & Résultats</h4>
                    <p><strong>Mon rôle :</strong> Concepteur, redacteur et développeur.</p>
                    <p><strong>Résultats :</strong> Un portfolio en ligne, responsive, hébergé gratuitement et répondant au cahier des charges de la consigne.</p>
                </div>

                <div>
                    <h4 class="font-bold text-gray-800 border-b pb-1 mb-2">3. Compétences mobilisées</h4>
                    <p><strong>Hard Skills :</strong> HTML5, CSS3, JavaScript.</p>
                    <p><strong>Soft Skills :</strong> Autonomie, esprit d'initiative.</p>
                </div>

                <div class="bg-gray-100 p-3 rounded-lg border-l-4 border-gray-800 mt-4">
                    <h4 class="font-bold text-gray-900 mb-2">4. Analyse réflexive</h4>
                    <p class="mb-2"><strong>Apprentissages & Difficultés :</strong>Le principal défi a été la création du menu interactif et la gestion des rafraichissements de page en JavaScript, car nous n'avions pas encore eu de cours sur ce langage à ce stade de ma formation.</p>
                </div>
            </div>
        `,
        link: "https://github.com/Bastien-Fernandes/Bastien-Fernandes.github.io"
    },
    'sae303': {
        title: "SAÉ 3.03 - Déploiement d'une Application",
        icon: "fas fa-server text-purple-500",
        subtitle: "Projet de Semestre 3 - BUT Informatique",
        description: `
            <div class="space-y-4 text-sm">
                <div>
                    <h4 class="font-bold text-gray-800 border-b pb-1 mb-2">1. Contexte & Objectifs</h4>
                    <p><strong>Cadre :</strong> SAÉ 3.03 (Travail en binôme)</p>
                    <p><strong>Objectif :</strong> Déployer une solution de communication basée sur le standard Matrix en configurant l'implémentation de référence Synapse (serveur) et Element Web (client), le tout sécurisé via un reverse proxy.</p>
                </div>
                
                <div>
                    <h4 class="font-bold text-gray-800 border-b pb-1 mb-2">2. Mon rôle & Résultats</h4>
                    <p><strong>Mon rôle :</strong> Co-administrateur système pour la configuration des machines virtuelles, gestion des bases de données et mise en réseau.</p>
                    <p><strong>Résultats :</strong> Mise en place réussie d'une architecture comprenant une VM principale (Synapse + PostgreSQL) et une VM en reverse proxy (Nginx). La communication client-serveur est pleinement fonctionnelle.</p>
                </div>

                <div>
                    <h4 class="font-bold text-gray-800 border-b pb-1 mb-2">3. Compétences mobilisées</h4>
                    <p><strong>Hard Skills :</strong> Administration système (Linux), Virtualisation (VMs), Nginx (Reverse Proxy, Web Server), PostgreSQL, Matrix/Synapse, Réseaux.</p>
                    <p><strong>Soft Skills :</strong> Résolution de problèmes systèmes, lecture de documentations techniques, travail collaboratif en binôme.</p>
                </div>

                <div class="bg-purple-50 p-3 rounded-lg border-l-4 border-purple-500 mt-4">
                    <h4 class="font-bold text-purple-900 mb-2">4. Analyse réflexive</h4>
                    <p class="mb-2"><strong>Apprentissages & Difficultés :</strong> Découverte concrète du métier d'administrateur système. L'enjeu principal a été la configuration minutieuse et la sécurisation du reverse proxy (Nginx) pour faire communiquer les deux machines virtuelles sans failles de sécurité, tout en gérant les dépendances de Synapse.</p>
                </div>
            </div>
        `,
        link: "https://github.com/Bastien-Fernandes/sae3.03"
    },
    'ecodrop': {
        title: "EcoDrop API",
        icon: "fas fa-leaf text-green-600",
        subtitle: "SAÉ 4.A.01.2 - Développement Back-End",
        description: `
            <div class="space-y-4 text-sm">
                <div>
                    <h4 class="font-bold text-gray-800 border-b pb-1 mb-2">1. Contexte & Objectifs</h4>
                    <p><strong>Cadre :</strong> SAÉ 4.A.01.2</p>
                    <p><strong>Objectif :</strong> Concevoir et développer une API REST pour "EcoDrop", une plateforme gérant des points de collecte de déchets, le suivi de leur remplissage, la création de dépôts liés à des utilisateurs, et un système de classement (leaderboard).</p>
                </div>
                
                <div>
                    <h4 class="font-bold text-gray-800 border-b pb-1 mb-2">2. Mon rôle & Résultats</h4>
                    <p><strong>Mon rôle :</strong> Projet réalisé en binôme avec une répartition équitable des tâches. Développement du backend, de la base de données et rédaction de la documentation d'API.</p>
                    <p><strong>Résultats :</strong> Conception d'une API sécurisée (Basic Auth / JWT, filtre d'authentification) supportant les requêtes REST (GET, PUT, PATCH, DELETE) avec une solide architecture en couches validée par des collections de tests automatisés Bruno.</p>
                </div>

                <div>
                    <h4 class="font-bold text-gray-800 border-b pb-1 mb-2">3. Compétences mobilisées</h4>
                    <p><strong>Hard Skills :</strong> Java EE / Jakarta EE, PostgreSQL, Architecture DAO / DTO, Apache Tomcat, Tests d'API (avec Bruno).</p>
                    <p><strong>Soft Skills :</strong> Conception logique d'une architecture applicative (MCD), rigueur dans l'écriture de requêtes SQL analytiques (group by, having), structuration et rédaction de la documentation technique.</p>
                </div>

                <div class="bg-green-50 p-3 rounded-lg border-l-4 border-green-600 mt-4">
                    <h4 class="font-bold text-green-900 mb-2">4. Analyse réflexive</h4>
                    <p class="mb-2"><strong>Apprentissages & Difficultés :</strong> Approfondissement majeur des principes d'une architecture robuste isolant bien les données (DAO et DTO). La plus grande difficulté a été d'écrire les requêtes SQL (comme le calcul dynamique du taux de surcharge avec des jointures et fonctions d'agrégation) et de s'assurer du renvoi constant du bon code HTTP (ex: 401, 403, 404, 201) dans toutes les situations via les filtres de sécurité intégrés.</p>
                </div>
            </div>
        `,
        link: "https://github.com/Bastien-Fernandes/EcoDrop"
    },
    'shootlevia': {
        title: "Shootlevia",
        icon: "fas fa-gamepad text-orange-500",
        subtitle: "Jeu Web Multijoueur Temps Réel",
        description: `
            <div class="space-y-4 text-sm">
                <div>
                    <h4 class="font-bold text-gray-800 border-b pb-1 mb-2">1. Contexte & Objectifs</h4>
                    <p><strong>Cadre :</strong> Projet Personnel / Académique</p>
                    <p><strong>Objectif :</strong> Concevoir et développer un jeu de survie de type shoot-'em-up multijoueur synchrone, en assurant une communication bidirectionnelle fluide entre les clients de jeu et un serveur faisant autorité.</p>
                </div>
                
                <div>
                    <h4 class="font-bold text-gray-800 border-b pb-1 mb-2">2. Mon rôle & Résultats</h4>
                    <p><strong>Mon rôle :</strong> Conception de l'architecture Client/Serveur, mise en place de la boucle de jeu à 60Hz et implémentation de la physique avec inertie (dissociée de l'input utilisateur).</p>
                    <p><strong>Résultats :</strong> Validation d'une infrastructure multijoueur robuste supportant jusqu'à 12 joueurs simultanés. Synchronisation en temps réel de dizaines d'entités sans distorsion des collisions logiques, peu importe la résolution d'écran. Ajout marquant de mécaniques de jeu avancées : le système de réanimation et le combat contre le boss "Bus Relais".</p>
                </div>

                <div>
                    <h4 class="font-bold text-gray-800 border-b pb-1 mb-2">3. Compétences mobilisées</h4>
                    <p><strong>Hard Skills :</strong> TypeScript, Node.js, Express, Socket.io (WebSockets), Vite.</p>
                    <p><strong>Soft Skills :</strong> Modélisation physique, analyse réseaux (compensation latence/bande passante), persévérance face aux erreurs de synchronisation complexes.</p>
                </div>

                <div class="bg-orange-50 p-3 rounded-lg border-l-4 border-orange-500 mt-4">
                    <h4 class="font-bold text-orange-900 mb-2">4. Analyse réflexive</h4>
                    <p class="mb-2"><strong>Apprentissages & Difficultés :</strong> Le défi principal fut de limiter les tressautements (jitter) : la solution a été d'envoyer uniquement des vecteurs au serveur à chaque itération plutôt que de forcer une position absolue, tout en maintenant l'autorité du serveur sur 16,6ms de tickrate. Grosse fierté concernant les mécaniques sociales créées (réanimation entre joueurs) et sur l'adaptabilité du moteur de rendu à différents écrans de navigateurs.</p>
                </div>
            </div>
        `,
        link: "https://github.com/Bastien-Fernandes/Jsae"
    }
};

function openModal(projectId) {
    const project = projectDetails[projectId];
    if (!project) return;
    
    // Modification des informations de la modale
    document.getElementById('modal-title').textContent = project.title;
    document.getElementById('modal-icon').className = project.icon + ' text-3xl';
    document.getElementById('modal-subtitle').textContent = project.subtitle;
    document.getElementById('modal-description').innerHTML = project.description;
    
    // Configuration du lien GitHub
    const linkBtn = document.getElementById('modal-link');
    if(project.link) {
        linkBtn.href = project.link;
        linkBtn.style.display = 'inline-flex';
    } else {
        linkBtn.style.display = 'none';
    }
    
    // Affichage de la modale
    document.getElementById('project-modal').classList.remove('hidden');
    
    // Désactiver le scroll du body quand la modale est ouverte
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    // Masquer la modale
    document.getElementById('project-modal').classList.add('hidden');
    
    // Réactiver le scroll du body
    document.body.style.overflow = 'auto';
}

// Fermeture de la modale en cliquant à l'extérieur
window.onclick = function(event) {
    const modal = document.getElementById('project-modal');
    if (event.target === modal) {
        closeModal();
    }
}