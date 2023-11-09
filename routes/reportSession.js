const express = require('express');
const router = express.Router();
const Curriculum = require('../models/report.curriculum.model')

router.post('/curriculum',async (req,res) => {
    try {
        const { selectedCurriculum, selectedFormat } = req.body;
    
        // Create a new curriculum report
        const newCurriculum = new Curriculum({
          name: selectedCurriculum,
          format: selectedFormat,
        });
    
        // Save the curriculum report to the database
        await newCurriculum.save();
    
        res.json({ message: 'Curriculum report saved successfully' });
      } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Internal server error' });
      }

})


module.exports = router