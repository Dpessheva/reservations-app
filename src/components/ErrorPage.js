import React from 'react'
import Hero from './Hero';
import Banner from './Banner';
import { Link } from 'react-router-dom';

export default function ErrorPage() {
    return (
        <Hero>
            <Banner title="404" subtitle="page not fount">
                <Link to="/" className="btn-primary">
                    retrun home
                </Link>
            </Banner>
    </Hero>
    )
}
