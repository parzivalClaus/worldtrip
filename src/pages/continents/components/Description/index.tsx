import { Box, Flex, Text, Tooltip, Image, Grid } from "@chakra-ui/react";

import { IContinentContent } from "../../../../interfaces/continents";

interface DescriptionProps {
  content: IContinentContent;
}

export const Description = ({ content }: DescriptionProps) => {
  return (
    <Flex
      justifyContent="space-between"
      maxWidth="1240px"
      margin="auto"
      direction={["column", "column", "column", "row"]}
      gap="2rem"
      marginTop={["1.5rem", "2rem", "2.5rem", "5rem"]}
      paddingX={["1rem", "2rem", "2rem", "2rem", "0"]}
    >
      <Box width={["100%", "100%", "100%", "50%"]}>
        <Text
          color="darkText"
          fontWeight="400"
          fontSize={["0.87rem", "0.87rem", "1.5rem"]}
          lineHeight={["1.31rem", "1.3", "2.25rem"]}
          textAlign="justify"
        >
          {content.description}
        </Text>
      </Box>
      <Grid
        templateColumns="1fr 1fr 1fr"
        width={["100%", "100%", "100%", "50%"]}
      >
        <Flex
          direction="column"
          textAlign="center"
          justifyContent="center"
          width="100%"
        >
          <Text
            fontSize={["1.5rem", "1.5rem", "3rem"]}
            color="highlight"
            margin="0"
            padding="0"
            lineHeight={["1.5rem", "1.5rem", "2.5rem"]}
          >
            {content.countries}
          </Text>
          <Text
            fontSize={["1.125rem", "1.125rem", "1.5rem"]}
            fontWeight={["400", "400", "600"]}
            color="darkText"
          >
            países
          </Text>
        </Flex>
        <Flex
          direction="column"
          textAlign="center"
          justifyContent="center"
          width="100%"
        >
          <Text
            fontSize={["1.5rem", "1.5rem", "3rem"]}
            color="highlight"
            margin="0"
            padding="0"
            lineHeight={["1.5rem", "1.5rem", "2.5rem"]}
          >
            {content.languages}
          </Text>
          <Text
            fontSize={["1.125rem", "1.125rem", "1.5rem"]}
            fontWeight={["400", "400", "600"]}
            color="darkText"
          >
            línguas
          </Text>
        </Flex>
        <Flex alignItems="center">
          <Flex
            direction="column"
            textAlign="center"
            justifyContent="center"
            width="100%"
          >
            <Text
              fontSize={["1.5rem", "1.5rem", "3rem"]}
              color="highlight"
              margin="0"
              padding="0"
              lineHeight={["1.5rem", "1.5rem", "2.5rem"]}
            >
              {content.cities.length}
            </Text>

            <Text
              fontSize={["1.125rem", "1.125rem", "1.5rem"]}
              fontWeight={["400", "400", "600"]}
              color="darkText"
            >
              cidades +100
            </Text>
          </Flex>
          <Tooltip
            label="Cidades que estão no Top 100"
            fontSize="md"
            hasArrow
            placement="top"
            backgroundColor="darkText"
          >
            <Image
              src="/info.png"
              alt="Info"
              width="1rem"
              height="1rem"
              marginTop="2.5rem"
            />
          </Tooltip>
        </Flex>
      </Grid>
    </Flex>
  );
};
