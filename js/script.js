const icons = [
  {
    name : 'cat',
    prefix : 'fa-',
    type : 'animals',
    family: 'fas'
  },
  {
    name : 'crow',
    prefix : 'fa-',
    type : 'animals',
    family: 'fas'
  },
  {
    name : 'dog',
    prefix : 'fa-',
    type : 'animals',
    family: 'fas'
  },
  {
    name : 'dove',
    prefix : 'fa-',
    type : 'animals',
    family: 'fas'
  },
  {
    name : 'dragon',
    prefix : 'fa-',
    type : 'animals',
    family: 'fas'
  },
  {
    name : 'horse',
    prefix : 'fa-',
    type : 'animals',
    family: 'fas'
  },
  {
    name : 'hippo',
    prefix : 'fa-',
    type : 'animals',
    family: 'fas'
  },
  {
    name : 'fish',
    prefix : 'fa-',
    type : 'animals',
    family: 'fas'
  },
  {
    name : 'carrot',
    prefix : 'fa-',
    type : 'vegetables&fruits',
    family: 'fas'
  },
  {
    name : 'apple-alt',
    prefix : 'fa-',
    type : 'vegetables&fruits',
    family: 'fas'
  },
  {
    name : 'lemon',
    prefix : 'fa-',
    type : 'vegetables&fruits',
    family: 'fas'
  },
  {
    name : 'pepper-hot',
    prefix : 'fa-',
    type : 'vegetables&fruits',
    family: 'fas'
  },
  {
    name : 'user-astronaut',
    prefix : 'fa-',
    type : 'users',
    family: 'fas'
  },
  {
    name : 'user-graduate',
    prefix : 'fa-',
    type : 'users',
    family: 'fas'
  },
  {
    name : 'user-ninja',
    prefix : 'fa-',
    type : 'users',
    family: 'fas'
  },
  {
    name : 'user-secret',
    prefix : 'fa-',
    type : 'users',
    family: 'fas'
  }
];

const colors = ['#AF936C', '#4ABE02', '#0000A7'];

const containerHTML = document.getElementsByClassName('container')[0]

icons.forEach((element) => {
  const {name, prefix, type, family} = element;

  let iconColor;

  switch (type) {
    case 'animals':
    iconColor = colors[0];
    break;
    case 'vegetables&fruits':
    iconColor = colors[1];
    break;
    case 'users':
    iconColor = colors[2];
    break;
    default:
    console.error('default');
  }

  containerHTML.innerHTML += `
  <div>
  <i class="${family} ${prefix}${name}" style="color:${iconColor}"></i>
  <div>${name}</div>
  </div>
  `
});

const typeSelector = document.getElementsByClassName('type-selector')[0];

const options = []

icons.forEach((element) => {
  const {type} = element;

  if (!options.includes(type)) {
    options.push(type)
  }
});

options.forEach((element) => {
  typeSelector.innerHTML += `
  <option value="${element}">${element}</option>
  `
});

const button = document.getElementsByClassName('btn')[0];

button.addEventListener('click', () => {
  containerHTML.innerHTML = '';

  let filteredArray = icons.filter((element, index, array) => {
    return element.type === typeSelector.value
  });

  if (typeSelector.value === 'all') {
    filteredArray = icons
  }

  filteredArray.forEach((element) => {
    const {name, prefix, type, family} = element;

    let iconColor;

    switch (type) {
      case 'animals':
      iconColor = colors[0];
      break;
      case 'vegetables&fruits':
      iconColor = colors[1];
      break;
      case 'users':
      iconColor = colors[2];
      break;
      default:
      console.error('default');
    }

    containerHTML.innerHTML += `
    <div>
    <i class="${family} ${prefix}${name}" style="color:${iconColor}"></i>
    <div>${name}</div>
    </div>
    `
  });
});
