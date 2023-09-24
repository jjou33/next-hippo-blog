import { ReactNode } from 'react'
export * as IconCollection from 'public/static/icon'

export interface IconPropsType {
  [key: string]: {
    icon: (color?: string) => ReactNode
  }
}
export * from './NavigationIcon'
export * from './ProfileIcon'
export * from './MainIcon'
