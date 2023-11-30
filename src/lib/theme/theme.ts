import { mergeThemeOverrides } from '@mantine/core'
import { themeColor } from './colors'
import { themeTypography } from './typography'

export const theme = mergeThemeOverrides(themeTypography, themeColor)
