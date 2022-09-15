import { faker } from "@faker-js/faker";

export async function criaItem() {
    const user =  {
        title: faker.commerce.product(),
        url: faker.internet.avatar(),
        description: faker.lorem.sentence(5),
        amount: faker.datatype.number({ min: 0 }),
    };

    return user;
}
