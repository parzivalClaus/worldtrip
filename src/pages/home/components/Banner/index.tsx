import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";

export const Banner: React.FC = () => {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box
      width="100%"
      backgroundImage="url('/background.png')"
      backgroundSize="cover"
      paddingX={["1rem", "2rem"]}
    >
      <Flex
        maxWidth="1240px"
        marginX="auto"
        justifyContent="space-between"
        alignItems="center"
        paddingY={["1.75rem", "2rem", "4.37rem"]}
        position="relative"
      >
        <Flex direction="column" maxWidth="600px">
          <Heading
            fontSize={["xl", "2xl", "4xl"]}
            color="light"
            fontWeight="500"
            lineHeight={["1.87rem", "tall"]}
          >
            5 Continentes, <br /> infinitas possibilidades.
          </Heading>
          <Text
            fontSize={["sm", "md", "xl"]}
            color="light"
            fontWeight="400"
            marginTop="20px"
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Flex>
        {isWideVersion && (
          <Image
            src="/airplane.png"
            alt="Airplane"
            width={["md", "md", "md", "sm", "lg"]}
            position="absolute"
            right="0"
            bottom="-30px"
          />
        )}
      </Flex>
    </Box>
  );
};
