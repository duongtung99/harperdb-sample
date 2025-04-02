/** Here we can define any JavaScript-based resources and extensions to tables

export class MyCustomResource extends tables.TableName {
	// we can define our own custom POST handler
	post(content) {
		// do something with the incoming content;
		return super.post(content);
	}
	// or custom GET handler
	get() {
		// we can modify this resource before returning
		return super.get();
	}
}
 */
// we can also define a custom resource without a specific table
export class Greeting extends Resource {
	// a "Hello, world!" handler
	get() {
		return { greeting: 'Hello, world!' };
	}
}

// resources.js:
const { Dog,Breed } = tables; // get the Dog table from the Harper provided set of tables (in the default database)

export class DogWithHumanAge extends Dog {
	get(query) {
		this.humanAge = 15 + this.age * 5; // silly calculation of human age equivalent
		return super.get(query);
	}
}

export class DogWithBreed extends Dog {
	async get(query) {
		let breedDescription = await Breed.get(this.breed, this);
		this.breedDescription = breedDescription;
		return super.get(query);
	}
}