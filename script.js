// STORAGE PART : Stocker les éléments

//Créer une fonction pour stocker :
//Sélectionner la fenêtre puis appliquer ".localStorage" puis le nom de mon espace de stockage(.x) :
//Puis on lui passe ce qui est contenu dans l'ul (id "list") avec de l'innerHTML
function storeList() {
    window.localStorage.todoList = list.innerHTML;
};

//Pour voir ce qui est stocker dans locolStorage, aller dans Inspecter, puis Application, puis localStorage, puis l'adresse http juste en dessous (tableau Key, Value).


//Fonction pour récupérer la todoList stockée (tout simplement l'inverse de la fonction de stockage !)
function getTodos() {
    // list.innerHTML = window.localStorage.todoList;
    //Mettre une condition pour tester si la liste est vide, et pour envoyer un message à l'utilisateur si c'est le cas :
    if (window.localStorage.todoList) {
        list.innerHTML = window.localStorage.todoList;
    } else {
        list.innerHTML = '<li>Cliquez sur un todo pour le supprimer</li>'
    }
    
}
//Appeler la fonction au chargement de la page :
window.addEventListener('load', getTodos());




// ADD ALEMENT ON DOM :

//1.Pointer le formulaire pour lui mettre un évènement quand il est validé :
const form = document.querySelector("form");

//2.Ajouter l'évènement au form (submit pour l'évènement "envoyer le formulaire"):
//3. Se prémunir du comportement par défaut de recharger la page (e.preventDefault()) :
form.addEventListener("submit", (e) => {
    e.preventDefault();

    //4."list" (désigne l'ul HTML par son ID), je te passe de l'inner HTML : tu m'ajoutes ta valeur dans une liste (mettre un += pour ne pas écraser les éléments entre eux) :
    list.innerHTML += `<li>${item.value}</li>`

    //5.Input("item"), je veux que tu te remettes à zéro après validation :
    item.value = "";

    //Appeler la fonction de stockage :
    storeList();
});

//Récupérer ce qui est tapé dans une balise : ".textContent"
//Récupérer ce qui est tapé dans un input : ".value"




// REMOVE ELEMENT ON DOM :

//cibler l'ul HTML et non pas les li ajoutés en JS, car on est pas sûr d'en avoir (lui ajouter un évènement au click)
//On ajoute le "e" pour récupérer une donnée : on veut savoir quel "li" a été cliqué (e.target).

list.addEventListener("click", (e) => {

    //Condition pour ajouter la classe "checked" si elle n'y est pas, et supprimer la "li" si elle a déjà la classe "checked" :
    //.contains ("classe") : méthode pour savoir si la classe existe :
    if (e.target.classList.contains("checked")){
        e.target.remove();
    } else {
        e.target.classList.add("checked");
    }

    //Ajouter une classe lorsque la "li" est cliquée (pour modifier l'icône par ex) :
    // e.target.classList.add("checked");

    //Juste supprimer la "li" sur laquelle on clique :
    // e.target.remove();

    //Appeler la fonction de stockage :
    storeList();
}); 
















