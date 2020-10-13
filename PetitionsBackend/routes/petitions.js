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

    const newPetition = new Petition({
        title,
        description,
        category,
        audience,
        mediaUrl,
        signatories
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

/* router.route('/unauthorized').get((req, res) =>{
    PurchaseHistory.find({authorized:false})
        .then(history => res.json(history.reverse()))
        .catch(err => res.status(400).json('Error: ' +err))
});

router.route('/authorized').get((req, res) =>{
    PurchaseHistory.find({authorized:true})
        .then(history => res.json(history.reverse()))
        .catch(err => res.status(400).json('Error: ' +err))
});

router.route('/find/:itemname').get((req, res) =>{
    PurchaseHistory.find({itemName:req.params.itemname, authorized: true})
        .then(history => res.json(history.reverse()))
        .catch(err => res.status(400).json('Error: ' +err))
});

router.route('/findMonth/:itemname').get((req, res) =>{
    let months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
    let result = []
    let date
    PurchaseHistory.find({itemName:req.params.itemname, authorized: true})
        .then(history => {
            history.map((item)=>{
                date = item.date.toString()
                monthNumber = new Date().getMonth()
                thisMonth = months[monthNumber]
                if(date.includes(thisMonth)){
                    result.push(item)
                }
            })
            res.json(result)
        })
        .catch(err => res.status(400).json('Error: ' +err))
}); */

module.exports = router;