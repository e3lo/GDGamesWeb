const pageInfo = {
  playstation: {
    hero: {
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
        id: 'playstation',
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
    ],
  },
};

export default pageInfo;
