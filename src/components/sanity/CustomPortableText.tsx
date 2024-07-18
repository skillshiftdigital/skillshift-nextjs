import React from 'react';
import { PortableText, PortableTextComponents } from '@portabletext/react';
import Image from 'next/image';
import { urlFor } from '@/utils/sanity/client';
import dynamic from 'next/dynamic';

const MermaidDiagram = dynamic(() => import('./MermaidDiagram'), {
    loading: () => <p>Loading diagram...</p>,
    ssr: false
  });

const components: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      console.log('Image value:', JSON.stringify(value, null, 2));
      if (!value?.asset?._ref && !value?.asset?.url) {
        console.error('Invalid image data:', value);
        return <div>Invalid image data</div>;
      }
      const imageUrl = value.asset.url || urlFor(value).width(800).fit('max').auto('format').url();
      console.log('Image URL:', imageUrl);
      return (
        <div className="my-6 max-w-full">
          <Image
            src={imageUrl}
            alt={value.alt || ' '}
            width={800}
            height={600}
            layout="responsive"
            objectFit="contain"
          />
        </div>
      );
    },
    mermaidDiagram: ({ value }) => {
      if (!value?.code) {
        console.error('Invalid Mermaid diagram data:', value);
        return <div>Invalid Mermaid diagram data</div>;
      }
      return (
        <div className="my-6 max-w-full">
          <MermaidDiagram code={value.code} />
        </div>
      );
    },
  },
};

interface CustomPortableTextProps {
  value: any;
}

const CustomPortableText: React.FC<CustomPortableTextProps> = ({ value }) => {
  console.log('CustomPortableText value:', JSON.stringify(value, null, 2));
  return <PortableText value={value} components={components} />;
};

export default CustomPortableText;