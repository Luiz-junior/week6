const File = require('../models/File');

class FileController {

    async store(req, res) {
        console.log(req.file);
        //const box = await Box.create(req.body);

        //return res.json(box);
        return res.send('ok');
    };
};

module.exports = new FileController();

