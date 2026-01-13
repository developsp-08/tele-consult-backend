exports.getTest = (req, res) => {
  try {
    res.status(200).json({ message: "API Working Fine" });
  } catch (error) {
    res.status(500).json({ Message: "API Error" });
  }
};
