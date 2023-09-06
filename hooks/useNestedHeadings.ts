import { useEffect, useState } from 'react'

interface NestedHeadingType {
  id: string
  text: string
  level: number
  items: { id: string; text: string; level: number }[]
}
interface NestedListType extends NestedHeadingType {
  items: NestedHeadingType[]
}
export const getClassName = (level: number) => {
  switch (level) {
    case 3:
      return 'head3'
    case 4:
      return 'head4'
    default:
      return ''
  }
}
const getNestedHeadings = (headingList: NodeListOf<HTMLElement>) => {
  const nestedList: NestedListType[] = []
  headingList.forEach(elem => {
    const { id, innerText, nodeName } = elem
    const headingsLevel = Number(nodeName.charAt(1))
    if (headingsLevel === 3) {
      nestedList.push({ id, text: innerText, level: headingsLevel, items: [] })
    } else if (headingsLevel === 4 && nestedList.length > 0) {
      nestedList[nestedList.length - 1].items.push({
        id,
        text: innerText,
        level: headingsLevel,
        items: [],
      })
    }
  })

  return nestedList
}

export const useHeadingDataSet = () => {
  const [nestedHeadings, setNestedHeadings] = useState<NestedListType[]>([])

  useEffect(() => {
    const elem: NodeListOf<HTMLElement> = document.querySelectorAll('h3,h4,h5')

    elem.forEach((element, index) => {
      element.setAttribute('id', `head${index}`)
    })

    const nestedHeadingList = getNestedHeadings(elem)
    setNestedHeadings(nestedHeadingList)
  }, [])

  return [nestedHeadings]
}
