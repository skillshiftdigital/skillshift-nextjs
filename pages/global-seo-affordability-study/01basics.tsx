import React from 'react';
import { 
  Typography, Box, Grid, Card, CardContent, 
  List, ListItem, ListItemText, Tooltip
} from '@mui/material';
import { Helmet } from 'react-helmet';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer,
  PieChart, Pie, Cell, LineChart, Line, AreaChart, Area, RadarChart, 
  PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Treemap
} from 'recharts';

interface BasicMetrics {
  averageAffordability: number;
  mostAffordableCountry: string;
  leastAffordableCountry: string;
}

interface ToolData {
  tool: string;
  cost: number;
}

interface RegionData {
  name: string;
  value: number;
}

interface TrendData {
  year: number;
  affordabilityIndex: number;
}

interface Stage1Props {
  basicMetrics: BasicMetrics;
  toolComparisonData: ToolData[];
  regionData: RegionData[];
  trendData: TrendData[];
  marketShareData: RegionData[];
}

const ExecutiveSEOAffordabilityOverview: React.FC<Stage1Props> = ({ 
  basicMetrics, toolComparisonData, regionData, trendData, marketShareData 
}) => {
  return (
    <>
      <Helmet>
        <title>Executive Overview: SEO Tool Affordability | Global Digital Landscape</title>
        <meta name="description" content="Comprehensive analysis of global SEO tool affordability, market trends, and regional disparities. Essential insights for digital strategy decision-makers." />
        <meta name="keywords" content="SEO tools, affordability, digital marketing, global analysis, market trends" />
      </Helmet>
      <Box className="main-page-wrapper">
        <Typography variant="h2" gutterBottom align="center" className="fw-500">
          Executive Overview: SEO Tool Affordability
        </Typography>
        
        <Grid container spacing={3} sx={{ mb: 4 }}>
          {[
            { title: "Average Affordability", value: `${basicMetrics.averageAffordability.toFixed(2)}%`, subtitle: "of annual income" },
            { title: "Most Affordable Market", value: basicMetrics.mostAffordableCountry, subtitle: "lowest % of income" },
            { title: "Least Affordable Market", value: basicMetrics.leastAffordableCountry, subtitle: "highest % of income" }
          ].map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card className="tran3s">
                <CardContent>
                  <Typography variant="h6" gutterBottom className="fw-500">{item.title}</Typography>
                  <Typography variant="h4" sx={{ my: 2 }} className="fw-500">{item.value}</Typography>
                  <Typography variant="body2" color="text.secondary">{item.subtitle}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Card className="tran3s" sx={{ mb: 4 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom className="fw-500">SEO Tool Cost Comparison</Typography>
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={toolComparisonData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="tool" />
                <YAxis label={{ value: 'Cost (% of annual income)', angle: -90, position: 'insideLeft' }} />
                <Legend />
                <Bar dataKey="cost" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12} md={6}>
            <Card className="tran3s">
              <CardContent>
                <Typography variant="h6" gutterBottom className="fw-500">Regional Affordability Distribution</Typography>
                <ResponsiveContainer width="100%" height={350}>
                  <PieChart>
                    <Pie
                      data={regionData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {regionData.map((entry, index) => (
                        <Cell key={`cell-${index}`} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card className="tran3s">
              <CardContent>
                <Typography variant="h6" gutterBottom className="fw-500">Affordability Trend Over Time</Typography>
                <ResponsiveContainer width="100%" height={350}>
                  <LineChart data={trendData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis label={{ value: 'Affordability Index', angle: -90, position: 'insideLeft' }} />
                    <Legend />
                    <Line type="monotone" dataKey="affordabilityIndex" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Card className="tran3s" sx={{ mb: 4 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom className="fw-500">SEO Tool Market Share</Typography>
            <ResponsiveContainer width="100%" height={350}>
              <Treemap
                data={marketShareData}
                dataKey="value"
                aspectRatio={4 / 3}
                stroke="#fff"
              >
              </Treemap>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="tran3s" sx={{ mb: 4 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom className="fw-500">Affordability Across Tool Categories</Typography>
            <ResponsiveContainer width="100%" height={350}>
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={toolComparisonData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="tool" />
                <PolarRadiusAxis angle={30} domain={[0, 'auto']} />
                <Radar name="Affordability" dataKey="cost" />
                <Legend />
              </RadarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="tran3s" sx={{ mb: 4 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom className="fw-500">SEO Tool Adoption Over Time</Typography>
            <ResponsiveContainer width="100%" height={350}>
              <AreaChart data={trendData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Area type="monotone" dataKey="affordabilityIndex" stackId="1" />
                <Area type="monotone" dataKey="adoption" stackId="1" />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="tran3s" sx={{ mb: 4 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom className="fw-500">Key Insights</Typography>
            <List>
              {[
                "SEO tool affordability varies significantly across regions",
                "Emerging markets show the highest growth potential for SEO tool adoption",
                "Price sensitivity is a crucial factor in tool selection for SMBs",
                "Cloud-based solutions are becoming increasingly popular due to lower upfront costs"
              ].map((insight, index) => (
                <ListItem key={index}>
                  <ListItemText primary={`${index + 1}. ${insight}`} />
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>

        <Card className="tran3s" sx={{ mb: 4 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom className="fw-500">Quick Q&A</Typography>
            <Typography variant="subtitle1" gutterBottom>Q: What factors contribute to SEO tool affordability?</Typography>
            <Typography variant="body1" paragraph>
              A: SEO tool affordability is influenced by several factors, including:
            </Typography>
            <List>
              {[
                "Average income levels in different countries",
                "Pricing strategies of SEO tool providers",
                "Exchange rates and purchasing power parity",
                "Market competition and availability of alternatives",
                "Economic conditions and digital marketing budgets"
              ].map((factor, index) => (
                <ListItem key={index}>
                  <ListItemText primary={`• ${factor}`} />
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>

        <Card className="tran3s">
          <CardContent>
            <Typography variant="h6" gutterBottom className="fw-500">Executive Summary</Typography>
            <Typography variant="body1" paragraph>
              The global landscape of SEO tool affordability presents both challenges and opportunities. While developed markets show high adoption rates, emerging economies demonstrate significant growth potential. The average affordability of SEO tools stands at {basicMetrics.averageAffordability.toFixed(2)}% of annual income, with substantial variations across regions.
            </Typography>
            <Typography variant="body1" paragraph>
              Key trends include the rising popularity of cloud-based solutions, increasing price sensitivity among SMBs, and a growing divide between high-end enterprise tools and more affordable alternatives. To capitalize on these trends, stakeholders should consider:
            </Typography>
            <List>
              {[
                "Developing region-specific pricing strategies",
                "Investing in emerging markets with high growth potential",
                "Creating scalable solutions that cater to various business sizes",
                "Emphasizing value proposition and ROI in marketing efforts"
              ].map((recommendation, index) => (
                <ListItem key={index}>
                  <ListItemText primary={`• ${recommendation}`} />
                </ListItem>
              ))}
            </List>
            <Typography variant="body1">
              By addressing affordability concerns and tailoring offerings to specific market needs, SEO tool providers can expand their global footprint and contribute to a more inclusive digital marketing ecosystem.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default ExecutiveSEOAffordabilityOverview;
