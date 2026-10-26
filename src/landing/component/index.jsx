import React from 'react'
import HeaderSection from './HeaderSection'
import ServicesTicker from './ServicesTicker'
import CustomSolutions from './CustomSolutions'
import DesignAgency from './DesignAgency'
import IndustriesWeServe from './IndustriesWeServe'
import EnterpriseDivisions from './EnterpriseDivisions'
import MarqueeBanner from './MarqueeBanner'
import WorkingCycle from './WorkingCycle'
import TechnologiesWeMaster from './TechnologiesWeMaster'
import OurPartnersChannels from './OurPartnersChannels'
import ClientsSection from './ClientsSection'
import ContactAndFooter from './ContactAndFooter'
import {Box} from '@chakra-ui/react'

const HomeLander = () => {
  return (
  <Box minH="100vh" w="full" bg="black">
    <HeaderSection/>
    <ServicesTicker/>
    <CustomSolutions/>
    <DesignAgency/>
    <IndustriesWeServe/>
    <EnterpriseDivisions/>
    <MarqueeBanner/>
    <WorkingCycle/>
    <TechnologiesWeMaster/>
    <OurPartnersChannels/>
    <ClientsSection/>
    <ContactAndFooter/>
  </Box>
  )
}

export default HomeLander
