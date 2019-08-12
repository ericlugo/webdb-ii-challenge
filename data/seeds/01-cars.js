/*
  Transmission Type:
    0 - AT
    1 - MT
    2 - AM
    3 - CVT
  Title Status:
    0 - Clear
    1 - Salvage
    2 - Reconstructed
    3 - Rebuilt
    4 - Statement of Origin (New)
    5 - Parts Only
*/

exports.seed = function(knex) {
  return knex('cars')
    .truncate()
    .then(function() {
      return knex('cars').insert([
        {
          vin: '1FV3GFAC0SL685692',
          make: 'Freightliner',
          model: 'FL60',
          mileage: 0,
          transmission_type: 'MT',
          title_status: 'Parts Only',
        },
        {
          vin: '2G2WP552561259484',
          make: 'Pontiac',
          model: 'Grand Prix',
          mileage: 0,
          transmission_type: 'AT',
          title_status: 'Clear',
        },
        {
          vin: '1MEHM43W18G609971',
          make: 'Mercury',
          model: 'Sable',
          mileage: 0,
          transmission_type: 'AT',
          title_status: 'Clear',
        },
        {
          vin: '1FAFP55201G220590',
          make: 'Ford',
          model: 'Taurus',
          mileage: 0,
          transmission_type: 'AM',
          title_status: 'Salvage',
        },
        {
          vin: '5XYZUDLB3EG229399',
          make: 'Hyundai',
          model: 'Santa Fe',
          mileage: 0,
          transmission_type: 'AT',
          title_status: 'Clear',
        },
        {
          vin: 'SALSH2E45BA708730',
          make: 'Land Rover',
          model: 'Range Rover Sport',
          mileage: 0,
          transmission_type: 'MT',
          title_status: 'Statement of Origin',
        },
        {
          vin: '3N1CN7AP4CL848931',
          make: 'Nissan',
          model: 'Versa',
          mileage: 0,
          transmission_type: 'AT',
          title_status: 'Clear',
        },
        {
          vin: 'WBAYA8C51DC996898',
          make: 'BMW',
          model: '750i',
          mileage: 0,
          transmission_type: 'AT',
          title_status: 'Statement of Origin',
        },
        {
          vin: '5TDZK23C39S242584',
          make: 'Toyota',
          model: 'Sienna',
          mileage: 0,
          transmission_type: 'AT',
          title_status: 'Salvage',
        },
        {
          vin: '2C4RDGBG3ER411632',
          make: 'Dodge',
          model: 'Grand Caravan',
          mileage: 0,
          transmission_type: 'AT',
          title_status: 'Statement of Origin',
        },
      ]);
    });
};
