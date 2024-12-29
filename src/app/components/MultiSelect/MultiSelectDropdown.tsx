import { MultiSelectDropdownProps } from '@/src/types/type';
import { v4 as uuidv4 } from 'uuid';

const highlightMatch = (text: string, highlight: string) => {
  const parts = text.split(new RegExp(`(${highlight})`, 'gi'))
  return (
    <>
      {parts.map((part, index) =>
        part.toLowerCase() === highlight.toLowerCase() ? (
          <span key={index} className="underline">
            {part}
          </span>
        ) : (
          part
        )
      )}
    </>
  )
}

export default function MultiSelectDropdown({
  filteredOptions,
  onChange,
  value,
  setIsOpen,
  search,
  setSearch,
  allowNew,
}: MultiSelectDropdownProps) {
  return (
    <ul className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
      {filteredOptions.map((option) => (
        <li
          key={option.id}
          className="cursor-pointer select-none relative py-2 pl-3 pr-9 hover:bg-gray-200"
          onClick={() => {
            if (!value.some((v) => v.id === option.id)) {
              onChange([...value, option])
            }
            setSearch('');
            setIsOpen(false);
          }}
        >
          <span className="font-normal block truncate">
            {highlightMatch(option.label, search)}
          </span>
        </li>
      ))}
      {allowNew && search && !filteredOptions.some(option => option.label.toLowerCase() === search.toLowerCase()) && (
        <li
          className="cursor-pointer select-none relative py-2 pl-3 pr-9 text-indigo-600"
          onClick={() => {
            const newOption = { id: uuidv4(), label: search }
            onChange([...value, newOption]);
            setSearch('');
            setIsOpen(false);
          }}
        >
          <span className="font-normal block truncate">Add "{search}"</span>
        </li>
      )}
    </ul>
  )
}