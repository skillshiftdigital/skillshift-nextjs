import React, { useState } from 'react';
import { Typography, Box, Tooltip, Grid, Paper } from '@mui/material';
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { scaleQuantile } from "d3-scale";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

interface CountryData {
  country: string;
  region: string;
  affordabilityScore: number;
}

interface Stage2Props {
  countryData: CountryData[];
}

const Stage2ExploringDisparities: React.FC<Stage2Props> = ({ countryData }) => {
  const [tooltipContent, setTooltipContent] = useState("");

  const colorScale = scaleQuantile<string>()
    .domain(countryData.map(d => d.affordabilityScore))
    .range([
      "#ffedea", "#ffcec5", "#ffad9f", "#ff8a75", "#ff5533", "#e2492d", "#be3d26", "#9a311f", "#782618"
    ]);

  return (
    <Box>
      <Typography variant="h6" gutterBottom>Global SEO Tool Affordability</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Paper elevation={3} sx={{ p: 2, height: '100%' }}>
            <Tooltip title={tooltipContent} followCursor>
              <Box sx={{ height: 300, width: '100%' }}>
                <ComposableMap projectionConfig={{ scale: 80 }}>
                  <Geographies geography={geoUrl}>
                    {({ geographies }) =>
                      geographies.map((geo) => {
                        const d = countryData.find(s => s.country === geo.properties.name);
                        return (
                          <Geography
                            key={geo.rsmKey}
                            geography={geo}
                            fill={d ? colorScale(d.affordabilityScore) : "#F5F4F6"}
                            stroke="#D6D6DA"
                            strokeWidth={0.5}
                            onMouseEnter={() => {
                              const { name } = geo.properties;
                              setTooltipContent(`${name}: ${d ? d.affordabilityScore.toFixed(2) : 'No data'}`);
                            }}
                            onMouseLeave={() => {
                              setTooltipContent("");
                            }}
                            style={{
                              default: { outline: "none" },
                              hover: { outline: "none", fill: d ? colorScale(d.affordabilityScore) : "#F5F4F6" },
                              pressed: { outline: "none" },
                            }}
                          />
                        );
                      })
                    }
                  </Geographies>
                </ComposableMap>
              </Box>
            </Tooltip>
            <Typography variant="body2" sx={{ mt: 1 }}>
              Darker colors indicate lower affordability (higher percentage of income)
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 2, height: '100%' }}>
            <Typography variant="subtitle1" gutterBottom>Map Information</Typography>
            <Typography variant="body2" paragraph>
              This map visualizes the affordability of SEO tools across different countries.
            </Typography>
            <Typography variant="body2" paragraph>
              The affordability score is calculated as the average cost of Ahrefs, SEMrush, and Moz as a percentage of the average annual income in each country.
            </Typography>
            <Typography variant="body2">
              Hover over countries to see their specific affordability scores.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Stage2ExploringDisparities;