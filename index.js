const body = document.querySelector('.body');
const main = document.createElement('main');
const h1 = document.createElement('h1');
const textarea = document.createElement('textarea');
const keyBoard = document.createElement('div');
const description = document.createElement('div');
// 1 элеменет - класс для всей клавиши, 2 элемент - значение для англ нижний регистр,
// 3 элемент - значение для англ верхнего регистра, 4 эл. - значение для англ капс,
// 5 эл. - значение для англ shift + caps,  6, 7, 8, 9 для русск соответсенно.
const keyMatrix = [
  [['keyboard__key key Backquote', '`', '~', '`', '~', 'ё', 'Ё', 'Ё', 'ё'], ['keyboard__key key Digit1', '1', '!', '1', '!', '1', '!', '1', '!'], ['keyboard__key key Digit2', '2', '@', '2', '@', '2', '"', '2', '"'], ['keyboard__key key Digit3', '3', '#', '3', '#', '3', '№', '3', '№'], ['keyboard__key key Digit4', '4', '$', '4', '$', '4', ';', '4', ';'], ['keyboard__key key Digit5', '5', '%', '5', '%', '5', '%', '5', '%'], ['keyboard__key key Digit6', '6', '^', '6', '^', '6', ':', '6', ':'], ['keyboard__key key Digit7', '7', '&', '7', '&', '7', '?', '7', '?'], ['keyboard__key key Digit8', '8', '*', '8', '*', '8', '*', '8', '*'], ['keyboard__key key Digit9', '9', '(', '9', '(', '9', '(', '9', '('], ['keyboard__key key Digit0', '0', ')', '0', ')', '0', ')', '0', ')'], ['keyboard__key key Minus', '-', '_', '-', '_', '-', '_', '-', '_'], ['keyboard__key key Equal', '=', '+', '=', '+', '=', '+', '=', '+'], ['keyboard__key Backspace', 'Backspace']],
  [['keyboard__key Tab', 'Tab'], ['keyboard__key key KeyQ', 'q', 'Q', 'Q', 'q', 'й', 'Й', 'Й', 'й'], ['keyboard__key key KeyW', 'w', 'W', 'W', 'w', 'ц', 'Ц', 'Ц', 'ц'], ['keyboard__key key KeyE', 'e', 'E', 'E', 'e', 'у', 'У', 'У', 'у'], ['keyboard__key key KeyR', 'r', 'R', 'R', 'r', 'к', 'К', 'К', 'к'], ['keyboard__key key KeyT', 't', 'T', 'T', 't', 'е', 'Е', 'Е', 'е'], ['keyboard__key key KeyY', 'y', 'Y', 'Y', 'y', 'н', 'Н', 'Н', 'н'], ['keyboard__key key KeyU', 'u', 'U', 'U', 'u', 'г', 'Г', 'Г', 'г'], ['keyboard__key key KeyI', 'i', 'I', 'I', 'i', 'ш', 'Ш', 'Ш', 'ш'], ['keyboard__key key KeyO o', 'o', 'O', 'O', 'o', 'щ', 'Щ', 'Щ', 'щ'], ['keyboard__key key KeyP', 'p', 'P', 'P', 'p', 'з', 'З', 'З', 'з'], ['keyboard__key key BracketLeft', '[', '{', '[', '{', 'х', 'Х', 'Х', 'х'], ['keyboard__key key BracketRight', ']', '}', ']', '}', 'ъ', 'Ъ', 'Ъ', 'ъ'], ['keyboard__key key Backslash', '&#92;', '|', '&#92;', '|', '&#92;', '/', '&#92;', '/'], ['keyboard__key Delete', 'Del']],
  [['keyboard__key CapsLock', 'CapsLock'], ['keyboard__key key KeyA', 'a', 'A', 'A', 'a', 'ф', 'Ф', 'Ф', 'ф'], ['keyboard__key key KeyS', 's', 'S', 'S', 's', 'ы', 'Ы', 'Ы', 'ы'], ['keyboard__key key KeyD', 'd', 'D', 'D', 'd', 'в', 'В', 'В', 'в'], ['keyboard__key key KeyF', 'f', 'F', 'F', 'f', 'а', 'А', 'А', 'а'], ['keyboard__key key KeyG', 'g', 'G', 'G', 'g', 'п', 'П', 'П', 'п'], ['keyboard__key key KeyH', 'h', 'H', 'H', 'h', 'р', 'Р', 'Р', 'р'], ['keyboard__key key KeyJ', 'j', 'J', 'J', 'j', 'о', 'О', 'О', 'о'], ['keyboard__key key KeyK', 'k', 'K', 'K', 'k', 'л', 'Л', 'Л', 'л'], ['keyboard__key key  KeyL', 'l', 'L', 'L', 'l', 'д', 'Д', 'Д', 'д'], ['keyboard__key key Semicolon', ';', ':', ';', ':', 'ж', 'Ж', 'Ж', 'ж'], ['keyboard__key key Quote', '\'', '"', '\'', '"', 'э', 'Э', 'Э', 'э'], ['keyboard__key Enter', 'Enter']],
  [['keyboard__key ShiftLeft', 'Shift'], ['keyboard__key key KeyZ', 'z', 'Z', 'Z', 'z', 'я', 'Я', 'Я', 'я'], ['keyboard__key key KeyX', 'x', 'X', 'X', 'x', 'ч', 'Ч', 'Ч', 'ч'], ['keyboard__key key KeyC', 'c', 'C', 'C', 'c', 'с', 'С', 'С', 'с'], ['keyboard__key key KeyV', 'v', 'V', 'V', 'v', 'м', 'М', 'М', 'м'], ['keyboard__key key KeyB', 'b', 'B', 'B', 'b', 'и', 'И', 'И', 'и'], ['keyboard__key key KeyN', 'n', 'N', 'N', 'n', 'т', 'Т', 'Т', 'т'], ['keyboard__key key KeyM', 'm', 'M', 'M', 'm', 'ь', 'Ь', 'Ь', 'ь'], ['keyboard__key key Comma', ',', '<', ',', '<', 'б', 'Б', 'Б', 'б'], ['keyboard__key key Period', '.', '>', '.', '>', 'ю', 'Ю', 'Ю', 'ю'], ['keyboard__key key Slash', '/', '?', '/', '?', '.', ',', '.', ','], ['keyboard__key ArrowUp', '▲'], ['keyboard__key ShiftRight', 'Shift']],
  [['keyboard__key ControlLeft', 'Ctrl'], ['keyboard__key MetaLeft', 'Win'], ['keyboard__key AltLeft', 'Alt'], ['keyboard__key Space', ' '], ['keyboard__key AltRight', 'Alt'], ['keyboard__key ArrowLeft', '◄'], ['keyboard__key ArrowDown', '▼'], ['keyboard__key ArrowRight', '►'], ['keyboard__key ControlRight', 'Ctrl']],
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
  main.className = 'container';
  h1.className = 'title';
  h1.textContent = 'Virtual keyboard';
  textarea.className = 'textarea';
  keyBoard.className = 'keyboard';
  description.innerHTML = 'Клавиатура создана на базе операционной системы Windows.<br> Для переключения языка комбинация: левыe Shift + Alt';
  description.className = 'description';
  createKeyboard();
  main.appendChild(h1);
  main.appendChild(textarea);
  main.appendChild(keyBoard);
  main.appendChild(description);
  body.appendChild(main);
};
buildHtml();

