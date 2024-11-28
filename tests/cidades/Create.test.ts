import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";

describe('Create Cidade', () => {

    it('Criar Registro', async () => {
        const res1 = await testServer.post('/cidades')
        .send({
            nome: 'São Paulo'
        });

        expect(res1.statusCode).toEqual(StatusCodes.CREATED);
        expect(typeof res1.body).toEqual('number');
    });

    it('Tentar criar registro com nome muito curto', async () => {
        const res1 = await testServer.post('/cidades')
        .send({
            nome: "Sa",
        });

        expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
        expect(res1.body).toHaveProperty('errors.body.nome');
    });
});