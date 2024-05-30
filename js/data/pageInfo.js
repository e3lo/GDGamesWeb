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
      title: 'Super Idol',
      body: 'Another one',
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
      collection: [0, 1, 1],
    },

    section: [
      {
        id: 'search_playstation_games',
        barcodeText: 'PS5 Hardware',
        type: 'controllers',
        title: 'Controllers',
        description: 'Home to the best exclusive and award winning games',
        items: [0, 1, 0],
        src1: '/assets/banners/GoW.webp',
        src2: '/assets/decor/ps5Controller.jpg',
        quote:
          'Try out the new 2024 wireless controllers! It’s a lot better than you think </br> </br> - GD Games',
      },
      {
        id: 'search_playstation_hardware',
        barcodeText: 'PS5 Hardware',
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

  search_playstation_games: {
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
      collection: [0, 1, 1],
    },

    section: [
      {
        id: 'search_xbox_games',
        barcodeText: 'XBOX Games',
        type: 'controllers',
        title: 'Games',
        description: 'Home to the best exclusive and award winning games',
        items: [0, 1, 0],
        src1: '/assets/banners/GoW.webp',
        src2: '/assets/decor/ps5Controller.jpg',
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
};

export default pageInfo;
