import { Gallery } from "react-grid-gallery";
import React from 'react';
import gallery1 from '../../assets/gallery1.jpeg';
import gallery10 from '../../assets/gallery10.jpeg';
import gallery2 from '../../assets/gallery2.jpeg';
import gallery3 from '../../assets/gallery3.jpeg';
import gallery4 from '../../assets/gallery4.jpeg';
import gallery5 from '../../assets/gallery5.jpeg';
import gallery6 from '../../assets/gallery6.jpeg';
import gallery7 from '../../assets/gallery7.jpeg';
import gallery8 from '../../assets/gallery8.jpeg';
import gallery9 from '../../assets/gallery9.jpeg';
import style from './style.module.css';

const OurWork = () => {


    const images = [
        {
            src: gallery1,
            width: 600,
            height: 400,
            tags: [{ value: "lawncare" }]
        },
        {
            src: gallery2,
            width: 600,
            height: 400,
            tags: [{ value: "mulch" }, { value: "landscaping" }]
        },
        {
            src: gallery3,
            width: 600,
            height: 400,
            tags: [{ value: "lawncare" }]
        },
        {
            src: gallery4,
            width: 600,
            height: 400,
            tags: [{ value: "lawncare" }]
        },
        {
            src: gallery5,
            width: 600,
            height: 400,
            tags: [{ value: "lawncare" }]
        },
        {
            src: gallery6,
            width: 600,
            height: 400,
            tags: [{ value: "hardscapes" }, { value: "landscaping" }]
        },
        {
            src: gallery7,
            width: 600,
            height: 400,
            tags: [{ value: "lawncare" }]
        },
        {
            src: gallery8,
            width: 600,
            height: 400,
            tags: [{ value: "lawncare" }]
        },
        {
            src: gallery9,
            width: 600,
            height: 400,
            tags: [{ value: "lawncare" }]
        },
        {
            src: gallery10,
            width: 600,
            height: 400,
            tags: [{ value: "lawncare" }]
        }
    ];

    return (
        <div className={style.galleryContainer}>
            <Gallery rowHeight={400} images={images} />
        </div>
    );
}

export default OurWork;