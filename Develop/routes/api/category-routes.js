const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
console.log({Category})
router.get('/', async(req, res) => {

try {
  const allcategories =  await Category.findAll({
    include: [Product],
  })
  res.status(200).json(allcategories)}
  catch (err) {

  console.error(err)
  res.status(500).json(err)
}

// find all categories
    
  
  }),
  router.get('/:id', (req, res) => {
    Category.findOne({
      where: {
        id: req.params.id,
      },
      include: [Product],
    })
      .then((category) => res.json(category))
      .catch((err) => res.status(400).json(err));
  });

  router.post('/', (req, res) => {
    Category.create(req.body)
      .then((category) => res.status(200).json(category))
      .catch((err) => res.status(400).json(err));
  });

  router.put('/:id', (req, res) => {
    Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
      .then((category) => res.status(200).json(category))
      .catch(( err) => res.status(400).json(err));
  });

    router.delete('/:id', (req, res) => {
      Category.destroy({
        where: {
          id:req.params.id
        },
      })
      .then((category) => res.status(200).json(product))
      .catch(( err) => res.status(400).json(err));
});

module.exports = router;
