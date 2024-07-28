import Link from 'next/link'
import React from 'react'
import Note from './Note'
import { getNoteDetail, getNotesList } from '@/lib/client'

export const generateStaticParams = async () => {
    const notes = await getNotesList()
    return notes.contents.map((note) => ({
        id: note.id,
    }))
}

const page = async ({ params }: { params: { id: string } }) => {
    const note = await getNoteDetail(params.id)
    return (
        <main>
            <Link href="/notes" className='mx-2 sm:mx-4'>
                ← Back
            </Link>
            <h2 className='text-xs my-4 text-gray-400'>View Notes</h2>
            <Note note={note} />
        </main>
    )
}

export default page
