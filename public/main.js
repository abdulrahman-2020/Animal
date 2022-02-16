// eslint-disable-next-line no-unused-vars
const allcard = document.querySelector('.allcard');
const resutlsList = document.getElementById('animal-list');
const Input = document.getElementById('search-bar');
const btn = document.querySelector('.btn');

const fetch = (url, method, cb, inputValue) => {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.status === 200 && xhr.readyState === 4) {
      const data = JSON.parse(xhr.responseText);
      cb(data);
    }
  };
  xhr.open(method, url);
  xhr.send(inputValue);
};

Input.onkeyup = function InputSearch() {
  fetch(`/animal?q=${Input.value}`, (res) => {
    res.forEach((element) => {
      const option = document.createElement('option');
      option.value = element;
      resutlsList.appendChild(option);
    });
  });
};

const randomAnimalPhoto = (url) => {
  const newDiv = document.createElement('div');
  newDiv.setAttribute('class', 'card');
  allcard.appendChild(newDiv);
  const newImg = document.createElement('img');
  newImg.src = url;
  // eslint-disable-next-line no-console
  console.log(newImg.src);
  newDiv.appendChild(newImg);
};

btn.addEventListener('click', () => {
  fetch(
    '/search',
    'POST',
    (data) => {
      // eslint-disable-next-line no-console
      const dataObj = JSON.parse(data);
      const renderPhoto = dataObj.results[0].urls.small;
      console.log('hello', dataObj.results[0].urls.small);
      randomAnimalPhoto(renderPhoto);
    },
    Input.value,
  );
});
