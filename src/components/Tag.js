import React from 'react'
import { Link } from 'gatsby';

const Tag = ({ link, text }) => {
    return (
    <Link>{text}</Link>
    );
};

export default Tag