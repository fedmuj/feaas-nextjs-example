'use client'
import * as FEAAS from '@sitecore-feaas/clientside/react'
import React from 'react';  
import { Box, Flex, Heading, Text, useColorModeValue } from '@chakra-ui/react';  
  
const DarkModeHero = ({ title, subtitle }) => {
  const backgroundColor = useColorModeValue('gray.800', 'gray.900');
  const textColor = useColorModeValue('white', 'gray.100');

  return (  
    <Box  
      bg={backgroundColor}  
      h="400px"  
      w="100%"  
      position="relative"  
    >  
      <Flex  
        h="100%"  
        w="100%"  
        justifyContent="center"  
        alignItems="center"  
        flexDirection="column"  
      >  
        <Heading as="h1" color={textColor} fontSize="5xl">  
          {title}  
        </Heading>  
        <Text as="h2" color={textColor} fontSize="xl">  
          {subtitle}  
        </Text>  
      </Flex>  
    </Box>  
  );  
};  

FEAAS.registerComponent(DarkModeHero , {
  name: 'dark-mode-hero',
  title: 'DarkModeHero',
  description: 'This is a Dark Mode Hero Section Generated by AI',
  thumbnail: 'https://mss-p-006-delivery.stylelabs.cloud/api/public/content/3997aaa0d8be4eb789f3b1541bd95c58',
  group: 'AI Generated Components',
  properties: {
    title: {
      type: 'string',
      title: 'title'
    },
    subtitle : {
      type: 'string',
      title: 'subtitle'
    }
  }
})

export default DarkModeHero;  
