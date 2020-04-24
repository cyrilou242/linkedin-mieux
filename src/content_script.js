// [
//   {
//     regex: /\bfoo\b/g,
//     probability: 1,
//     alt: ['bar', ...]
//   }, ...
// ];

const replacements = [
  {
    regex: /\bAjouter un commentaire…\b/g,
    probability: 0.7,
    alt: ['Dire ses quatres vérité', 'Étaler sa science']
  },
  {
    regex: /\bForce du profil\b/g,
    probability: 0.7,
    alt: ['Image de soi', 'Niveau de bullshit', 'Temps perdu sur linkedin']
  },
  {
    regex: /\bMessagerie\b/g,
    probability: 0.7,
    alt: ['Spammerie']
  },
  {
    regex: /\bVoir plus\b/g,
    probability: 0.7,
    alt: ['Je veux tout savoir', 'Je papillonne']
  },
  {
    regex: /\bTéléchargez l’application LinkedIn\b/g,
    probability: 0.9,
    alt: ['Se faire spammer sur mobile']
  },
  {
    regex: /\bJ’aime\b/g,
    probability: 0.4,
    alt: ['Poce bleu',
        'OUI.',
    'Mdrrrr',
    '1 like 1 bisou']
  },
  {
    regex: /\bCommenter\b/g,
    probability: 0.8,
    alt: ['J\'ai la réponse', 'Je m\'y connais plus', 'Corriger', 'Recadrer le débat']
  },
  {
    regex: /\bChercher une personne, un poste, du contenu\b/g,
    probability: 0.8,
    alt: ['Stalker', 'STALKER STALKER STALKER']
  },
  {
    regex: /\bL’essentiel\b/g,
    probability: 0.8,
    alt: ['La société l\'a validé', 'Validation sociale au top', 'Validé par la street']
  },
  {
    regex: /\bSe connecter\b/g,
    probability: 0.8,
    alt: ['Liker la PP', 'Distraire hihi', 'Attraper', 'Ajouter au panier', '❤ ❤ ❤']
  },
  {
    regex: /\bÉcrivez un article\b/g,
    probability: 0.8,
    alt: ['Comment bullshiter', 'Faire un max de like', 'Les meilleurs titres putaclick']
  },
  {
    regex: /\bEmplois\b/g,
    probability: 0.8,
    alt: ['Valise']
  },
  {
    regex: /\bNotifications\b/g,
    probability: 0.8,
    alt: ['Distractions']
  },
  {
    regex: /\bAjouter à votre fil d’activité\b/g,
    probability: 0.8,
    alt: ['Ajouter à vos distractions', 'Plus de bullshit', 'Du bullshit en veux tu en voilà']
  },
   {
    regex: /\bCyril de Catheu\b/g,
    probability: 0.8,
    alt: ['C\'est cool linkedin-mieux (Cyril de Catheu)', 'linkedin-mieux te plait? (Cyril de Catheu)']
  },
  {
    regex: /\best dans l'actualité\b/g,
    probability: 0.8,
    alt: ['fait le buzz sur les réseaux', 'disrupte massivement']
  },
  {
    regex: /\bAucune invitation en attente\b/g,
    probability: 0.8,
    alt: ['Aucune invitation : faites le premier pas 😉', 'Aucune invitation : temps de changer de photo']
  },
  {
    regex: /\bont aimé ceci\b/g,
    probability: 0.8,
    alt: ['ont tous aimé mais pas toi']
  },
  {
    regex: /\bLes infos et discussions à la Une\b/g,
    probability: 0.8,
    alt: ['Les discussions à la cafet', 'Pour avoir l\'air au courant', 'Si tu as du temps à perdre']
  },
  {
    regex: /\bTous les voir\b/g,
    probability: 0.8,
    alt: ['Tous les stalker', 'Tous les disrupter', 'Tous les attraper']
  },
  {
    regex: /\bVues de votre profil\b/g,
    probability: 0.8,
    alt: ['Vos stalkers', 'Ton instagramabilité', 'Score BG sur 100:']
  },
  {
    regex: /\bVues de votre post\b/g,
    probability: 0.7,
    alt: ['Vues de votre bullshit']
  },
  {
    regex: /\bCommencer un post\b/g,
    probability: 0.8,
    alt: ['BULLSHITTEZ', 'Le bullshit va ici']
  },
  {
    regex: /\baime ceci\b/g,
    probability: 0.8,
    alt: [
      'a mis un poce bleu',
      'aime ceci et espère que tu aimeras aussi',
      'a besoin de votre validation',
      'aime et te le fait savoir',
      'aime bien ce post mais t\'aime surtout toi ❤',
    ]
  },
  {
    regex: /\bRelations\b/g,
    probability: 0.8,
    alt: ['Relations "pro"', 'Gens que tu "connais"']
  },
  {
    regex: /\bSuggestions de postes pour vous\b/g,
    alt: ['L\'herbe est plus verte par ici', 'Elles ont de meilleures machine à café']
  },
  {
    regex: /\bRéactiver Premium gratuitement\b/g,
    probability: 0.99,
    alt: ['Disrupter mon professionnalisme', 'Acheter une conscience pro', 'Entrer dans le carré VIP', 'Le fameux "compte premium"']
  },
  {
    regex: /\bAccédez à des infos et des outils exclusifs\b/g,
    probability: 0.8,
    alt: ['Jetez un sort à vos ennemis', 'Disruptez la concurrence', 'Faites repérage sur les réseaux (pouloulou)']
  },
  {
    regex: /\bque vous pourriez connaître\b/g,
    probability: 0.6,
    alt: ['que vous connaissez (avouez)', 'tout à fait charmantes']
  },
  {
    regex: /\bSponsorisé\b/g,
    probability: 0.6,
    alt: ['Ils ont payé pour être ici', ]
  },
  {
    regex: /\bcommented on this\b/g,
    probability: 0.5,
    alt: [
      'performatively engaged with this content',
      'has the answer',
      'wants you to see what they said'
    ]
  },
  {
    regex: /\bInvitations en attente\b/g,
    probability: 0.9,
    alt: [
      'Ces gens pensent à vous en ce moment',
      'Ces gens vont changer votre vie',
      'Ces gens rêvent de votre avenir ensemble',
      'Ces gens vous complèteront avantageusement',
      'L\'élu se cache parmi ces gens'
    ]
  }
];

