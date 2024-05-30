const itemList = [
  // ps5 Games
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
    category: 'playstation',
    type: 'videoGame',
    type_internal: 'search_playstation_games',
    title: 'NieR:Automata',
    decor: 'Soundtrack Game Award',
    bgImg: '/assets/products/nier/bg.jpg',
    tags: 'Singleplayer, Story, Action',
    cta: 'View Item',
    productImg: [
      '/assets/products/nier/1.jpg',
      '/assets/products/nier/2.jpg',
      '/assets/products/nier/3.webp',
      '/assets/products/nier/4.jpg',
    ],
    productOptions: [
      {
        title: 'PS5 Game of the Yorha Ed.',
        price: 49,
        decor: '<s>$79</s>',
        stock: 10,
        physical: true,
      },
    ],
    about:
      'NieR: Automata tells the story of androids 2B, 9S, and A2 and their battle to reclaim the machine-driven dystopia overrun by powerful machines.<br/><br/>Humanity has been driven from the Earth by mechanical beings from another world. In a final effort to take back the planet, the human resistance sends a force of android soldiers to destroy the invaders. Now, a war between machines and androids rages on... A war that could soon unveil a long-forgotten truth of the world.</p> <h3>Key Features:</h3> <ul> <li><strong>Action-Packed Battles</strong> – Players will switch between using melee and ranged attacks in battle against hordes of enemies and challenging bosses across a variety of open field maps. The tight controls and incredibly fluid combat are simple to learn for newcomers while offering plenty of depth for more experienced action gamers. Players can perform high-speed battle actions—combining light and heavy attacks—and switch through an arsenal of weaponry while evading enemies with speed and style.</li> <li><strong>Beautifully Desolate Open-World</strong> – The game seamlessly joins together hauntingly beautiful vistas and locations with no area loading. The environments are rendered in 60fps and contain a wealth of sub-events in addition to the main storyline.</li> <li><strong>Masterfully Crafted Story and Characters</strong> – NieR: Automata tells the story of androids 2B, 9S, and A2 and their ferocious battle to reclaim a machine-driven dystopia overrun by powerful weapons known as machine lifeforms.</li> <li><strong>Elements of an RPG</strong> – Players will obtain a variety of weapon types, level up in battle, learn new combat skills, and customise a loadout that caters to their playstyle.</li> <li><strong>Utilise the Pod Support System to Assist In and Outside of Battle</strong> – Pods can attack the enemy in both manual and lock-on modes. They can also assist outside of battle, such as allowing the player to glide through the air. Pods can be enhanced throughout the game, with upgrades including new attack methods and variations.</li> <li><strong>“Auto Mode” Available for Beginners</strong> – Novice players can elect “Auto Mode” for easy attacks and evasions.</li> </ul>',
    technical:
      'Language : English <br/> Package Dimensions: 17.1 x 13.4 x 1.4 cm; 90 Grams <br/> Release Date : 9 November 2018 <br/> Console : PS5',

    similarItems: [1, 2, 3],
  },
  {
    id: 2,
    category: 'ps5',
    type: 'videoGame',
    type_internal: 'search_ps5_games',
    title: 'Helldivers II',
    decor: 'Best Co-op',
    bgImg: '/assets/products/helldivers/bg.webp',
    tags: 'Co-op, Online, Shooter',
    cta: 'View Item',
    productImg: [
      '/assets/products/helldivers/1.jpg',
      '/assets/products/helldivers/2.jpg',
      '/assets/products/helldivers/3.jpg',
    ],
    productOptions: [
      {
        title: 'PS5 Digital Code',
        price: 48,
        decor: '<s>$79</s>',
        stock: 10,
        physical: false,
      },
      {
        title: 'PS5 Physical',
        price: 76,
        decor: '<s>2 Day Delivery!</s>',
        stock: 10,
        physical: true,
      },
    ],
    about:
      'HELLDIVERS™ 2 is a 3rd person squad-based shooter that sees the elite forces of the Helldivers battling to win an intergalactic struggle to rid the galaxy of the rising alien threats. From a 3rd person perspective, players use a variety of weapons (pistols, machine guns, flamethrowers) and stratagems (turrets, airstrikes, etc.) to shoot and kill the alien threats. Players can also aim down the sights for a more accurate 1st person camera view. Combat is accompanied by frequent sprays of blood and dismemberment as players exterminate the alien forces or players and squad mates are hit by environmental explosions or friendly fire. Enemy encampments and battlefield environments depict bloodstains and dismembered corpses.',
    technical:
      'Language : English <br/> Release Date : 9 April 2024 <br/> Console: PS5',
    similarItems: [1, 2, 3],
  },
  {
    id: 3,
    category: 'playstation',
    type: 'videoGame',
    type_internal: 'search_playstation_games',
    title: 'Silksong',
    decor: 'Best Indie Game',
    bgImg: '/assets/products/silksong/bg.webp',
    tags: 'Singleplayer, Platformer, Story',
    cta: 'View Item',
    productImg: [
      '/assets/products/silksong/1.webp',
      '/assets/products/silksong/2.jpg',
      '/assets/products/silksong/3.jpg',
      '/assets/products/silksong/4.webp',
    ],
    productOptions: [
      {
        title: 'Playstation Digital Edition',
        price: 29,
        decor: 'Instant Code',
        stock: 10,
        physical: false,
      },
    ],
    about:
      '<h3>Become the Princess Knight</h3>Play as Hornet, princess-protector of Hallownest, and adventure through a whole new kingdom ruled by silk and song! Captured and brought to this unfamiliar world, Hornet must battle foes and solve mysteries as she ascends on a deadly pilgrimage to the kingdom’s peak<br/><br/>Hollow Knight: Silksong is the epic sequel to Hollow Knight, the award winning action-adventure. As the lethal hunter Hornet, journey to all-new lands, discover new powers, battle vast hordes of bugs and beasts and uncover ancient secrets tied to your nature and your past.',
    technical:
      'Language : English <br/> Release Date : 9 May 2024 <br/> Console: Playstation',
    similarItems: [1, 2, 3],
  },
  {
    id: 4,
    category: 'playstation',
    type: 'videoGame',
    type_internal: 'search_playstation_games',
    title: 'Final Fantasy VII Remake',
    decor: 'Genre Defining classic',
    bgImg: '/assets/products/ff7/bg.jpg',
    tags: 'Singleplayer, Platformer, Story',
    cta: 'View Item',
    productImg: [
      '/assets/products/ff7/1.webp',
      '/assets/products/ff7/2.jpg',
      '/assets/products/ff7/3.jpg',
    ],
    productOptions: [
      {
        title: 'PS5 Intergrade Physical',
        price: 49,
        decor: '<s>$89</s>',
        stock: 10,
        physical: false,
      },
      {
        title: 'PS5 Collectors Edition',
        price: 129,
        decor: 'Limited Stock',
        stock: 2,
        physical: true,
      },
    ],
    about:
      'Final Fantasy VII Remake Intergrade is an enhanced and expanded version of the critically acclaimed and award-winning PS5 Final Fantasy VII Remake for the PlayStation 5. PS5 Final Fantasy VII Remake Intergrade comes bundled with the brand-new episode featuring Yuffie as the main character which introduces an exhilarating new story arc, and numerous gameplay additions for players to enjoy.',
    technical:
      'Language : English <br/> Release Date : 9 May 2024 <br/> Console: Playstation 5 <br/> Age Rating: M',
    similarItems: [1, 2, 3],
  },
  {
    id: 5,
    category: 'playstation',
    type: 'videoGame',
    type_internal: 'search_playstation_games',
    title: 'Horizon Forbidden West',
    decor: 'PS5 Exclusive',
    bgImg: '/assets/products/horizon/bg.jpg',
    tags: 'Singleplayer, Open World, Story',
    cta: 'View Item',
    productImg: [
      '/assets/products/horizon/1.avif',
      '/assets/products/horizon/2.webp',
      '/assets/products/horizon/3.webp',
    ],
    productOptions: [
      {
        title: 'PS5 Physical',
        price: 89,
        decor: '<s>Fast Delivery</s>',
        stock: 10,
        physical: true,
      },
      {
        title: 'PS5 Digital',
        price: 79,
        decor: '<s>$89</s>',
        stock: 10,
        physical: false,
      },
    ],
    about:
      "Join Aloy as she braves the Forbidden West – a majestic but dangerous frontier that conceals mysterious new threats.<br/><br/>Explore distant lands, fight bigger and more awe-inspiring machines, and encounter astonishing new tribes as you return to the far-future, post-apocalyptic world of Horizon.<br/><br/>The land is dying. Vicious storms and an unstoppable blight ravage the scattered remnants of humanity, while fearsome new machines prowl their borders. Life on Earth is hurtling towards another extinction, and no one knows why.<br/><br/>It's up to Aloy to uncover the secrets behind these threats and restore order and balance to the world. Along the way, she must reunite with old friends, forge alliances with warring new factions and unravel the legacy of the ancient past – all the while trying to stay one step ahead of a seemingly undefeatable new enemy.",
    technical:
      'Language : English <br/> Release Date : 9 May 2024 <br/> Console: Playstation 5 <br/> Age Rating: M',
    similarItems: [1, 2, 3],
  },
  {
    id: 6,
    category: 'playstation',
    type: 'videoGame',
    type_internal: 'search_playstation_games',
    title: 'Stardew Valley',
    decor: 'Relaxing Fun',
    bgImg: '/assets/products/stardew/bg.webp',
    tags: 'Casual, Farming, Story',
    cta: 'View Item',
    productImg: [
      '/assets/products/stardew/1.jpg',
      '/assets/products/stardew/2.jpg',
      '/assets/products/stardew/3.jpg',
    ],
    productOptions: [
      {
        title: 'PS5 Digital',
        price: 19,
        decor: '<s>$29</s>',
        stock: 10,
        physical: false,
      },
    ],
    about:
      "You've inherited your grandfather's old farm plot in Stardew Valley. Armed with hand-me-down tools and a few coins, you set out to begin your new life. Can you learn to live off the land and turn these overgrown fields into a thriving home? It won't be easy. Ever since Joja Corporation came to town, the old ways of life have all but disappeared. The community center, once the town's most vibrant hub of activity, now lies in shambles. But the valley seems full of opportunity. With a little dedication, you might just be the one to restore Stardew Valley to greatness!",
    technical:
      'Language : English <br/> Release Date : 9 May 2024 <br/> Console: Playstation 5 <br/> Age Rating: PG',
    similarItems: [1, 2, 3],
  },

  // XBOX
  {
    id: 7,
    category: 'xbox',
    type: 'videoGame',
    type_internal: 'search_xbox_games',
    title: 'Stardew Valley',
    decor: 'Relaxing Fun',
    bgImg: '/assets/products/stardew/bg.webp',
    tags: 'Casual, Farming, Story',
    cta: 'View Item',
    productImg: [
      '/assets/products/stardew/1.jpg',
      '/assets/products/stardew/2.jpg',
      '/assets/products/stardew/3.jpg',
    ],
    productOptions: [
      {
        title: 'Xbox Digital',
        price: 19,
        decor: '<s>$29</s>',
        stock: 10,
        physical: false,
      },
    ],
    about:
      "You've inherited your grandfather's old farm plot in Stardew Valley. Armed with hand-me-down tools and a few coins, you set out to begin your new life. Can you learn to live off the land and turn these overgrown fields into a thriving home? It won't be easy. Ever since Joja Corporation came to town, the old ways of life have all but disappeared. The community center, once the town's most vibrant hub of activity, now lies in shambles. But the valley seems full of opportunity. With a little dedication, you might just be the one to restore Stardew Valley to greatness!",
    technical:
      'Language : English <br/> Release Date : 9 May 2024 <br/> Console: Xbox <br/> Age Rating: PG',
    similarItems: [1, 2, 3],
  },
  {
    id: 8,
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
  {
    id: 9,
    category: 'xbox',
    type: 'videoGame',
    type_internal: 'search_xbox_games',
    title: 'Helldivers II',
    decor: 'Best Co-op',
    bgImg: '/assets/products/helldivers/bg.webp',
    tags: 'Co-op, Online, Shooter',
    cta: 'View Item',
    productImg: [
      '/assets/products/helldivers/1.jpg',
      '/assets/products/helldivers/2.jpg',
      '/assets/products/helldivers/3.jpg',
    ],
    productOptions: [
      {
        title: 'Xbox Digital Edition',
        price: 59,
        decor: '<s>$79</s>',
        stock: 10,
        physical: false,
      },
    ],
    about:
      'HELLDIVERS™ 2 is a 3rd person squad-based shooter that sees the elite forces of the Helldivers battling to win an intergalactic struggle to rid the galaxy of the rising alien threats. From a 3rd person perspective, players use a variety of weapons (pistols, machine guns, flamethrowers) and stratagems (turrets, airstrikes, etc.) to shoot and kill the alien threats. Players can also aim down the sights for a more accurate 1st person camera view. Combat is accompanied by frequent sprays of blood and dismemberment as players exterminate the alien forces or players and squad mates are hit by environmental explosions or friendly fire. Enemy encampments and battlefield environments depict bloodstains and dismembered corpses.',
    technical:
      'Language : English <br/> Release Date : 9 April 2024 <br/> Console: xbox',
    similarItems: [1, 2, 3],
  },
  {
    id: 10,
    category: 'xbox',
    type: 'videoGame',
    type_internal: 'search_xbox_games',
    title: 'Forza Horizon 5',
    decor: 'Best Racing',
    bgImg: '/assets/products/forza/bg.jpg',
    tags: 'Racing, Online',
    cta: 'View Item',
    productImg: [
      '/assets/products/forza/1.webp',
      '/assets/products/forza/2.webp',
      '/assets/products/forza/3.jpg',
    ],
    productOptions: [
      {
        title: 'Xbox Digital Edition',
        price: 89,
        decor: '<s>$129</s>',
        stock: 10,
        physical: false,
      },
      {
        title: 'Xbox Physical Edition',
        price: 129,
        decor: 'Fast Delivery',
        stock: 10,
        physical: true,
      },
    ],
    about:
      "It's time for your Ultimate Horizon Adventure! Explore Mexico's bright and constantly changing open world landscapes while engaging in endless, enjoyable driving action in hundreds of the most significant automobiles ever made.",
    technical:
      'Language : English <br/> Release Date : 12 April 2024 <br/> Console: Xbox',
    similarItems: [1, 2, 3],
  },
  {
    id: 11,
    category: 'xbox',
    type: 'videoGame',
    type_internal: 'search_xbox_games',
    title: 'Halo Infinite',
    decor: 'XBOX Classic',
    bgImg: '/assets/products/halo/bg.jpg',
    tags: 'PVP, Shooter, Online',
    cta: 'View Item',
    productImg: [
      '/assets/products/halo/1.jpg',
      '/assets/products/halo/2.jpg',
      '/assets/products/halo/3.jpg',
      '/assets/products/halo/4.jpg',
    ],
    productOptions: [
      {
        title: 'Xbox Digital Edition',
        price: 89,
        decor: '<s>$129</s>',
        stock: 10,
        physical: false,
      },
      {
        title: 'Xbox Physical Edition',
        price: 129,
        decor: 'Fast Delivery',
        stock: 10,
        physical: true,
      },
    ],
    about:
      'When all hope is lost and humanity’s fate hangs in the balance, the Master Chief is ready to confront the most ruthless foe he’s ever faced. Step inside the armor of humanity’s greatest hero to experience an epic open-world adventure and explore the massive scale of the Halo ring.<br/><br/>With Network Campaign Co-Op and Mission Replay, you can relive your favorite moments, rediscover collectibles and explore the wonders of Zeta Halo on your own or with up to three other fireteam members.',
    technical:
      'Language : English <br/> Release Date : 21 April 2024 <br/> Console: Xbox',
    similarItems: [1, 2, 3],
  },

  // PC
  {
    id: 12,
    category: 'pc',
    type: 'videoGame',
    type_internal: 'search_pc_games',
    title: 'Stardew Valley',
    decor: 'Relaxing Fun',
    bgImg: '/assets/products/stardew/bg.webp',
    tags: 'Casual, Farming, Story',
    cta: 'View Item',
    productImg: [
      '/assets/products/stardew/1.jpg',
      '/assets/products/stardew/2.jpg',
      '/assets/products/stardew/3.jpg',
    ],
    productOptions: [
      {
        title: 'Steam Digital',
        price: 14,
        decor: '<s>$29</s>',
        stock: 10,
        physical: false,
      },
    ],
    about:
      "You've inherited your grandfather's old farm plot in Stardew Valley. Armed with hand-me-down tools and a few coins, you set out to begin your new life. Can you learn to live off the land and turn these overgrown fields into a thriving home? It won't be easy. Ever since Joja Corporation came to town, the old ways of life have all but disappeared. The community center, once the town's most vibrant hub of activity, now lies in shambles. But the valley seems full of opportunity. With a little dedication, you might just be the one to restore Stardew Valley to greatness!",
    technical:
      'Language : English <br/> Release Date : 9 May 2024 <br/> Min OS: Windows 10 <br/> Age Rating: PG',
    similarItems: [1, 2, 3],
  },
  {
    id: 13,
    category: 'pc',
    type: 'videoGame',
    type_internal: 'search_pc_games',
    title: 'NieR:Automata',
    decor: 'Soundtrack Game Award',
    bgImg: '/assets/products/nier/bg.jpg',
    tags: 'Singleplayer, Story, Action',
    cta: 'View Item',
    productImg: [
      '/assets/products/nier/1.jpg',
      '/assets/products/nier/2.jpg',
      '/assets/products/nier/3.webp',
      '/assets/products/nier/4.jpg',
    ],
    productOptions: [
      {
        title: 'PC Game of the Yorha Ed.',
        price: 29,
        decor: '<s>$79</s>',
        stock: 10,
        physical: false,
      },
    ],
    about:
      'NieR: Automata tells the story of androids 2B, 9S, and A2 and their battle to reclaim the machine-driven dystopia overrun by powerful machines.<br/><br/>Humanity has been driven from the Earth by mechanical beings from another world. In a final effort to take back the planet, the human resistance sends a force of android soldiers to destroy the invaders. Now, a war between machines and androids rages on... A war that could soon unveil a long-forgotten truth of the world.</p> <h3>Key Features:</h3> <ul> <li><strong>Action-Packed Battles</strong> – Players will switch between using melee and ranged attacks in battle against hordes of enemies and challenging bosses across a variety of open field maps. The tight controls and incredibly fluid combat are simple to learn for newcomers while offering plenty of depth for more experienced action gamers. Players can perform high-speed battle actions—combining light and heavy attacks—and switch through an arsenal of weaponry while evading enemies with speed and style.</li> <li><strong>Beautifully Desolate Open-World</strong> – The game seamlessly joins together hauntingly beautiful vistas and locations with no area loading. The environments are rendered in 60fps and contain a wealth of sub-events in addition to the main storyline.</li> <li><strong>Masterfully Crafted Story and Characters</strong> – NieR: Automata tells the story of androids 2B, 9S, and A2 and their ferocious battle to reclaim a machine-driven dystopia overrun by powerful weapons known as machine lifeforms.</li> <li><strong>Elements of an RPG</strong> – Players will obtain a variety of weapon types, level up in battle, learn new combat skills, and customise a loadout that caters to their playstyle.</li> <li><strong>Utilise the Pod Support System to Assist In and Outside of Battle</strong> – Pods can attack the enemy in both manual and lock-on modes. They can also assist outside of battle, such as allowing the player to glide through the air. Pods can be enhanced throughout the game, with upgrades including new attack methods and variations.</li> <li><strong>“Auto Mode” Available for Beginners</strong> – Novice players can elect “Auto Mode” for easy attacks and evasions.</li> </ul>',
    technical:
      'Language : English <br/> Package Dimensions: 17.1 x 13.4 x 1.4 cm; 90 Grams <br/> Release Date : 9 November 2018 <br/> Min OS: Windows 10',

    similarItems: [1, 2, 3],
  },
  {
    id: 14,
    category: 'pc',
    type: 'videoGame',
    type_internal: 'search_pc_games',
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
        title: 'Steam Key',
        price: 35,
        decor: '<s>$49</s>',
        stock: 10,
        physical: false,
      },
      {
        title: 'Microsoft Store Key',
        price: 25,
        decor: '<s>$49</s>',
        stock: 10,
        physical: false,
      },
    ],
    about:
      '<u>Survival</u><br/>In a harsh environment where food is scarce and vicious poachers roam, danger waits around every corner. To survive, you must tread carefully and make difficult choices...even if that means eating your own Pals when the time comes.<br/><br/><u>Mounts & Exploration</u></br>Pals can be mounted to traverse the land, sea and sky—allowing you to traverse all kinds of environment as you explore the world. <br/><br/><u>Multiplayer</u><br/>Multiplayer is supported, so invite a friend and go on an adventure together! And of course you can battle your friends and trade Pals, too.<br/>In online co-op play mode, up to 4 players can play together. Additionally, a dedicated server can allow up to 32 players to play together.<br/><br/><u>Dungeon Exploration</u><br/>With Pals on your side you can tackle even the most dangerous areas. When the time comes, you might have to sacrifice one to save your skin.',
    technical:
      'Language : English <br/> Release Date : 9 April 2024 <br/> Min OS: Windows 10',
    similarItems: [1, 2, 3],
  },
  {
    id: 15,
    category: 'pc',
    type: 'videoGame',
    type_internal: 'search_pc_games',
    title: 'Helldivers II',
    decor: 'Best Co-op',
    bgImg: '/assets/products/helldivers/bg.webp',
    tags: 'Co-op, Online, Shooter',
    cta: 'View Item',
    productImg: [
      '/assets/products/helldivers/1.jpg',
      '/assets/products/helldivers/2.jpg',
      '/assets/products/helldivers/3.jpg',
    ],
    productOptions: [
      {
        title: 'Steam Key',
        price: 59,
        decor: '<s>$79</s>',
        stock: 10,
        physical: false,
      },
    ],
    about:
      'HELLDIVERS™ 2 is a 3rd person squad-based shooter that sees the elite forces of the Helldivers battling to win an intergalactic struggle to rid the galaxy of the rising alien threats. From a 3rd person perspective, players use a variety of weapons (pistols, machine guns, flamethrowers) and stratagems (turrets, airstrikes, etc.) to shoot and kill the alien threats. Players can also aim down the sights for a more accurate 1st person camera view. Combat is accompanied by frequent sprays of blood and dismemberment as players exterminate the alien forces or players and squad mates are hit by environmental explosions or friendly fire. Enemy encampments and battlefield environments depict bloodstains and dismembered corpses.',
    technical:
      'Language : English <br/> Release Date : 9 April 2024 <br/> Minimum OS: Windows 10',
    similarItems: [1, 2, 3],
  },
  {
    id: 16,
    category: 'xbox',
    type: 'videoGame',
    type_internal: 'search_xbox_games',
    title: 'Silksong',
    decor: 'Best Indie Game',
    bgImg: '/assets/products/silksong/bg.webp',
    tags: 'Singleplayer, Platformer, Story',
    cta: 'View Item',
    productImg: [
      '/assets/products/silksong/1.webp',
      '/assets/products/silksong/2.jpg',
      '/assets/products/silksong/3.jpg',
      '/assets/products/silksong/4.webp',
    ],
    productOptions: [
      {
        title: 'Xbox Digital Edition',
        price: 29,
        decor: 'Instant Code',
        stock: 10,
        physical: false,
      },
    ],
    about:
      '<h3>Become the Princess Knight</h3>Play as Hornet, princess-protector of Hallownest, and adventure through a whole new kingdom ruled by silk and song! Captured and brought to this unfamiliar world, Hornet must battle foes and solve mysteries as she ascends on a deadly pilgrimage to the kingdom’s peak<br/><br/>Hollow Knight: Silksong is the epic sequel to Hollow Knight, the award winning action-adventure. As the lethal hunter Hornet, journey to all-new lands, discover new powers, battle vast hordes of bugs and beasts and uncover ancient secrets tied to your nature and your past.',
    technical:
      'Language : English <br/> Release Date : 9 May 2024 <br/> Console: xbox',
    similarItems: [1, 2, 3],
  },
  {
    id: 17,
    category: 'pc',
    type: 'videoGame',
    type_internal: 'search_pc_games',
    title: 'Silksong',
    decor: 'Best Indie Game',
    bgImg: '/assets/products/silksong/bg.webp',
    tags: 'Singleplayer, Platformer, Story',
    cta: 'View Item',
    productImg: [
      '/assets/products/silksong/1.webp',
      '/assets/products/silksong/2.jpg',
      '/assets/products/silksong/3.jpg',
      '/assets/products/silksong/4.webp',
    ],
    productOptions: [
      {
        title: 'PC Steam Key',
        price: 24,
        decor: 'Instant Code',
        stock: 10,
        physical: false,
      },
    ],
    about:
      '<h3>Become the Princess Knight</h3>Play as Hornet, princess-protector of Hallownest, and adventure through a whole new kingdom ruled by silk and song! Captured and brought to this unfamiliar world, Hornet must battle foes and solve mysteries as she ascends on a deadly pilgrimage to the kingdom’s peak<br/><br/>Hollow Knight: Silksong is the epic sequel to Hollow Knight, the award winning action-adventure. As the lethal hunter Hornet, journey to all-new lands, discover new powers, battle vast hordes of bugs and beasts and uncover ancient secrets tied to your nature and your past.',
    technical:
      'Language : English <br/> Release Date : 9 May 2024 <br/> Console: xbox',
    similarItems: [1, 2, 3],
  },
  {
    id: 18,
    category: 'pc',
    type: 'videoGame',
    type_internal: 'search_pc_games',
    title: 'Final Fantasy VII Remake',
    decor: 'Genre Defining classic',
    bgImg: '/assets/products/ff7/bg.jpg',
    tags: 'Singleplayer, Platformer, Story',
    cta: 'View Item',
    productImg: [
      '/assets/products/ff7/1.webp',
      '/assets/products/ff7/2.jpg',
      '/assets/products/ff7/3.jpg',
    ],
    productOptions: [
      {
        title: 'PC Intergrade Digital',
        price: 49,
        decor: '<s>$89</s>',
        stock: 10,
        physical: false,
      },
      {
        title: 'PC Collectors Edition',
        price: 129,
        decor: 'Limited Stock',
        stock: 2,
        physical: true,
      },
    ],
    about:
      'Final Fantasy VII Remake Intergrade is an enhanced and expanded version of the critically acclaimed and award-winning PS5 Final Fantasy VII Remake for the PlayStation 5. PS5 Final Fantasy VII Remake Intergrade comes bundled with the brand-new episode featuring Yuffie as the main character which introduces an exhilarating new story arc, and numerous gameplay additions for players to enjoy.',
    technical:
      'Language : English <br/> Release Date : 9 May 2024 <br/> Minimum Operating System: Windows 10 <br/> Memory: 16gb',
    similarItems: [1, 2, 3],
  },
  {
    id: 19,
    category: 'pc',
    type: 'videoGame',
    type_internal: 'search_pc_games',
    title: 'Horizon Forbidden West',
    decor: 'PC Edition',
    bgImg: '/assets/products/horizon/bg.jpg',
    tags: 'Singleplayer, Open World, Story',
    cta: 'View Item',
    productImg: [
      '/assets/products/horizon/1.avif',
      '/assets/products/horizon/2.webp',
      '/assets/products/horizon/3.webp',
    ],
    productOptions: [
      {
        title: 'PC Digital',
        price: 79,
        decor: '<s>$89</s>',
        stock: 10,
        physical: false,
      },
    ],
    about:
      "Join Aloy as she braves the Forbidden West – a majestic but dangerous frontier that conceals mysterious new threats.<br/><br/>Explore distant lands, fight bigger and more awe-inspiring machines, and encounter astonishing new tribes as you return to the far-future, post-apocalyptic world of Horizon.<br/><br/>The land is dying. Vicious storms and an unstoppable blight ravage the scattered remnants of humanity, while fearsome new machines prowl their borders. Life on Earth is hurtling towards another extinction, and no one knows why.<br/><br/>It's up to Aloy to uncover the secrets behind these threats and restore order and balance to the world. Along the way, she must reunite with old friends, forge alliances with warring new factions and unravel the legacy of the ancient past – all the while trying to stay one step ahead of a seemingly undefeatable new enemy.",
    technical:
      'Language : English <br/> Release Date : 9 May 2024 <br/> Minimum OS: Windows 10 <br/> Minimum Memory: 16gb',
    similarItems: [1, 2, 3],
  },
  {
    id: 20,
    category: 'pc',
    type: 'videoGame',
    type_internal: 'search_pc_games',
    title: 'Forza Horizon 5',
    decor: 'Best Racing',
    bgImg: '/assets/products/forza/bg.jpg',
    tags: 'Racing, Online',
    cta: 'View Item',
    productImg: [
      '/assets/products/forza/1.webp',
      '/assets/products/forza/2.webp',
      '/assets/products/forza/3.jpg',
    ],
    productOptions: [
      {
        title: 'Steam Digital Edition',
        price: 89,
        decor: '<s>$129</s>',
        stock: 10,
        physical: false,
      },
    ],
    about:
      "It's time for your Ultimate Horizon Adventure! Explore Mexico's bright and constantly changing open world landscapes while engaging in endless, enjoyable driving action in hundreds of the most significant automobiles ever made.",
    technical:
      'Language : English <br/> Release Date : 12 April 2024 <br/> Min OS: Windows 10',
    similarItems: [1, 2, 3],
  },
];

export default itemList;
