const API_URL = 'https://api.github.com/users/';
const form = document.getElementById('form')
const search = document.getElementById('search')
const main = document.getElementById('main')

async function getUsers(username) {
  try {
    let { data } = await axios(API_URL + username)

    createCard(data)
    getRepos(username)
  } catch (error) {
    createErrorCard()
  }
}

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const user = search.value;
  if (user) {
    getUsers(user)
    search.value = ''
  }
})

function createCard(user) {
  const cardHTML = `
  <div class="card">
      <div>
        <img src=${user.avatar_url} width="150" height="150" alt="image" />
      </div>
      <div class="user-details">
        <h2>${user.name}</h2>
        <p>${user.bio}</p>
        <div class="follwers">
          <div>${user.followers}&nbsp<strong>followers</strong></div>
          <div>${user.following}&nbsp<strong>following</strong></div>
          <div>${user.public_repos}&nbsp<strong>repos</strong></div>
        </div>
        <div id="repos">
        </div>
      </div>
    </div>
`

  main.innerHTML = cardHTML
}

function createErrorCard() {
  const errorCARD = `
<div class="error">No records found for the username</div>
`
  main.innerHTML = errorCARD
}

function createRepos(repos) {
  const rep = document.getElementById('repos')

  repos.slice(0, 5).forEach(repo => {
    const repoEL = document.createElement('a')
    repoEL.classList.add('repo')
    repoEL.href = repo.html_url
    repoEL.innerText = repo.name
    rep.appendChild(repoEL)
  })
}

async function getRepos(username) {
  try {
    let { data } = await axios(API_URL + username + '/repos')
    createRepos(data)
  } catch (error) {
    console.log('Not found')
  }
}