import { getUser } from "../scripts/service/user.js"
import { getRepositories } from "../scripts/service/repositories.js"
import { getEvents } from "../scripts/service/events.js"

import { user } from "./objects/user.js"
import { screen } from "./objects/screen.js"

document.getElementById('btn-search').addEventListener('click', () => {
    const userName = document.getElementById('input-search').value
     if(validateInput(userName)) return
    getUserData(userName)
})

function validateInput(userName) {
    if (userName.length === 0) {
        alert('Preencha o campo com o nome do usuário do GitHub')
        return true
    }
}

document.getElementById('input-search').addEventListener('keyup', (e) => {
    const userName = e.target.value
    const key = e.which || e.keyCode
    const isEnterKeyPressed = key === 13

    if (isEnterKeyPressed) {
        validateInput(userName)
        return
        getUserData(userName)
    }
}
)


async function getUserData(userName) {

    const userReponse = await getUser(userName)

    if(userReponse.message === "Not Found"){
        screen.renderNotFound()
        return
    }

    const repositoriesResponse = await getRepositories(userName)
    const eventsResponse = await getEvents(userName)


    user.setInfo(userReponse)
    user.setRepositories(repositoriesResponse)
    user.setEvents(eventsResponse)

    screen.renderUser(user)
}



