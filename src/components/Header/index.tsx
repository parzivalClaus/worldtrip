import { Box, Flex, Image, Link as ChakraLink } from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React from "react";

export const Header: React.FC = () => {
  const router = useRouter();

  return (
    <Box backgroundColor="light">
      <Flex
        position="relative"
        maxWidth="1240px"
        margin="auto"
        align-items="center"
        justifyContent="center"
        paddingY={["1rem", "1.5rem", "2rem"]}
        _after={{ flex: 1, content: '""' }}
      >
        <Flex flex="1" alignItems="center" justifyContent="flex-start">
          {router.asPath !== "/" && (
            <NextLink href={`/`} passHref>
              <ChakraLink>
                <Image
                  src="/back.png"
                  alt="Back"
                  height={["0.85rem", "1rem", "1.56rem"]}
                  paddingX={["1rem", "2rem", "2rem", "2rem", "0"]}
                />
              </ChakraLink>
            </NextLink>
          )}
        </Flex>

        <Image
          src="/logo.png"
          alt="WorldTrip"
          width={["7rem", "7rem", "auto"]}
        />
      </Flex>
    </Box>
  );
};
