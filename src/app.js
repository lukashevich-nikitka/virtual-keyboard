const keyBoardArea = document.createElement('div');
keyBoardArea.className = 'keyboard-container';
document.body.append(keyBoardArea);

const textArea = document.createElement('textarea');
textArea.className = 'text-area';
keyBoardArea.appendChild(textArea);

const keyboardWrapper = document.createElement('div');
keyboardWrapper.className = 'keyboard-wrapper';
keyBoardArea.appendChild(keyboardWrapper);

const row1 = document.createElement('div');

const row2 = document.createElement('div');

const row3 = document.createElement('div');

const row4 = document.createElement('div');

const row5 = document.createElement('div');

const rows = [row1, row2, row3, row4, row5];

for (let i = 0; i < rows.length; i += 1) {
  rows[i].className = 'row';
  keyboardWrapper.appendChild(rows[i]);
}

// first row keys

const backTick = document.createElement('div');

const key1 = document.createElement('div');

const key2 = document.createElement('div');

const key3 = document.createElement('div');

const key4 = document.createElement('div');

const key5 = document.createElement('div');

const key6 = document.createElement('div');

const key7 = document.createElement('div');

const key8 = document.createElement('div');

const key9 = document.createElement('div');

const key0 = document.createElement('div');

const minusKey = document.createElement('div');

const plusKey = document.createElement('div');

const backSpace = document.createElement('div');
// -----------------------------------

const mainFirstRowKeys = [backTick, minusKey, plusKey, backSpace];

const numberKeys = [key1, key2, key3, key4, key5, key6, key7, key8, key9, key0];

const firstRowKeys = [...mainFirstRowKeys, ...numberKeys];

const mainFirstRowKeysNames = ['`', '-', '=', 'BackSpace'];

const numberKeysNames = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

const firstRowKeysNames = [...mainFirstRowKeysNames, ...numberKeysNames];

for (let i = 0; i < firstRowKeys.length; i += 1) {
  firstRowKeys[i].className = 'keys';
  row1.appendChild(firstRowKeys[i]);
  firstRowKeys[i].innerText = firstRowKeysNames[i];
  mainFirstRowKeys[3].classList.add('backspace');
  mainFirstRowKeys[1].classList.add('minus');
  mainFirstRowKeys[2].classList.add('plus');
}
// -----------------------------------

// second row keys

const tab = document.createElement('div');

const keyQ = document.createElement('div');

const keyW = document.createElement('div');

const keyE = document.createElement('div');

const keyR = document.createElement('div');

const keyT = document.createElement('div');

const keyY = document.createElement('div');

const keyU = document.createElement('div');

const keyI = document.createElement('div');

const keyO = document.createElement('div');

const keyP = document.createElement('div');

const squareBracketOpenKey = document.createElement('div');

const squareBracketCloseKey = document.createElement('div');

const slashOpenKey = document.createElement('div');

const del = document.createElement('div');

const firstRowLetterKeys = [keyQ, keyW, keyE, keyR, keyT, keyY, keyU, keyI, keyO, keyP];

const mainSecondRowKeys = [tab, squareBracketOpenKey, squareBracketCloseKey, slashOpenKey, del];

const secondRowKeys = [...mainSecondRowKeys, ...firstRowLetterKeys];

const mainSecondRowKeysNames = ['Tab', '[', ']', '\\', 'Del'];

const firstRowKLettersNames = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];

const secondRowKeysNames = [...mainSecondRowKeysNames, ...firstRowKLettersNames];

for (let i = 0; i < secondRowKeys.length; i += 1) {
  secondRowKeys[i].className = 'keys';
  row2.appendChild(secondRowKeys[i]);
  secondRowKeys[i].innerText = secondRowKeysNames[i];
  mainSecondRowKeys[0].classList.add('tab');
  mainSecondRowKeys[4].classList.add('del');
  mainSecondRowKeys[3].classList.add('open-slash');
  mainSecondRowKeys[2].classList.add('close-bracket');
  mainSecondRowKeys[1].classList.add('open-bracket');
}
// -------------------------------

