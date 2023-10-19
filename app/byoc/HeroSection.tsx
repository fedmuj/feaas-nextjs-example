import * as FEAAS from '@sitecore-feaas/clientside/react'
import React from 'react';  
import { Box, Flex, Heading, Text, useColorMode } from '@chakra-ui/react';  
  
const HeroSection = ({ backgroundImage, title, subtitle }) => {  
  const { colorMode } = useColorMode();
  
  return (  
    <Box  
      background={`url(${backgroundImage}) center / cover`}  
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
        bg={colorMode === 'dark' ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.8)'}  
      >  
        <Heading as="h1" color={colorMode === 'dark' ? 'white' : 'black'} fontSize="5xl">  
          {title}  
        </Heading>  
        <Text as="h2" color={colorMode === 'dark' ? 'white' : 'black'} fontSize="xl">  
          {subtitle}  
        </Text>  
      </Flex>  
    </Box>  
  );  
};  

FEAAS.registerComponent(HeroSection , {
  name: 'clientside-only',
  title: 'Clientside-only component',
  description: 'This is a Hero Section in Dark Mode Generated by AI',
  thumbnail: 'https://mss-p-006-delivery.stylelabs.cloud/api/public/content/3997aaa0d8be4eb789f3b1541bd95c58',
  group: 'AI Generated Components',
  required: ['backgroundImage'],
  properties: {
    backgroundImage: {
      type: 'string',
      title: 'backgroundImage'
    },
    title: {
      type: 'string',
      title: 'title'
    },
    subtitle : {
      type: 'string',
      title: 'title'
    }
  }
})

export default HeroSection;