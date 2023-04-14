import React from 'react';
import {
    Box,
    Container,
    Stack,
    SimpleGrid,
    Text,
    Link,
    useColorModeValue,
  } from '@chakra-ui/react';
  
  const ListHeader = ({ children }) => {
    return (
      <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
        {children}
      </Text>
    );
  };

const Footer = () => {

  return (
    <Box
    bg={useColorModeValue('gray.50', 'gray.900')}
    color={useColorModeValue('gray.700', 'gray.200')}>
    <Container as={Stack} maxW={'6xl'} py={10}>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
        <Stack align={'flex-start'}>
          <ListHeader>Company</ListHeader>
          <Link href={'#'}>About Us</Link>
          <Link href={'#'}>Blog</Link>
          <Link href={'#'}>Careers</Link>
          <Link href={'#'}>Contact Us</Link>
        </Stack>

        <Stack align={'flex-start'}>
          <ListHeader>Support</ListHeader>
          <Link href={'#'}>Help Center</Link>
          <Link href={'#'}>Safety Center</Link>
          <Link href={'#'}>Community Guidelines</Link>
        </Stack>

        <Stack align={'flex-start'}>
          <ListHeader>Legal</ListHeader>
          <Link href={'#'}>Cookies Policy</Link>
          <Link href={'#'}>Privacy Policy</Link>
          <Link href={'#'}>Terms of Service</Link>
          <Link href={'#'}>Law Enforcement</Link>
        </Stack>

        <Stack align={'flex-start'}>
          <ListHeader>Follow Us</ListHeader>
          <Link href={'#'}>Facebook</Link>
          <Link href={'#'}>Twitter</Link>
          <Link href={'#'}>Instagram</Link>
          <Link href={'#'}>LinkedIn</Link>
        </Stack>

      </SimpleGrid>
    </Container>

  </Box>
  )
}

export default Footer