const capsLock = document.querySelector('.CapsLock');
const shiftLeft = document.querySelector('.ShiftLeft');
const shiftRight = document.querySelector('.ShiftRight');
const altLeft = document.querySelector('.AltLeft');

let language = 'eng';
const languageSwitch = () => {
  if (language === 'eng') {
    language = 'rus';
  } else {
    language = 'eng';
  }
};
const keyboardKey = document.querySelectorAll('.keyboard__key');

const arrows = ['ArrowLeft', 'ArrowDown', 'ArrowRight', 'ArrowUp'];
const arrayNotInsert = ['Tab', 'CapsLock', 'Shift', 'Control', 'Ctrl', 'Meta', 'Win', 'Alt', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ArrowUp', 'Enter', 'Backspace', 'Delete', 'Del'];

const showCurrentKey = (key) => {
  const array = Array.from(key.children);
  let result;
  array.forEach((el) => {
    if (!el.classList.contains('hide')) {
      const childerArray = Array.from(el.children);
      childerArray.forEach((char) => {
        if (!char.classList.contains('hide')) {
          result = char.textContent;
        }
      });
    }
  });
  return result;
};

const actionEnter = (ar) => {
  const area = ar;
  const index = area.selectionStart;
  area.value = `${area.value.substring(0, area.selectionStart)}\n${area.value.substring(area.selectionEnd, area.value.length)}`;
  area.setSelectionRange(index + 1, index + 1);
};
const actionBackspace = (ar) => {
  const area = ar;
  const index = area.selectionStart;
  area.value = area.value.substring(0, area.selectionStart - 1)
  + area.value.substring(area.selectionEnd, area.value.length);
  area.setSelectionRange(index - 1, index - 1);
};
const actionDel = (ar) => {
  const area = ar;
  const index = area.selectionStart;
  area.value = area.value.substring(0, area.selectionStart)
  + area.value.substring(area.selectionEnd + 1, area.value.length);
  area.setSelectionRange(index, index);
};
const actionKey = (ar, key) => {
  const area = ar;
  const index = area.selectionEnd;
  area.value = area.value.substring(0, area.selectionStart) + key
  + area.value.substring(area.selectionEnd, area.value.length);
  area.setSelectionRange(index + 1, index + 1);
};
const actionTab = (ar) => {
  const area = ar;
  const index = area.selectionStart;
  area.value = `${area.value.substring(0, area.selectionStart)}  ${area.value.substring(area.selectionEnd, area.value.length)}`;
  area.setSelectionRange(index + 2, index + 2);
};

const inesertKey = (key) => {
  let text = key;
  if (!arrayNotInsert.includes(text)) {
    return text;
  } if (arrows.includes(text)) {
    const arrowsText = ['◄', '▼', '►', '▲'];
    text = arrowsText[arrows.indexOf(text)];
    return text;
  }
  return '';
};

const toggleHide = (array, str) => {
  array.forEach((el) => {
    if (!el.classList.contains(`${str}`)) {
      el.classList.add('hide');
    } else {
      el.classList.remove('hide');
    }
  });
};
const removeHide = (array) => {
  array.forEach((el) => {
    el.classList.remove('hide');
  });
};
const swithClasses = (array) => {
  if (capsLock.classList.contains('active') && !shiftLeft.classList.contains('active') && !shiftRight.classList.contains('active')) {
    toggleHide(array, 'caps');
  } else if ((shiftLeft.classList.contains('active') && !capsLock.classList.contains('active')) || (shiftRight.classList.contains('active') && !capsLock.classList.contains('active'))) {
    toggleHide(array, 'up');
  } else if ((shiftLeft.classList.contains('active') && capsLock.classList.contains('active')) || (shiftRight.classList.contains('active') && capsLock.classList.contains('active'))) {
    toggleHide(array, 'shift-caps');
  } else {
    toggleHide(array, 'low');
  }
};
const displayKeys = () => {
  keyboardKey.forEach((el) => {
    const rus = el.children[1];
    const eng = el.children[0];
    if (language === 'eng') {
      const arrayEng = Array.from(eng.children);
      removeHide(arrayEng);
      eng.classList.remove('hide');
      rus.classList.add('hide');
      swithClasses(arrayEng);
    } else {
      const arrayRus = Array.from(rus.children);
      removeHide(arrayRus);
      eng.classList.add('hide');
      rus.classList.remove('hide');
      swithClasses(arrayRus);
    }
  });
};
displayKeys();
// check нужен для сменя языка через кнопу шифт, без него язык меняется дважды
let check = false;
const chooseAction = (key) => {
  if (key === 'Enter') {
    actionEnter(textarea);
  } else if (key === 'Backspace') {
    actionBackspace(textarea);
  } else if (key === 'Delete' || key === 'Del') {
    actionDel(textarea);
  } else if (key === 'Tab') {
    actionTab(textarea);
  } else if (key === 'CapsLock') {
    displayKeys();
  } else if (key === 'Shift') {
    displayKeys();
    if (altLeft.classList.contains('active') && !check) {
      languageSwitch();
    }
  } else if (key === 'Alt') {
    if (shiftLeft.classList.contains('active')) {
      languageSwitch();
      displayKeys();
    }
  } else {
    actionKey(textarea, inesertKey(key));
  }
  check = false;
};

keyBoard.onmousedown = (e) => {
  if (document.activeElement === textarea) {
    e.preventDefault();
  }
};

document.addEventListener('keydown', (e) => {
  e.preventDefault();
  const activeKey = document.querySelector(`.${e.code}`);
  if (e.key === 'CapsLock') {
    activeKey.classList.toggle('active');
  } else {
    activeKey.classList.add('active');
  }
  chooseAction(e.key);
});
document.addEventListener('keyup', (e) => {
  const activeKey = document.querySelector(`.${e.code}`);
  if (e.key !== 'CapsLock' && e.key !== 'Shift') {
    activeKey.classList.remove('active');
  } else if (e.key === 'Shift') {
    activeKey.classList.remove('active');
    check = true;
    chooseAction('Shift');
  }
});

const keys = document.querySelectorAll('.keyboard__key');
capsLock.addEventListener('click', () => {
  capsLock.classList.toggle('active');
});
shiftLeft.addEventListener('mousedown', () => {
  shiftLeft.classList.add('active');
  chooseAction('Shift');
});
shiftLeft.addEventListener('mouseup', () => {
  shiftLeft.classList.remove('active');
});
shiftRight.addEventListener('mousedown', () => {
  shiftRight.classList.add('active');
  chooseAction('Shift');
});
shiftRight.addEventListener('mouseup', () => {
  shiftRight.classList.remove('active');
});
keys.forEach((el) => {
  el.addEventListener('mousedown', () => {
    if (!el.classList.contains('CapsLock') && !el.classList.contains('ShiftLeft') && !el.classList.contains('ShiftRight')) {
      el.classList.add('active');
    }
  });
  el.addEventListener('click', (e) => {
    const key = showCurrentKey(e.currentTarget);
    check = true;
    chooseAction(key);
  });
  el.addEventListener('mouseup', () => {
    if (!el.classList.contains('CapsLock') && !el.classList.contains('ShiftLeft') && !el.classList.contains('ShiftRight')) {
      el.classList.remove('active');
    }
  });
});

const setLocalStorage = () => {
  localStorage.setItem('language', language);
};
const getLocalStorage = () => {
  language = localStorage.getItem('language');
  displayKeys();
};
window.addEventListener('beforeunload', setLocalStorage);
window.addEventListener('load', getLocalStorage);
