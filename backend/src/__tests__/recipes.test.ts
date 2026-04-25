import request from 'supertest';
import app from '../index';

describe('GET /api/recipes', () => {
  it('returns a list of recipes', async () => {
    const res = await request(app).get('/api/recipes');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThan(0);
  });
});

describe('GET /api/recipes/:id', () => {
  it('returns a single recipe', async () => {
    const res = await request(app).get('/api/recipes/1');
    expect(res.status).toBe(200);
    expect(res.body.id).toBe(1);
    expect(res.body.title).toBe('Spaghetti Bolognese');
  });

  it('returns 404 for unknown recipe', async () => {
    const res = await request(app).get('/api/recipes/999');
    expect(res.status).toBe(404);
  });
});

describe('GET /health', () => {
  it('returns ok', async () => {
    const res = await request(app).get('/health');
    expect(res.status).toBe(200);
    expect(res.body.status).toBe('ok');
  });
});
