import { SelectedItemsProps } from '@/src/types/type';
import { XIcon } from 'lucide-react';

export default function SelectedItems({ value, onChange }: SelectedItemsProps) {
  return (
    <div className="mt-2">
      {value.map((selectedOption) => (
        <span
          key={selectedOption.id}
          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-700 mr-2 mb-2"
        >
          {selectedOption.label}
          <button
            type="button"
            className="ml-1.5 text-indigo-700 hover:text-indigo-500 focus:outline-none"
            onClick={() => onChange(value.filter((v) => v.id !== selectedOption.id))}
          >
            <XIcon className="h-4 w-4" />
          </button>
        </span>
      ))}
    </div>
  )
}