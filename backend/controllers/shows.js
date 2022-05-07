const Show = require('./../models/shows');

exports.createShow = (req,res,next) => {
    const show = new Show(req.body);
    show.save().then(() => {
        res.status(200).json({message: "Successfully Created Show"});
    }).catch((error) => {
        res.status(400).json({message: error.message});
    });
}

exports.getShow = (req,res,next) => {
    Show.findOne({_id: req.params.id}).then((recommendation) => {
        res.status(200).json({message: recommendation});
    }).catch((error) => {
        res.status(400).json({message: error.message});
    });
}

exports.deleteShow = (req,res,next) => {
    Show.findOneAndDelete({_id: req.params.id}).then((recommendation) => {
        res.status(200).json({message: recommendation});
    }).catch((error) => {
        res.status(400).json({message: error.message});
    });
}

exports.getShows = (req,res,next) => {
    Show.find({}).sort({date: - 1}).then((recommendation) => {
        res.status(200).json({message: recommendation});
    }).catch((error) => {
        res.status(400).json({message: error.message});
    });
} 

