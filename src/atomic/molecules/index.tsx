import { Box,Image } from "native-base";
import React from "react";
import { ImageBackground } from 'react-native';

import slider from '../../img/slider.png'
import bike from '../../img/bike.png'

export function MainBanner(){
    return <Box w="100%" h="300" mt="29px">
        <ImageBackground source={slider} style={{flex: 1, justifyContent: 'center', alignItems:'center'}} resizeMode="contain">
            <Image source={bike} alt="imaage of a bike" />
        </ImageBackground>
    </Box>
}