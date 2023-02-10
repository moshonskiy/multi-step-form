const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const fileUpload = require('express-fileupload');
const fs = require('fs');

const app = express();

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
});

app.use(fileUpload({
    createParentPath: true,
}))

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

const PORT = process.env.PORT || 5000;

app.post('/', limiter, async (req, res) => {
    try {
        const dir = __dirname + '/uploads';

        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
        }

        if (req.files && req.files.files) {
            [req.files.files].flat().map((file) => {
                file.mv('./uploads/' + file.name);
            })
        }

        fs.writeFile('./uploads/data.json', JSON.stringify(req.body), 'utf-8', () => {
            res.send({
                status: true,
                message: 'Data is uploaded',
            });
        })
    } catch (e) {
        res.status(500).send(e.message);
    }
});

app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`);
});
