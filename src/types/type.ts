export interface Option {
  id: string
  label: string
}

export interface MultiSelectProps {
  label?: string
  options: Option[]
  value: Option[]
  onChange: (value: Option[]) => void
  allowNew?: boolean
}

export interface SelectedItemsProps {
  value: Option[]
  onChange: (value: Option[]) => void
}

export interface MultiSelectInputProps {
  search: string
  setSearch: (value: string) => void
  setIsOpen: (value: boolean) => void
  onAddNew: () => void
}

export interface MultiSelectDropdownProps {
  filteredOptions: Option[]
  onChange: (value: Option[]) => void
  value: Option[]
  setIsOpen: (value: boolean) => void
  search: string
  setSearch: (value: string) => void
  allowNew: boolean
}