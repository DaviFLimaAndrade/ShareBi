import { Flex, Link, List, ListItem, Text, useColorModeValue } from '@chakra-ui/react';

export default function Footer() {
	let textColor = useColorModeValue('gray.400', 'white');
	let linkColor = useColorModeValue({ base: 'gray.400', lg: 'white' }, 'white');
	return (
		<Flex
			zIndex='3'
			flexDirection={{
				base: 'column',
				lg: 'row'
			}}
			alignItems={{
				base: 'center',
				xl: 'start'
			}}
			justifyContent='space-between'
			px={{ base: '30px', md: '0px' }}
			pb='30px'>
			<Text
				color={textColor}
				textAlign={{
					base: 'center',
					xl: 'start'
				}}
				mb={{ base: '20px', lg: '0px' }}>
				{' '}
				&copy; {new Date().getFullYear()}
				<Text as='span' fontWeight='500' ms='4px'>
				Bosch - GS - Share-Bi
				</Text>
			</Text>
			<List display='flex'>
				<ListItem
					me={{
						base: '20px',
						md: '44px'
					}}>
					<Link fontWeight='500' color={linkColor} href='https://so.custhelp.com/app/ask'>
						Support
					</Link>
				</ListItem>
				<ListItem
					me={{
						base: '20px',
						md: '44px'
					}}>
					<Link fontWeight='500' color={linkColor} href='https://activation.boschsecurity.com/LicenseActivation.aspx'>
						License
					</Link>
				</ListItem>
				<ListItem
					me={{
						base: '20px',
						md: '44px'
					}}>
					<Link fontWeight='500' color={linkColor} href='https://garantiaexpressa.bosch.com.br/terms-of-service'>
						Terms of Use
					</Link>
				</ListItem>
				<ListItem>
					<Link fontWeight='500' color={linkColor} href='https://boschalemdaferramenta.com.br/como-escolher-um-soprador-termico/'>
						Blog
					</Link>
				</ListItem>
			</List>
		</Flex>
	);
}