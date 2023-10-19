import * as FEAAS from '@sitecore-feaas/clientside/react'
import React from 'react';  
import { Box, Flex, Avatar, Text, IconButton } from '@chakra-ui/react';  
import { EditIcon } from '@chakra-ui/icons';

const UserProfileCard = ({ name, bio, avatarUrl }) => {
  return (
    <Box  
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p="4"
    >
      <Flex alignItems="center">
        <Avatar src={avatarUrl} size="lg" />
        <Text ml="3" fontWeight="bold" fontSize="xl">
          {name}
        </Text>
        <IconButton ml="auto" icon={<EditIcon />} aria-label="Edit Profile" />
      </Flex>
      <Text mt="2">{bio}</Text>
    </Box>
  );
};

FEAAS.registerComponent(UserProfileCard, {
  name: 'clientside-only',
  title: 'Clientside-only component',
  description: 'This is a User Profile Card Generated by AI',
  thumbnail: 'https://mss-p-006-delivery.stylelabs.cloud/api/public/content/4d5a7862f0e84fe6a8cc4f6e54a4b6d0',
  group: 'AI Generated Components',
  required: ['name', 'bio', 'avatarUrl'],
  properties: {
    name: {
      type: 'string',
      title: 'name'
    },
    bio: {
      type: 'string',
      title: 'bio'
    },
    avatarUrl: {
      type: 'string',
      title: 'avatarUrl'
    }
  }
})

export default UserProfileCard;