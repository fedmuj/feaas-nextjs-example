'use client';

import * as FEAAS from '@sitecore-feaas/clientside/react';

import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  VStack,
  Stack,
} from '@chakra-ui/react';

export default function ContactForm({ formTitle, ctaText }) {
  return (
    <Box
      maxW={'lg'}
      mx={'auto'}
      py={4}
      px={6}
      bg={'gray.800'}
      shadow={'xl'}
      rounded={'lg'}
    >
      <Stack spacing={4} my={4} color={'white'}>
        <VStack spacing={4}>
          <Box align={'center'}>
            <FormLabel fontSize={'xl'} fontWeight={'bold'}>
              {formTitle}
            </FormLabel>
          </Box>
          <FormControl id='name'>
            <FormLabel>Name</FormLabel>
            <Input type='text' bg={'gray.700'} />
          </FormControl>
          <FormControl id='email'>
            <FormLabel>Email Address</FormLabel>
            <Input type='email' bg={'gray.700'} />
          </FormControl>
          <FormControl id='message'>
            <FormLabel>Message</FormLabel>
            <Textarea bg={'gray.700'} />
          </FormControl>
        </VStack>
        <Button
          bg={'blue.400'}
          color={'white'}
          _hover={{ bg: 'blue.500' }}
          size={'lg'}
        >
          {ctaText}
        </Button>
      </Stack>
    </Box>
  );
}

FEAAS.registerComponent(ContactForm, {
  name: 'contact-form-ai',
  title: 'Contact Form Generated by AI',
  description: 'This is a Contact Form generated by AI.',
  thumbnail:
    'https://mss-p-006-delivery.stylelabs.cloud/api/public/content/3997aaa0d8be4eb789f3b1541bd95c58',
  group: 'AI Generated Components',
  properties: {
    formTitle: {
      type: 'string',
      title: 'Form Title',
    },
    ctaText: {
      type: 'string',
      title: 'CTA Text',
    },
  },
});