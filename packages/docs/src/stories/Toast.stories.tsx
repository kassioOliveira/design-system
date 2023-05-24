import type { ComponentStory, Meta, StoryObj } from '@storybook/react'

import {Toast} from '@kdesign-ui/react/src'


export default {
    title:'Alert/Toast',
    component: Toast,
    
    argTypes: {
        close: {action: 'click'}
    },
} as Meta


export const Primary: ComponentStory<typeof Toast> = (args) => {

 
    return <Toast description='Quarta-feira, 23 de Outubro ás 16h' title='Agendamento realizado' />

}