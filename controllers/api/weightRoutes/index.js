const router = require('express').Router();
const goalRoutes = require('./Goal');
const weighRoutes = require('./weighRoutes');

router.use('/', weighRoutes);
router.use('/goal', goalRoutes);

module.exports = router;