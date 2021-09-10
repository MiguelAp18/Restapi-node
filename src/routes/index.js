const { Router } = require('express');
const router = Router();

router.get('/test', (req, res) => {
    const data = {
       "name": "Miguel",
       "website": "facebook.com" 
    };
    res.json(data);
});

module.exports = router;