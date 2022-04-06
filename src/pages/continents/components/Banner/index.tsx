import { Box, Flex, Heading } from "@chakra-ui/react";

interface BannerProps {
  image: string;
  name: string;
}

export const Banner = ({ image, name }: BannerProps) => {
  return (
    <Box
      width="100%"
      height={["9.37rem", "15.25rem", "25.25rem", "31.25rem"]}
      backgroundImage={`url("${image}")`}
      backgroundSize="cover"
      paddingX={["1rem", "2rem"]}
    >
      <Flex
        maxWidth="1240px"
        margin="auto"
        height="100%"
        alignItems={["center", "center", "flex-end"]}
        justifyContent={["center", "center", "flex-start"]}
      >
        <Heading
          fontWeight="600"
          fontSize={["1.75rem", "2rem", "2.5rem", "3rem"]}
          color="light"
          marginBottom={["0", "0", "3.75rem"]}
        >
          {name}
        </Heading>
      </Flex>
    </Box>
  );
};
