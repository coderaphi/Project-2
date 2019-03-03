var dogs = require('../data/dogs');

module.exports = function(userData) {
    var dogsCategoryObject = dogs[userData.category];

    var userScores = userData['scores[]'];

    // //loop through the friends data array of objects to get each friends scores

    var bestMatch = {
        name: "",
        photo: "",
        dogScoreDifference: 100
    };

    var dogMatchArr = [];
    
    for (var i = 0; i < dogsCategoryObject.dogs.length; i++) {
        var scoreDifference = 0;

        //loop through that friends score and the users score and calculate the absolute 
        //difference between the two and push that to the total difference variable set above
        var dogScore = 0;

        //  loops over scores
        for (var j = 0; j < 10; j++) {
            // We calculate the difference between the scores and sum them into the scoreDifference
            dogScore = dogsCategoryObject.dogs[i].scores[j];
            scoreDifference = scoreDifference + Math.abs(parseInt(userScores[j]) - parseInt(dogScore));
        }

        dogMatchArr.push({
            name: dogsCategoryObject.dogs[i].breed,
            category: userData.category,
            photo: dogsCategoryObject.dogs[i].photo,
            dogScoreDifference: scoreDifference
        });

    }

    var sortedByScores = dogMatchArr.sort(function(a, b) {
        return a.dogScoreDifference - b.dogScoreDifference
    });
    
    for(var i = 1; i < userScores.length; i++) {
        if(parseInt(userScores[i]) !== 4) {
            return sortedByScores.slice(0, 3);
        }
    }

    return sortedByScores;
}