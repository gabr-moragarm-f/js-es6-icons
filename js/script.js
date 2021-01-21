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
    type : 'user',
    family: 'fas'
  },
  {
    name : 'user-graduate',
    prefix : 'fa-',
    type : 'user',
    family: 'fas'
  },
  {
    name : 'user-ninja',
    prefix : 'fa-',
    type : 'user',
    family: 'fas'
  },
  {
    name : 'user-secret',
    prefix : 'fa-',
    type : 'user',
    family: 'fas'
  }
]

const containerHTML = document.getElementsByClassName('container')[0]

icons.forEach((element) => {
  const {name, prefix, type, family} = element;

  containerHTML.innerHTML += `
  <div>
    <i class="${family} ${prefix}${name}""></i>
    <div>${name}</div>
  </div>
  `
});
