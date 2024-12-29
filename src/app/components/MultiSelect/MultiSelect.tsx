'use client'

import { useState, useEffect, useRef } from 'react';
import { MultiSelectProps } from '@/src/types/type';
import { SelectedItems, MultiSelectDropdown, MultiSelectInput } from '@/src/app/components/MultiSelect';
import { v4 as uuidv4 } from 'uuid';

export default function MultiSelect({
  label = 'Chart type',
  options,
  value,
  onChange,
  allowNew = true,
}: MultiSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [filteredOptions, setFilteredOptions] = useState(options);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const filtered = options.filter(
      (option) =>
        option.label.toLowerCase().includes(search.toLowerCase()) &&
        !value.some((selectedOption) => selectedOption.id === option.id)
    )
    setFilteredOptions(filtered)
  }, [search, options, value])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === 'a') {
        e.preventDefault()
        onChange(options)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [onChange, options])

  const handleAddNew = () => {
    if (allowNew && search && !filteredOptions.some(option => option.label.toLowerCase() === search.toLowerCase())) {
      const newOption = { id: uuidv4(), label: search }
      onChange([...value, newOption])
      setSearch('')
      setIsOpen(false)
    }
  }

  return (
    <div className="relative w-full max-w-xs" ref={containerRef}>
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <div className="mt-1 relative">
        <MultiSelectInput search={search} setSearch={setSearch} setIsOpen={setIsOpen} onAddNew={handleAddNew} />
        {isOpen && (
          <MultiSelectDropdown
            filteredOptions={filteredOptions}
            onChange={onChange}
            value={value}
            setIsOpen={setIsOpen}
            search={search}
            setSearch={setSearch}
            allowNew={allowNew}
          />
        )}
      </div>
      <SelectedItems value={value} onChange={onChange} />
    </div>
  )
}