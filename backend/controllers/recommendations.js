const Show = require('./../models/shows');

exports.saveRecommendation = (req,res,next) => {
    Show.findOneAndUpdate({_id: req.params.id}, {$set: {status: true}}, {new: true}).then((recommendation) => {
        console.log(recommendation);
        res.status(200).json({message: recommendation});
    }).catch((error) => {
        res.status(400).json({message: error.message});
    });
}

exports.getShowRecommendation = (req,res,next) => {
    Show.find({user_id: req.params.user_id, status: false}).then((recommendation) => {
        res.status(200).json({message: recommendation});
    }).catch((error) => {
        res.status(400).json({message: error.message});
    });
}

exports.getFullRecommendation = (req,res,next) => {
    Show.find({cast : req.body.cast, crew : req.body.crew, name: req.body.name }).then((recommendation) => {
        res.status(200).json({message: recommendation});
    }).catch((error) => {
        res.status(400).json({message: error.message});
    });
}

exports.resetRecommendation = (req,res,next) => {
    Show.updateMany({user_id: req.params.user_id}, {$set: {status: false}}, {new: true}).then((recommendation) => {
        res.status(200).json({message: "Reset Recommendation Successfully"});
    }).catch((error) => {
        res.status(400).json({message: error.message});
    });
}

