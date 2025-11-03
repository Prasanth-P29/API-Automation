import { faker } from "@faker-js/faker";

export function createRandomUser() {
  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    age: faker.number.int({ min: 18, max: 50 }),
    email: faker.internet.email(),
  };
}
