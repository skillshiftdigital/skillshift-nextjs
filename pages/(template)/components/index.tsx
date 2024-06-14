// pages/all-components-block-feature.tsx
import React from 'react';

// Import components
import BlockFeatureEight from '@/components/block-feature/block-feature-eight';
import BlockFeatureEleven from '@/components/block-feature/block-feature-eleven';
import BlockFeatureFifteen from '@/components/block-feature/block-feature-fifteen';
import BlockFeatureFive from '@/components/block-feature/block-feature-five';
import BlockFeatureFour from '@/components/block-feature/block-feature-four';
import BlockFeatureFourteen from '@/components/block-feature/block-feature-fourteen';
import BlockFeatureNine from '@/components/block-feature/block-feature-nine';
import BlockFeatureSeven from '@/components/block-feature/block-feature-seven';
import BlockFeatureSix from '@/components/block-feature/block-feature-six';
import BlockFeatureTen from '@/components/block-feature/block-feature-ten';
import BlockFeatureThirteen from '@/components/block-feature/block-feature-thirteen';
import BlockFeatureThree from '@/components/block-feature/block-feature-three';
import BlockFeatureTwelve from '@/components/block-feature/block-feature-twelve';
import BlockFeatureTwo from '@/components/block-feature/block-feature-two';

// Define a mapping of block-feature to their components
const blockFeatureMap = [
  { name: 'Block Feature Eight', component: BlockFeatureEight },
  { name: 'Block Feature Eleven', component: BlockFeatureEleven },
  { name: 'Block Feature Fifteen', component: BlockFeatureFifteen },
  { name: 'Block Feature Five', component: BlockFeatureFive },
  { name: 'Block Feature Four', component: BlockFeatureFour },
  { name: 'Block Feature Fourteen', component: BlockFeatureFourteen },
  { name: 'Block Feature Nine', component: BlockFeatureNine },
  { name: 'Block Feature Seven', component: BlockFeatureSeven },
  { name: 'Block Feature Six', component: BlockFeatureSix },
  { name: 'Block Feature Ten', component: BlockFeatureTen },
  { name: 'Block Feature Thirteen', component: BlockFeatureThirteen },
  { name: 'Block Feature Three', component: BlockFeatureThree },
  { name: 'Block Feature Twelve', component: BlockFeatureTwelve },
  { name: 'Block Feature Two', component: BlockFeatureTwo },
];

const AllBlockFeaturePage = () => {
  return (
    <div>
      <h1>All Block Feature Components</h1>
      <div>
        <h2>Block Feature</h2>
        {blockFeatureMap.map(({ name, component: Component }, index) => (
          <div key={index} style={{ border: '1px solid #ccc', margin: '10px 0', padding: '10px' }}>
            <h3>{name}</h3>
            <Component />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllBlockFeaturePage;
