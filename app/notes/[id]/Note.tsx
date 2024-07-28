import React from 'react'
import type { Note as NoteType } from '../type'
import parse from 'html-react-parser'

type NoteProps = {
    note: NoteType
}

const Note = ({ note }: NoteProps) => {
    return (
        <div className='flex flex-col bg-white shadow-md p-4 rounded-lg'>
            <h3 className='font-medium text-xl'>{note.title}</h3>
            <p className='text-gray-500 mt-2'>{parse(note.content)}</p>
        </div>
    )
}

export default Note
