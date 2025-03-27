const mongoose = require("mongoose");
const Loc = mongoose.model("locations");
const locationReadAll = async (req, res) => {
    const locations = await Loc.find();
    res.status(200).json({locations});
};
const locationCreate = async (req, res) => {
    res.status(201).json({ message: "locationCreate" });
};
const locationReadOne = async (req, res) => {  
    try{
        const locationid = req.params.locationid;
        const location = await Loc.findById(locationid);
        if(!location){
            return res.status(404).json({message: "location not found"});
        }
        res.status(200).json({location});
    }
    catch(err){
        res.status(500).json(err);
    }
};
const locationUpdateOne = async (req, res) => {
    res.status(200).json({ message: "locationUpdateOne" });
};
const locationDeleteOne = async (req, res) => {
    res.status(204).json({ message: "locationDeleteOne" });
};

module.exports = {
    locationReadAll,
    locationCreate,
    locationReadOne,
    locationUpdateOne,
    locationDeleteOne
};