import React, { useState } from 'react';
import { 
  Typography, 
  Box, 
  Grid, 
  Card, 
  CardContent, 
  Select, 
  MenuItem, 
  FormControl, 
  InputLabel, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper,
  useTheme, 
  useMediaQuery 
} from '@mui/material';
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

// Data from our study
const studyData = {
  economicImpact: 5,
  digitalAdoptionRates: {
    firstWorld: 87,
    secondWorld: 43,
    thirdWorld: 17
  },
  projectedDivideIncrease: 40,
  gdpPerCapita: {
    firstWorld: { min: 45000, max: 85000 },
    secondWorld: { min: 5000, max: 25000 },
    thirdWorld: { min: 500, max: 5000 }
  }
};

const countryData = [
  { country: "USA", region: "1st World", avgSalary: 65000, ahrefs: 0.04, semrush: 0.04, moz: 0.03, gdpPerCapita: 63544, internetPenetration: 89 },
  { country: "Germany", region: "1st World", avgSalary: 53000, ahrefs: 0.05, semrush: 0.04, moz: 0.04, gdpPerCapita: 46445, internetPenetration: 88 },
  { country: "Brazil", region: "2nd World", avgSalary: 8500, ahrefs: 0.28, semrush: 0.27, moz: 0.24, gdpPerCapita: 6796, internetPenetration: 74 },
  { country: "India", region: "2nd World", avgSalary: 6000, ahrefs: 0.4, semrush: 0.38, moz: 0.34, gdpPerCapita: 1900, internetPenetration: 50 },
  { country: "Nigeria", region: "3rd World", avgSalary: 2000, ahrefs: 1.19, semrush: 1.15, moz: 1.01, gdpPerCapita: 2085, internetPenetration: 42 },
  { country: "Ethiopia", region: "3rd World", avgSalary: 800, ahrefs: 2.98, semrush: 2.87, moz: 2.54, gdpPerCapita: 936, internetPenetration: 23 }
];

