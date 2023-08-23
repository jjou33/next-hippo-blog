import { useState, useEffect } from 'react'

enum Phase {
  Typing,
  Pausing,
  Deleting,
}

const TYPING_INTERVAL = 150
const PAUSE_TIME = 1000
const DELETING_INTERVAL = 50

export const useTypingTitle = (typedList: string[]) => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [phase, setPhase] = useState(Phase.Typing)
  const [typeTitle, setTypeTitle] = useState('')
  useEffect(() => {
    switch (phase) {
      case Phase.Typing: {
        const nextTypedContents = typedList[selectedIndex]?.slice(
          0,
          typeTitle.length + 1,
        )

        if (nextTypedContents === typeTitle) {
          setPhase(Phase.Pausing)
          return
        }
        const timeout = setTimeout(() => {
          setTypeTitle(nextTypedContents)
        }, TYPING_INTERVAL)

        return () => clearTimeout(timeout)
      }
      case Phase.Deleting: {
        if (!typeTitle) {
          const nextIndex = selectedIndex + 1

          setSelectedIndex(typedList[nextIndex] !== undefined ? nextIndex : 0)
          setPhase(Phase.Typing)
          return
        }
        const nextRemaining = typedList[selectedIndex]?.slice(
          0,
          typeTitle.length - 1,
        )
        const timeout = setTimeout(() => {
          setTypeTitle(nextRemaining)
        }, DELETING_INTERVAL)

        return () => clearTimeout(timeout)
      }
      case Phase.Pausing:
      default: {
        const timeout = setTimeout(() => {
          setPhase(Phase.Deleting)
        }, PAUSE_TIME)

        return () => clearTimeout(timeout)
      }
    }
  }, [typedList, typeTitle, selectedIndex, phase])

  return typeTitle
}
