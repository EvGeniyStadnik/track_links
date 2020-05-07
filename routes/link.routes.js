const { Router } = require('express');
const shortid = require('shortid');

const config = require('config')
const Link = require('../models/Link');
const authMiddleWare = require('../middlewares/auth.middleware')

const router = Router();

router.post('/generate', authMiddleWare, async (req, res) => {
  try {
    const {from} = req.body;
    const baseUrl = config.get('baseUrl');
    const existsLink = await Link.findOne({from});

    if(existsLink){
      return res.json({link: existsLink})
    }

    const code = shortid.generate();
    const to = baseUrl + '/t/' + code;
    const owner = req.user && req.user.userId;

    const link = new Link({
      from,
      to,
      code,
      owner
    });

    await link.save();

    res.status(201).json({link}); // 201 - Created
  } catch (e) {
    res.status(500).json({message: `Can not generate link ${e.message}`})
  }
});

router.get('/', authMiddleWare, async (req, res) => {
  try {
    const owner = req.user && req.user.userId; // req.user from authMiddleWare
    const links = await Link.find({owner});
    res.json(links);
  } catch (e) {
    res.status(500).json({message: `Can not find your links ${e.message}`})
  }
})

router.get('/:id', authMiddleWare, async (req, res) => {
  try {
    const id = req.params.id;
    const link = await Link.findById(id)
    res.json({link})
  } catch (e) {
    res.status(500).json({message: `Can not find this link ${e.message}`})
  }
})

module.exports = router;