const SEOToolsAffordabilityWhitepaper = () => {
  const [selectedRegion, setSelectedRegion] = useState('All');
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));

  const filteredData = selectedRegion === 'All'
    ? countryData
    : countryData.filter(item => item.region === selectedRegion);

  const averageAffordability = (filteredData.reduce((sum, item) => sum + item.ahrefs + item.semrush + item.moz, 0) / (filteredData.length * 3) * 100).toFixed(2);

  const digitalAdoptionData = [
    { name: '1st World', value: studyData.digitalAdoptionRates.firstWorld },
    { name: '2nd World', value: studyData.digitalAdoptionRates.secondWorld },
    { name: '3rd World', value: studyData.digitalAdoptionRates.thirdWorld },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

  const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>{title}</Typography>
      {children}
    </Box>
  );

  return (
    <Box sx={{ 
      p: { xs: 2, sm: 3, md: 4 }, 
      bgcolor: '#F5F5F5', 
      minHeight: '100vh',
      maxWidth: isLargeScreen ? '1200px' : '100%',
      margin: '0 auto'
    }}>
      <Typography variant="h3" align="center" sx={{ fontWeight: 700, mb: 3 }}>
        Bridging the Digital Divide: Global Economic Disparities in SEO Tool Accessibility
      </Typography>

      <Typography variant="h6" align="center" sx={{ mb: 4 }}>
        An Interactive White Paper
      </Typography>

      <Section title="1. Executive Summary">
        <Typography variant="body1">
          In today's digital-first economy, access to sophisticated marketing tools is crucial for businesses to compete on a global scale. However, our comprehensive analysis reveals stark disparities in the affordability and accessibility of these tools across different regions of the world. This white paper examines the implications of this digital divide, its impact on global economic development, and proposes strategic solutions to address this growing concern.
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          Key findings include:
        </Typography>
        <ul>
          <li>Limited access to digital marketing tools in developing nations results in a {studyData.economicImpact}% reduction in potential GDP growth annually.</li>
          <li>The digital marketing capability gap between developed and developing nations could widen by {studyData.projectedDivideIncrease}% over the next decade.</li>
          <li>Significant variations in average salaries across First World, Second World, and Third World countries directly impact the affordability of SEO tools.</li>
          <li>There's a strong correlation between a country's GDP per capita, internet penetration, and the affordability of digital marketing tools.</li>
        </ul>
      </Section>

      <Section title="2. Introduction">
        <Typography variant="body1">
          The dawn of the digital age has transformed the way businesses operate and market themselves. As e-commerce and online presence become increasingly crucial for business success, the role of Search Engine Optimization (SEO) and digital marketing tools has become paramount. However, the accessibility of these tools varies greatly across different regions of the world, creating a digital divide that threatens to exacerbate existing economic inequalities.
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          This white paper aims to shed light on the economic realities that underpin this digital divide, examining how the cost of popular digital marketing tools relates to average incomes across various countries. By doing so, we seek to highlight the challenges faced by businesses and entrepreneurs in developing nations and propose actionable strategies to level the playing field.
        </Typography>
      </Section>

      <Section title="3. Global Economic Landscape: A Comparative Analysis">
        <Typography variant="body1" sx={{ mb: 2 }}>
          To understand the context of our discussion, it's crucial to first examine the economic landscape across different regions of the world. We've categorized countries into three broad groups: First World, Second World, and Third World.
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Category</TableCell>
                <TableCell>GDP per Capita Range</TableCell>
                <TableCell>Digital Adoption Rate</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>First World</TableCell>
                <TableCell>${studyData.gdpPerCapita.firstWorld.min.toLocaleString()} - ${studyData.gdpPerCapita.firstWorld.max.toLocaleString()}</TableCell>
                <TableCell>{studyData.digitalAdoptionRates.firstWorld}%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Second World</TableCell>
                <TableCell>${studyData.gdpPerCapita.secondWorld.min.toLocaleString()} - ${studyData.gdpPerCapita.secondWorld.max.toLocaleString()}</TableCell>
                <TableCell>{studyData.digitalAdoptionRates.secondWorld}%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Third World</TableCell>
                <TableCell>${studyData.gdpPerCapita.thirdWorld.min.toLocaleString()} - ${studyData.gdpPerCapita.thirdWorld.max.toLocaleString()}</TableCell>
                <TableCell>{studyData.digitalAdoptionRates.thirdWorld}%</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Typography variant="body1" sx={{ mt: 2 }}>
          As we can see, there are significant disparities in economic output and digital adoption rates across these categories. These differences play a crucial role in determining the accessibility of digital marketing tools.
        </Typography>
      </Section>

      <Section title="4. SEO Tool Affordability Analysis">
        <Typography variant="body1" sx={{ mb: 2 }}>
          Our analysis reveals a striking disparity in the affordability of SEO tools across different economic regions. The following chart compares the cost of popular SEO tools as a percentage of average annual salary in various countries:
        </Typography>
        <Card>
          <CardContent>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
              <Typography variant="h6" sx={{ fontWeight: 700 }}>SEO Tool Costs Comparison</Typography>
              <FormControl size="small" sx={{ minWidth: 120 }}>
                <InputLabel id="region-select-label">Region</InputLabel>
                <Select
                  labelId="region-select-label"
                  value={selectedRegion}
                  label="Region"
                  onChange={(e) => setSelectedRegion(e.target.value)}
                >
                  <MenuItem value="All">All Regions</MenuItem>
                  <MenuItem value="1st World">1st World</MenuItem>
                  <MenuItem value="2nd World">2nd World</MenuItem>
                  <MenuItem value="3rd World">3rd World</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={filteredData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="country" />
                <YAxis label={{ value: '% of Annual Salary', angle: -90, position: 'insideLeft' }} />
                <Tooltip />
                <Legend />
                <Bar dataKey="ahrefs" name="Ahrefs" fill="#8884d8" />
                <Bar dataKey="semrush" name="SEMrush" fill="#82ca9d" />
                <Bar dataKey="moz" name="Moz" fill="#ffc658" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Typography variant="body1" sx={{ mt: 2 }}>
          As we can observe, the cost of SEO tools as a percentage of annual salary varies dramatically across regions. In First World countries, these tools typically cost between 3-5% of the average annual salary. However, in Third World countries, the same tools can cost over 100% of the average annual salary, making them prohibitively expensive for many businesses and entrepreneurs.
        </Typography>
      </Section>

      <Section title="5. Implications of the Digital Divide">
        <Typography variant="body1" sx={{ mb: 2 }}>
          The disparity in access to digital marketing tools has far-reaching implications for global economic development and competitiveness:
        </Typography>
        <ul>
          <li><strong>Limited Global Competitiveness:</strong> Businesses in developing nations, unable to afford these tools, struggle to compete effectively in the global digital marketplace.</li>
          <li><strong>Stunted Digital Economy Growth:</strong> Without access to advanced digital marketing tools, the growth of digital economies in developing nations may be significantly hampered.</li>
          <li><strong>Brain Drain:</strong> The lack of access to essential tools may drive talented individuals from developing nations to seek opportunities in more digitally advanced economies.</li>
          <li><strong>Reduced Innovation:</strong> Limited access to digital resources can stifle innovation, preventing potentially groundbreaking ideas from reaching a global audience.</li>
        </ul>
        <Typography variant="body1" sx={{ mt: 2 }}>
          Our study estimates that limited access to digital marketing tools results in a {studyData.economicImpact}% reduction in potential GDP growth annually for developing nations. Moreover, if current trends continue, the digital marketing capability gap between developed and developing nations could widen by {studyData.projectedDivideIncrease}% over the next decade.
        </Typography>
      </Section>

      <Section title="6. Correlation Analysis">
        <Typography variant="body1" sx={{ mb: 2 }}>
          Our research reveals strong correlations between SEO tool affordability and key economic indicators:
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>GDP per Capita vs SEO Tool Affordability</Typography>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={filteredData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="country" />
                    <YAxis yAxisId="left" orientation="left" stroke="#8884d8" 
                      label={{ value: 'GDP per Capita ($)', angle: -90, position: 'insideLeft' }} />
                    <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" 
                      label={{ value: 'Avg. SEO Tool Cost (% of Salary)', angle: 90, position: 'insideRight' }} />
                    <Tooltip />
                    <Legend />
                    <Line yAxisId="left" type="monotone" dataKey="gdpPerCapita" stroke="#8884d8" />
                    <Line yAxisId="right" type="monotone" dataKey="ahrefs" stroke="#82ca9d" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>Internet Penetration vs SEO Tool Affordability</Typography>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={filteredData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="country" />
                    <YAxis yAxisId="left" orientation="left" stroke="#8884d8" 
                      label={{ value: 'Internet Penetration (%)', angle: -90, position: 'insideLeft' }} />
                    <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" 
                      label={{ value: 'Avg. SEO Tool Cost (% of Salary)', angle: 90, position: 'insideRight' }}
                      />
                    <Tooltip />
                    <Legend />
                    <Line yAxisId="left" type="monotone" dataKey="internetPenetration" stroke="#8884d8" />
                    <Line yAxisId="right" type="monotone" dataKey="ahrefs" stroke="#82ca9d" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Typography variant="body1" sx={{ mt: 2 }}>
          These charts illustrate strong correlations between a country's economic indicators and the affordability of SEO tools. Countries with higher GDP per capita and internet penetration rates tend to have more affordable access to these tools, creating a potential feedback loop that could exacerbate global digital inequality.
        </Typography>
      </Section>

      <Section title="7. Strategies for Bridging the Gap">
        <Typography variant="body1" sx={{ mb: 2 }}>
          Addressing the digital divide requires a multi-faceted approach involving various stakeholders. We propose the following strategies:
        </Typography>
        <ol>
          <li>
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>Tiered Pricing Models</Typography>
            <Typography variant="body1">
              Tech companies could implement regionally-adjusted pricing models to make their tools more accessible in developing economies. This could involve offering discounted rates based on local economic conditions.
            </Typography>
          </li>
          <li>
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>Free Tier Expansion</Typography>
            <Typography variant="body1">
              Expanding free tiers of digital marketing tools can provide basic access to businesses in developing nations, allowing them to start leveraging these tools for growth.
            </Typography>
          </li>
          <li>
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>Digital Marketing Education Initiatives</Typography>
            <Typography variant="body1">
              Investments in digital marketing education can help businesses in developing nations maximize the value of the tools they can access. This could involve partnerships with local educational institutions or online learning platforms.
            </Typography>
          </li>
          <li>
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>Open Source Alternatives</Typography>
            <Typography variant="body1">
              Development and promotion of open-source alternatives to premium digital marketing tools can provide accessible options for businesses in developing economies.
            </Typography>
          </li>
        </ol>
      </Section>

      <Section title="8. The Role of Tech Companies">
        <Typography variant="body1" sx={{ mb: 2 }}>
          Tech companies have a crucial role to play in addressing this digital divide:
        </Typography>
        <ul>
          <li>
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>Corporate Social Responsibility (CSR) Programs</Typography>
            <Typography variant="body1">
              Tech companies can incorporate digital equity into their CSR programs, providing subsidized or free access to their tools in developing economies.
            </Typography>
          </li>
          <li>
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>Partnerships with Local Organizations</Typography>
            <Typography variant="body1">
              Collaborations with local organizations can help tech companies better understand and address the specific needs of businesses in developing nations.
            </Typography>
          </li>
          <li>
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>Investment in Local Digital Infrastructure</Typography>
            <Typography variant="body1">
              Tech companies can contribute to the development of digital infrastructure in emerging economies, creating a more conducive environment for digital business growth.
            </Typography>
          </li>
        </ul>
      </Section>

      <Section title="9. Policy Recommendations">
        <Typography variant="body1" sx={{ mb: 2 }}>
          Policymakers and international organizations can play a pivotal role in bridging the digital divide:
        </Typography>
        <ul>
          <li>
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>Digital Tool Subsidies</Typography>
            <Typography variant="body1">
              Governments could provide subsidies or tax incentives for businesses investing in digital marketing tools.
            </Typography>
          </li>
          <li>
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>International Digital Development Funds</Typography>
            <Typography variant="body1">
              International organizations could establish funds specifically aimed at improving access to digital marketing tools in developing nations.
            </Typography>
          </li>
          <li>
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>Digital Skills Training Programs</Typography>
            <Typography variant="body1">
              Investment in comprehensive digital skills training programs can help businesses make the most of available digital resources.
            </Typography>
          </li>
          <li>
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>Promotion of Digital Free Trade Zones</Typography>
            <Typography variant="body1">
              Establishing digital free trade zones could provide businesses in developing nations with improved access to global digital markets.
            </Typography>
          </li>
        </ul>
      </Section>

      <Section title="10. Conclusion and Future Outlook">
        <Typography variant="body1" sx={{ mb: 2 }}>
          The digital divide in access to marketing tools represents a significant challenge to global economic equity. However, with concerted effort from tech companies, policymakers, and international organizations, we can work towards a more equitable digital future.
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          By implementing tiered pricing models, expanding education initiatives, and fostering the development of accessible alternatives, we can begin to level the playing field. As we move forward, it's crucial that we continue to monitor this issue and adapt our strategies to ensure that the benefits of the digital revolution are accessible to all, regardless of geographic or economic circumstances.
        </Typography>
        <Typography variant="body1">
          The potential for innovation, growth, and prosperity that could be unlocked by bridging this divide makes it an endeavor well worth pursuing. As we look to the future, we envision a world where digital marketing tools are accessible to businesses of all sizes, in all regions, fostering a truly global and inclusive digital economy.
        </Typography>
      </Section>

      <Section title="About This White Paper">
        <Typography variant="body1">
          This interactive white paper was created using React and various data visualization libraries. It aims to present complex data in an accessible, engaging format. For any questions or further information, please contact our research team.
        </Typography>
      </Section>
    </Box>
  );
};

export default SEOToolsAffordabilityWhitepaper;