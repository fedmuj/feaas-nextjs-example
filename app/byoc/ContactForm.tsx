'use client';

import * as FEAAS from '@sitecore-feaas/clientside/react';
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Stack,
  useBreakpointValue,
} from '@chakra-ui/react';

export default function ContactForm({ formTitle, ctaText }) {
  const handleSubmit = () => {
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;

    const data = {
      Email: email,
      Name: name,
      Mobile: phone,
    };

    fetch(
      `https://api.sitecoresend.io/v3/subscribers/b4b8f865-d8fa-4a34-ba59-02b1d7205561/subscribe.json?apikey=90789a3a-f1ef-4798-a8b4-18c5981b03ae`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }
    )
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

  return (
    <Box
      maxW={'lg'}
      mx={'auto'}
      boxShadow={'lg'}
      p={8}
      rounded={'md'}
      bg={'white'}
    >
      <Heading fontSize={'2xl'} color={'blue.500'} mb={4}>
        {formTitle}
      </Heading>
      <Stack spacing={4}>
        <FormControl id="name">
          <FormLabel>Name</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl id="email">
          <FormLabel>Email address</FormLabel>
          <Input type="email" />
        </FormControl>
        <FormControl id="phone">
          <FormLabel>Phone</FormLabel>
          <Input type="tel" />
        </FormControl>
      </Stack>
      <Button
        mt={6}
        mx={'auto'}
        display={'block'}
        bg={'blue.400'}
        color={'white'}
        _hover={{
          bg: 'blue.500',
        }}
        onClick={handleSubmit}
      >
        {ctaText}
      </Button>
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