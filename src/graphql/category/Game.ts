import { Field, ObjectType } from 'type-graphql';


@ObjectType()
class Game {
    @Field()
    _id: String;
    
    @Field()
    name: String;

    @Field()
    platform: String;
    
    @Field()
    year: Number;
}

export default Game;