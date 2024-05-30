const pageInfo = {
  cart: {
    hero: {
      title: 'My Cart',
      body: '',
      background: '/assets/banners/GoW.webp',
      routingPath: [
        { name: 'back', url: 'javascript:history.back()' },
        { name: '', url: '' },
      ],
      barcode: {
        body: '',
      },
    },
  },

  success: {
    hero: {
      title: 'PAYMENT SUCCESS',
      body: 'You should recieve a confirmation email shortly',
      background: '/assets/banners/GoW.webp',
      routingPath: [
        { name: 'home', url: '../../index.html' },
        { name: '', url: '' },
      ],
      barcode: {
        body: '',
      },
    },
  },

  checkout: {
    hero: {
      title: 'Checkout',
      body: '',
      background: '/assets/banners/GoW.webp',
      routingPath: [
        { name: 'back', url: 'javascript:history.back()' },
        { name: '', url: '' },
      ],
      barcode: {
        body: '',
      },
    },
  },

  playstation: {
    hero: {
      title: 'PLAYSTATION',
      body: 'Home to many exclusive award winning games',
      background: '/assets/banners/GoW.webp',
      routingPath: [
        { name: 'home', url: '../../index.html' },
        { name: 'playstation', url: '' },
      ],
      barcode: {
        body: 'GOD OF WAR',
      },
    },

    featured: {
      collection: [0, 1, 2],
    },

    section: [
      {
        id: 'search_playstation_games',
        barcodeText: 'PS5 GAMES',
        type: 'games',
        title: 'Games',
        description: 'Home to the best exclusive and award winning games',
        items: [3, 4, 5],
        src1: '/assets/banners/GoW.webp',
        src2: '/assets/decor/ps5Games.webp',
        src3: '/assets/decor/ps5Games.webp',
        quote:
          'Try out the new 2024 wireless controllers! It’s a lot better than you think </br> </br> - GD Games',
      },
    ],
  },

  search_playstation_games: {
    hero: {
      title: 'VIDEO GAMES',
      background: '/assets/products/ff7/bg.jpg',
      body: '',
      routingPath: [
        { name: 'home', url: '../../index.html' },
        { name: 'playstation', url: './section.html?id=playstation' },
        { name: 'search', url: '' },
      ],
      barcode: {
        body: 'FFVII REMAKE',
      },
    },
    items: [
      [1, 2, 3, 4, 5],
      [1, 2, 3, 5],
      [2, 6, 1],
      [0, 1, 4, 5],
      [6, 3],
    ],
  },

  search_playstation_hardware: {
    hero: {
      title: 'Super Idol',
      body: 'Another one',
      routingPath: [
        { name: 'home', url: '../../index.html' },
        { name: 'playstation', url: './section.html?id=playstation' },
        { name: 'search', url: '' },
      ],
      barcode: {
        body: 'GOD OF WAR',
      },
    },
    items: [[0, 0, 0, 0, 0], [0, 0, 0], [0, 0, 1, 0], [1], [0, 0]],
  },

  xbox: {
    hero: {
      title: 'XBOX',
      body: 'Experience the new generation of games and entertainment with Xbox',
      background: '/assets/banners/forza.jpg',
      routingPath: [
        { name: 'home', url: '../../index.html' },
        { name: 'XBOX', url: '' },
      ],
      barcode: {
        body: 'FORZA HORIZON 4',
      },
    },

    featured: {
      collection: [7, 8, 9],
    },

    section: [
      {
        id: 'search_xbox_games',
        barcodeText: 'XBOX Games',
        type: 'games',
        title: 'Games',
        description: 'Home to the best exclusive and award winning games',
        items: [10, 11, 12],
        src1: '/assets/products/forza/bg.jpg',
        src2: '/assets/decor/xboxGames.jpg',
        quote:
          'Try out the new 2024 wireless controllers! It’s a lot better than you think </br> </br> - GD Games',
      },
      {
        id: 'search_xbox_Hardware',
        barcodeText: 'XBOX Hardware',
        type: 'bugs',
        title: 'Controllers',
        description: 'Home to the best exclusive and award winning games',
        items: [0, 1, 0],
        src1: '/assets/banners/GoW.webp',
        src2: '/assets/decor/ps5Controller.jpg',
        quote:
          'Try out the new 2024 wireless controllers! It’s a lot better than you think </br> </br> - GD Games',
      },
    ],
  },

  search_xbox_games: {
    hero: {
      title: 'VIDEO GAMES',
      body: '',
      background: '/assets/products/halo/bg.jpg',
      routingPath: [
        { name: 'home', url: '../../index.html' },
        { name: 'xbox', url: './section.html?id=xbox' },
        { name: 'search', url: '' },
      ],
      barcode: {
        body: 'HALO INFINITE',
      },
    },
    items: [
      [7, 8, 9, 10, 11, 12],
      [7, 8, 9, 12],
      [8, 10, 11],
      [12, 7],
      [7, 12],
    ],
  },

  search_xbox_hardware: {
    hero: {
      title: 'Super Idol',
      body: 'Another one',
      routingPath: [
        { name: 'home', url: '../../index.html' },
        { name: 'playstation', url: './section.html?id=playstation' },
        { name: 'search', url: '' },
      ],
      barcode: {
        body: 'GOD OF WAR',
      },
    },
    items: [[0, 0, 0, 0, 0], [0, 0, 0], [0, 0, 1, 0], [1], [0, 0]],
  },

  pc: {
    hero: {
      title: 'PC',
      body: 'Experience the new generation of games and entertainment with Xbox',
      background: '/assets/banners/forza.jpg',
      routingPath: [
        { name: 'home', url: '../../index.html' },
        { name: 'PC', url: '' },
      ],
      barcode: {
        body: 'FORZA HORIZON 4',
      },
    },

    featured: {
      collection: [7, 8, 9],
    },

    section: [
      {
        id: 'search_PC_games',
        barcodeText: 'PC Games',
        type: 'games',
        title: 'Games',
        description: 'Home to the best exclusive and award winning games',
        items: [10, 11, 12],
        src1: '/assets/products/forza/bg.jpg',
        src2: '/assets/decor/xboxGames.jpg',
        src3: '/assets/decor/xboxGames.jpg',
        quote:
          'Try out the new 2024 wireless controllers! It’s a lot better than you think </br> </br> - GD Games',
      },
    ],
  },

  search_pc_games: {
    hero: {
      title: 'VIDEO GAMES',
      body: '',
      background: '/assets/products/halo/bg.jpg',
      routingPath: [
        { name: 'home', url: '../../index.html' },
        { name: 'xbox', url: './section.html?id=xbox' },
        { name: 'search', url: '' },
      ],
      barcode: {
        body: 'HALO INFINITE',
      },
    },
    items: [
      [7, 8, 9, 10, 11, 12],
      [7, 8, 9, 12],
      [8, 10, 11],
      [12, 7],
      [7, 12],
    ],
  },
};

export default pageInfo;
