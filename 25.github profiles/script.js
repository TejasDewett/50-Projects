const APIURL = 'https://api.github.com/users/'
const form = document.getElementById('form')
const search = document.getElementById('search')
const main = document.getElementById('main')


async function getUser (username) {
    try {
        const { data } = await axios(APIURL + username)
        
        createUserCard(data);
        getRepos(username)
    } catch(error) {
        createErrorCard(error);
    }
}

async function getRepos (username) {
    try{
        const { data } = await axios(APIURL + username + '/repos')
    
        addRepoToCard(data)
    } catch(error) {
            createErrorCard('Problem fetching repos');
    }
}

function createUserCard(user) {

    const { avatar_url, name, bio, followers, following, public_repos } = user

    const cardHTML = `<div class="card">
    <div>
        <img src="${avatar_url}" alt="" class="avatar">
    </div>
    <div class="user-info">
        <h2>${name}</h2>
        <p>${bio}</p>

        <ul>
            <li>${followers } <strong>Followers</strong></li>
            <li>${following } <strong>Following</strong></li>
            <li>${public_repos } <strong>Repos</strong></li>
        </ul>

        <div id="repos"></div>
    </div>
</div>`

    main.innerHTML = cardHTML

}

function addRepoToCard(repos) {

        const reposEl = document.getElementById('repos')

        repos
        .slice(0, 10)
        .forEach(repo => {
            const repoEl = document.createElement('a')
            repoEl.classList.add('repos')
            repoEl.href = repo.html_url
            repoEl.target = '_blank'
            repoEl.innerText = repo.name

            reposEl.appendChild(repoEl)
            });

}

function createErrorCard() {
        const cardHTML = ` <div class="card">
        <div class="user-info">
            <h3>No user found with that name.<h3>
        </div>
    </div>`

    main.innerHTML = cardHTML
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const user = search.value

    if(user) {
        getUser(user)

        search.value = ''
    }
})