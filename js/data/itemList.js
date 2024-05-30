const itemList = [
  {
    id: 0,
    category: 'playstation',
    type: 'videoGame',
    type_internal: 'search_playstation_games',
    title: 'God of War: Ragnarok',
    decor: 'Critically Acclaimed',
    bgImg: '/assets/products/gow/bg.webp',
    tags: 'Singleplayer, Adventure, Action',
    cta: 'View Item',
    productImg: [
      '/assets/products/gow/1.webp',
      '/assets/products/gow/2.webp',
      '/assets/products/gow/3.webp',
      '/assets/products/gow/4.webp',
    ],
    productOptions: [
      {
        title: 'PS5 Standard Ed.',
        price: 99,
        decor: '<s>$124</s>',
        stock: 5,
        physical: true,
      },
      {
        title: 'PS5 Launch Ed.',
        price: 129,
        decor: 'Collectors Edition!',
        stock: 0,
        physical: true,
      },
      {
        title: 'PS5 Digital',
        price: 89,
        decor: '<s>$124</s>',
        stock: 10,
        physical: false,
      },
    ],
    about:
      'Embark on an epic and heartfelt journey as Kratos and Atreus struggle with holding on and letting go.<br/><br/>Against a backdrop of Norse Realms torn asunder by the fury of the Aesir, they’ve been trying their utmost to undo the end times. But despite their best efforts, Fimbulwinter presses onward.<br/><br/>Witness the changing dynamic of the father-son relationship as they fight for survival; Atreus thirsts for knowledge to help him understand the prophecy of “Loki”, as Kratos struggles to break free of his past and be the father his son needs.<br/><br/>See for yourself how fate will force a choice upon them: between their own safety or the safety of the realms. All the while, hostile Asgardian forces assemble…',
    technical:
      'Language : English <br/> Package Dimensions: 17.1 x 13.4 x 1.4 cm; 90 Grams <br/> Release Date : 9 November 2022 <br/> Console : PS5',

    similarItems: [1, 2, 3],
  },
  {
    id: 1,
    category: 'xbox',
    type: 'videoGame',
    type_internal: 'search_xbox_games',
    title: 'Palworld',
    decor: 'Innovative Gameplay',
    bgImg: '/assets/products/palworld/bg.webp',
    tags: 'Co-op, Online, Singleplayer',
    cta: 'View Item',
    productImg: [
      '/assets/products/palworld/1.jpg',
      '/assets/products/palworld/2.jpg',
      '/assets/products/palworld/3.jpg',
      '/assets/products/palworld/4.jpg',
    ],
    productOptions: [
      {
        title: 'Xbox Digital',
        price: 29,
        decor: '<s>$49</s>',
        stock: 10,
        physical: false,
      },
      {
        title: 'Xbox Collectors',
        price: 59,
        decor: 'Limited Edition!',
        stock: 3,
        physical: false,
      },
    ],
    about:
      '<u>Survival</u><br/>In a harsh environment where food is scarce and vicious poachers roam, danger waits around every corner. To survive, you must tread carefully and make difficult choices...even if that means eating your own Pals when the time comes.<br/><br/><u>Mounts & Exploration</u></br>Pals can be mounted to traverse the land, sea and sky—allowing you to traverse all kinds of environment as you explore the world. <br/><br/><u>Multiplayer</u><br/>Multiplayer is supported, so invite a friend and go on an adventure together! And of course you can battle your friends and trade Pals, too.<br/>In online co-op play mode, up to 4 players can play together. Additionally, a dedicated server can allow up to 32 players to play together.<br/><br/><u>Dungeon Exploration</u><br/>With Pals on your side you can tackle even the most dangerous areas. When the time comes, you might have to sacrifice one to save your skin.',
    technical:
      'Language : English <br/> Release Date : 9 April 2024 <br/> Console : XBOX',
    similarItems: [1, 2, 3],
  },
];

export default itemList;
