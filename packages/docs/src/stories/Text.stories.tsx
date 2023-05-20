import type {Meta,StoryObj} from '@storybook/react'
import {Text,TextProps} from '@kdesign-ui/react'

export default {
    title: 'Typography/Text',
    component: Text,
    size: 'md',
    args: {
        children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum voluptates iure cupiditate molestiae, dolores saepe, veritatis ex, laudantium facilis consectetur pariatur molestias quasi eaque blanditiis quia repudiandae ullam officiis nulla.'
    },
    argTypes: {
        size: {
          options: [
            'xxs',
            'xs',
            'sm',
            'md',
            'lg',
            'xl',
            '2xl',
            '4xl',
            '5xl',
            '6xl',
            '7xl',
            '8xl',
            '9xl',
          ],
          control: {
            type: 'inline-radio',
          },
        },
      },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {
    args:{
        children: 'Strong text',
        as: 'strong'
    },
}