const capsLock = document.createElement('div');

const keyA = document.createElement('div');

const keyS = document.createElement('div');

const keyD = document.createElement('div');

const keyF = document.createElement('div');

const keyG = document.createElement('div');

const keyH = document.createElement('div');

const keyJ = document.createElement('div');

const keyK = document.createElement('div');

const keyL = document.createElement('div');

const semicolon = document.createElement('div');

const tick = document.createElement('div');

const enter = document.createElement('div');

const secondRowLetterKeys = [keyA, keyS, keyD, keyF, keyG, keyH, keyJ, keyK, keyL];

const mainThirdRowKeys = [capsLock, semicolon, tick, enter];

const thirdRowKeys = [...mainThirdRowKeys, ...secondRowLetterKeys];

const mainThirdRowKeysNames = ['CapsLock', ';', '\'', 'Enter'];

const secondRowLettersNames = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];

const thirdRowKeysNames = [...mainThirdRowKeysNames, ...secondRowLettersNames];

for (let i = 0; i < thirdRowKeys.length; i += 1) {
  thirdRowKeys[i].className = 'keys';
  row3.appendChild(thirdRowKeys[i]);
  thirdRowKeys[i].innerText = thirdRowKeysNames[i];
  mainThirdRowKeys[3].classList.add('enter');
  mainThirdRowKeys[0].classList.add('capslock');
  mainThirdRowKeys[1].classList.add('semicolon');
  mainThirdRowKeys[2].classList.add('tick');
}
// -------------------------------

const shift = document.createElement('div');

const slashOpenKey2 = document.createElement('div');

const keyZ = document.createElement('div');

const keyX = document.createElement('div');

const keyC = document.createElement('div');

const keyV = document.createElement('div');

const keyB = document.createElement('div');

const keyN = document.createElement('div');

const keyM = document.createElement('div');

const point = document.createElement('div');

const comma = document.createElement('div');

const slashCloseKey = document.createElement('div');

const arrowTop = document.createElement('div');

const shift2 = document.createElement('div');

const thirdRowLetterKeys = [keyZ, keyX, keyC, keyV, keyB, keyN, keyM];

const mainFourthRowKeys = [shift, slashOpenKey2, point, comma, slashCloseKey, arrowTop, shift2];

const fourthRowKeys = [...thirdRowLetterKeys, ...mainFourthRowKeys];

const mainFourthRowKeysNames = ['Shift', '\\', '.', ',', '/', '↑', 'Shift'];

const thirdRowLettersNames = ['Z', 'X', 'C', 'V', 'B', 'N', 'M'];

const fourthRowKeysNames = [...thirdRowLettersNames, ...mainFourthRowKeysNames];

for (let i = 0; i < fourthRowKeys.length; i += 1) {
  fourthRowKeys[i].className = 'keys';
  row4.appendChild(fourthRowKeys[i]);
  fourthRowKeys[i].innerText = fourthRowKeysNames[i];
  mainFourthRowKeys[0].classList.add('left-shift');
  mainFourthRowKeys[1].classList.add('open-slash-two');
}
// -------------------------------

// fiveth row ------------------------

const ctrl = document.createElement('div');

const win = document.createElement('div');

const alt = document.createElement('div');

const space = document.createElement('div');

const alt2 = document.createElement('div');

const ctrl2 = document.createElement('div');

const arrowLeft = document.createElement('div');

const arrowBottom = document.createElement('div');

const arrowRight = document.createElement('div');

const fivethRowKeys = [ctrl, win, alt, space, alt2, ctrl2, arrowLeft, arrowBottom, arrowRight];

const fivethRowKeysNames = ['Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Ctrl', '←', '↓', '→'];

for (let i = 0; i < fivethRowKeys.length; i += 1) {
  fivethRowKeys[i].className = 'keys';
  row5.appendChild(fivethRowKeys[i]);
  fivethRowKeys[i].innerText = fivethRowKeysNames[i];
  fivethRowKeys[0].classList.add('left-ctrl');
  fivethRowKeys[5].classList.add('right-ctrl');
  fivethRowKeys[3].classList.add('space');
}

