import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";

describe('Cidade - GetById', () => {

    it('Atualizar Registro por id', async () => {

        const res1 = await testServer.post('/cidades')
        .send({
            nome: "Sao Paulo",
        });
        expect(res1.statusCode).toEqual(StatusCodes.CREATED);

        const resAtualizada = await testServer
        .put(`/cidades/${res1.body}`)
        .send({nome: "Rio de Janeiro"});
        
        expect(resAtualizada.statusCode).toEqual(StatusCodes.NO_CONTENT);
    });

    it('Tentar atualizar registro que não existe', async () => {
        
        const res1 = await testServer
        .put('/cidades/99999')
        .send({nome: "Sao Paulo"});

        expect(res1.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
        expect(res1.body).toHaveProperty('errors.default');
    });
});