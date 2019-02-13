const generateUsers = (event) => {
  if (event.target.id === 'maleBtn') {
    //
  } else if (event.target.id === 'femaleBtn') {
    //
  }
};

const buttons = document.getElementsByClassName('button');

for (let i = 0; i < buttons.length; i += 1) {
  buttons[i].addEventListener('click', generateUsers);
}
