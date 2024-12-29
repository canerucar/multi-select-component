'use client'

import { useState } from 'react';
import { Option } from '@/src/types/type';
import { MultiSelect } from '@/src/app/components/MultiSelect';
import Header from './components/Header';
import Footer from './components/Footer';

const initialOptions = [
  { id: '1', label: 'Line chart' },
  { id: '2', label: 'Area chart' },
  { id: '3', label: 'Column chart' },
  { id: '4', label: 'Bar chart' },
  { id: '5', label: 'Pie chart' },
  { id: '6', label: 'Scatter chart' },
  { id: '7', label: 'Bubble chart' },
]

export default function Home() {
  const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);
  console.log('first selectedOptions', selectedOptions);

  return (
    <main className="min-h-screen flex flex-col justify-between bg-gray-50">
      <Header />
      <div className="flex-grow flex items-center justify-center">
        <MultiSelect
          options={initialOptions}
          value={selectedOptions}
          onChange={setSelectedOptions}
          allowNew={true}
        />
      </div>
      <Footer />
    </main>
  )
}

