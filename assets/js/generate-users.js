const requestUsers = (event) => {
  const gender = event.target.id;
  // Check if gender is properly set
  if (gender === 'male' || gender === 'female') {
    // Carry on
  } else {
    throw `Incorrect gender passed: ${gender}`;
  }

  const ajax = new XMLHttpRequest(); // eslint-disable-line
  // Prepare ajax url
  const url = `https://randomuser.me/api/?results=9&gender=${gender}&inc=name,email,picture`;

  ajax.onload = () => {
    if (ajax.status === 200) {
      const response = JSON.parse(ajax.response);
      // Throw error if error returned from randomuser.me
      if (response.hasOwnProperty('error')) { // eslint-disable-line
        throw `randomuser.me error: ${response.error}`;
      }

      // Chunk the returned users into groups of 3
      let chunked = chunkArray(response.results, 3); // eslint-disable-line

      let usersContent = '';

      // Prepare each user chunk onto it's own columned row
      chunked.forEach((chunk) => {
        let row = '<div class="columns">';
        chunk.forEach((person) => {
          const firstName = capFirstLetter(person.name.first); // eslint-disable-line
          const lastName = capFirstLetter(person.name.last); // eslint-disable-line

          // Build out the user card per user
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
                                <p class="title is-4">${firstName} ${lastName}</p>
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

      // Display the generated user list to the end user
      document.getElementById('users').innerHTML = usersContent; // eslint-disable-line
    } else {
      throw `The request failed! ${ajax.status} status returned`;
    }
  };

  ajax.open('GET', url);
  ajax.send();
};

// Add Event Listeners
const buttons = document.getElementsByClassName('button'); // eslint-disable-line

for (let i = 0; i < buttons.length; i += 1) {
  buttons[i].addEventListener('click', (event) => {
    try {
      requestUsers(event);
    } catch (e) {
      document.getElementById('users').innerHTML = 'Whoops! Something went wrong, check console for more details'; // eslint-disable-line
      console.log(e);
    }
  });
}
