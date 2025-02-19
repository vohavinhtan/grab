import { Search } from 'lucide-react'
import React from 'react'

type SearchInputProps = {
    handleSearch: () => void;
}

export default function SearchInput({ handleSearch }: SearchInputProps) {
    return (
        <div className='shadow h-[50px] px-3 gap-2 flex items-center bg-white rounded-2xl'>
            <Search size={20} onClick={handleSearch} />
            <input placeholder='Tìm kiếm địa chỉ' type="text" className='outline-none w-full text-sm' />
        </div>
    )
}