runContentScript();

function runContentScript() {
  runWalker();

  chrome.runtime.onMessage.addListener((msg, _, sendResponse) => {
    switch (msg.type) {
      case 'log':
        // console.log(JSON.stringify(msg.data));
        break;
      case 'run':
        runWalker();
        break;
      default:
        console.log(msg);
    }
  });
}

function runWalker() {
  walk(document.body);
}

function walk(node) {
  let child, next;

  if (
    node.nodeName.toLowerCase() == 'input' ||
    node.nodeName.toLowerCase() == 'textarea' ||
    (node.classList && node.classList.contains('ace_editor'))
  ) {
    return;
  }

  switch (node.nodeType) {
    case 1: // Element
    case 9: // Document
    case 11: // Document fragment
      child = node.firstChild;
      while (child) {
        next = child.nextSibling;
        walk(child);
        child = next;
      }
      break;

    case 3: // Text node
      if (node.fresh === false) return; // ignore previously handled nodes

      handleText(node);
      node.fresh = false;
      break;
  }
}

function handleText(textNode) {
  let v = textNode.nodeValue;

  replacements.map(replacement => {
    let replacementText;

    // if there's a probability, return if Math.random() > prob,
    // otherwise probability is 1
    if (!!replacement.probability) {
      if (Math.random() > replacement.probability) return;
    }

    if (Array.isArray(replacement.alt)) {
      // if array, give a random pick
      const randomIndex = Math.floor(Math.random() * replacement.alt.length); // [0, replacement.alt.length)
      replacementText = replacement.alt[randomIndex];
    } else {
      replacementText = replacement.alt;
    }

    v = v.replace(replacement.regex, replacementText);
  });

  textNode.nodeValue = v;
}
