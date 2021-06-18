import React from 'react';
import CategoryList from './CategoryList';
import Feed from './Feed';

export default function Home() {
    return (
        <div>
            <h2>Sort by Category</h2>
            <CategoryList />
            <hr />
        </div>
        <div>
            <Feed />
        </div>
    )
}