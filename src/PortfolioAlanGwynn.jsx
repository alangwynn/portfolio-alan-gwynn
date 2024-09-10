import { Footer } from "./components/Footer"
import { HamburgerNavbar } from "./components/HamburgerNavbar"
import { Navbar } from "./components/Navbar"
import { SectionAbout } from "./components/SectionAbout"
import { SectionContact } from "./components/SectionContact"
import { SectionExperience } from "./components/SectionExperience"
import { SectionProfile } from "./components/SectionProfile"
import { SectionProjects } from "./components/SectionProjects"

export const PortfolioAlanGwynn = () => {
  return (
    <>
        <Navbar/>
        <HamburgerNavbar />
        <SectionProfile />
        <SectionAbout />
        <SectionExperience />
        <SectionProjects />
        <SectionContact />
        <Footer />
    </>
  )
}