const allKeys = [...firstRowKeys, ...secondRowKeys,
  ...thirdRowKeys, ...fourthRowKeys, ...fivethRowKeys];

function pushKey(event) {
  if (event.target.classList.contains('keys') || event.target.classList.contains('keys')) {
    event.target.classList.add('active-key');
  }
}

function offKey(event) {
  if (event.target.classList.contains('keys')) {
    event.target.classList.remove('active-key');
  }
}

function pushBoardKey(e) {
  for (let i = 0; i < allKeys.length; i += 1) {
    if (e.key === allKeys[i].innerText
      || (e.key).toLowerCase() === allKeys[i].innerText.toLowerCase()) {
      allKeys[i].classList.add('active-key');
    } else if (e.key === 'ArrowDown') {
      arrowBottom.classList.add('active-key');
    } else if (e.key === 'ArrowLeft') {
      arrowLeft.classList.add('active-key');
    } else if (e.key === 'ArrowRight') {
      arrowRight.classList.add('active-key');
    } else if (e.key === 'ArrowUp') {
      arrowTop.classList.add('active-key');
    } else if (e.code === 'ControlLeft') {
      ctrl.classList.add('active-key');
    } else if (e.code === 'ControlRight') {
      ctrl2.classList.add('active-key');
    } else if (e.code === 'Delete') {
      del.classList.add('active-key');
    } else if (e.code === 'Space') {
      space.classList.add('active-key');
    } else if (e.code === 'MetaLeft') {
      win.classList.add('active-key');
    }
  }
}

function offBoardKey(e) {
  for (let i = 0; i < allKeys.length; i += 1) {
    if (e.key === allKeys[i].innerText
      || (e.key).toLowerCase() === allKeys[i].innerText.toLowerCase()) {
      allKeys[i].classList.remove('active-key');
    } else if (e.key === 'ArrowDown') {
      arrowBottom.classList.remove('active-key');
    } else if (e.key === 'ArrowLeft') {
      arrowLeft.classList.remove('active-key');
    } else if (e.key === 'ArrowRight') {
      arrowRight.classList.remove('active-key');
    } else if (e.key === 'ArrowUp') {
      arrowTop.classList.remove('active-key');
    } else if (e.code === 'ControlLeft') {
      ctrl.classList.remove('active-key');
    } else if (e.code === 'ControlRight') {
      ctrl2.classList.remove('active-key');
    } else if (e.code === 'Delete') {
      del.classList.remove('active-key');
    } else if (e.code === 'Space') {
      space.classList.remove('active-key');
    } else if (e.code === 'MetaLeft') {
      win.classList.remove('active-key');
    }
  }
}

window.addEventListener('keydown', pushBoardKey);

window.addEventListener('keyup', offBoardKey);

allKeys.forEach((el) => el.addEventListener('mouseup', offKey));

allKeys.forEach((el) => el.addEventListener('mousedown', pushKey));
// ------------------------------------

const textAreaArray = [];

let position = 0;

function cursorPrinter(e) {
  if (e.target.classList.contains('keys') && e.target.innerText !== 'BackSpace' && e.target.innerText !== 'Del') {
    textAreaArray.push(e.target.innerText);
    textArea.textContent = textAreaArray.join('');
    position += 1;
  } else if (e.target.textContent === 'BackSpace') {
    position = textArea.selectionStart - 1;
    textAreaArray.splice(textArea.selectionStart - 1, 1);
    textArea.textContent = textAreaArray.join('');
  } else if (e.target.textContent === 'Del') {
    position = textArea.selectionStart;
    textAreaArray.splice(textArea.selectionStart, 1);
    textArea.textContent = textAreaArray.join('');
  }
}

allKeys.forEach((el) => el.addEventListener('mousedown', cursorPrinter));

allKeys.forEach((el) => el.addEventListener('mouseup', () => {
  textArea.focus();
  textArea.selectionStart = position;
}));
