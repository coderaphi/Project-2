//  this is where each dog catefory would go with the assoicated scores
// var dogGroups = ["Herding", "Sporting", "Hound", "Terrier", "Working", "Toy", "Non-Sporting", "Miscellaneous"];

// var herdingGroup = ["German Shepherd", "Border Collie", "Australian Cattle Dog", "Australian Shepherd", "Sheltie", "Old English Sheep Dog", "Prembroke Welsh Corgi", "Stumpy tail Cattle Dog", "Belgian Malinois", "Rough Collie"];
// var sportingGroup = ["Labrador Retriever", "Pointer", "English Spring Spaniel", "German Shorthaired Pointer", "Chesapeake Bay Retriever", "Weimaraner", "English Cocker Spaninel", "Vizsla", "Irish Setter", "English Setter"];
// var houndGroup = ["Blood Hound", "Beagle", "Whippet", "Dachshund", "Basset Hound", "Rhodesian Ridgeback", "Basenji", "Irish Wolfhound", "Afghan Hound", "Borzoi"];
// var terrierGroup = ["Bull Terrier", "Airedale Terrier", "Cairn Terrier", "American Staffordshire Terrier", "Scottish Terrier", "Border Terrier", "West Highland White Terrier", "Irish Terrier", "Australian Terrier", "Miniature Schnauzer"];
// var workingGroup = ["Golden Retriever", "Great Pyrenees", "Akita", "Rottweiler", "German Shepherd", "Labrador Retriever", "Blood Hound", "Boxer", "Siberian Husky", "Border Collie"];
// var toyGroup = ["Maltese Dog", "Chihuahua", "Poodle", "Yorkshire Terrier", "Pomeranian", "Shih Tzu", "King Charles Spaniel", "Papillon Dog", "Giffron Bruxellois", "Toy Poodle"];
// var nonsportingGroup = ["Bulldog", "Poodle", "French Bulldog", "Boston Terrier", "Bichon Frise", "Dalmatian Dog", "Shar Pei", "Chow Chow", "Shiba Inu", "Lhasa Apso"];
// var miscellaneousGroup = ["Azawakh", "Barbet", "Belgian Mallinois", "Dogo Argentino", "Dutch Shepherd", "Grand Basset Griffon Vendeen", "Nederlandse Kooikerhondje", "Norrbottenspets", "Peruvian Inca Orchid", "Portugese Podengo"];

