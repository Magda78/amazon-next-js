import Product from './Product';

function ProductFeed({ products }) {
	return (
		<div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto">
			{products
				.slice(0, 4)
				.map(({ id, title, price, category, description, image,rating }) => (
					<Product
						key={id}
						title={title}
						price={price}
						category={category}
						description={description}
						image={image}
						rating={rating}
					/>
				))}
			<img className="md:col-span-full" src="https://links.papareact.com/dyz" />
			<div className="md:col-span-2">
				{products
					.slice(4, 5)
					.map(({ id, title, price, category, description, image,rating}) => (
						<Product
							key={id}
							title={title}
							price={price}
							category={category}
							description={description}
							image={image}
							rating={rating}
						/>
					))}
			</div>
			{products
				.slice(5, products.length)
				.map(({ id, title, price, category, description, image, rating }) => (
					<Product
						key={id}
						title={title}
						price={price}
						category={category}
						description={description}
						image={image}
						rating={rating}
					/>
				))}
		</div>
	);
}

export default ProductFeed;
