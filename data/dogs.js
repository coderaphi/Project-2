//  this is where each dog catefory would go with the assoicated scores
// var dogGroups = ["Herding", "Sporting", "Hound", "Terrier", "Working", "Toy", "Non-Sporting", "Miscellaneous"];

// var herdingGroup = ["German Shepherd", "Border Collie", "Australian Cattle Dog", "Australian Shepherd", "Sheltie", "Old English Sheep Dog", "Prembroke Welsh Corgi", "Stumpy tail Cattle Dog", "Malinois Dog", "Rough Collie"];
// var sportingGroup = ["Labrador Retriever", "Pointer", "English Spring Spaniel", "German Shorthaired Pointer", "Chesapeake Bay Retriever", "Weimaraner", "English Cocker Spaninel", "Vizsla", "Irish Setter", "English Setter"];
// var houndGroup = ["Blood Hound", "Beagle", "Whippet", "Dachshund", "Basset Hound", "Rhodesian Ridgeback", "Basenji", "Irish Wolfhound", "Afghan Hound", "Borzoi"];
// var terrierGroup = ["Bull Terrier", "Airedale Terrier", "Cairn Terrier", "American Staffordshire Terrier", "Scottish Terrier", "Border Terrier", "West Highland White Terrier", "Irish Terrier", "Australian Terrier", "Miniature Schnauzer"];
// var workingGroup = ["Golden Retriever", "Great Pyrenees", "Akita", "Rottweiler", "German Shepherd", "Labrador Retriever", "Bloodhound", "Boxer", "Siberian Husky", "Border Collie"];
// var toyGroup = ["Maltese Dog", "Chihuahua", "Poodle", "Yorkshire Terrier", "Pomeranian", "Shih Tzu", "King Charles Spaniel", "Papillon Dog", "Giffron Bruxellois", "Toy Poodle"];
// var nonsportingGroup = ["Bulldog", "Poodle", "French Bulldog", "Boston Terrier", "Bichon Frise", "Dalmatian Dog", "Shar Pei", "Chow Chow", "Shiba Inu", "Lhasa Apso"];
// var miscellaneousGroup = ["Azawakh", "Barbet", "Belgian Mallinois", "Dogo Argentino", "Dutch Shepherd", "Grand Basset Griffon Vendeen", "Nederlandse Kooikerhondje", "Norrbottenspets", "Peruvian Inca Orchid", "Portugese Podengo"];

var dogGroups = {
    categories : [
        {name: 'Herding', key: 'herdingGroup', id: 1},
        {name: 'Sporting', key: 'sportingGroup', id: 2},
        {name: 'Hound', key: 'houndGroup', id: 3},
        {name: 'Terrier', key: 'terrierGroup', id: 4}
    ],
    herdingGroup: {
        dogs: [
            { 
                breed: 'German Shepherd',
                scores: [1, 6, 4, 4, 4, 4, 4, 4, 4, 4, 4],
                photo: "Project-2/public/images/herdingGroup/German Shepherd.jpeg",
            },
            { 
                breed: 'Border Collie',
                scores: [1, 6, 4, 2, 4, 2, 4, 4, 4, 4, 4],
                photo: "Project-2/public/images/herdingGroup/German Shepherd.jpeg",
            },
            { 
                breed: 'Australian Cattle Dog',
                scores: [1, 6, 4, 3, 4, 2, 4, 2, 4, 4, 4],
                photo: "Project-2/public/images/herdingGroup/German Shepherd.jpeg",
            }
        ],
        sizes: {4 : true,5 : true, 6 : true},    
    },
    sportingGroup: {
        dogs: [
            { 
                breed: 'Labrador Retriever',
                scores: [6, 4, 4, 4, 4, 4, 4, 4, 4, 4],
                photo: "Project-2/public/images/herdingGroup/German Shepherd.jpeg",
            },
            { 
                breed: 'Pointer',
                scores: [6, 4, 2, 4, 2, 4, 4, 4, 4, 4],
                photo: "Project-2/public/images/herdingGroup/German Shepherd.jpeg",
            },
        ],
        sizes: {1 : true, 2 : true, 4 : true},    
    },
    houndGroup: {
        dogs: [
            { 
                breed: 'Blood Hound',
                scores: [3, 4, 4, 4, 2, 4, 4, 4, 4, 4],
                photo: "Project-2/public/images/herdingGroup/German Shepherd.jpeg",
            },
            { 
                breed: 'Beagle',
                scores: [2, 4, 2, 4, 2, 4, 4, 2, 4, 4],
                photo: "Project-2/public/images/herdingGroup/German Shepherd.jpeg",
            },
        ],
        sizes: {2 : true, 3 : true, 4 : true},    
    },
    terrierGroup: {
        dogs: [
            { 
                breed: 'Bull Terrier',
                scores: [2, 4, 1, 4, 2, 4, 4, 4, 4, 4],
                photo: "Project-2/public/images/herdingGroup/German Shepherd.jpeg",
            },
            { 
                breed: 'Airedale Terrier',
                scores: [5, 4, 2, 4, 2, 1, 4, 2, 4, 4],
                photo: "Project-2/public/images/herdingGroup/German Shepherd.jpeg",
            },
        ],
        sizes: {1 : true, 2 : true, 3 : true},    
    }
};






module.exports = dogGroups;

// console.log(dogs[0].Breed.dogGroups[0].herdingGroup)
// console.log(dogs.length)