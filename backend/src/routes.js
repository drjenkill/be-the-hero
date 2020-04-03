 const express = require('express');
 const { celebrate, Segments, Joi } = require('celebrate');

 const OngControler = require('./controlers/OngControler');
 const IncidentControler = require('./controlers/IncidentControler');
 const ProfileControler = require('./controlers/ProfileControler');
 const SessionControler = require('./controlers/SessionControler');

 const routes = express.Router();

 routes.post('/sessions', SessionControler.create);

 routes.get('/ongs', OngControler.index);
 routes.post('/ongs', celebrate({
   [Segments.BODY]: Joi.object().keys({
     name: Joi.string().required(),
     email: Joi.string().required().email(),
     whatsapp: Joi.number().required().min(10).max(11),
     city: Joi.string().required(),
     uf: Joi.string().required().length(2),
   })
  }), OngControler.create);

 routes.get('/profile', celebrate({
   [Segments.HEADERS]: Joi.object({
     authorization: Joi.string().required(),
   }).unknown(),
 }), ProfileControler.index);

 routes.get('/incidents', celebrate({
   [Segments.QUERY]: Joi.object().keys({
     page: Joi.number(),
   })
 }), IncidentControler.index);
 routes.post('/incidents', IncidentControler.create);

 routes.delete('/incidents/:id', celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().required(),
  })
 }), IncidentControler.delete);

module.exports = routes;
