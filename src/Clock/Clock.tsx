import React from "react";
import {Pixel} from "./Pixel";

const Clock: React.FC = () => (
    <div
        style={{
            display: 'flex',
            flexWrap: 'wrap'
        }}
    >
        <Pixel />
        <Pixel />
        <Pixel />
        <Pixel />
        <Pixel />
        <Pixel />
        <Pixel />
        <Pixel />
        <Pixel />
        <Pixel />
        <Pixel />
    </div>
)

export default Clock