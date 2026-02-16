import React from "react";
import { Box, Image, Flex, Text, IconButton, Grid } from "@chakra-ui/react";
import { Albetechlogo, Gradientright, Grradientleft, Herobg, Leftlogo, Rightlogo, Getintouch, Vdeo } from "../../assets/images";
import { BoxIcon, GlobeIcon, LogICon, Logo, LogoIcon, TickIcon, UserIcon, UsersIcon, } from "../../assets/svg";
import RatingCard from "../../component/RatingCard";



const ratingData = [
  {
    value: 25,
    icon: TickIcon,
    label: "Successful Years"
  },
  {
    value: 7,
    icon: TickIcon,
    label: "Global Awards"
  },
  {
    value: 2000,
    icon: BoxIcon,
    label: "Projects Completed"
  },
  {
    value: 1000,
    icon: UserIcon,
    label: "Happy Clients"
  },
  {
    value: 250,
    icon: UsersIcon,
    label: "Team Members"
  }
]

const HeaderSection = () => {
  return (
    <Box
      w="100%"
      bgImage={`url(${Herobg})`}
      bgSize="cover"
      bgPosition="center"
      color="white"
      position="relative"
      overflow="hidden"
    >
      <Box
        position="absolute"
        top="-56px"
        left="-200px"
        w="715px"
        h="1136px"
        bgImage={`url(${Grradientleft})`}
        bgRepeat="no-repeat"
        bgSize="contain"
        opacity="0.78"
        zIndex={0}
      />

      <Box
        position="absolute"
        top="-56px"
        right="-200px"
        w="715px"
        h="1136px"
        bgImage={`url(${Gradientright})`}
        bgRepeat="no-repeat"
        bgSize="contain"
        opacity="0.78"
        zIndex={0}
      />
      <Image
        src={Leftlogo}
        position="absolute"
        left="0"
        top="50px"
        zIndex={1}
        pointerEvents="none"
      />

      <Image
        src={Rightlogo}
        position="absolute"
        right="0"
        top="50%"
        zIndex={1}
        pointerEvents="none"
      />
      <Box
        position="relative"
        zIndex={2}>
        <Flex
          h="72px"
          px={{ base: 4, md: 16 }}
          align="center"
          justify="space-between"
          color="white"

        >
          <Text fontSize="md" letterSpacing="1px" >
            albetech
          </Text>
          <Image
            src={Albetechlogo}
            h="60px"
            alt="Albetech" />

          <Image
            src={Getintouch}
            h="20px"
            cursor="pointer"
            alt="get in touch"
          />



        </Flex>
        <Box
          w="100%"
          display="flex"
          justifyContent="center"
          textAlign="center"
          mt="50px"
        >
          <Box maxW="1100px">
            <Text
              fontFamily="DM Sans"
              fontSize="92px"
              fontWeight="400"
              lineHeight="123px"
              letterSpacing="0px"
              color="#FFFFFF"
            >
              We Turn Your Vision
              <br />
              Into{" "}
              <Text
                as="span"
                bgGradient="linear(to-r,  #08A6E1 0%, #13B4D2 55%, #FFFFFF 100%)"
                bgClip="text"
                fontWeight="400"
              >
                AI-Driven Innovation
              </Text>
            </Text>
            <Text mt="24px"
              mx="auto"
              color="#9FB6D8"
              letterSpacing="0"
              textAlign="center"
              fontSize="20px">
              With Albetech,we turn your bussiness ideas into AI-powered innovation through reliable,scalable,and
              future-ready IT solutions
            </Text>


            <Text mt="6" color="gray.400">
              Already chosen by the leaders
            </Text>


            <Flex
              mt="10"
              justifyContent="center"
              gap={10}
            >
              <Flex gap={2}>
                <IconButton
                  icon={<LogoIcon width="30px" height="30px" />}
                  variant="ghost"
                />
                <Text >Logoipsum</Text>
              </Flex>

              <IconButton
                icon={<LogICon width="178px"  height="32px"  />}
                variant="ghost"
              />
              <IconButton
                icon={<Logo width="106.31px" height="32px" />}
                variant="ghost"
              />
              <Flex gap={2}>
                 <IconButton
                icon={<GlobeIcon width="40px" height="40px" />}
                variant="ghost"
              />
               <Text >Logoipsum</Text>
              </Flex>
             
            </Flex>
          </Box>

        </Box>
        <Box
          mt={5}
          position="relative"
          justifyItems="center"
          mx="auto"
          mb={3}
        >
          <Box
            border="2px solid white"
            borderRadius="20px"
            overflow="hidden"
            position="relative"
            w="1472px"
            mt={24}

          >
            <Image
              src={Vdeo}
              alt="Hero Video"
              objectFit="cover"
            />
            <Box
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              bg="whiteAlpha.800"
              p="20px"
              borderRadius="full"
              cursor="pointer"
              _hover={{ transform: "translate(-50%, -50%) scale(1.1)" }}
              transition="0.3s"
            >
            </Box>
          </Box>
        </Box>

      </Box>
      <Box mt="30px" w="100%" px="40px" py="24px" backdropFilter="blur(12px)" >
        <Text
          fontSize="48px"
          fontWeight="400"
          textAlign="center"
          mb="3"
        >
          Partners | Innovation | Future-Ready Excellence
        </Text>

        <Text
          fontSize="25px"
          color="gray.300"
          textAlign="center"
          mx="auto"
          mb="40px"
        >
          We combine innovation, excellence, and cutting-edge technology to
          provide tailored IT solutions for your business and future growth.
        </Text>
        <Grid templateColumns='repeat(5,290px)' justifyContent="center">
          {ratingData.map((item) => (
            <RatingCard
              key={item.id}
              value={item.value}
              label={item.label}
              icon={item.icon}
            />
          ))}
        </Grid>

      </Box>
    </Box>
  )
}

export default HeaderSection;

