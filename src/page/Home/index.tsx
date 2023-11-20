import { Box } from "native-base";
import React from "react";
import { DetailsBackground } from "../../atomic/atoms/DetailsBackground";
import { MainBanner } from "../../atomic/molecules";

export function Home() {
    return <Box flex='1' padding='20px' pt='-10px' position='relative'>
        <DetailsBackground />
        <MainBanner />
    </Box>
}