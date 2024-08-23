import React from 'react';
import { Typography, Box, Grid, Card, CardContent, Button } from '@mui/material';

const Stage4SolutionsAndAction: React.FC = () => {
  const solutions = [
    { title: "Tiered Pricing", description: "Implement region-specific pricing models" },
    { title: "Open Source Tools", description: "Develop and promote free alternatives" },
    { title: "Education Programs", description: "Invest in SEO training in underserved regions" }
  ];

  return (
    <Box>
      <Typography variant="h6" gutterBottom>Solutions and Taking Action</Typography>
      
      <Grid container spacing={2}>
        {solutions.map((solution, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="subtitle2">{solution.title}</Typography>
                <Typography variant="body2">{solution.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box mt={2}>
        <Typography variant="subtitle1" gutterBottom>Take Action</Typography>
        <Button variant="contained" color="primary" sx={{ mr: 1 }}>
          Support Open Source
        </Button>
        <Button variant="outlined" color="primary">
          Learn More
        </Button>
      </Box>
    </Box>
  );
};

export default Stage4SolutionsAndAction;