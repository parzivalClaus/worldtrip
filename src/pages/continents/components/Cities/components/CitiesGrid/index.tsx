import { Box, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { ICity } from "../../../../../../interfaces/continents";

interface CitiesGridProps {
  cities: ICity[];
}

export const CitiesGrid = ({ cities }: CitiesGridProps) => {
  return (
    <SimpleGrid
      minChildWidth="16rem"
      spacing="2.81rem"
      justifyContent="space-between"
      marginTop={["1.25rem", "1.25rem", "2.5rem"]}
    >
      {!!cities &&
        !!cities.length &&
        cities.map((city) => (
          <Flex
            key={city.id}
            direction="column"
            borderRadius="4px"
            border="1px"
            background="white"
            borderColor="rgba(255, 186, 8, 0.5  )"
          >
            <Image src={city.image} width="100%" height="auto" alt="" />
            <Flex
              justifyContent="space-between"
              alignItems="center"
              paddingX="1.5rem"
              paddingY="1.125rem"
            >
              <Flex direction="column">
                <Text
                  fontWeight="600"
                  fontSize="1.25rem"
                  marginBottom="0.75rem"
                  color="darkText"
                >
                  {city.name}
                </Text>
                <Text color="gray" fontWeight="500">
                  {city.capital}
                </Text>
              </Flex>
              <Image src={city.flagImage} width="30px" height="30px" alt="" />
            </Flex>
          </Flex>
        ))}
    </SimpleGrid>
  );
};
