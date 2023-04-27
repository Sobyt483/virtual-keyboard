const body = document.querySelector('.body');
const main = document.createElement('main');
const h1 = document.createElement('h1');
const textarea = document.createElement('textarea');
const buildHtml = () => {
  console.log('test');
  main.className = 'container';
  h1.className = 'title';
  h1.textContent = 'Virtual keyboard';
  textarea.className = 'textarea';
  textarea.setAttribute('id', 'textarea');
  main.appendChild(h1);
  main.appendChild(textarea);
  body.appendChild(main);
};
buildHtml();
