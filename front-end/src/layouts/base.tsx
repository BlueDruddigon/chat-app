import SideBar from '@/components/sidebar'
import React from 'react'

interface Props {
  children: React.ReactNode
}

const BaseLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex h-screen w-screen bg-gray-400">
      <SideBar className="text-5xl rounded-lg" />
      <div className="flex flex-col flex-1 justify-center items-center text-black text-5xl">
        {children}
      </div>
    </div>
  )
}

export default BaseLayout
