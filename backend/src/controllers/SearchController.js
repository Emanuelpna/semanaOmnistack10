const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
  async index(req, res) {
    console.log(req.query);

    const { latitude, longitude, techs } = req.query;

    console.log(techs);

    const techsArray = parseStringAsArray(techs);

    console.log(techsArray);

    const devs = await Dev.find({
      techs: {
        $in: techsArray
      },
      location: {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: [longitude, latitude]
          },
          $maxDistance: 10000
        }
      }
    });

    console.log('devs :', devs);

    return res.json({ devs });
  }
};
