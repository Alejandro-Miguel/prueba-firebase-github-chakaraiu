import { ReactElement } from 'react';
import { Box, SimpleGrid, Icon, Text, Stack, Flex } from '@chakra-ui/react';

import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc';


interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
}


const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={'gray.600'}>{text}</Text>
    </Stack>
  );
};

export default function SimpleThreeColumns(props) {
    const iconos = [
        "FcAssistant",
        "FcDonate"
    ]

    return (
    <Box p={4}>
            {props.data
            ? props.data.map((d, i) => (
              <SimpleGrid key={`${d.titles}-${i}`} columns={{ base: 1, md: 3 }} spacing={10}>
                       <Feature
                        icon={<Icon as={iconos.map((reptil)=>(reptil))} w={10} h={10} />}
                        title={d.titles} 
                        text={d.text2}
        />
    
              </SimpleGrid>
            ))
            : 'Loading...'}
      
    </Box>
  );
}