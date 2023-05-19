import type {Meta,StoryObj} from '@storybook/react'
import {Text,TextProps} from '@kdesign-ui/react'

export default {
    title: 'Typography/Text',
    component: Text,
    args: {
        children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum voluptates iure cupiditate molestiae, dolores saepe, veritatis ex, laudantium facilis consectetur pariatur molestias quasi eaque blanditiis quia repudiandae ullam officiis nulla.'
    },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {
    args:{
        children: 'Strong text',
        as: 'strong'
    },
}