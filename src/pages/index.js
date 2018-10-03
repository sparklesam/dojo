import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import { Layout, Article, Wrapper, Button, SectionTitle } from 'components';
import { media } from '../utils/media';
import Img from 'gatsby-image';
import Grid from '../components/Grid';
import Sidebar from '../components/Sidebar';

const Content = styled.article`
  display: grid;
  grid-template-columns: 20% 80%;
  

  @media ${media.tablet} {
    padding: 3rem 3rem;
  }
  @media ${media.phone} {
    padding: 2rem 1.5rem;
  }
`;

const DojoPage = ({data}) => {
  console.log(data)
  return(
    <Layout>
    <Content>
    <Sidebar></Sidebar>
     
    <Grid>
    
    {data.allPrismicData.edges.map(post => (
        <div key={post.node.data.id}>
            <Img sizes={post.node.data.image.localFile.childImageSharp.sizes} />
           
            <a target="_blank" href={post.node.data.link.url}>
                <h1>{post.node.data.headline.text}</h1>
            </a>
            <p>{post.node.data.description.text}</p>
            {/*{post.node.data.primary_tag.map((tag, index) => {
            return (
              <span key={index}>{tag}</span>
            )}
            )
            }
            }*/}
        </div>
    ))}
    </Grid>
    </Content>
    </Layout>
  )}

export const data = graphql`
query DojoPage {
  allPrismicData {
    edges {
      node {
        uid
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
          primary_tag {
            document {
              ... on PrismicTag {
                id
                data {
                  text
                }
              }
            } 
          }
          image {
            localFile {
              childImageSharp {
                sizes(maxWidth: 1280) {
                  src
                  srcSet
                  srcWebp
                  srcSetWebp
                  base64
                  aspectRatio
                  sizes
                }
              }
            }
          }
        }
      }
    }
  }
} 
`

export default DojoPage