import { Flex, Heading, Link as ChakraLink, Text } from "@chakra-ui/react";
import NextLink from "next/link";

interface SwiperItemProps {
  name: string;
  description: string;
  backgroundImage: string;
  link: string;
}

export const SwiperItem = ({
  name,
  description,
  backgroundImage,
  link,
}: SwiperItemProps) => {
  return (
    <NextLink href={`/continents/${link}`} passHref>
      <ChakraLink color={"yellow.500"}>
        <Flex
          direction="column"
          justifyContent="center"
          alignItems="center"
          backgroundImage={`url(${backgroundImage})`}
          backgroundSize="cover"
          minHeight={["15.65rem", "16rem", "28.125rem"]}
        >
          <Heading
            color="light"
            fontWeight="700"
            fontSize={["2xl", "2xl", "4xl", "5xl"]}
          >
            {name}
          </Heading>
          <Text
            color="light"
            fontWeight="700"
            fontSize={["sm", "sm", "md", "2xl"]}
            marginTop={["0.75rem", "0.75rem", "1rem"]}
          >
            {description}
          </Text>
        </Flex>
      </ChakraLink>
    </NextLink>
  );
};
