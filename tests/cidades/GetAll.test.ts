import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";

describe('Cidade - GetAll', () => {

    it('Buscar Todos os Registros', async () => {

        const res1 = await testServer.post('/cidades')
        .send({
            nome: "Sao Paulo",
        });
        expect(res1.statusCode).toEqual(StatusCodes.CREATED);

        const resBuscada = await testServer.get('/cidades')
        .send({});
        expect(resBuscada.statusCode).toEqual(StatusCodes.OK);
        expect(Number(resBuscada.header['x-total-count'])).toBeGreaterThan(0);
        expect(resBuscada.body.length).toBeGreaterThan(0);
    });

});