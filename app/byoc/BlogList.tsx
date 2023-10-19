import * as FEAAS from '@sitecore-feaas/clientside/react'
import React from 'react';  
import { Box, Flex, Heading, Text, Image } from '@chakra-ui/react';  

const BlogList = ({ articles }) => {
  return (
    <Box>
      {articles.map((article) => (
        <Flex key={article.id} p={4} borderWidth="1px" borderRadius="md" alignItems="center">
          <Image src={article.image} alt={article.title} boxSize="50px" mr={4} />
          <Box>
            <Heading as="h2" size="md" mb={2}>{article.title}</Heading>
            <Text>{article.date}</Text>
          </Box>
        </Flex>
      ))}
    </Box>
  );
};

FEAAS.registerComponent(BlogList, {
  name: 'clientside-only',
  title: 'Clientside-only component',
  description: 'This is a Blog List Generated by AI',
  thumbnail: 'https://mss-p-006-delivery.stylelabs.cloud/api/public/content/3997aaa0d8be4eb789f3b1541bd95c58',
  group: 'AI Generated Components',
  required: ['articles'],
  properties: {
    articles: {
      type: 'array',
      title: 'Articles',
      items: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            title: 'ID'
          },
          title: {
            type: 'string',
            title: 'Title'
          },
          image: {
            type: 'string',
            title: 'Image URL'
          },
          date: {
            type: 'string',
            title: 'Date'
          }
        }
      }
    }
  }
})

export default BlogList;