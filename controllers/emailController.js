const Email = require('../models/Email');

// Add Email
exports.addEmail = async (req, res) => {
  const { email } = req.body;

  // Validate email format
  if (!email || !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
    return res.status(400).json({ message: 'Invalid email format' });
  }

  try {
    // Check if email already exists
    const existingEmail = await Email.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    // Save the email
    const newEmail = new Email({ email });
    await newEmail.save();

    res.status(201).json({ message: 'Email saved successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};
