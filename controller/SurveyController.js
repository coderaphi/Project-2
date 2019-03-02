var dogs = require('../data/dogs');

module.exports = function(userData) {
    var dogsCategoryObject = dogs[userData.category];
    console.log(userData);

    // scoreDifference will hold the difference in scores between user and 
    // friends  in the data base. 
    var scoreDifference = 0;

    var userScores = userData['scores[]'];

    // //loop through the friends data array of objects to get each friends scores

    var bestMatch = {
        name: "",
        photo: "",
        dogScoreDifference: 100
    };
    
    for (var i = 0; i < dogsCategoryObject.dogs.length; i++) {
        // console.log(friends[i].name);
        scoreDifference = 0;

        //loop through that friends score and the users score and calculate the absolute 
        //difference between the two and push that to the total difference variable set above
        var dogScore = 0;

        for (var j = 0; j < 10; j++) {
            // We calculate the difference between the scores and sum them into the scoreDifference
            dogScore = dogsCategoryObject.dogs[i].scores[j];

            console.log("dogScore", dogScore);
            scoreDifference = Math.abs(parseInt(userScores[j]) - parseInt(dogScore));
            // create an  object to store information of the best match.
            
            // If the sum of differences is less then the differences of the current "best match"
            if (scoreDifference <= bestMatch.dogScoreDifference) {
                // Reset the bestMatch to be the new friend. 
                bestMatch.name = dogsCategoryObject.dogs[i].breed;
                bestMatch.category = userData.category;
                bestMatch.photo = dogsCategoryObject.dogs[i].photo;
                bestMatch.dogScoreDifference = scoreDifference;
            }
        }

        console.log(bestMatch);

        // res.json(bestMatch);
    }

    return bestMatch;
}