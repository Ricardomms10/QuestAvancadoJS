const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        this.userProfile.innerHTML = `<div class="info">
                                <img src="${user.avatarUrl}" alt="foto do perfil" />
                        <div class="data">
                                <h1>${user.name ?? 'íh rapaz! não tem nome :('}</h1>
                                <p>${user.userName} </p>
                                <p>${user.bio ?? 'Íh rapaz! Não tem bio :('} </p>
                        </div>
                        <div class="followersGit">
                                <h1><i class="fa-solid fa-users"></i> Seguidores ${user.followers} | <i class="fa-solid fa-user"></i> Seguindo ${user.following}</h1> 
                        </div>
                        </div>`

        let respositoriesItens = ''
        user.repositories.forEach(repo => respositoriesItens += `<li><a href="${repo.html_url}" target="_blank">${repo.name}
                                                                       <ul>
                                                                           <li><i class="fa-sharp fa-solid fa-code-fork"></i>${repo.forks}</li>
                                                                           <li><i <i class="fa-solid fa-star"></i>${repo.stargazers_count}</li>
                                                                           <li><i class="fa-sharp fa-solid fa-eye"></i></i>${repo.watchers}</li>
                                                                           <li><i class="fa-solid fa-code"></i>${repo.language ?? 'XXX'}</li>
                                                                         </ul>
                                                                     </a>
                                                                  </li>`)
        if (user.repositories.length > 0) {
            this.userProfile.innerHTML += `<div class="repositories section">
                                              <h2>Repositórios</h2>
                                              <ul>${respositoriesItens}</ul>
                                            </div>`
        }

        let eventsItens = ''
        user.events.forEach(event => eventsItens += `<ul>
                                                      <li><p>${event.repo.name} </p>  <small>- ${event.type} </small></li>
                                                    </ul> `)
        if (user.events.length > 0) {
            this.userProfile.innerHTML += `<div class = events>
                                            <h2>Eventos<h2/>
                                           <div class = box >  ${eventsItens}</div> `
        }

    },
    renderNotFound() {
        this.userProfile.innerHTML = "<h3> Usuário não encontrado</h3> "
    }
}

export { screen }