var dogGroups = {
    categories : [
        {name: 'Herding', key: 'herdingGroup', id: 1},
        {name: 'Sporting', key: 'sportingGroup', id: 2},
        {name: 'Hound', key: 'houndGroup', id: 3},
        {name: 'Terrier', key: 'terrierGroup', id: 4},
        {name: 'Working', key: 'workingGroup', id: 5},
        {name: 'Toy', key: 'toyGroup', id: 6},
        {name: 'Nonsporting', key: 'nonsportingGroup', id: 7},
        {name: 'Miscellaneous', key: 'miscellaneousGroup', id: 8},
    ],
    herdingGroup: {
        dogs: [
            { 
                breed: 'German Shepherd',
                scores: [4,	1,	1,	1,	1,	1,	1,	1,	2,	3],
                photo: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12213218/German-Shepherd-on-White-00.jpg",
            },
            { 
                breed: 'Border Collie',
                scores: [3,	2,	2,	2,	2,	1,	2,	2,	2,	3],
                photo: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12235957/Border-Collie-On-White-01.jpg",
            },
            { 
                breed: 'Australian Cattle Dog',
                scores: [3,	3,	2,	3,	3,	3,	1,	3,	1,	2],
                photo: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/13001408/Australian-Cattle-Dog-On-White-01.jpg",
            },
            { 
                breed: 'Australian Shepherd',
                scores: [4,	2,	2,	3,	3,	2,	2,	3,	2,	1],
                photo: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/03173132/Australian-Shepherd.1.jpg",
            },
            { 
                breed: 'Sheltie',
                scores: [3,	3,	2,	1,	2,	2,	1,	3,	1,	1],
                photo: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12224438/Shetland-Sheepdog-On-White-01.jpg",
            },
            { 
                breed: 'Old English Sheep Dog',
                scores: [4,	2,	1,	2,	1,	1,	2,	1,	2,	1],
                photo: "http://cdn.akc.org/content/article-body-image/oes_hero.jpg",
            },
            { 
                breed: 'Prembroke Welsh Corgi',
                scores: [3,	2,	2,	3,	2,	1,	2,	2,	3,	3],
                photo: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12225919/Pembroke-Welsh-Corgi-On-White-01.jpg",
            },
            { 
                breed: 'Stumpy tail Cattle Dog',
                scores: [3,	3,	2,	2,	2,	2,	1,	2,	3,	2],
                photo: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2018/07/10105842/Australian-Stumpy-Tail-Cattle-Dog-Slideshow-04.jpg",
            },
            { 
                breed: 'Belgian Malinois',
                scores: [4,	1,	2,	2,	3,	3,	3,	1,	2,	2],
                photo: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/13000724/Belgian-Malinois-On-White-01.jpg",
            },
            { 
                breed: 'Rough Collie',
                scores: [4,	3,	1,	2,	1,	2,	3,	2,	1,	1],
                photo: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12234244/Collie-On-White-01.jpg",
            }

        ],
        sizes: {3 : true, 4 : true },    
    },
    sportingGroup: {
        dogs: [
            { 
                breed: 'Labrador Retriever',
                scores: [4,	1,	2,	2,	2,	1,	2,	3,	2,	1],
                photo: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12231410/Labrador-Retriever-On-White-01.jpg",
            },
            { 
                breed: 'Pointer',
                scores: [4,	1,	2,	1,	2,	2,	2,	3,	3,	3],
                photo: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12212246/Pointer-slide1.jpg",
            },
            { 
                breed: 'English Springer Spaniel',
                scores: [4,	1,	3,	1,	3,	3,	2,	2,	2,	2],
                photo: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12214224/ECSCAHuntTest_201010_EnglishSpringerSpaniel_IMG_1070_detail.jpg",
            },
            { 
                breed: 'German Shorthaired Pointer',
                scores: [4,	2,	2,	1,	2,	1,	1,	3,	3,	3],
                photo: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12232941/German-Shorthaired-Pointer-On-White-07.jpg",
            },
            { 
                breed: 'Chesapeake Bay Retriever',
                scores: [4,	1,	2,	1,	1,	2,	3,	2,	3,	2],
                photo: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12234759/Chesapeake-Bay-Retriever-On-White-03.jpg",
            },
            { 
                breed: 'Weimaraner',
                scores: [4,	1,	1,	1,	1,	1,	1,	1,	3,	3],
                photo: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12223229/Weimaraner-On-White-01.jpg",
            },
            { 
                breed: 'English Cocker Spaniel',
                scores: [3,	2,	2,	2,	2,	1,	1,	3,	1,	1],
                photo: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/16105011/English-Cocker-Spaniel-Slide03.jpg",
            },
            { 
                breed: 'Vizsla',
                scores: [4,	2,	2,	1,	2,	2,	1,	3,	3,	3],
                photo: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12223307/Vizsla-On-White-01.jpg",
            },
            { 
                breed: 'Irish Setter',
                scores: [4,	2,	1,	1,	1,	1,	1,	3,	1,	1],
                photo: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12232053/Irish-Setter-On-White-01.jpg",
            },
            { 
                breed: 'English Setter',
                scores: [4,	3,	2,	2,	2,	1,	2,	3,	1,	1],
                photo: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12233610/English-Setter-On-White-03.jpg",
            }

        ],
        sizes: {3 : true, 4 : true},    
    },
    houndGroup: {
        dogs: [
            { 
                breed: 'Blood Hound',
                scores: [5,	2,	1,	2,	2,	1,	2,	1,	2,	1],
                photo: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/13000208/Bloodhound-On-White-01.jpg",
            },
            { 
                breed: 'Beagle',
                scores: [2,	3,	2,	3,	2,	2,	2,	2,	2,	2],
                photo: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/13000937/Beagle-On-White-07.jpg",
            },
            { 
                breed: 'Whippet',
                scores: [3,	2,	3,	1,	2,	3,	2,	2,	1,	3],
                photo: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12223025/Whippet-On-White-01.jpg",
            },
            { 
                breed: 'Dachshund',
                scores: [3,	3,	2,	3,	2,	2,	2,	1,	2,	3],
                photo: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12234114/Dachshund-On-White-01.jpg",
            },
            { 
                breed: 'Basset Hound',
                scores: [4,	3,	1,	2,	2,	1,	1,	2,	2,	2],
                photo: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/13001044/Basset-Hound-On-White-03.jpg",
            },
            { 
                breed: 'Rhodesian Ridgeback',
                scores: [4,	2,	2,	2,	3,	2,	1,	2,	2,	1],
                photo: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12225049/Rhodesian-Ridgeback-On-White-01.jpg",
            },
            { 
                breed: 'Basenji',
                scores: [3,	2,	3,	2,	3,	1,	2,	2,	3,	2],
                photo: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/13001133/Basenji-On-White-01.jpg",
            },
            { 
                breed: 'Irish Wolfhound',
                scores: [5,	2,	1,	1,	2,	3,	3,	2,	3,	1],
                photo: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12211902/Irish-Wolfhound-on-White-12.jpg",
            },
            { 
                breed: 'Afghan Hound',
                scores: [4,	1,	2,	2,	1,	1,	3,	1,	1,	2],
                photo: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/19145725/Afghan-Hound1.jpg",
            },
            { 
                breed: 'Borzoi',
                scores: [5,	1,	3,	3,	1,	2,	3,	2,	3,	3],
                photo: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12212631/Borzoi-on-White-01.jpg",
            }
        ],
        sizes: {2 : true, 3 : true, 4 : true, 5: true},    
    },
    terrierGroup: {
        dogs: [
            { 
                breed: 'Bull Terrier',
                scores: [4,	2,	3,	3,	2,	1,	3,	1,	3,	2],
                photo: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12235344/Bull-Terrier-On-White-03.jpg",
            },
            { 
                breed: 'Airedale Terrier',
                scores: [4,	1,	2,	3,	3,	2,	1,	2,	1,	3],
                photo: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/13001924/Airedale-Terrier-On-White-03.jpg",
            },
            { 
                breed: 'Cairn Terrier',
                scores: [2,	3,	2,	1,	1,	2,	3,	3,	2,	1],
                photo: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12212231/Cairn-Terriers-on-White-01.jpg",
            },
            { 
                breed: 'American Staffordshire Terrier',
                scores: [4,	2,	3,	1,	3,	1,	2,	3,	1,	2],
                photo: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/07172029/AmStaff.04.jpg",
            },
            { 
                breed: 'Scottish Terrier',
                scores: [2,	3,	2,	1,	2,	2,	1,	2,	2,	1],
                photo: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12224538/Scottish-Terrier-On-White-02.jpg",
            },
            { 
                breed: 'Border Terrier',
                scores: [2,	2,	2,	2,	1,	2,	3,	1,	2,	2],
                photo: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12235916/Border-Terrier-On-White-03.jpg",
            },
            { 
                breed: 'West Highland White Terrier',
                scores: [2,	2,	2,	2,	3,	3,	3,	1,	2,	1],
                photo: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12213209/West-Highland-White-Terrier-on-White-01.jpg",
            },
            { 
                breed: 'Irish Terrier',
                scores: [3,	2,	2,	1,	1,	1,	2,	2,	3,	3],
                photo: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12213034/Irish-Terrier-on-white-01.jpg",
            },
            { 
                breed: 'Australian Terrier',
                scores: [2,	2,	2,	1,	2,	2,	1,	3,	2,	1],
                photo: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/29112347/Australian-Terrier-on-White-011.jpg",
            },
            { 
                breed: 'Miniature Schnauzer',
                scores: [2,	2,	2,	1,	2,	3,	2,	1,	2,	3],
                photo: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12230713/Miniature-Schnauzer-On-White-01.jpg",
            }

        ],
        sizes: {2 : true, 3 : true, 4 : true},    
    },

    workingGroup: {
        dogs: [
            { 
                breed: 'Golden Retriever',
                scores: [4,	3,	2,	1,	2,	3,	1,	3,	3,	2],
                photo: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12121353/GoldenRetriever1_stacked.jpg",
            },
            { 
                breed: 'Great Pyrenees',
                scores: [5,	2,	2,	3,	1,	2,	3,	2,	4,	1],
                photo: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12212204/Great-Pyrenees-on-White-05.jpg",
            },
            { 
                breed: 'Akita',
                scores: [5,	2,	2,	2,	3,	2,	1,	3,	2,	1],
                photo: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/13001900/Akita-On-White-02.jpg",
            },
            { 
                breed: 'Rottweiler',
                scores: [5,	2,	2,	1,	3,	3,	2,	2,	3,	3],
                photo: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12224944/Rottweiler-On-White-09.jpg",
            },
            { 
                breed: 'German Shepherd',
                scores: [4,	1,	1,	1,	1,	1,	1,	1,	2,	3],
                photo: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12213218/German-Shepherd-on-White-00.jpg",
            },
            { 
                breed: 'Labrador Retriever',
                scores: [4,	1,	2,	2,	2,	1,	2,	3,	2,	1],
                photo: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12231410/Labrador-Retriever-On-White-01.jpg",
            },
            { 
                breed: 'Bloodhound',
                scores: [5,	2,	1,	2,	2,	1,	2,	1,	2,	1],
                photo: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/13000208/Bloodhound-On-White-01.jpg",
            },
            { 
                breed: 'Boxer',
                scores: [4,	2,	2,	2,	3,	1,	2,	3,	2,	3],
                photo: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12235639/Boxer-On-White-03.jpg",
            },
            { 
                breed: 'Siberian Husky',
                scores: [4,	2,	2,	1,	2,	2,	1,	2,	2,	1],
                photo: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12224230/Siberian-Husky-On-White-01.jpg",
            },
            { 
                breed: 'Border Collie',
                scores: [3,	2,	2,	2,	2,	1,	2,	2,	2,	3],
                photo: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12235957/Border-Collie-On-White-01.jpg",
            }

        ],
        sizes: {3 : true, 4 : true, 5 : true},    
    },
    toyGroup: {
        dogs: [
            { 
                breed: 'Maltese Dog',
                scores: [1,	2,	2,	2,	1,	2,	1,	3,	1,	2],
                photo: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12231006/Maltese-On-White-04.jpg",
            },
            { 
                breed: 'Chihuahua',
                scores: [1,	2,	1,	3,	1,	2,	1,	3,	2,	3],
                photo: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12213613/Chihuahua-onWhite-13.jpg",
            },
            { 
                breed: 'Poodle',
                scores: [2,	1,	2,	3,	2,	3,	1,	3,	2,	2],
                photo: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12225538/Poodle-On-White-03.jpg",
            },
            { 
                breed: 'Yorkshire Terrier',
                scores: [1,	3,	2,	2,	1,	2,	3,	3,	2,	1],
                photo: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12222649/Yorkshire-Terrier-On-White-01.jpg",
            },
            { 
                breed: 'Pomeranian',
                scores: [1,	2,	2,	3,	1,	2,	2,	3,	3,	2],
                photo: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12225627/Pomeranian-On-White-01.jpg",
            },
            { 
                breed: 'Shih Tzu',
                scores: [2,	2,	2,	2,	1,	2,	1,	3,	1,	1],
                photo: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12224329/Shih-Tzu-On-White-01.jpg",
            },
            { 
                breed: 'King Charles Spaniel',
                scores: [2,	3,	2,	3,	2,	1,	3,	3,	2,	2],
                photo: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12234921/Cavalier-King-Charles-Spaniel-On-White-03.jpg",
            },
            { 
                breed: 'Papillon Dog',
                scores: [1,	2,	1,	2,	2,	2,	2,	3,	1,	1],
                photo: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12230042/Papillon-On-White-01.jpg",
            },
            { 
                breed: 'Griffon Bruxelloi',
                scores: [1,	2,	1,	3,	3,	1,	2,	3,	1,	1],
                photo: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12212238/Brussels-Griffon-on-White-06.jpg",
            },
            { 
                breed: 'Toy Poodle',
                scores: [1,	3,	2,	1,	2,	1,	2,	3,	3,	1],
                photo: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12225538/Poodle-On-White-03.jpg",
            }

        ],
        sizes: {1 : true, 2 : true },    
    },
    nonsportingGroup: {
        dogs: [
            { 
                breed: 'Bulldog',
                scores: [4,	3,	2,	3,	2,	1,	3,	3,	3,	3],
                photo: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/21010129/Bulldog-Slide-02.jpg",
            },
            { 
                breed: 'Poodle',
                scores: [2,	1,	2,	3,	2,	3,	1,	3,	2,	2],
                photo: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12225538/Poodle-On-White-03.jpg",
            },
            { 
                breed: 'French Bulldog',
                scores: [3,	2,	2,	1,	3,	2,	2,	3,	2,	1],
                photo: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12145606/20121215-_MG_3384.jpg",
            },
            { 
                breed: 'Boston Terrier',
                scores: [2,	3,	2,	2,	1,	2,	2,	3,	2,	1],
                photo: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12235803/Boston-Terrier-On-White-03.jpg",
            },
            { 
                breed: 'Bichon Frise',
                scores: [2,	2,	2,	2,	3,	1,	2,	2,	3,	1],
                photo: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/13000402/Bichon-Frise-On-White-03.jpg",
            },
            { 
                breed: 'Dalmatian Dog',
                scores: [4,	1,	2,	3,	1,	2,	1,	2,	2,	2],
                photo: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12234026/Dalmatian-On-White-01.jpg",
            },
            { 
                breed: 'Shar Pei',
                scores: [4,	2,	1,	3,	3,	2,	1,	3,	2,	1],
                photo: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12234623/Chinese-Shar-Pei-On-White-02.jpg",
            },
            { 
                breed: 'Chow Chow',
                scores: [4,	3,	2,	1,	2,	1,	2,	3,	2,	2],
                photo: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12234523/Chow-Chow-On-White-01.jpg",
            },
            { 
                breed: 'Shiba Inu',
                scores: [3,	3,	2,	2,	3,	3,	2,	1,	3,	2],
                photo: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12224412/Shiba-Inu-On-White-01.jpg",
            },
            { 
                breed: 'Lhasa Apso',
                scores: [2,	2,	2,	3,	2,	1,	2,	2,	3,	1],
                photo: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12231104/Lhasa-Apso-On-White-01.jpg",
            }

        ],
        sizes: {2 : true, 3 : true, 4 : true},    

    },

    miscellaneousGroup: {
        dogs: [
            { 
                breed: 'Azawakh',
                scores: [4,	2,	3,	2,	1,	2,	3,	2,	2,	1],
                photo: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/03163019/Azawakh_171089447.jpg",
            },
            { 
                breed: 'Barbet',
                scores: [4,	1,	2,	3,	1,	2,	3,	2,	2,	1],
                photo: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/27114851/barbet.lying_.jpg",
            },
            { 
                breed: 'Belgian Mallinois',
                scores: [4,	3,	2,	2,	2,	2,	3,	2,	1,	3],
                photo: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/13000724/Belgian-Malinois-On-White-01.jpg",
            },
            { 
                breed: 'Dogo Argentino',
                scores: [5,	3,	2,	1,	3,	2,	1,	2,	2,	2],
                photo: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/11141747/Dogo-Argentino.jpg",
            },
            { 
                breed: 'Dutch Shepherd',
                scores: [4,	1,	1,	1,	2,	2,	3,	3,	3,	3],
                photo: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12205622/Dutch-Shepherd-on-White-01.jpg",
            },
            { 
                breed: 'Grand Basset Griffon Vendeen',
                scores: [3,	2,	2,	2,	2,	3,	2,	1,	1,	1],
                photo: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12205729/Grand-Basset-Griffon-Vendeen-on-White-01.jpg",
            },
            { 
                breed: 'Nederlandse Kooikerhondje',
                scores: [3,	2,	2,	1,	2,	3,	2,	2,	2,	2],
                photo: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/27080710/Kooiker-profile-800x600.jpg",
            },
            { 
                breed: 'Norrbottenspets',
                scores: [3,	3,	2,	1,	2,	2,	1,	1,	3,	2],
                photo: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12230431/Norrbottenspets-On-White-01.jpg",
            },
            { 
                breed: 'Peruvian Inca Orchid',
                scores: [3,	1,	1,	1,	2,	2,	3,	3,	2,	1],
                photo: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/29153948/AdobeStock_102084794.1.jpg",
            },
            { 
                breed: 'Portugese Podengo',
                scores: [1,	3,	2,	2,	2,	3,	2,	1,	2,	1],
                photo: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/21133457/PPP-on-white.jpg",
            }

        ],
        sizes: {1 : true, 3 : true, 4 : true, 5: true},    

    }

};






module.exports = dogGroups;

// console.log(dogs[0].Breed.dogGroups[0].herdingGroup)
// console.log(dogs.length)