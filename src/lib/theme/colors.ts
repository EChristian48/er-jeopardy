import { MantineColorsTuple, createTheme } from '@mantine/core'

const sunriseYellow: MantineColorsTuple = [
  '#fefde4',
  '#f9f8d1',
  '#f3f1a6',
  '#ece977',
  '#e7e250',
  '#e3de36',
  '#e2dc27',
  '#c8c217',
  '#b1ac0c',
  '#989400',
]

const desertOrange: MantineColorsTuple = [
  '#fff5e3',
  '#fdead0',
  '#f7d3a4',
  '#f1ba73',
  '#eca64a',
  '#e99830',
  '#e89220',
  '#ce7e12',
  '#b86f0b',
  '#a05f00',
]

export const colors = {
  ['sunrise-yellow']: sunriseYellow,
  ['desert-orange']: desertOrange,
}

export const themeColor = createTheme({
  primaryColor: 'sunrise-yellow',
  colors,
})
