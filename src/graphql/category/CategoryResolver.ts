import { Query, Resolver } from 'type-graphql';
import Category from './Category';
import CategorySchema from '../../model/CategorySchema';

@Resolver(Category)
class CategoryResolver {
	@Query(() => [Category])
	async categories() {
		const categories = await CategorySchema.find();

		return categories;
	}
}

export default CategoryResolver;
