import { styled } from '../../styles'

export const ToastContainer = styled('div', {
  backgroundColor: '$gray800',
  border: '1px solid',
  borderColor: '$gray500',
  borderRadius: 6,
  padding: '$4',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'left',
  justifyContent: 'space-between',
  gap: '$2',
  width: '$80',
  position: 'relative',

  svg: {
    position: 'absolute',
    right: '$4',
    color: '$gray200',
    cursor: 'pointer',
  },

  strong: {
    color: '$white',
    fontSize: '$2xl',
  },

  span: {
    color: '$gray200',
    fontSize: '$sm',
  },
})
