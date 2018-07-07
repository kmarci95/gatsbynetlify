import React from 'react'
import Link from 'gatsby-link';
import PostListing from '../components/Posts/PostListing';

const IndexPage = ({data}) => (
  <div>
    <h1>Posts</h1>
    <div>{data.allMarkdownRemark.edges.map(({node}) => <PostListing key={node.id} post={node}/>)}</div>
  </div>
);

export const query = graphql`
  query SiteMeta {
    site {
      siteMetadata {
        title
        desc
      }
    }
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD  MM YYYY")
          }
          html
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`;

export default IndexPage
