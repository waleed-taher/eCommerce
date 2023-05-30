import React, { FC } from 'react'

export default function Wrapper({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <div className="max-w-[2400] mx-auto sm:mx-4px md:mx-8px lg:mx-12px mx-20px py-8">
            {children}
        </div>
      )
  }


