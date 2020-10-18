const router = require ('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) =>{
    User.find()
        .then(users =>res.json(users))
        .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/add').post((req, res) => {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const password = req.body.password;
    const aboutMe = req.body.aboutMe;
    const streetAddress = req.body.streetAddress;
    const city = req.body.city;
    const state = req.body.state;
    const country = req.body.country;
    const phoneNumber = req.body.phoneNumber;
    const organizationName = req.body.organizationName;
    const petitionsCreated = req.body.petitionsCreated;
    const petitionsSigned = req.body.petitionsSigned;
    const accountCreated = Date.now();

    const newUser = new User({
        firstname,
        lastname,
        email,
        password,
        aboutMe,
        streetAddress,
        city,
        state,
        country,
        phoneNumber,
        organizationName,
        petitionsCreated,
        petitionsSigned,
        accountCreated
    })

    newUser.save()
        .then(() =>{
            res.json("New User Created")
        })
        .catch(err => res.status(400).json('Error: ' +err));
})

router.route('/:id').get((req, res) =>{
    User.findById(req.params.id)
        .then(user => res.json(user))
        .catch(err => res.status(400).json('Error: ' +err))
});

router.route('/:id').delete((req, res) =>{
    User.findByIdAndDelete(req.params.id)
    .then(() => res.json('User Account deleted.'))
    .catch(err => res.status(400).json('Error: ' +err));
});

router.route('/update/:id').post((req, res) => {
    User.findById(req.params.id)
    .then(user =>{
        user.firstname = req.body.firstname;
        user.lastname = req.body.lastname;
        user.email = req.body.email;
        user.password = req.body.password;
        user.aboutMe = req.body.aboutMe;
        user.streetAddress = req.body.streetAddress;
        user.city = req.body.city;
        user.state = rew.body.state;
        user.country = req.body.country;
        user.phoneNumber = req.body.phoneNumber;
        user.organizationName = req.body.organizationName;
        user.petitionsCreated = req.body.petitionsCreated;
        user.petitionsSigned = req.body.petitionsSigned;

        user.save()
            .then(() => res.json(user))
            .catch(err => res.status(400).json('Error: ' +err));
    })
    .catch(err => res.status(400).json('Error: ' +err));
})

module.exports = router;