import React from 'react'

interface IOwnProps {
  shownContent: string;
}

export const Content = ({shownContent}: IOwnProps) => {
  return (
    <div className='content'>
        <h1>
          {shownContent}
        </h1>
      </div>
  )
}
