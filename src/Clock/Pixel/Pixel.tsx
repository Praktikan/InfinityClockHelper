import React from "react";

const Pixel: React.FC = () => (
    <div
        style={{
            width: '10vw',
            height: '10vw',
            padding: '4px',
        }}
    >
        <div
            style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                backgroundColor: '#FEFEFE',
                boxShadow: 'inset 4px 4px 8px #c9c9c9, inset -4px -4px 8px #ffffff'
            }}
        ></div>
    </div>
)

export default Pixel