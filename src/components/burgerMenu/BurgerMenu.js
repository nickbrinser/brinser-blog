import React, { useState } from 'react'

import BurgerButton from './BurgerButton'
import MenuContent from './MenuContent'

const BurgerMenu = ({ theme, toggleTheme }) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <BurgerButton open={open} setOpen={setOpen} />
      <MenuContent
        open={open}
        setOpen={setOpen}
        theme={theme}
        toggleTheme={toggleTheme}
      />
    </>
  )
}

export default BurgerMenu
