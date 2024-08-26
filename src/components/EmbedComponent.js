import React from 'react';

const EmbedComponent = ({ src, height }) => {
    return (
        <div style={{ width: '100%', height: height, overflow: 'hidden' }}>
            <iframe
                src={src}
                style={{
                    width: '100%',
                    height: '100%',
                    border: 'none',
                    overflow: 'auto' // Allows scrolling within the iframe
                }}
                title="Seamless Page Embed"
                allowFullScreen
            />
        </div>
    );
};

export default EmbedComponent;
