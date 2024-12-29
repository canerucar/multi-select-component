import { ChangeEvent, KeyboardEvent, useRef } from 'react';
import { MultiSelectInputProps } from '@/src/types/type';

export default function MultiSelectInput({
  search,
  setSearch,
  setIsOpen,
  onAddNew,
}: MultiSelectInputProps) {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onAddNew()
    }
  }

  return (
    <input
      type="text"
      className="block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      value={search}
      onChange={(e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
      onFocus={() => setIsOpen(true)}
      onKeyDown={handleKeyDown}
      ref={inputRef}
    />
  )
}