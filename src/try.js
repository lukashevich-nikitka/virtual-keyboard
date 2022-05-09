// function languageInstall(index = 0) {
//   if (index === 0) {
//     for (let i = 0; i < firstRowKeys.length; i += 1) {
//       firstRowKeys[i].innerText = firstRowKeysNames[i];
//       mainFirstRowKeys[3].classList.add('backspace');
//       mainFirstRowKeys[1].classList.add('minus');
//       mainFirstRowKeys[2].classList.add('plus');
//     }
//     for (let i = 0; i < secondRowKeys.length; i += 1) {
//       secondRowKeys[i].innerText = secondRowKeysNames[i];
//       mainSecondRowKeys[0].classList.add('tab');
//       mainSecondRowKeys[4].classList.add('del');
//       mainSecondRowKeys[3].classList.add('open-slash');
//       mainSecondRowKeys[2].classList.add('close-bracket');
//       mainSecondRowKeys[1].classList.add('open-bracket');
//     }
//     for (let i = 0; i < thirdRowKeys.length; i += 1) {
//       thirdRowKeys[i].innerText = thirdRowKeysNames[i];
//       mainThirdRowKeys[3].classList.add('enter');
//       mainThirdRowKeys[0].classList.add('capslock');
//       mainThirdRowKeys[1].classList.add('semicolon');
//       mainThirdRowKeys[2].classList.add('tick');
//     }
//     for (let i = 0; i < fourthRowKeys.length; i += 1) {
//       fourthRowKeys[i].innerText = fourthRowKeysNames[i];
//       mainFourthRowKeys[0].classList.add('left-shift');
//       mainFourthRowKeys[mainFourthRowKeys.length - 1].classList.add('right-shift');
//       mainFourthRowKeys[1].classList.add('open-slash-two');
//     }
//     for (let i = 0; i < fivethRowKeys.length; i += 1) {
//       fivethRowKeys[i].className = 'keys';
//       row5.appendChild(fivethRowKeys[i]);
//       fivethRowKeys[i].innerText = fivethRowKeysNames[i];
//       fivethRowKeys[0].classList.add('left-ctrl');
//       fivethRowKeys[5].classList.add('right-ctrl');
//       fivethRowKeys[3].classList.add('space');
//     }
//   } else {
//     for (let i = 0; i < secondRowKeys.length; i += 1) {
//       secondRowKeys[i + 5].innerText = firstRowRussianLettersNames[i];
//       secondRowKeys[1].innerText = 'X';
//       secondRowKeys[2].innerText = 'Ъ';
//       thirdRowKeys[i + 4].innerText = secondRowRussianLettersNames[i];
//       thirdRowKeys[1].innerText = 'Ж';
//       thirdRowKeys[2].innerText = 'Э';
//       fourthRowKeys[i].innerText = thirdRowRussianLettersNames[i];
//       fourthRowKeys[7].innerText = 'Shift';
//       fourthRowKeys[8].innerText = 'Я';
//     }
//   }
// }
