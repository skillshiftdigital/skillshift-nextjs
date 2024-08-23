import React from 'react';
import { Typography, Box, Grid, Card, CardContent } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface CountryData {
  country: string;
  region: string;
  affordabilityScore: number;
}

interface Stage3Props {
  countryData: CountryData[];
}

const Stage3AnalyzingImplications: React.FC<Stage3Props> = ({ countryData }) => {
  const regionData = countryData.reduce((acc, country) => {
    if (!acc[country.region]) {
      acc[country.region] = [];
    }
    acc[country.region].push(country.affordabilityScore);
    return acc;
  }, {} as Record<string, number[]>);

  const implicationsData = Object.entries(regionData).map(([region, scores]) => ({
    region,
    avgAffordability: scores.reduce((sum, score) => sum + score, 0) / scores.length
  }));

  return (
    <Box>
      <Typography variant="h6" gutterBottom>Implications of SEO Tool Affordability</Typography>
      
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={implicationsData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="region" />
          <YAxis label={{ value: 'Avg Affordability Score', angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <Legend />
          <Bar dataKey="avgAffordability" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>

      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
              <Typography variant="subtitle2">Market Entry Barriers</Typography>
              <Typography variant="body2">
                High SEO tool costs create significant barriers for businesses in low-income countries.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
              <Typography variant="subtitle2">Digital Divide</Typography>
              <Typography variant="body2">
                The affordability gap may lead to a widening digital divide between regions.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Stage3AnalyzingImplications;