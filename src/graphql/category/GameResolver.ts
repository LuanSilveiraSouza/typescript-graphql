import { Arg, Field, InputType, Mutation, Query, Resolver } from 'type-graphql';
import Game from './Game';
import GameSchema from '../../model/GameSchema';

@InputType()
class GameInput {
	@Field()
    name: String;

    @Field()
    platform: String;
    
    @Field()
    year: Number;
}

@Resolver(Game)
class GameResolver {
	@Query(() => [Game])
	async games() {
		const games = await GameSchema.find();

		return games;
	}

	@Mutation(() => Game)
	async createGame(@Arg('GameInput') GameInput: GameInput) {
		const game = await GameSchema.create(GameInput);

		return game;
	}
}

export default GameResolver;
