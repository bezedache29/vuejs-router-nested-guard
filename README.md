# TP : Vue Routeur

### Tp sur les notions vue dans le cours aujourd'hui, voilà les différentes étapes à venir réaliser, toujours sur le tp de gestion de resources :

Comme d'habitude, si vous avez le moindre doute on incompréhension, venez me voir ! Et même si vous repartez de ma base, n'oubliez pas de changer l'url api firebase par la votre

- [x]  Transformer tous les liens du routeur en active links
- [ ]  Passer tous les paramètres d'url utilisé en props pour permettre plus de flexibilité
- [ ]  Faire en sorte que le détail d'une ressource se charge sur la même page, tout en conservant bien sûr le paramètre d'url ⇒ Nested Routes
- [ ]  Bien gérer le cas de figure où on change d'affichage détaillé (utilisation de watcher pour mettre à jour le composant enfant)
- [ ]  Changer les liens vers les routes pour utiliser la syntax objet et la propriété "name" pour naviguer à la place de "path"
- [ ]  Utiliser un "guard" pour alerter l'utilisateur s'il quitte le formulaire avant de l'avoir envoyé, uniquement lorsque ce dernier est rempli

### Bonus :

- [ ]  Utiliser un guard pour qu'on n'est pas la possiblité d'afficher les détails des resources tant que l'on en a pas ajouter une soit-même (utilisation de provide et inject + guard) ⇒ Venez me voir si ce n'est pas clair
- [ ]  Faire en sorte que sur le détail d'une resource, on puisse cliquer sur un bouton "edit" et que des inputs remplacent alors le texte, avec un sauvegarde des champs on enter ⇒ Sauvegarde vers l'api évidemment.
