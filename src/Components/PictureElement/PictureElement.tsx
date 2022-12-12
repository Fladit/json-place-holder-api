import React from 'react';
import {Picture} from "../../Types/picture";
import styles from './PictureElement.module.css';

const PictureElement = ({picture}: {picture: Picture}) => {
    const {id, url, thumbnailUrl, title, albumId} = picture;
    return (
        <div className={styles.main}>
            <div className={styles.info}>
                <div>id: {id}</div>
                <div>url: {url}</div>
                <div>thumbnailUrl: {thumbnailUrl}</div>
                <div>title: {title}</div>
                <div>albumId: {albumId}</div>
            </div>
            <img src={url} className={styles.image}/>
        </div>
    );
};

export default PictureElement;