const user = {
    avatarUrl:'',
    name:'',
    bio:'',
    followers:'',
    following:'',
    userName:'',
    repositories:[],
    events:[],
    setInfo(gitHubUser){
        this.avatarUrl = gitHubUser.avatar_url
        this.name = gitHubUser.name
        this.bio = gitHubUser.bio
        this.following = gitHubUser.following
        this.followers= gitHubUser.followers
        this.userName = gitHubUser.login
    },
    setRepositories(repositories){
        this.repositories = repositories
    },

    setEvents(events){
        this.events = events
    }
}

export{ user }