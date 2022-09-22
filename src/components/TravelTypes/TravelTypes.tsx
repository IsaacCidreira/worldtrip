import { Flex, Grid, GridItem } from "@chakra-ui/layout";
import Typestravel from "./index";

export default function Caracteristicas() {
  return (
    <Grid
      templateColumns={["1fr 1fr", "1fr 1fr", "1fr 1fr", "repeat(5, 1fr)"]}
      w="100%"
      mt={["10", "32"]}
      mx="auto"
      maxW="1160px"
      flexWrap="wrap"
      gap={[1, 5]}
    >

      <GridItem>
        <Typestravel icon="cocktail" text="vida noturna" />
      </GridItem>
      <GridItem>
        <Typestravel icon="surf" text="praia" />
      </GridItem>
      <GridItem>
        <Typestravel icon="building" text="moderno" />
      </GridItem>
      <GridItem>
        <Typestravel icon="museum" text="clássico" />
      </GridItem>
      <GridItem colSpan={[2, 2, 2, 1]}>
        <Typestravel icon="earth" text="e mais..." />
      </GridItem>
    </Grid>
  )
}