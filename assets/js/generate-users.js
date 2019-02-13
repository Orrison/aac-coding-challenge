const requestUsers = (gender) => {
  const ajax = new XMLHttpRequest(); // eslint-disable-line no-undef
  const url = `https://randomuser.me/api/?results=9&gender=${gender}&inc=name,email,picture`;

  ajax.onload = () => {
    if (ajax.status === 200) {
      const response = JSON.parse(ajax.response);

      response.results.map((per) => { // eslint-disable-line array-callback-return
        const newCard = document.createElement('div'); // eslint-disable-line no-undef
        newCard.classList.add('column', 'is-one-third');
        newCard.innerHTML = `
            <div class='card'>
                <div class="card-content">
                    <div class="media">
                        <div class="media-left">
                            <figure class="image is-48x48">
                                <img src="${per.picture.thumbnail}" alt="User Image">
                            </figure>
                        </div>
                        <div class="media-content">
                            <p class="title is-4">${per.name.first} ${per.name.last}</p>
                            <p class="subtitle is-6">${per.email}</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
        document.getElementById('users').append(newCard); // eslint-disable-line no-undef
      });
    } else {
      console.log('The request failed!');
    }
  };


  ajax.open('GET', url);
  ajax.send();
};

const passUserGender = (event) => {
  if (event.target.id === 'maleBtn') {
    requestUsers('male');
  } else if (event.target.id === 'femaleBtn') {
    requestUsers('female');
  }
};

// Add Event Listeners
const buttons = document.getElementsByClassName('button'); // eslint-disable-line no-undef

for (let i = 0; i < buttons.length; i += 1) {
  buttons[i].addEventListener('click', passUserGender);
}
