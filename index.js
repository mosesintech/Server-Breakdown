const graphql = require('graphql');

require('express')()
    .use('/', require('express-graphql').graphqlHTTP({
        schema: new graphql.GraphQLSchema({
                query: new graphql.GraphQLObjectType({
                    name: 'rootQuery',
                    fields: {
                        getUsers:
                            {
                                type: new graphql.GraphQLList(
                                    new graphql.GraphQLObjectType({
                                        name: 'UserType',
                                        fields: () => ({
                                            id: { type: graphql.GraphQLID },
                                            name: { type: graphql.GraphQLString },
                                            email: { type: graphql.GraphQLString },
                                            avatar: { type: graphql.GraphQLString },
                                            catchphrase: { type: graphql.GraphQLString },
                                        })
                                    })
                                ),
                                args: {
                                    id: { type: graphql.GraphQLID },
                                    name: { type: graphql.GraphQLString },
                                    email: { type: graphql.GraphQLString },
                                },
                                resolve(parents, args){
                                    return require('./dbConfig.js')('users').where(args);
                                }
                            },
                    }
                }),
            }),
        graphiql: true,
        }))
    .listen(3333, () => {
        console.log('API running on port 3333');
    });


