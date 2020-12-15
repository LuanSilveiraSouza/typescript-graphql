import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import { ApolloServer, SchemaDirectiveVisitor } from 'apollo-server';

import GameResolver from './graphql/category/GameResolver';
import './utils/connection';

async function bootstrap() {
	const schema = await buildSchema({ resolvers: [GameResolver] });

	const server = new ApolloServer({ schema });

	server.listen({ port: 3030 }, () => console.log('Listening'));
}

bootstrap();
