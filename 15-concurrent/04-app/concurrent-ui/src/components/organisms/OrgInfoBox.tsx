/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import type { FC } from 'react';
import {
  Badge,
  Flex,
  Icon,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import { FaGlobe, FaMapMarkerAlt } from 'react-icons/fa';
import type { Organization } from 'domains/github';

type Props = { org?: Organization | null };

const OrgInfoBox: FC<Props> = ({ org = null }) => (
  <Stack w="xl" height="12rem" direction="row" p={4} spacing="1rem">
    <Image
      boxSize="140px"
      objectFit="cover"
      src={org?.avatarUrl}
      alt={`${String(org?.name)}'s logo`}
    />
    <Stack direction="column">
      <Flex>
        <Heading as="h3" textAlign="left" size="lg">
          {org?.name}
        </Heading>
        {org?.isVerified && (
          <div>
            <Badge colorScheme="green" size="sm" ml="0.8rem">
              verified
            </Badge>
          </div>
        )}
      </Flex>
      <Text color="gray.500">{org?.description}</Text>
      <div>
        {org?.location && (
          <Text fontSize="0.9rem">
            <Icon as={FaMapMarkerAlt} mb="-0.1rem" mr="0.4rem" />
            {org.location}
          </Text>
        )}
        {org?.blog && (
          <Text fontSize="0.9rem">
            <Icon as={FaGlobe} mb="-0.1rem" mr="0.4rem" />
            <a href={org.blog} target="_blank" rel="noreferrer">
              {org.blog}
            </a>
          </Text>
        )}
      </div>
    </Stack>
  </Stack>
);

export default OrgInfoBox;
