

let user = {
    name: 'Luan',
    age: 21,
    mail: 'Luan@gmal.com',
    city: 'Porto-Alegre',
    Blogpost: [
        { title: 'Impadão de Frango', likes: 30},
        { title: '4 receitas de pure de batata', likes: 53}
    ],
    login () {
        console.log('user logged')
    },
    logout () {
        console.log('User not logged')
    },
    logBlogPost (){
        console.log(`${this.name} escreveu esses posts`)

        this.Blogpost.forEach(post => {
            console.log(post.title, post.likes)
        })
    }
}

user.logBlogPost()