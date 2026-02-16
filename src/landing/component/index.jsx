import React from 'react'
import HeaderSection from './HeaderSection'
import OurServices from './OurServices'
import IndustriesSection from './IndustriesSection'
import WorkshowCase from './WorkshowCase'
import OurProcess from './OurProcess'
import TestimonialsSection from './TestimonialsSection'
import OurClientsSection from './OurclientsSection'
import ContactAndFooter from './ContactAndFooter'
import {Box} from '@chakra-ui/react'
import Why from "./Why";

const HomeLander = () => {
  return (
  <Box minH="100vh" w="full" bg="black">
    <HeaderSection/>
    <OurServices/>
    <IndustriesSection/>
    <Why/>
    <WorkshowCase/>
    <OurProcess/>
    <TestimonialsSection/>
    <OurClientsSection/>
    <ContactAndFooter/>

  </Box>
  )
}

export default HomeLander
