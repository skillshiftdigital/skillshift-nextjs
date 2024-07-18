import React, { useEffect, useRef, useState } from 'react';

interface MermaidDiagramProps {
  code: string;
}

const MermaidDiagram: React.FC<MermaidDiagramProps> = ({ code }) => {
  const mermaidRef = useRef<HTMLDivElement>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Flag to prevent rendering if component unmounts during async operation
    let isMounted = true;

    const renderDiagram = async () => {
      if (!mermaidRef.current || !isMounted) return;

      try {
        // Dynamically import Mermaid to reduce initial bundle size
        const mermaid = (await import('mermaid')).default;
        
        // Initialize Mermaid with specific settings
        await mermaid.initialize({
          startOnLoad: false, // Prevent automatic rendering
          securityLevel: 'loose', // Allow rendering of all diagram types
        });

        // Clear previous content and errors
        mermaidRef.current.innerHTML = '';
        setError(null);

        // Insert Mermaid code directly into the DOM
        // This ensures the element exists before Mermaid tries to render it
        mermaidRef.current.insertAdjacentHTML('beforeend', `<div class="mermaid">${code}</div>`);

        // Delay rendering to ensure the DOM is fully updated
        // This helps prevent "Cannot read properties of null" errors
        setTimeout(async () => {
          if (!mermaidRef.current || !isMounted) return;
          // Use mermaid.run() instead of mermaid.render() for more reliable rendering
          await mermaid.run({
            nodes: [mermaidRef.current.querySelector('.mermaid')],
          });
        }, 0);
      } catch (err) {
        console.error('Mermaid rendering failed:', err);
        if (isMounted) {
          setError(`Failed to render diagram: ${err instanceof Error ? err.message : 'Unknown error'}`);
        }
      }
    };

    renderDiagram();

    // Cleanup function to prevent memory leaks and errors if component unmounts
    return () => {
      isMounted = false;
    };
  }, [code]);

  if (error) {
    return <div className="mermaid-error">{error}</div>;
  }

  return (
    <>
      {/* Container for Mermaid diagram */}
      <div ref={mermaidRef} />
      {/* Hidden pre element for debugging */}
      <pre className="mermaid-code">{code}</pre>
    </>
  );
};

export default MermaidDiagram;