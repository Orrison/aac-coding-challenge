const requestUsers = (gender) => {
  const ajax = new XMLHttpRequest();

  ajax.onload = () => {
    if (ajax.status === 200) {
      console.log(JSON.parse(ajax.response));
    } else {
      console.log('The request failed!');
    }
  };


  ajax.open('GET', 'https://randomuser.me/api/');
  ajax.send();
};

const generateUsers = (event) => {
  if (event.target.id === 'maleBtn') {
    requestUsers('male');
  } else if (event.target.id === 'femaleBtn') {
    requestUsers('female');
  }
};

// Add Event Listeners
const buttons = document.getElementsByClassName('button');

for (let i = 0; i < buttons.length; i += 1) {
  buttons[i].addEventListener('click', generateUsers);
}