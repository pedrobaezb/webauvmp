import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'

const typeDefs = `#graphql
  type Query {
    holamundo(nombre: String): String
  }
`

const resolvers = {
    Query: {
        holamundo: (_:any, args:any, __:any, ___:any)=>"Hola mundo"+(args.nombre?` a ${args.nombre}`:"")
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers,
})
  

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
})
  
console.log(`🚀  Servidor preparado en: ${url}`)
