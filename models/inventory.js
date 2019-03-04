const Sequelize = require ('sequelize');

module.exports = function (sequelize) {
  var inventory = sequelize.define("inventory", {
    dog_name: Sequelize.STRING,
    gender: Sequelize.TEXT,
    Breed: Sequelize.TEXT,
    age: Sequelize.INTEGER,
    Vaccinated: Sequelize.TEXT,
    Adapted: Sequelize.TEXT,
    size: Sequelize.TEXT,
    photo: Sequelize.TEXT,
  });
  inventory.sync({ force: true }).then(() => {

    var fixture = [
      {
        dog_name: 'Peter',
        gender: 'Male',
        Breed: 'Mutt',
        age: 1,
        Vaccinated: 'yes',
        Adopted: 'No',
        size: 'medium',
        photo: 'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/43503801/1/?bust=1551650322&width=720'
      },
      {
        dog_name: 'Toya',
        gender: 'Female',
        Breed: Mastiff Mix'
        age:2,
        Vaccinated: 'yes',
        Adapted: 'No',
        size: 'large',
        photo: 'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/43815259/2/?bust=1547929282&width=720'
      },
       {
        dog_name: 'Dash',
        gender: 'Male',
        Breed: 'Boxer & Lab mix',
        age: 3,
        Vaccinated: 'yes',
        Adapted: 'No',
        size: 'large',
        photo: 'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/43815267/3/?bust=1547929478&width=720'
      },
      {
        dog_name: 'Bernie',
        gender: 'Female',
        Breed: 'Beagle',
        age: 3,
        Vaccinated: 'yes',
        Adapted: 'No',
        size: 'small',
        photo: 'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/40713048/2/?bust=1516373039&width=720'
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
      },

      {
        dog_name: 'Wilson',
        gender: 'Male',
        Breed: 'Mutt',
        age: 3,
        Vaccinated: 'yes',
        Adopted: 'No',
        size: 'medium',
        photo: 'https://dogbreedidentifier.com/wp-content/uploads/2014/10/mixed-breed-dogs.jpg'
      },

      {
        dog_name: 'Charlie',
        gender: 'Male',
        Breed: 'Mutt',
        age: 2,
        Vaccinated: 'No',
        Adopted: 'No',
        size: 'medium',
        photo: 'https://www.shepped.com/wp-content/uploads/2015/05/german-shepherd-mix.jpg'
      },

      {
        dog_name: 'Maxxi',
        gender: 'Female',
        Breed: 'Mutt',
        age: 3,
        Vaccinated: 'No',
        Adopted: 'No',
        size: 'small',
        photo: 'https://i.ytimg.com/vi/3DSbFpURNq0/maxresdefault.jpg'
      },

      {
        dog_name: 'Foxxy',
        gender: 'Female',
        Breed: 'Mutt',
        age: 2,
        Vaccinated: 'Yes',
        Adopted: 'No',
        size: 'Large',
        photo: 'https://thehappypuppysite.com/wp-content/uploads/2018/05/gerberian-shepsky.jpg'
      },

      {
        dog_name: 'Shorty',
        gender: 'Female',
        Breed: 'Mutt',
        age: 3,
        Vaccinated: 'Yes',
        Adopted: 'No',
        size: 'Medium',
        photo: 'http://corgiguide.com/wp-content/uploads/2014/07/corgishepherd.jpg'
      },

      {
        dog_name: 'Srinath',
        gender: 'Male',
        Breed: 'Mutt',
        age: 3,
        Vaccinated: 'Yes',
        Adopted: 'No',
        size: 'Large',
        photo: 'https://i.pinimg.com/originals/04/e9/5a/04e95aa03b3b889d37dd727dbd7144d1.png'
      },

      {
        dog_name: 'Kamal',
        gender: 'Male',
        Breed: 'Mutt',
        age: 3,
        Vaccinated: 'Yes',
        Adopted: 'No',
        size: 'Large',
        photo: 'https://canineweekly.com/wp-content/uploads/2018/08/Gerberian-Shepsky-3.jpg?x24525&x24525'
      },

      {
        dog_name: 'Jamii',
        gender: 'Male',
        Breed: 'German shepherd',
        age: 6,
        Vaccinated: 'Yes',
        Adopted: 'No',
        size: 'Large',
        photo: 'http://cdn.shopify.com/s/files/1/0840/6049/articles/10701013118_1024x1024.jpg?v=1549419413'
      },

      {
        dog_name: 'Damon',
        gender: 'Male',
        Breed: 'German shepherd mix',
        age: 1,
        Vaccinated: 'Yes',
        Adopted: 'No',
        size: 'Medium',
        photo: 'https://thedailyshep.com/wp-content/uploads/2017/06/puppy-753906_1280.jpg'
      },

      {
        dog_name: 'Precious',
        gender: 'Female',
        Breed: 'Mutt',
        age: 1,
        Vaccinated: 'Yes',
        Adopted: 'No',
        size: 'Small',
        photo: 'http://www.happydogheaven.com/wp-content/uploads/german-shepherd-husky-mix-puppy-my-boyfriend39s-brother39s-new-german-shepherdhuskyretriever-puppy.jpg'
      },


      {
        dog_name: 'Mischief',
        gender: 'Female',
        Breed: 'Mutt',
        age: '8 months',
        Vaccinated: 'Yes',
        Adopted: 'No',
        size: 'Small',
        photo: 'https://petdt.com/wp-content/uploads/2017/12/german-shepherd-husky-mix-13.jpg'
      },

      {
        dog_name: 'Whitney',
        gender: 'Female',
        Breed: 'Mutt',
        age: 4,
        Vaccinated: 'Yes',
        Adopted: 'No',
        size: 'Large',
        photo: 'https://www.traweh.us/wp-content/uploads/2017/08/husky-mix-black-and-white-lab-rescue-dog-never-week-old-gerberian-shepsky-cross-between-a-week-german-shepherd-husky-mix-black.jpg'
      },


      {
        dog_name: 'Droopy',
        gender: 'Male',
        Breed: 'Blood hound',
        age: 7,
        Vaccinated: 'Yes',
        Adopted: 'No',
        size: 'Extra Large',
        photo: 'https://s3files.core77.com/blog/images/2014/01/bloodhound_880.jpg'
      },

      {
        dog_name: 'Droopy',
        gender: 'Male',
        Breed: 'Blood hound',
        age: 1,
        Vaccinated: 'Yes',
        Adopted: 'No',
        size: 'Medium',
        photo: 'http://www.allmutt.com/wp-content/uploads/2014/09/mutt-basset-jack-russell-mix.jpg'
      },
      {
        dog_name: 'Angel',
        gender: 'Female',
        Breed: 'Mutt',
        age: 9,
        Vaccinated: 'Yes',
        Adopted: 'No',
        size: 'Medium',
        photo: 'https://static.boredpanda.com/blog/wp-content/uploads/2016/12/senior-shelter-dog-holiday-adoption-boss-2.jpg'
      },

      {
        dog_name: 'Sam',
        gender: 'Male',
        Breed: 'Mutt',
        age: 12,
        Vaccinated: 'Yes',
        Adopted: 'No',
        size: 'Medium',
        photo: 'https://www.weloveallanimals.com/wp-content/uploads/2016/08/old-dog-adoption-rocky-shelter-7.jpg'

      },
      {
        dog_name: 'Fang',
        gender: 'Male',
        Breed: 'Husky',
        age: 2,
        Vaccinated: 'Yes',
        Adopted: 'No',
        size: 'Medium',
        photo: 'https://www.eveningnews24.co.uk/polopoly_fs/1.1222257.1330434852!/image/184491106.jpg_gen/derivatives/landscape_630/184491106.jpg'


      },


      {
        dog_name: 'Jim',
        gender: 'Female',
        Breed: 'Corgi Shepherd',
        age: 4,
        Vaccinated: 'Yes',
        Adopted: 'No',
        size: 'Medium',
        photo: 'https://www.dogmal.com/wp-content/uploads/2017/03/corgi-shepherd-mix-size.jpg'
      },

      {
        dog_name: 'Rocky',
        gender: 'Male',
        Breed: 'Doberman ',
        age: 4,
        Vaccinated: 'Yes',
        Adopted: 'No',
        size: 'Large',
        photo: 'https://www.certapet.com/wp-content/uploads/2018/06/doberman-pinscher.jpg'
      },

      {
        dog_name: 'Grumpy',
        gender: 'Male',
        Breed: 'Bulldog ',
        age: 3,
        Vaccinated: 'Yes',
        Adopted: 'No',
        size: 'Large',
        photo: 'https://www.pets4homes.co.uk/images/breeds/5/e23f1190c5e599131d07dc3f9f3ad7ea.jpg'
      },


      {
        dog_name: 'Sophia',
        gender: 'Female',
        Breed: 'English Bulldog ',
        age: 4,
        Vaccinated: 'Yes',
        Adopted: 'No',
        size: 'Large',
        photo: 'https://pet-uploads.adoptapet.com/9/8/3/393454188.jpg'

      },
      {
        dog_name: 'Daisy',
        gender: 'Female',
        Breed: 'English Labrador ',
        age: 3,
        Vaccinated: 'Yes',
        Adopted: 'No',
        size: 'Large',
        photo: 'https://pet-uploads.adoptapet.com/1/0/5/342187422.jpg'
      },

      {
        dog_name: 'Darby',
        gender: 'Female',
        Breed: 'Dalmation Mix',
        age: 6,
        Vaccinated: 'Yes',
        Adopted: 'No',
        size: 'Large',
        photo: 'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/44024431/2/?bust=1550251819&width=720'
      },
      {
        dog_name: 'Julie',
        gender: 'Female',
        Breed: 'American Bull dog Mix',
        age: 7,
        Vaccinated: 'Yes',
        Adopted: 'No',
        size: 'Large',
        photo: 'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/44024474/3/?bust=1550252285&width=720'
      },
      {
        dog_name: 'Nikke',
        gender: 'Female',
        Breed: 'Pit Bull Terrier',
        age: 4,
        Vaccinated: 'Yes',
        Adopted: 'No',
        size: 'Large',
        photo: 'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/40905052/1/?bust=1540520673&width=720'
      },

      {
        dog_name: 'Luke',
        gender: 'Male',
        Breed: 'Labrador and Pitbull mix',
        age: 4,
        Vaccinated: 'Yes',
        Adopted: 'No',
        size: 'Large',
        photo: 'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/44115627/1/?bust=1551306977&width=720'
      },

      {
        dog_name: 'Brutus',
        gender: 'Male',
        Breed: 'Cane Corso Mix',
        age: 2,
        Vaccinated: 'Yes',
        Adopted: 'No',
        size: 'Large',
        photo: 'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/44051015/1/?bust=1550578164&width=720'

      },

      {
        dog_name: 'Joey',
        gender: 'Male',
        Breed: 'Chihuahua Mix',
        age: 5,
        Vaccinated: 'Yes',
        Adopted: 'No',
        size: 'Large',
        photo: 'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/43750237/3/?bust=1549504550&width=720'

      },


    ];

    return fixture.map(a => inventory.create(a));

  });
  return inventory;

};


