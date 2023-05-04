console.log('Hello!');
//JavaScript
var chart = new FamilyTree(document.getElementById('tree'), {
  mouseScrool: FamilyTree.none,
  siblingSeparation: 120,
  template: 'john',
  nodeBinding: {
    field_0: 'name',
    field_1: 'title',
    img_0: 'img',
  },
});

chart.load([
  {
    id: 1,
    pids: [2],
    name: 'Ajoy Oraon',
    img: './assets/images/baba.JPG',
    gender: 'male',
  },
  {
    id: 2,
    pids: [1],
    name: 'Shanti Khechhe',
    img: './assets/images/ma.jpg',
    gender: 'female',
  },

  {
    id: 3,
    pids: [4],
    mid: 2,
    fid: 1,
    name: 'Debashish Oraon',
    img: './assets/images/debashish.jpg',
    gender: 'male',
  },
  {
    id: 4,
    pids: [3],
    name: 'Sanchita Dhani',
    img: './assets/images/sanchita.jpg',
    gender: 'female',
  },

  {
    id: 5,
    pids: [36],
    mid: 2,
    fid: 1,
    name: 'Sampa Oraon',
    img: './assets/images/didi.JPG',
    gender: 'female',
  },
  {
    id: 36,
    pids: [5],
    name: 'Montu Khalko',
    img: './assets/images/montu.jpg',
    gender: 'male',
  },

  {
    id: 37,
    pids: [38],
    mid: 2,
    fid: 1,
    name: 'Ashish Oraon',
    img: './assets/images/ashish.JPG',
    gender: 'male',
  },
  {
    id: 38,
    pids: [37],
    name: 'Aishani Das',
    img: './assets/images/aishani.jpg',
    gender: 'female',
  },

  {
    id: 6,
    mid: 5,
    fid: 36,
    pids: [7, 8],
    name: 'Aniket',
    title: 'Prince of Wales',
    img: './assets/images/Aniket.jpg',
    gender: 'male',
  },

  {
    id: 9,
    mid: 5,
    fid: 36,
    name: 'Mahi',
    title: 'Princess Royal',
    img: './assets/images/mahi.JPG',
    gender: 'female',
  },
  // { id: 10,  mid: 5, fid: 36, name: "Prince Andrew", title: "Duke of York", img: "https://cdn.balkan.app/shared/f11.png", gender: 'male' },
  // { id: 11,  mid: 5, fid: 36, name: "Prince Edward", title: "Earl of Wessex", img: "https://cdn.balkan.app/shared/f12.png", gender: 'male' },

  // { id: 12, fid: 6, mid: 7, pids: [14], name: "Prince William", title: "Duch of Cambridge", img: "https://cdn.balkan.app/shared/f14.png", gender: 'male' },
  // { id: 13, fid: 6, mid: 7, pids: [15], name: "Prince Harry", img: "https://cdn.balkan.app/shared/f15.png", gender: 'male' },
  // { id: 14, pids: [12], name: "Catherine", title: "Duchess of Cambridge", img: "https://cdn.balkan.app/shared/f13.png", gender: 'female' },
  // { id: 15, pids: [13], name: "Meghan Markle", img: "https://cdn.balkan.app/shared/f16.png", gender: 'female' },
  // { id: 16, fid: 12, mid: 14, name: "Prince George", img: "https://cdn.balkan.app/shared/f17.png", gender: 'male' },
  // { id: 17, fid: 12, mid: 14, name: "Prince Charlotte", img: "https://cdn.balkan.app/shared/f18.png", gender: 'female' },
  // { id: 18, fid: 12, mid: 14, name: "Prince Louis", img: "https://cdn.balkan.app/shared/f19.png", gender: 'male' }
]);
