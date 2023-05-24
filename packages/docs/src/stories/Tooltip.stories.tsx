import type { Meta, StoryObj } from '@storybook/react'

import {Tooltip,TooltipProps} from '@kdesign-ui/react/src'


export default {
    title:'Alert/Tooltip',
    component: Tooltip,
    
    args: {
        children:'8 de abril - Disponível',
    },
} as Meta


export const Primary: StoryObj<TooltipProps> = {
    args: {
        children: '8 de abril - Disponível',
        as: 'strong'
    },
  }