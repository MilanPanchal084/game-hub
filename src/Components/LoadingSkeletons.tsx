import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'

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
