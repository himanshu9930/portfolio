const express = require('express');
const { Resend } = require('resend');
const router = express.Router();

const resend = new Resend('re_fpKHk7e7_3ZfoCxpBRsR3G6K3m61iVuxQ');

router.post('/api/send-email', async (req, res) => {
  const { name, email, message } = req.body;
  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'himanshu9930@gmail.com',
      subject: `Portfolio Contact: ${name}`,
      html: `<p><b>Name:</b> ${name}</p><p><b>Email:</b> ${email}</p><p><b>Message:</b><br/>${message}</p>`
    });
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router; 