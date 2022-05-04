const keyboardWrapper = document.createElement('div');
keyboardWrapper.className = 'keyboard-wrapper';
document.body.append(keyboardWrapper);

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

const mainFirstRowKeysNames = ['`', '-', '+', 'BackSpace'];

const numberKeysNames = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

const firstRowKeysNames = [...mainFirstRowKeysNames, ...numberKeysNames];

for (let i = 0; i < firstRowKeys.length; i += 1) {
  firstRowKeys[i].className = 'keys';
  row1.appendChild(firstRowKeys[i]);
  firstRowKeys[i].innerText = firstRowKeysNames[i];
  mainFirstRowKeys[3].className = 'backspace';
  mainFirstRowKeys[1].className = 'minus';
  mainFirstRowKeys[2].className = 'plus';
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

const mainSecondRowKeysNames = ['Tab', '[', ']', '\\', 'del'];

const firstRowKLettersNames = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];

const secondRowKeysNames = [...mainSecondRowKeysNames, ...firstRowKLettersNames];

for (let i = 0; i < secondRowKeys.length; i += 1) {
  secondRowKeys[i].className = 'keys';
  row2.appendChild(secondRowKeys[i]);
  secondRowKeys[i].innerText = secondRowKeysNames[i];
  mainSecondRowKeys[0].className = 'midle-size-keys';
  mainSecondRowKeys[4].className = 'del';
  mainSecondRowKeys[3].className = 'open-slash';
  mainSecondRowKeys[2].className = 'close-bracket';
  mainSecondRowKeys[1].className = 'open-bracket';
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
  mainThirdRowKeys[3].className = 'enter';
  mainThirdRowKeys[0].className = 'capslock';
  mainThirdRowKeys[1].className = 'semicolon';
  mainThirdRowKeys[2].className = 'tick';
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
  mainFourthRowKeys[0].className = 'left-shift';
  mainFourthRowKeys[1].className = 'open-slash-two';
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
  fivethRowKeys[0].className = 'midle-size-keys';
  fivethRowKeys[5].className = 'midle-size-keys';
  fivethRowKeys[3].className = 'space';
}
