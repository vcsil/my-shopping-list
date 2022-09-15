

import supertest from "supertest";
import app from "../src/app";
import { prisma } from "../src/database";
import { criaItem } from "./factories/userFactory"

describe('Testa POST /items ', () => {
  it('Deve retornar 201, se cadastrado um item no formato correto', async () => {
    const item = await criaItem();

    const result = await supertest(app).post("/items").send(item);

    expect(result.status).toEqual(201)
  });

  it('Deve retornar 409, ao tentar cadastrar um item que exista', async () => {
    const item = await criaItem(); 

    await prisma.items.create({
      data: item
    });

    const result = await supertest(app).post("/items").send(item);

    expect(result.status).toEqual(409)
  });
});

describe('Testa GET /items ', () => {
  it.todo('Deve retornar status 200 e o body no formato de Array');
});

describe('Testa GET /items/:id ', () => {
  it.todo('Deve retornar status 200 e um objeto igual a o item cadastrado');
  it.todo('Deve retornar status 404 caso não exista um item com esse id');
});
 