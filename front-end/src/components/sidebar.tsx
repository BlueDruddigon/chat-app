import React from 'react'

interface Props {
  className?: string
}

const SideBar: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={`flex flex-col justify-center items-center px-4 py-auto bg-slate-500 text-white w-64 h-screen ${className}`}
    >
      SideBar goes here
    </div>
  )
}

export default SideBar
