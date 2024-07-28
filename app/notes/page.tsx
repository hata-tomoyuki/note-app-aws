import { getNotesList } from '@/lib/client'
import Link from 'next/link'
import React from 'react'
import { Note } from './type'
import parse from 'html-react-parser'

type NoteProps = {
    note: Note;
}

const Page = async () => {
    const notesList = await getNotesList()

    return (
        <div className='grid sm:grid-cols-2 xl:grid-cols-3 gap-8 mt-10'>
            {notesList.contents.map((note) => (
                <NoteItem key={note.id} note={note} />
            ))}
        </div>
    )
}

const NoteItem = ({ note }: NoteProps) => {
    return (
        <div className="bg-white shadow-md p-4 rounded-lg">
            <Link href={`/notes/${note.id}`} className='hover:opacity-80 duration-300'>
                <h3 className="font-medium text-xl">{note.title}</h3>
                <p className="text-gray-500 mt-2">{note.content.toString().slice(3, 15) + "..."}</p>
                <div className="mt-4 flex justify-end">
                    <button className="bg-red-500 font-medium px-4 py-2 rounded-lg text-white hover:bg-red-400 duration-300">Delete</button>
                </div>
            </Link>
        </div>
    )
}

export default Page
