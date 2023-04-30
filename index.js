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
  console.log('test');
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

const language = 'eng';
const keyboardKey = document.querySelectorAll('.keyboard__key');
const displayKeys = () => {
  if (language === 'eng') {
    keyboardKey.forEach((el) => {
      el.children[1].classList.add('hide');
      el.children[0].children[1].classList.add('hide');
      el.children[0].children[2].classList.add('hide');
      el.children[0].children[3].classList.add('hide');
      el.children[1].children[0].classList.add('hide');
      el.children[1].children[1].classList.add('hide');
      el.children[1].children[2].classList.add('hide');
      el.children[1].children[3].classList.add('hide');
    });
  } else {
    keyboardKey.forEach((el) => {
      el.children[0].classList.add('hide');
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
displayKeys();

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
  area.setSelectionRange(index+1, index+1);
};
const actionTab = (ar) => {
  const area = ar;
  const index = area.selectionStart;
  area.value = `${area.value.substring(0, area.selectionStart)}  ${area.value.substring(area.selectionEnd, area.value.length)}`;
  area.setSelectionRange(index + 2, index + 2);
};

const inesertKey = (key) => {
  console.log(1);
  let text = key;
  if (!arrayNotInsert.includes(text)) {
    return text;
  }else if (arrows.includes(text)) {
    const arrowsText = ['◄', '▼', '►', '▲'];
    text = arrowsText[arrows.indexOf(text)];
    return text;
  }
  return '';
};

const chooseAction = (key) => {
  if (key === 'Enter') {
    actionEnter(textarea);
  } else if (key === 'Backspace') {
    actionBackspace(textarea);
  } else if (key === 'Delete' || key === 'Del') {
    actionDel(textarea);
  } else if (key === 'Tab') {
    actionTab(textarea);
  } else {
    actionKey(textarea, inesertKey(key));
  }
}

keyBoard.onmousedown = function(e) {
  if (document.activeElement === textarea) {
    e.preventDefault();
  }
};

document.addEventListener('click', (e) => {
})
document.addEventListener('keydown', (e) => {
  e.preventDefault();
  const activeKey = document.querySelector(`.${e.code}`);
  activeKey.classList.add('active');
  chooseAction(e.key)
});
document.addEventListener('keyup', (e) => {
  const activeKey = document.querySelector(`.${e.code}`);
  activeKey.classList.remove('active');
});

const keys = document.querySelectorAll('.keyboard__key');
keys.forEach((el) => {
  el.addEventListener('click', (e) => {
    const key = showCurrentKey(e.currentTarget)
    chooseAction(key)
  })
})

const capsLock = document.querySelector('.CapsLock')
const shiftLeft = document.querySelector('.ShiftLeft')
const shiftRight = document.querySelector('.ShiftRight')

capsLock.addEventListener('keydown', (e) => {
  console.log(1)
})