const Hotel = require('../models/hotelModel');
//Filler, sorting and paginating

class APIfeatures {
    constructor(query, queryString){
        this.query = query;
        this.queryString = queryString;
    }
    filtering(){
       const queryObj = {...this.queryString} //queryString = req.query

       const excludedFields = ['page', 'sort', 'limit']
       excludedFields.forEach(el => delete(queryObj[el]))
       
       let queryStr = JSON.stringify(queryObj)
       queryStr = queryStr.replace(/\b(gte|gt|lt|lte|regex)\b/g, match => '$' + match)

    //    gte = greater than or equal
    //    lte = lesser than or equal
    //    lt = lesser than
    //    gt = greater than
       this.query.find(JSON.parse(queryStr))
         
       return this;
    }

    sorting(){
        if(this.queryString.sort){
            const sortBy = this.queryString.sort.split(',').join(' ')
            this.query = this.query.sort(sortBy)
        }else{
            this.query = this.query.sort('-createdAt')
        }

        return this;
    }

    paginating(){
        const page = this.queryString.page * 1 || 1
        const limit = this.queryString.limit * 1 || 9
        const skip = (page - 1) * limit;
        this.query = this.query.skip(skip).limit(limit)
        return this;
    }
}

const hotelCtrl ={
    getHotel: async(req, res) =>{
        try {
            const features = new APIfeatures(Hotel.find(), req.query)
            .filtering().sorting().paginating()

            const hotels = await features.query

            res.json({
                status: 'success',
                result: hotels.length,
                hotels: hotels
            })
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    createHotel: async(req, res) => {
        try {
            const {hotel_id, title, price, description, content, images, category} = req.body;
            if(!images) return res.status(400).json({msg: "No image upload"})

            const hotel = await Hotel.findOne({hotel_id})
            if(hotel)
                return res.status(400).json({msg: "This hotel already exists."})
            
            const newHotel = new Hotel({
                hotel_id, title: title.toLowerCase(), price, description, content, images, category
            })

            await newHotel.save()
            res.json({msg:"Created a Hotel"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    deleteHotel: async(req, res) =>{
        try {
            await Hotels.findByIdAndDelete(req.params.id)
            res.json({msg:"Deleted a Hotel"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    updateHotel: async(req, res) =>{
        try {
            const{title, price, description, content, images, category} = req.body;
            if(!images) return res.status(400).json({msg: "No image upload"})

            await Hotels.findOneAndUpdate({_id: req.params.id},{
                title: title.toLowerCase(), price, description, content, images, category
            })

            res.json({msg:"Update a Hotel"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }
}

module.exports = hotelCtrl