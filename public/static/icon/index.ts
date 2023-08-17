import { ReactNode } from 'react'
export * as IconCollection from 'public/static/icon'

export interface IconPropsType {
  [key: string]: {
    icon: () => ReactNode
  }
}
export * from './NavigationIcon'
export * from './ProfileIcon'
