import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import { Layout, Article, Wrapper, Button, SectionTitle } from 'components';
import { media } from '../utils/media';
import Img from 'gatsby-image';
import Grid from '../components/Grid';
import Sidebar from '../components/Sidebar';
import Tag from '../components/Tag';

const Hero = styled.section`
  height: 30vh;
`

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

const Resource = styled.div`
  background: #F7F7F7;
  transition: box-shadow .2s ease-in-out;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);

  &:hover {
    box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.2);
  }
`

const ResourceContent = styled.div`
  padding: 1em;
`

const ResourceTitle = styled.h3`
  font-size: 32px;
  line-height: 42px;
  color: #000;
  font-weight: 900;
`

const ResourceTag = styled.small`
  font-weight: 500;
  line-height: normal;
  font-size: 9px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #BABABA;
`

const ResourceText = styled.p`
  font-size: 16px;
  line-height: 26px;
  color: #818181;
`

const BrowseButton = styled.a`
  color: #fbb03b;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 12px;
  transition: color .2s ease-in-out;
  ${Resource}:hover & {
    color: #FFC062;
  }
`


const DojoPage = ({data}) => {
  console.log(data)
  
  return(
    <Layout>
    <Hero></Hero>
    <Content>
    <Sidebar></Sidebar>
     
    <Grid>
    {data.allPrismicData.edges.map(post => (
          <a target="_blank" href={post.node.data.link.url}>
          <Resource key={post.node.data.id}>
              <Img sizes={post.node.data.image.localFile.childImageSharp.sizes} />
              <ResourceContent>
                <ResourceTag>{post.node.data.primary_tag.document[0].data.text}</ResourceTag>
                <ResourceTitle>{post.node.data.headline.text}</ResourceTitle>
                <ResourceText>{post.node.data.description.text}</ResourceText>
                <BrowseButton target="_blank" href={post.node.data.link.url}>Browse Now</BrowseButton>
              </ResourceContent>
          </Resource>
          </a>
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