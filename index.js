const { parse } = require('csv-parse');
const fs = require('fs');

const results = [];

const isHabitablePlanet = (planet) =>
  planet['koi_disposition'] === 'CONFIRMED' &&
  planet['koi_insol'] > 0.36 &&
  planet['koi_insol'] < 1.11 &&
  planet['koi_prad'] < 1.6;

fs.createReadStream('./kepler_data.csv')
  .pipe(
    parse({
      comment: '#',
      columns: true,
    })
  )
  .on('data', (data) => {
    if (isHabitablePlanet(data)) results.push(data);
  })
  .on('err', (err) => console.log(err))
  .on('end', () => {
    const planetName = results.map(({ kepler_name }) => kepler_name);
    console.log(planetName);
    console.log(`${results.length} habitable planets found!`);
  });
