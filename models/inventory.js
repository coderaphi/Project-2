module.exports = function (sequelize, DataTypes) {
  var inventory = sequelize.define("inventory", {
    dog_name: DataTypes.STRING,
    gender: DataTypes.TEXT,
    Breed: DataTypes.TEXT,
    age: DataTypes.INTEGER,
    Vaccinated: DataTypes.TEXT,
    Adapted: DataTypes.TEXT,
    size: DataTypes.TEXT,
    photo: DataTypes.TEXT,
  });
  inventory.sync({ force: true }).then(() => {

    var fixture = [
      {
        dog_name: 'Peter', 
        gender: 'Male',
        Breed: 'Mutt',
        age: 1,
        Vaccinated: 'yes',
        Adapted: 'No',
        size: 'small',
        photo: 'https://cdn2-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-30.jpg'
      }, 
      {
        dog_name: 'Toya', 
        gender: 'Female',
        Breed: 'German Shepherd',
        age: 1,
        Vaccinated: 'yes',
        Adapted: 'No',
        size: 'small',
        photo: 'https://cdn2-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-30.jpg'
      },
      {
        dog_name: 'Dash', 
        gender: 'Male',
        Breed: 'Doberman',
        age: 3,
        Vaccinated: 'yes',
        Adapted: 'No',
        size: 'large',
        photo: 'https://www.dogster.com/wp-content/uploads/2014/06/A-Doberman-puppy.jpg'
      },
      {
        dog_name: 'Dash', 
        gender: 'Female',
        Breed: 'German Shepherd',
        age: 3,
        Vaccinated: 'yes',
        Adapted: 'No',
        size: 'small',
        photo: 'https://cdn2-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-30.jpg'
      },
      {
        dog_name: 'Arrow', 
        gender: 'Female',
        Breed: 'Mutt',
        age: 1,
        Vaccinated: 'yes',
        Adapted: 'No',
        size: 'small',
        photo: 'https://1.bp.blogspot.com/-tLnZ0qb8nr8/TkzlUMyn87I/AAAAAAAAMp0/o8BSm17QIgg/s640/mutt+mixed+breed+dog+1.jpg'
      },
      {
        dog_name: 'Lance', 
        gender: 'Male',
        Breed: 'Basset Hound',
        age: 2,
        Vaccinated: 'yes',
        Adapted: 'No',
        size: 'small',
        photo: 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/13001052/Basset-Hound-MP.jpg'
      },
      {
        dog_name: 'Terpo', 
        gender: 'Female',
        Breed: 'Mutt',
        age: 1,
        Vaccinated: 'yes',
        Adapted: 'No',
        size: 'small',
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf6aN858FQy7YRRU7byQIb4JgQllJ4-puhlDgwBAqTXkpAqfSu'
      },
      {
        dog_name: 'Terry', 
        gender: 'Male',
        Breed: 'American Foxhound',
        age: 3,
        Vaccinated: 'yes',
        Adapted: 'No',
        size: 'medium',
        photo: 'http://cdn.akc.org/content/article-body-image/AFH_Hero.jpg'
      },
      {
        dog_name: 'Rusty', 
        gender: 'Male',
        Breed: 'Beagle',
        age: 5,
        Vaccinated: 'No',
        Adapted: 'No',
        size: 'small',
        photo: 'https://t3.ftcdn.net/jpg/01/39/53/06/240_F_139530660_epllX5UbV2k7zidIuSTm0Qe3RnYWV8Q0.jpg'
      }
    ];

    return fixture.map(a => inventory.create(a));

  });
  return inventory;

};


