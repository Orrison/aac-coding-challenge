const requestUsers = (gender) => {
  const ajax = new XMLHttpRequest(); // eslint-disable-line no-undef
  const url = `https://randomuser.me/api/?results=9&gender=${gender}&inc=name,email,picture`;

  ajax.onload = () => {
    if (ajax.status === 200) {
      const response = JSON.parse(ajax.response);

      let chunked = chunkArray(response.results, 3); // eslint-disable-line

      let usersContent = '';
      chunked.forEach((chunk) => {
        let row = '<div class="columns">';
        chunk.forEach((person) => {
          row += `
            <div class="column is-one-third">
                <div class='card'>
                    <div class="card-content">
                        <div class="media">
                            <div class="media-left">
                                <figure class="image is-48x48">
                                    <img src="${person.picture.thumbnail}" alt="User Image">
                                </figure>
                            </div>
                            <div class="media-content">
                                <p class="title is-4">${person.name.first} ${person.name.last}</p>
                                <p class="subtitle is-6">${person.email}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          `;
        });
        row += '</div>';
        usersContent += row;
      });
      document.getElementById('users').innerHTML = usersContent; // eslint-disable-line
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
