import "reflect-metadata";
import'./config/env';
import { createConnection, getConnectionOptions } from "typeorm";
import express = require('express');
import helmet = require('helmet');
import logger = require("./config/logger");
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";

async function bootstrap() {

    const app = express();
    const port = process.env.PORT;
    const options = await getConnectionOptions( process.env.NODE_ENV );
    
    app.use( helmet() );

    await createConnection({ ...options, name: "default" });
    

    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [__dirname + "/../application/resolvers/*.js"],
            validate: true
          }),
        context: ({ req, res }) => ({ req, res })
    });

    apolloServer.applyMiddleware({ app, cors: false });
    app.listen(port, () => logger.info(`escuchando en puerto ${port}`) );

};

bootstrap();