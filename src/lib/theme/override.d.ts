import { DefaultMantineColor, MantineColorsTuple } from '@mantine/core'
import { colors } from './colors'

type ExtendedCustomColors = keyof typeof colors | DefaultMantineColor

declare module '@mantine/core' {
  export interface MantineThemeColorsOverride {
    colors: Record<ExtendedCustomColors, MantineColorsTuple>
  }
}
