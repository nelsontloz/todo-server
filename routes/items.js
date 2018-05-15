var express = require('express');
var router = express.Router();
var Item = require('../mongoSchemas/todoItemSchema');

/* GET users listing. */
router.get('/', function(req, res, next) {
    Item.find({}, function (error, items) {
        if (error) {
            res.send(error, 500);
            return;
        }
        res.send(items);
    });
});

router.post('/', function(req, res, next) {
    var body = req.body;
    var item = new Item({
        content: body.content,
        creation: new Date()
    });

    item.save(function (error) {
        if (error) {
            res.send(error, 500);
            return;
        }
        res.send(true);
    });
});

router.put('/:itemId', function(req, res, next) {
    var body = req.body;
    var itemId = req.params.itemId;

    Item.updateOne({_id: itemId}, {content: body.content}, function(error, data) {
        if (error) {
            res.send(error, 500);
            return;
        }
        res.send(data, 200);
    });
});

module.exports = router;
