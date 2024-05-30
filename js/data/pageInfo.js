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
        src2: '/assets/products/horizon/1.avif',
        src3: '/assets/decor/ps5Games.webp',
        quote:
          'Our favourite games below, absolutely stunning and life changing! Would recommend for anyone to try out </br> </br> - GD Games',
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
      [6, 3, 2],
    ],
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
        src3: '/assets/products/forza/1.webp',
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
      [7, 12, 11],
    ],
  },

  pc: {
    hero: {
      title: 'PC',
      body: 'Experience the freedom of PC and the wide options of games at GD Games!',
      background: '/assets/products/helldivers/bg.webp',
      routingPath: [
        { name: 'home', url: '../../index.html' },
        { name: 'PC', url: '' },
      ],
      barcode: {
        body: 'HELLDIVERS II',
      },
    },

    featured: {
      collection: [13, 14, 15],
    },

    section: [
      {
        id: 'search_PC_games',
        barcodeText: 'PC Games',
        type: 'games',
        title: 'Games',
        description:
          'The cheapest and best PC videogames at GD Games. Instant email delivery',
        items: [16, 17, 18],
        src1: '/assets/products/nier/bg.jpg',
        src2: '/assets/decor/pcGames.jpg',
        src3: '/assets/decor/pcGames2.jpg',
        quote:
          'Below is a collection of games we felt had a deep impact in our lives after finishing the game. The games that blend literature and gaming<br/><br/> --GD Games',
      },
    ],
  },

  search_pc_games: {
    hero: {
      title: 'VIDEO GAMES',
      body: '',
      background: '/assets/products/nier/bg.jpg',
      routingPath: [
        { name: 'home', url: '../../index.html' },
        { name: 'pc', url: './section.html?id=pc' },
        { name: 'search', url: '' },
      ],
      barcode: {
        body: 'HALO INFINITE',
      },
    },
    items: [
      [13, 14, 15, 16, 17, 18, 19, 20],
      [13, 14, 17, 19],
      [13, 15, 20],
      [14, 16, 18, 19],
      [13, 17, 18],
    ],
  },
};

export default pageInfo;
