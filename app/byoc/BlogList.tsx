import * as FEAAS from '@sitecore-feaas/clientside/react'
import React from 'react';  
import { Box, Flex, Heading, Text, Image, Link } from '@chakra-ui/react';  
  
const BlogList = ({ articles }) => {  
  return (  
    <Box>  
      {articles.map((article) => (  
        <Flex  
          key={article.id}  
          p={4}  
          bg="gray.100"  
          borderRadius="md"  
          boxShadow="md"  
          mb={4}  
        >  
          <Box>  
            <Image  
              src={article.image}  
              alt={article.title}  
              w="150px"  
              h="150px"  
              objectFit="cover"  
              borderRadius="md"  
              mr={4}  
            />  
          </Box>  
          <Box>  
            <Heading as="h2" size="lg" mb={2}>  
              <Link href={`/articles/${article.id}`}>{article.title}</Link>  
            </Heading>  
            <Text fontSize="md" color="gray.600" mb={4}>{article.excerpt}</Text>  
            <Text fontSize="sm" color="gray.500">Published on: {article.date}</Text>  
          </Box>  
        </Flex>  
      ))}  
    </Box>  
  );  
};  

FEAAS.registerComponent(BlogList , {
  name: 'clientside-only',
  title: 'Clientside-only component',
  description: 'This is a Blog List Generated by AI',
  thumbnail: 'https://mss-p-006-delivery.stylelabs.cloud/api/public/content/3997aaa0d8be4eb789f3b1541bd95c58',
  group: 'AI Generated Components',
  required: ['articles'],
  properties: {
    articles: {
      type: 'array',
      title: 'articles',
      items: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            title: 'id'
          },
          title: {
            type: 'string',
            title: 'title'
          },
          image: {
            type: 'string',
            title: 'image'
          },
          excerpt: {
            type: 'string',
            title: 'excerpt'
          },
          date: {
            type: 'string',
            title: 'date'
          }
        }
      }
    }
  }
})

export default BlogList;