import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Tooltip = styled('div', {
  width: '$40',
  backgroundColor: '$gray900',
  color: '$gray100',
  borderRadius: 5,
  padding: '$2',
  textAlign: 'center',
  fontWeight: 'bold',
})

export interface TooltipProps extends ComponentProps<typeof Tooltip> {
  as?: ElementType
}
