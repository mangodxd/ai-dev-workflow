const express = require('express');
const { errorHandler, AppError } = require('./middleware/errorHandler');
const app = express();

// Refactored: Clean, no try-catch blocks needed here
app.get('/users/:id', async (req, res, next) => {
    const user = await db.findUser(req.params.id);
    if (!user) return next(new AppError("User not found", 404));
    res.json(user);
});

app.use(errorHandler);
app.listen(3000);