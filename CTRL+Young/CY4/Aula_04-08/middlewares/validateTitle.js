const validateTitle = (req, res, next) => {
  const { title, author, year, genre } = req.body;

  if (!title || typeof title !== "string" || title.length < 3) {
    return res.status(400).json({
      error: "O título é obrigatório e deve ter pelo menos 3 caracteres.",
    });
  }

  next();
};

module.exports = validateTitle;