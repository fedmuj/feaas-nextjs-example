import * as FEAAS from '@sitecore-feaas/clientside/react';
import { Stack, Flex, Button, Text, VStack, useBreakpointValue } from '@chakra-ui/react';

export default function HeroSection({ title, subtitle, ctaText }) {
  return (
    <Flex
      w={'full'}
      h={'100vh'}
      bg={'gray.900'}
      color={'white'}
      justify={'center'}
      align={'center'}
    >
      <VStack spacing={6} textAlign={'center'}>
        <Text
          fontSize={useBreakpointValue({ base: '2xl', md: '4xl' })}
          fontWeight={700}
          lineHeight={1.2}
        >
          {title}
        </Text>
        <Text fontSize={'lg'}>{subtitle}</Text>
        <Stack direction={'row'}>
          <Button
            bg={'blue.400'}
            rounded={'full'}
            color={'white'}
            _hover={{ bg: 'blue.500' }}
          >
            {ctaText}
          </Button>
        </Stack>
      </VStack>
    </Flex>
  );
}

FEAAS.registerComponent(HeroSection, {
  name: 'hero-section-dark-mode-ai',
  title: 'Hero Section Dark Mode Generated by AI',
  description: 'This is a Hero Section in dark mode generated by AI.',
  thumbnail:
    'https://mss-p-006-delivery.stylelabs.cloud/api/public/content/f072f2e7cb9f4c8b9b3c0e1e9a3f2f6a',
  group: 'AI Generated Components',
  properties: {
    title: {
      type: 'string',
      title: 'Title',
    },
    subtitle: {
      type: 'string',
      title: 'Subtitle',
    },
    ctaText: {
      type: 'string',
      title: 'CTA Text',
    },
  },
});