import { Badge } from '@chakra-ui/react';
import React from 'react'

interface CriticProps{
    score: number;
}

const CriticScore = ({score}: CriticProps) => {
let color = score > 75 ? 'green' : score > 60 ? 'yellow' : ''
  return (
    <>
    <Badge fontSize={14} colorScheme={color} paddingX={2} borderRadius={4}>{score}</Badge>
    </>
  )
}

export default CriticScore
