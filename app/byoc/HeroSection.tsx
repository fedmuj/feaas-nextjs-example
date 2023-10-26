import * as FEAAS from '@sitecore-feaas/clientside/react';
import React from 'react';
import { Box, Flex, Heading, Text, useColorMode } from '@chakra-ui/react';

const HeroSection = ({ backgroundImage, title, subtitle }) => {
  const { colorMode } = useColorMode();
  const bgColor = colorMode === 'dark' ? 'gray.900' : 'gray.50';
  const textColor = colorMode === 'dark' ? 'white' : 'gray.900';

  return (
    <Box
      background={`url(${backgroundImage}) center / cover`}
      h="400px"
      w="100%"
      position="relative"
      bg={bgColor}
    >
      <Flex
        h="100%"
        w="100%"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        bg="rgba(0, 0, 0, 0.3)"
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

FEAAS.registerComponent(HeroSection, {
  name: 'hero-section',
  title: 'HeroSection',
  description: 'This is a Hero Section in Dark Mode',
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
    subtitle: {
      type: 'string',
      title: 'subtitle'
    }
  }
});

export default HeroSection;