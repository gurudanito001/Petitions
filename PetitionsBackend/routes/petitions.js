const router = require ('express').Router();
const Petition = require('../models/petition.model');

router.route('/').get((req, res) =>{
    Petition.find()
        .then(petition =>res.json(petition))
        .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/add').post((req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    const category = req.body.category;
    const audience = req.body.audience;
    const mediaUrl = req.body.mediaUrl;
    const signatories = req.body.signatories;
    const dateCreated = Date.now();

    const newPetition = new Petition({
        title,
        description,
        category,
        audience,
        mediaUrl,
        signatories,
        dateCreated
    })

    newPetition.save()
        .then(() => res.json('Petition has been created')) 
        .catch(err => res.status(400).json('Error: ' +err));
})

router.route('/:id').delete((req, res) =>{
    Petition.findByIdAndDelete(req.params.id)
    .then(() => res.json('Petition Deleted'))
    .catch(err => res.status(400).json('Error: ' +err));
});

router.route('/update/:id').post((req, res) => {
    Petition.findById(req.params.id)
    .then(petition =>{
        petition.title = req.body.title;
        petition.description = req.body.description;
        petition.category = req.body.category;
        petition.audience = req.body.audience;
        petition.mediaUrl = req.body.mediaUrl;
        petition.signatories = req.body.signatories;

        petition.save()
            .then(() => res.json('Petition Updated'))
            .catch(err => res.status(400).json('Error: ' +err));
    })
    .catch(err => res.status(400).json('Error: ' +err));
});

module.exports = router;