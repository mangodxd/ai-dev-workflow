const express = require('express');
const app = express();

// old code: manually handling each call, messy
app.get('/users/:id', async (req, res) => {
    try {
        const user = await db.findUser(req.params.id);
        if (!user) {
            return res.status(404).send({ message: "user not found" });
        }
        res.json(user);
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
});

app.listen(3000);