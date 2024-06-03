import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  /*const [prevScrollPos, setPrevScrollPos] = useState(0);
  const headerRef = useRef(null);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const scrollDirection = currentScrollPos - prevScrollPos;

    const newTranslateY = scrollDirection > 0 ? "-200px" : "0"; // Down: -200px, Up: 0

    headerRef.current.style.transform = `translateY(${newTranslateY})`;
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);*/



  const topBar = useRef(); 
  let previousScrollPosition = 0;

  const handleScroll = () => {
    let scrollPosition = window.scrollY;
   if (scrollPosition > previousScrollPosition) {
    topBar.current.style.transform = "translateY(-200px)"; 
   }else{
    topBar.current.style.transform = "translateY(0)"; 
   }
   previousScrollPosition = scrollPosition;
 }

 useEffect(() => {
   window.addEventListener('scroll', handleScroll)

   return () => {
     window.removeEventListener('scroll', handleScroll)
   }
 })

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      ref={topBar}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
          <HStack spacing={8}>
              {socials.map((social, index) => (
                <a href={social.url} key={index} target="blank">
                  <FontAwesomeIcon icon={social.icon} size="2x" />
                </a>
              ))}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              <a href="#projects" onClick={handleClick("projects")}>
              Projects              
              </a>
              <a href="#contactme" onClick={handleClick("contactme")}>
              Contact Me
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
