import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import { Layout, Article, Wrapper, Button, SectionTitle } from 'components';
import { media } from '../utils/media';
import Img from 'gatsby-image';

const DojoPage = ({data}) => (
    <Layout>
    <Wrapper>
    {data.allPrismicData.edges.map(post => (
        <div>
            <a href={post.node.data.link.url}>Link To</a>
            <h1>{post.node.data.headline.text}</h1>
            <p>{post.node.data.description.text}</p>
 
        </div>
    ))}
    </Wrapper>
    </Layout>
  )

export const data = graphql`
query DojoPage {
	allPrismicData {
    edges {
      node {
        id
        data {
          headline {
            html
            text
          }
          description {
            html
            text
          }
          link {
            url
          }
            
          }
        }
      }
    }
  }
`

export default DojoPage