import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'
import React from 'react'

const LoadingSkeletons = () => {
  return (
    <Card>
        <Skeleton height={200} />
        <CardBody>
            <SkeletonText />
        </CardBody>
    </Card>
  )
}

export default LoadingSkeletons;
