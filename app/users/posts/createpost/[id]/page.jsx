import CreateFormPost from '@/app/components/CreateFormPost'
import React from 'react'

export default function page({ params }) {
  return (
    <main>
        <CreateFormPost params={params}/>
    </main>
  )
}
