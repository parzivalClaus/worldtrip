import { Box, Divider, Flex, Text } from "@chakra-ui/react";
import { Banner } from "./components/Banner";
import { SwiperContinents } from "./components/SwiperContinents";
import { TravelTypes } from "./components/TravelTypes";

export const Home = () => {
  return (
    <Box>
      <Banner />
      <TravelTypes />
      <Divider
        width="90px"
        marginTop={["2.25rem", "2.25rem", "2.25rem", "5rem"]}
        marginBottom={["1.5rem", "1.5rem", "1.5rem", "3.25rem"]}
        marginX="auto"
        borderBottomWidth={3}
        color="darkText"
      />
      <Flex
        width="100%"
        maxWidth="1240px"
        marginX="auto"
        justifyContent="center"
      >
        <Text
          textAlign="center"
          fontSize={["xl", "xl", "2xl", "4xl"]}
          fontWeight="500"
        >
          Vamos nessa? <br />
          Então escolha seu continente
        </Text>
      </Flex>

      <SwiperContinents />
    </Box>
  );
};
