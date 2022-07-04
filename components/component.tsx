import { FC, MouseEventHandler, useState } from 'react';
import Link from 'next/link';
import {
	Box,
	Button,
	ButtonGroup,
	chakra,
	Container,
	Flex,
	Heading,
	ModalBody,
	ModalContent,
	ModalCloseButton,
	Stack,
	Text,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import Image from 'next/image';
import {
	SpringIcon,
	DjangoIcon,
	PostgreSQLIcon,
	FirebaseIcon,
	FlutterIcon,
	GoogleMapsIcon,
	GoIcon,
	MySQLIcon,
} from './icon';
import type { Project } from '../lib/projects';

export const Navbar: FC = () => {
	return (
		<Box position="fixed" top="0" left="0" right="0" bgColor="white" borderBottom="1px">
			<Flex as="nav" position="relative" wrap="wrap" align="center" justify="space-between" p="1% 5%" margin="0 auto" maxW="1280px">
					<Link href="/" passHref>
						<Box><Text fontSize='lg' fontWeight='bold'> bimasena putra </Text></Box>
					</Link>
					<ButtonGroup spacing='10'>
						<a target="_blank" href="https://github.com/bimasenaputra" rel="noopener noreferrer">
							<Button color='black' variant='link' size='md' key='github'>github</Button>
						</a>
						<a target="_blank" href="https://www.linkedin.com/in/bimasena/" rel="noopener noreferrer">
							<Button color='black' variant='link' size='md' key='linkedin'>linkedin</Button>
						</a>
						<Link href="/" passHref>
							<Button color='black' variant='link' size='md' key='resume'>resume</Button>
						</Link>
					</ButtonGroup>
			</Flex>
        </Box>
	)
}

export const ProjectCard: FC<{onClick: MouseEventHandler<HTMLDivElement>; company: string; name: string; photo: string; alt: string}> = ({onClick, company, name, photo, alt}) => {
	return (
		<Flex onClick={onClick} maxW="100%" align="center" justify="center" position="relative" height="349px" bgColor="#eee">
      <Box maxW="70%" maxH="90%"> 
        <Image alt={alt} src={photo} width={2250} height={1390} />
      </Box>
      <Box position="absolute" height="100%" width="100%" bgColor="#42776a" opacity="0" transition=".4s ease" _hover={{
        opacity: "0.7"
      }}>
        <Box pt="2rem" pl="2rem">
          <Text position="relative" fontSize="12pt" color="white">{company}</Text>
          <Heading as="h1" fontSize="20pt" color="white">{name}</Heading>
        </Box>
      </Box>
    </Flex>
	)
}

export const ReadMore: FC<{children: string}> = ({children}) => {
	const text = children;
	const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  if (text.length > 150) {
  	return (
  		<Box>
		    <Text>
		      {isReadMore ? text.slice(0, 150) + '...' : text}
		    </Text>
		    <Button variant="link" onClick={toggleReadMore}>
		       {isReadMore ? "Read more" : " Show less"}
		    </Button>
    	</Box>
    )
  } else {
  	return (
  		<Text>{text}</Text>
  	)
  }
}

export const TechIcon: FC<{children: string}> = ({children}) => {
	if (children === "Spring Boot") {
		return <SpringIcon/>
	} else if (children === "Django") {
		return <DjangoIcon/>
	} else if (children === "PostgreSQL") {
		return <PostgreSQLIcon/>
	} else if (children === "Flutter") {
		return <FlutterIcon/>
	} else if (children === "Firebase") {
		return <FirebaseIcon/>
	} else if (children === "Google Maps API") {
		return <GoogleMapsIcon/>
	} else if (children === "Go") {
		return <GoIcon/>
	} else if (children === "MySQL") {
		return <MySQLIcon/>
	} else {
		return <Text>{children}</Text>
	}
}

export const ProjectDetailLargeModal: FC<Project> = (props) => {
	const {id, type, name, company, duration, photo, alt, link, description, technologies} = props;
	return (
		<ModalContent>
      <ModalBody p="0 0">
        <Flex wrap="wrap">
        		<Image src={photo} alt={alt} width={2250} height={1390}/ >   
        </Flex>
        <Flex p="1rem 1rem" direction="column" wrap="wrap" position="relative" minW="0" minH="0" maxW="100%">
        	<Flex mb="1.5rem" direction="column" wrap="wrap" position="relative" maxW="100%">
        		<ButtonGroup>
        			<chakra.a target="_blank" href={link} rel="noopener noreferrer" width="100%">
        				<Button leftIcon={<ExternalLinkIcon/>} width="100%">Visit</Button>
        			</chakra.a>
        		</ButtonGroup>
        	</Flex>
        	<Flex align="flex-start" wrap="wrap" position="relative" minW="0" minH="0" maxW="100%">
        		<Flex grow="1" shrink="1" basis="0%" direction="column" wrap="wrap" position="relative" minW="0" minH="0" maxW="100%">
        			<Stack spacing={4} maxW="100%">
        				<Stack spacing={1} maxW="100%">
        					<Text as="samp">{company}</Text>
        					<Heading as="h1" size="lg">{name}</Heading>
        				</Stack>
        				<ReadMore>{description}</ReadMore>
        			</Stack>
        		</Flex>
        		<Flex top="2.5rem" direction="column" wrap="wrap" position="sticky" w="33.333333%" minW="0" minH="0" maxW="100%">
        			<Box mb="0.5rem" mr="0.25rem">
        				<Box as="span" color="#828282">Type: </Box>
        				<span>{type}</span>
        			</Box>
        			<Box mb="0.5rem" mr="0.25rem">
        				<Box as="span" color="#828282">Duration: </Box>
        				<span>{duration}</span>
        			</Box>
        			<Box mb="0.5rem" mr="0.25rem">
        				<Box as="span" color="#828282">Technologies: </Box>
        				<Flex align="center" direction="row" position="relative" wrap="wrap" minW="0" minH="0" maxW="100%">
        				<Stack direction="row" spacing={1}>
        				{technologies.map((tech) => <TechIcon key={tech}>{tech}</TechIcon>)}
        				</Stack>
        				</Flex>
        			</Box>
        		</Flex>
        	</Flex>
        </Flex>
      </ModalBody>
    </ModalContent>
	)
}

export const ProjectDetailFullModal: FC<Project> = (props) => {
	const {id, type, name, company, duration, photo, alt, link, description, technologies} = props;
	return (
		<ModalContent>
      <ModalBody p="0 0">
        <Flex wrap="wrap">
        		<Image src={photo} alt={alt} width={2250} height={1390}/ >   
        </Flex>
        <Flex p="1rem 1rem" direction="column" wrap="wrap" position="relative" minW="0" minH="0" maxW="100%">
        	<Flex mb="1.5rem" direction="column" wrap="wrap" position="relative" maxW="100%">
        		<ButtonGroup>
        			<chakra.a target="_blank" href={link} rel="noopener noreferrer" width="100%">
        				<Button leftIcon={<ExternalLinkIcon/>} width="100%">Visit</Button>
        			</chakra.a>
        		</ButtonGroup>
        	</Flex>
        	<Flex mb="1.5rem" grow="1" shrink="1" basis="0%" direction="column" wrap="wrap" position="relative" minW="0" minH="0" maxW="100%">
      			<Stack spacing={4} maxW="100%">
      				<Stack spacing={1} maxW="100%">
      					<Text as="samp">{company}</Text>
      					<Heading as="h1" size="lg">{name}</Heading>
      				</Stack>
      				<ReadMore>{description}</ReadMore>
      			</Stack>
      		</Flex>
        	<Flex direction="column" wrap="wrap" minW="0" minH="0" maxW="100%">
      			<Box mb="0.5rem" mr="0.25rem">
      				<Box as="span" color="#828282">Type: </Box>
      				<span>{type}</span>
      			</Box>
      			<Box mb="0.5rem" mr="0.25rem">
      				<Box as="span" color="#828282">Duration: </Box>
      				<span>{duration}</span>
      			</Box>
      			<Box mb="0.5rem" mr="0.25rem">
      				<Box as="span" color="#828282">Technologies: </Box>
      				<Flex align="center" direction="row" position="relative" wrap="wrap" minW="0" minH="0" maxW="100%">
      					<Stack direction="row" spacing={1}>
      						{technologies.map((tech) => <TechIcon key={tech}>{tech}</TechIcon>)}
      					</Stack>
      				</Flex>
      			</Box>
      		</Flex>
        </Flex>
      </ModalBody>
      <ModalCloseButton color="red" right="5%" left="0"/>
    </ModalContent>
	)
}