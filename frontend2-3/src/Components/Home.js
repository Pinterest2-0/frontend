import React from 'react';
import CategoryList from './CategoryList';
import Feed from './Feed';

export default function Home() {
    return (
        <div>
            <img src='https://legal.thomsonreuters.com/content/dam/ewp-m/images/legal/en/artworked-images/519427336-2880x1100.jpg.transform/hero-m/q90/image.jpg'></img>
            <h2>Sort by Category</h2>
            <CategoryList />
            <hr />
        
            <div className='feed-container'>
                <Feed />
            </div>
        </div>
    )
}