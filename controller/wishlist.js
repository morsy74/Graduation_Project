const { User } = require('../models/user/user');
const { WishList } = require('../models/wishlist');


exports.addRestaurantToWishlist = async (req, res, next) => {
    let user = await User.findById(req.params.id);
    if (!user) res.status(404).send('you must login');
    let items = await WishList.findOne({ Restaurants: req.body.id });
    if (items) return res.status(400).send('This item is already in your wishlist');
    let wishlist = new WishList({
        UserId: req.params.id,
        Restaurants: req.body.id
    });
    wishlist = await wishlist.save()
    res
        .status(200)
        .json({
            status: 'success',
            message: 'restaurant added successfully',
            data: wishlist
        });

    next();
}


exports.addCafeToWishlist = async (req, res, next) => {
    let user = await User.findById(req.params.id);
    if (!user) res.status(404).send('you must login');
    let items = await WishList.findOne({ Cafes: req.body.id } || { UserId: req.params.id });
    if (items) return res.status(400).send('This item is already in your wishlist');
    let wishlist = new WishList({
        UserId: req.params.id,
        Cafes: req.body.id
    });
    wishlist = await wishlist.save()
    res
        .status(200)
        .json({
            status: 'success',
            message: 'cafe added successfully',
            data: wishlist
        });

    next();
}

exports.addHotelToWishlist = async (req, res, next) => {
    let user = await User.findById(req.params.id);
    if (!user) res.status(404).send('you must login');
    let items = await WishList.findOne({ Hotels: req.body.id });
    if (items) return res.status(400).send('This item is already in your wishlist');
    let wishlist = new WishList({
        UserId: req.params.id,
        Hotels: req.body.id
    });
    wishlist = await wishlist.save()
    res
        .status(200)
        .json({
            status: 'success',
            message: 'hotel added successfully',
            data: wishlist
        });

    next();
}


exports.addTouristPlaceToWishlist = async (req, res, next) => {
    let user = await User.findById(req.params.id);
    if (!user) res.status(404).send('you must login');
    let items = await WishList.findOne({ TouristPlace: req.body.id });
    if (items) return res.status(400).send('This item is already in your wishlist');
    let wishlist = new WishList({
        UserId: req.params.id,
        TouristPlace: req.body.id
    });
    wishlist = await wishlist.save()
    res
        .status(200)
        .json({
            status: 'success',
            message: 'tourist place added successfully',
            data: wishlist
        });

    next();
}

exports.addTrainToWishlist = async (req, res, next) => {
    let user = await User.findById(req.params.id);
    if (!user) res.status(404).send('you must login');
    let items = await WishList.findOne({ Train: req.body.id });
    if (items) return res.status(400).send('This item is already in your wishlist');
    let wishlist = new WishList({
        UserId: req.params.id,
        Train: req.body.id
    });
    wishlist = await wishlist.save()
    res
        .status(200)
        .json({
            status: 'success',
            message: 'train station added successfully',
            data: wishlist
        });

    next();
}

exports.addClubToWishlist = async (req, res, next) => {
    let user = await User.findById(req.params.id);
    if (!user) res.status(404).send('you must login');
    let items = await WishList.findOne({ Club: req.body.id });
    if (items) return res.status(400).send('This item is already in your wishlist');
    let wishlist = new WishList({
        UserId: req.params.id,
        Club: req.body.id
    });
    wishlist = await wishlist.save()
    res
        .status(200)
        .json({
            status: 'success',
            message: 'club added successfully',
            data: wishlist
        });

    next();
}




exports.addCityToWishlist = async (req, res, next) => {
    let user = await User.findById(req.params.id);
    if (!user) res.status(404).send('you must login');
    let items = await WishList.findOne({ City: req.body.id });
    if (items) return res.status(400).send('This item is already in your wishlist');
    let wishlist = new WishList({
        UserId: req.params.id,
        City: req.body.id
    });
    wishlist = await wishlist.save()
    res
        .status(200)
        .json({
            status: 'success',
            message: 'city added successfully',
            data: wishlist
        });

    next();
}



exports.addBusToWishlist = async (req, res, next) => {
    let user = await User.findById(req.params.id);
    if (!user) res.status(404).send('you must login');
    let items = await WishList.findOne({ Bus: req.body.id });
    if (items) return res.status(400).send('This item is already in your wishlist');
    let wishlist = new WishList({
        UserId: req.params.id,
        Bus: req.body.id
    });
    wishlist = await wishlist.save()
    res
        .status(200)
        .json({
            status: 'success',
            message: 'bus station added successfully',
            data: wishlist
        });

    next();
}



exports.getWishlist = async (req, res, next) => {
    let list = await WishList.find({ UserId: req.params.id })
        .populate('Restaurants')
        .populate('Cafes')
        .populate('Hotels');
    res
        .status(200)
        .json({
            status: 'success',
            message: 'success',
            data: list
        });
    }


