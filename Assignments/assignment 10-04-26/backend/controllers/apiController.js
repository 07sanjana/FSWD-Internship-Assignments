exports.getMessage = (req, res) => {
  res.json({
    success: true,
    message: "Hello from backend 🚀"
  });
};