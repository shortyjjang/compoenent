'use client'
import { Input } from '@/entites/Input'
import React, { useState } from 'react'

export default function InputPage() {
    const [value, setValue] = useState('')
  return (
    <div className="flex flex-col gap-4 p-8">
        <Input value={value} onChange={(e) => setValue(e.target.value)} />
        <code></code>
    </div>
  )
}
