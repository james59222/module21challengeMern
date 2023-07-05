const {gql} = require('apollo-server-express');


const typedefs = gql`
type User {
    _id:ID
    username:String
    email:String
    bookCount:Int
    savedBooks:[Book]
}

type Book {
    bookId:ID
    description:String
    title:String
    image:String
    link:String
    authors:[String]


}
type Auth {
    token:ID
    user:User

}


type Query {
    me:User

}
type Mutation {
    addUser(username:String,email:String,password:String):Auth
    login(email:String,password:String):Auth
    saveBook():User
    removeBook():User
}
`

