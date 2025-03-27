const reviewCreate = async (req, res) => {
    res.status(201).json({ message: "reviewCreate" });
};
const reviewReadOne = async (req, res) => {  
    try{
        const locationid = req.params.locationid;
        const location = await Loc.findById(locationid).select("name reviews");
        if(!location){
            return res.status(404).json({message: "location not found"});
        }
        const reviewid = req.params.reviewid;
        const review = location.reviews.id(reviewid);
        if(!review){
            return res.status(404).json({message: "review not found"});
        }
        res.status(200).json({review});
    }
    catch(err){
        res.status(500).json(err);
    }
};
const reviewUpdateOne = async (req, res) => {
    res.status(200).json({ message: "reviewUpdateOne" });
};
const reviewDeleteOne = async (req, res) => {
    res.status(204).json({ message: "reviewDeleteOne" });
};

module.exports = {
    reviewCreate,
    reviewReadOne,
    reviewUpdateOne,
    reviewDeleteOne
};