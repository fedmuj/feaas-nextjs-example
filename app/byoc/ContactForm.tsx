import * as FEAAS from '@sitecore-feaas/clientside/react';
import React from 'react';
import { Box, Flex, FormControl, FormLabel, Input, Button } from '@chakra-ui/react';

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <Flex direction="column">
          <FormControl id="name" mb={4}>
            <FormLabel>Name</FormLabel>
            <Input type="text" />
          </FormControl>

          <FormControl id="email" mb={4}>
            <FormLabel>Email</FormLabel>
            <Input type="email" />
          </FormControl>

          <FormControl id="message" mb={4}>
            <FormLabel>Message</FormLabel>
            <Input as="textarea" />
          </FormControl>

          <Button type="submit" colorScheme="blue">Submit</Button>
        </Flex>
      </form>
    </Box>
  );
};

FEAAS.registerComponent(ContactForm, {
  name: 'contact-form',
  title: 'Contact Form',
  description: 'This is a Contact Form Generated by AI',
  thumbnail: 'https://mss-p-006-delivery.stylelabs.cloud/api/public/content/3997aaa0d8be4eb789f3b1541bd95c58',
  group: 'AI Generated Components',
});

export default ContactForm;
