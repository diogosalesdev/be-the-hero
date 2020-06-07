const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
  //Lista as ongs cadastradas 
  async index(req, res) {
    const ongs = await connection('ongs').select('*');

    return res.json(ongs);
  },
  //Cadastra ongs
  async create(req, res) {
    const { name, email, zap, city, uf } = req.body;

    const id = crypto.randomBytes(4).toString('HEX');

    await connection('ongs').insert({
      id,
      name,
      email,
      zap,
      city,
      uf,
    })

    return res.json({ id });
  }
}