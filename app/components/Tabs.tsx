'use client'
import React from 'react'
import Container from './Container'
import { AnimatePresence, motion } from 'framer-motion'
import cx from 'classnames'

type TabProps = {
  label: string
  children: React.ReactNode
}

type TabElement = React.ReactElement<TabProps>

type TabsProps = {
  children: TabElement[] | TabElement
}

const Tab: React.FC<TabProps> = ({ children }) => <>{children}</>

const Tabs: React.FC<TabsProps> = ({ children }) => {
  const tabsItems = React.Children.toArray(children) as TabElement[]
  const [activeTab, setActiveTab] = React.useState(tabsItems[0].props.label)

  return (
    <Container>
      <div className="flex bg-white rounded-lg px-4 shadow">
        {tabsItems.map((tab) => {
          const tabLabel = tab.props.label
          const isActiveTab = activeTab === tabLabel
          return (
            <button
              key={tabLabel}
              onClick={() => setActiveTab(tabLabel)}
              className={cx(
                'px-4 py-6 min-w-[15%] relative text-center font-poppins font-bold text-sm transition-all transition-400 ease-in-out',
                isActiveTab ? ' text-black' : 'text-gray-800 hover:text-black'
              )}
            >
              {tabLabel}
              {isActiveTab && (
                <motion.div
                  layout
                  layoutId="menu-underline"
                  className="absolute left-0 bottom-0 h-[2px] bg-yellow-300 w-full"
                />
              )}
            </button>
          )
        })}
      </div>
      <div className="mt-8">
        <AnimatePresence mode="wait">
          {tabsItems
            .filter((tab) => tab.props.label === activeTab)
            .map((tab) => (
              <motion.div
                key={tab.props.label}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {tab.props.children}
              </motion.div>
            ))}
        </AnimatePresence>
      </div>
    </Container>
  )
}

export { Tabs, Tab }
