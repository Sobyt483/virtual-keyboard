const body = document.querySelector('.body');
const main = document.createElement('main');
const h1 = document.createElement('h1');
const textarea = document.createElement('textarea');
const keyBoard = document.createElement('div');
// 1 элеменет - класс для всей клавиши, 2 элемент - значение для англ нижний регистр,
// 3 элемент - значение для англ верхнего регистра, 4 эл. - значение для англ капс,
// 5 эл. - значение для англ shift + caps,  6, 7, 8, 9 для русск соответсенно.
const keyMatrix = [
  [['keyboard__key key backqoute', '`', '~', '`', '~', 'ё', 'Ё', 'Ё', 'ё'], ['keyboard__key key 1', '1', '!', '1', '!', '1', '!', '1', '!'], ['keyboard__key key 2', '2', '@', '2', '@', '2', '"', '2', '"'], ['keyboard__key key 3', '3', '#', '3', '#', '3', '№', '3', '№'], ['keyboard__key key 4', '4', '$', '4', '$', '4', ';', '4', ';'], ['keyboard__key key 5', '5', '%', '5', '%', '5', '%', '5', '%'], ['keyboard__key key 6', '6', '^', '6', '^', '6', ':', '6', ':'], ['keyboard__key key 7', '7', '&', '7', '&', '7', '?', '7', '?'], ['keyboard__key key 8', '8', '*', '8', '*', '8', '*', '8', '*'], ['keyboard__key key 9', '9', '(', '9', '(', '9', '(', '9', '('], ['keyboard__key key 0', '0', ')', '0', ')', '0', ')', '0', ')'], ['keyboard__key key minus', '-', '_', '-', '_', '-', '_', '-', '_'], ['keyboard__key key equal', '=', '+', '=', '+', '=', '+', '=', '+'], ['keyboard__key key backspace', 'Backspace']],
  [['keyboard__key tab', 'Tab'], ['keyboard__key key q', 'q', 'Q', 'Q', 'q', 'й', 'Й', 'Й', 'й'], ['keyboard__key key w', 'w', 'W', 'W', 'w', 'ц', 'Ц', 'Ц', 'ц'], ['keyboard__key key e', 'e', 'E', 'E', 'e', 'у', 'У', 'У', 'у'], ['keyboard__key key r', 'r', 'R', 'R', 'r', 'к', 'К', 'К', 'к'], ['keyboard__key key t', 't', 'T', 'T', 't', 'е', 'Е', 'Е', 'е'], ['keyboard__key key y', 'y', 'Y', 'Y', 'y', 'н', 'Н', 'Н', 'н'], ['keyboard__key key u', 'u', 'U', 'U', 'u', 'г', 'Г', 'Г', 'г'], ['keyboard__key key i', 'i', 'I', 'I', 'i', 'ш', 'Ш', 'Ш', 'ш'], ['keyboard__key key o', 'o', 'O', 'O', 'o', 'щ', 'Щ', 'Щ', 'щ'], ['keyboard__key key p', 'p', 'P', 'P', 'p', 'з', 'З', 'З', 'з'], ['keyboard__key key bracket-left', '[', '{', '[', '{', 'х', 'Х', 'Х', 'х'], ['keyboard__key key bracket-right', ']', '}', ']', '}', 'ъ', 'Ъ', 'Ъ', 'ъ'], ['keyboard__key key blackslash', '&#92;', '|', '&#92;', '|', '&#92;', '/', '&#92;', '/'], ['keyboard__key del', 'Del']],
  [['keyboard__key capslock', 'CapsLock'], ['keyboard__key key a', 'a', 'A', 'A', 'a', 'ф', 'Ф', 'Ф', 'ф'], ['keyboard__key key s', 's', 'S', 'S', 's', 'ы', 'Ы', 'Ы', 'ы'], ['keyboard__key key d', 'd', 'D', 'D', 'd', 'в', 'В', 'В', 'в'], ['keyboard__key key f', 'f', 'F', 'F', 'f', 'а', 'А', 'А', 'а'], ['keyboard__key key g', 'g', 'G', 'G', 'g', 'п', 'П', 'П', 'п'], ['keyboard__key key h', 'h', 'H', 'H', 'h', 'р', 'Р', 'Р', 'р'], ['keyboard__key key j', 'j', 'J', 'J', 'j', 'о', 'О', 'О', 'о'], ['keyboard__key key k', 'k', 'K', 'K', 'k', 'л', 'Л', 'Л', 'л'], ['keyboard__key key  l', 'l', 'L', 'L', 'l', 'д', 'Д', 'Д', 'д'], ['keyboard__key key semicolon', ';', ':', ';', ':', 'ж', 'Ж', 'Ж', 'ж'], ['keyboard__key key qoute', '\'', '"', '\'', '"', 'э', 'Э', 'Э', 'э'], ['keyboard__key enter', 'Enter']],
  [['keyboard__key shift-left', 'Shift'], ['keyboard__key key z', 'z', 'Z', 'Z', 'z', 'я', 'Я', 'Я', 'я'], ['keyboard__key key x', 'x', 'X', 'X', 'x', 'ч', 'Ч', 'Ч', 'ч'], ['keyboard__key key c', 'c', 'C', 'C', 'c', 'с', 'С', 'С', 'с'], ['keyboard__key key v', 'v', 'V', 'V', 'v', 'м', 'М', 'М', 'м'], ['keyboard__key key b', 'b', 'B', 'B', 'b', 'и', 'И', 'И', 'и'], ['keyboard__key key n', 'n', 'N', 'N', 'n', 'т', 'Т', 'Т', 'т'], ['keyboard__key key m', 'm', 'M', 'M', 'm', 'ь', 'Ь', 'Ь', 'ь'], ['keyboard__key key comma', ',', '<', ',', '<', 'б', 'Б', 'Б', 'б'], ['keyboard__key key dot', '.', '>', '.', '>', 'ю', 'Ю', 'Ю', 'ю'], ['keyboard__key key slash', '/', '?', '/', '?', '.', ',', '.', ','], ['keyboard__key arrow-up', '▲'], ['keyboard__key shift-right', 'Shift']],
  [['keyboard__key ctrl-left', 'Ctrl'], ['keyboard__key win', 'Win'], ['keyboard__key alt-left', 'Alt'], ['keyboard__key space', ''], ['keyboard__key alt-right', 'Alt'], ['keyboard__key arrow-left', '◄'], ['keyboard__key arrow-down', '▼'], ['keyboard__key arrow-right', '►'], ['keyboard__key ctrl-right', 'Ctrl']],
];
const createKey = (arr) => {
  const key = document.createElement('div');
  key.className = `${arr[0]}`;
  const array = arr.slice(1);

  const eng = document.createElement('span');
  eng.className = 'eng';
  const rus = document.createElement('span');
  rus.className = 'rus';

  const lowEng = document.createElement('span');
  lowEng.className = 'low';
  const upEng = document.createElement('span');
  upEng.className = 'up';
  const capsEng = document.createElement('span');
  capsEng.className = 'caps';
  const shiftCapsEng = document.createElement('span');
  shiftCapsEng.className = 'shift-caps';
  const lowRus = document.createElement('span');
  lowRus.className = 'low';
  const upRus = document.createElement('span');
  upRus.className = 'up';
  const capsRus = document.createElement('span');
  capsRus.className = 'caps';
  const shiftCapsRus = document.createElement('span');
  shiftCapsRus.className = 'shift-caps';
  const arrayElement = [lowEng, upEng, capsEng, shiftCapsEng, lowRus, upRus, capsRus, shiftCapsRus];
  if (array.length === 1) {
    arrayElement.forEach((el) => {
      const element = el;
      element.textContent = `${array[0]}`;
    });
  } else if (array[0] === '&#92;') {
    arrayElement.forEach((el, i) => {
      const element = el;
      element.innerHTML = `${array[i]}`;
    });
  } else {
    arrayElement.forEach((el, i) => {
      const element = el;
      element.textContent = `${array[i]}`;
    });
  }
  arrayElement.forEach((el, i) => {
    if (i < 4) {
      eng.appendChild(el);
    } else {
      rus.appendChild(el);
    }
  });
  key.appendChild(eng);
  key.appendChild(rus);
  return key;
};
const createKeyboard = () => {
  keyMatrix.forEach((el) => {
    const keyBoardRow = document.createElement('div');
    keyBoardRow.className = 'keyboard__row';
    el.forEach((key) => {
      const completeKey = createKey(key);
      keyBoardRow.appendChild(completeKey);
    });
    keyBoard.appendChild(keyBoardRow);
  });
};
const buildHtml = () => {
  console.log('test');
  main.className = 'container';
  h1.className = 'title';
  h1.textContent = 'Virtual keyboard';
  textarea.className = 'textarea';
  keyBoard.className = 'keyboard';
  createKeyboard();
  textarea.setAttribute('id', 'textarea');
  main.appendChild(h1);
  main.appendChild(textarea);
  main.appendChild(keyBoard);
  body.appendChild(main);
};
buildHtml();

const language = 'eng';
const keyboardKey = document.querySelectorAll('.keyboard__key');
const hideKeys = () => {
  if (language === 'eng') {
    keyboardKey.forEach((el) => {
      el.children[0].children[1].classList.add('hide');
      el.children[0].children[2].classList.add('hide');
      el.children[0].children[3].classList.add('hide');
      el.children[1].children[0].classList.add('hide');
      el.children[1].children[1].classList.add('hide');
      el.children[1].children[2].classList.add('hide');
      el.children[1].children[3].classList.add('hide');
      console.dir(el)
    });
  }else {
    keyboardKey.forEach((el) => {
      el.children[1].children[1].classList.add('hide');
      el.children[1].children[2].classList.add('hide');
      el.children[1].children[3].classList.add('hide');
      el.children[0].children[0].classList.add('hide');
      el.children[0].children[1].classList.add('hide');
      el.children[0].children[2].classList.add('hide');
      el.children[0].children[3].classList.add('hide');
    });
  }
};
hideKeys();
