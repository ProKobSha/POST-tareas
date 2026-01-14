const request = require('supertest');
const app = require('./app');

describe('POST /tareas', () => {
  // Caso feliz
  it('Debe crear una tarea correctamente', async () => {
    const res = await request(app)
      .post('/tareas')
      .send({ titulo: 'Comprar leche', descripcion: 'Ir al supermercado a comprar leche' });

    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('id');
    expect(res.body.titulo).toBe('Comprar leche');
  });

  // Caso de error
  it('Debe retornar error si faltan campos', async () => {
    const res = await request(app)
      .post('/tareas')
      .send({ titulo: 'Sin descripcion' }); // descripción faltante

    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty('error', 'Titulo y descripción son obligatorios');
  });
});
