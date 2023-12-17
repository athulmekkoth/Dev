export const typeDefs = `

type User {
    id        String   
  email     String   
  username  String   
  iadmin    Boolean  
  password  String

 refreshToken String

}

`


export const resolvers = {
  Query: {},
  Mutation:{},
}