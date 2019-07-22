const express = require('express');
const router = express.Router();
const Adoption = require('../models/adoption');
const Pet = require('../models/pets');

var result = {}
result.petHealth_count =0;
result.petGender_count = 0;
result.petAge_count = 0;
result.petCategory_count =0; 

var binary = {}
binary.Canine = 1;
binary.Feline = 0;
binary.Male = 1;
binary.Female = 0;
binary.Young = 1;
binary.Adult = 0;
binary.Vaccinated = 1;
binary.Not_Vaccinated = 0;


router.get('/', (req, res, next) => {

    user = '5d2bee361c9d44000064bca9';

    Adoption.find({'petAdopter.userId': user} )
    .exec()
    .then(docs =>{
        // console.log(docs);
        // result = featureExtractor(docs);

        // console.log("result",result);
        //res.status(200).json(docs);
        secondFunction(docs);
    })
    .catch(err =>{
        console.log(err);
        res.status(500).json({
            error: err
        });
    });



   


    console.log("here");
    const status = "Not Adopted";
    Pet.find({
        'adoptionStatus': status
    })
    .exec()
    .then(doc =>{
        console.log("here 2 ");
        //returns most similar 5 pets 
        res.status(200).json(Similarity(doc));


      
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error:err});
    });
});

function Similarity(doc) {
     var similarity_score = [];
    // console.log(doc);
    for ( i = 0; i< doc.length; i++) {
        if(doc[i].petHealth == "Not Vaccinated"){
            doc[i].petHealth = "Not_Vaccinated";
        }
        console.log(doc[i].petHealth );
        res = 0;
        res = Math.pow(binary[doc[i].petAge]-result.petAge_count,2)+Math.pow(binary[doc[i].petGender]-result.petGender_count,2)+Math.pow(binary[doc[i].petCategory]-result.petCategory_count,2)+Math.pow(binary[doc[i].petHealth]-result.petHealth_count,2);
        res = Math.sqrt(res);
        doc[i].distance = res;
        similarity_score.push(doc[i]);

        
    
    };

    //sorting similarity scores 
    similarity_score.sort(function(a,b){
        return a['distance'] - b['distance']; 
    });

   
    
    similarity_score = similarity_score.splice(0,5);
    console.log("result", similarity_score[0].distance);
    return(similarity_score);
    
   
  }

 

module.exports = router;





const firstFunction = (docs) => {
return new Promise(function(resolve, reject) {

   

    // for ( i = 0; i< docs.length; i++) {

        console.log(docs[0].petDetail.petId);
        Pet.find({
            '_id': docs[0].petDetail.petId
        })
        .exec()
        .then(petDetail =>{
            
           
        
                if(petDetail[0].petCategory == "Canine"){
                    result.petCategory_count =1;
                }
                
        
                if(petDetail[0].petAge == "Young"){
                    result.petAge_count =1;
                }
                
        
                if(petDetail[0].petGender == "Male"){
                    result.petGender_count = 1;
                }
                
        
                if(petDetail[0].petHealth == "Vaccinated"){
                    result.petHealth_count  =1;
                }
                
        
                console.log("in",result);
                resolve(result);
                

            })

    
    // }

    
       
    });

};


    

async function secondFunction(docs){
    let result = await firstFunction(docs)
    // console.log(result)
    
}; 

