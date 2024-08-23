import React, { memo } from 'react';
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { scaleQuantile } from "d3-scale";

interface CountryData {
  country: string;
  region: string;
  avgSalary: number;
  ahrefs: number;
  semrush: number;
  moz: number;
  screamingFrog: number;
  surferSEO: number;
  spyFu: number;
  majestic: number;
}

interface MapChartProps {
  data: CountryData[];
  setTooltipContent: (content: string) => void;
}

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const MapChart: React.FC<MapChartProps> = memo(({ data, setTooltipContent }) => {
  // Precompute color scale for ahrefs data
  const colorScale = scaleQuantile<string>()
    .domain(data.map(d => d.ahrefs))
    .range([
      "#ffedea", "#ffcec5", "#ffad9f", "#ff8a75", "#ff5533", "#e2492d", "#be3d26", "#9a311f", "#782618"
    ]);

  return (
    <ComposableMap data-tip="" projectionConfig={{ scale: 150 }}>
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => {
            const d = data.find((s) => s.country === geo.properties.name);
            const color = d ? colorScale(d.ahrefs) : "#F5F4F6";

            return (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill={color}
                stroke="#D6D6DA"
                strokeWidth={0.5}
                onMouseEnter={() => {
                  const { name } = geo.properties;
                  const tooltip = d ? `${name}: ${(d.ahrefs * 100).toFixed(2)}%` : `${name}: No data`;
                  setTooltipContent(tooltip);
                }}
                onMouseLeave={() => {
                  setTooltipContent("");
                }}
                style={{
                  default: { outline: "none" },
                  hover: { outline: "none", fill: color },
                  pressed: { outline: "none" },
                }}
              />
            );
          })
        }
      </Geographies>
    </ComposableMap>
  );
});

export default MapChart;
