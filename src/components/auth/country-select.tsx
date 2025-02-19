'use client';
import React, { useState } from 'react';

interface Country {
    name: string;
    code: string;
    flag: string;
}

const countries: Country[] = [
    { name: 'Vietnam', code: '+84', flag: '🇻🇳' },
    { name: 'United States', code: '+1', flag: '🇺🇸' },
    { name: 'Japan', code: '+81', flag: '🇯🇵' },
    { name: 'South Korea', code: '+82', flag: '🇰🇷' },
    { name: 'Australia', code: '+61', flag: '🇦🇺' },
    { name: 'Canada', code: '+1', flag: '🇨🇦' },
    { name: 'United Kingdom', code: '+44', flag: '🇬🇧' },
    { name: 'France', code: '+33', flag: '🇫🇷' },
    { name: 'Germany', code: '+49', flag: '🇩🇪' },
    { name: 'India', code: '+91', flag: '🇮🇳' },
    { name: 'Brazil', code: '+55', flag: '🇧🇷' },
    { name: 'Mexico', code: '+52', flag: '🇲🇽' },
    { name: 'South Africa', code: '+27', flag: '🇿🇦' },
    { name: 'Italy', code: '+39', flag: '🇮🇹' },
    { name: 'Sweden', code: '+46', flag: '🇸🇪' },
    { name: 'Switzerland', code: '+41', flag: '🇨🇭' },
    { name: 'Singapore', code: '+65', flag: '🇸🇬' },
    { name: 'Indonesia', code: '+62', flag: '🇮🇩' },
    { name: 'Malaysia', code: '+60', flag: '🇲🇾' },
];

const CountryDialog: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selectedCountry, setSelectedCountry] = useState<Country>(countries[0]);

    const toggleDialog = () => {
        setIsOpen(!isOpen);
    };

    const handleCountrySelect = (country: Country) => {
        setSelectedCountry(country);
        setIsOpen(false);
    };

    const closeDialog = (event: React.MouseEvent) => {
        if (event.target === event.currentTarget) {
            setIsOpen(false);
        }
    };

    const groupedCountries = countries.reduce((acc: { [key: string]: Country[] }, country) => {
        const firstLetter = country.name[0].toUpperCase();
        if (!acc[firstLetter]) {
            acc[firstLetter] = [];
        }
        acc[firstLetter].push(country);
        return acc;
    }, {});

    return (
        <div className="px-4 ">
            <button
                onClick={toggleDialog}
                className="px-4 py-2 bg-transperant w-full text-lg text-black border-b-[1px] border-black text-nowrap  rounded-0"
            >
                {selectedCountry.flag} {selectedCountry.code}
            </button>

            {isOpen && (
                <div onClick={closeDialog} className="fixed z-[10] inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white  w-full h-full rounded shadow-lg">
                        <div className='flex items-center bg-[#00b14f] h-[50px] w-full pl-5'>
                            <button className='text-xl text-white font-bold' onClick={closeDialog}>
                                X
                            </button>
                            <p className="text-xl w-full text-center text-white font-bold text-center ">
                                Chọn quốc gia / khu vực
                            </p>
                        </div>
                        <ul className="max-h-[95vh] p-[20px_10px] overflow-y-auto">
                            <h3 className="font-bold text-xl">Đề nghị</h3>
                            <div className="flex items-center gap-5 px-2 py-5 border-b border-gray-300">
                                <span className="mr-2 text-xl">{selectedCountry.flag}</span>
                                <span className='text-xl'>{selectedCountry.name} ({selectedCountry.code})</span>
                                <span className="ml-auto text-xl text-green-500">✔️</span>
                            </div>
                            {Object.keys(groupedCountries).map((letter) => (
                                <li key={letter} className="mt-4">
                                    <h3 className="font-bold text-xl">{letter}</h3>
                                    {groupedCountries[letter].map((country) => (
                                        <div key={country.code}>
                                            <li
                                                onClick={() => handleCountrySelect(country)}
                                                className="flex text-xl items-center px-2 py-5 gap-5 hover:bg-gray-200 cursor-pointer border-b-[1px] border-grey"
                                            >
                                                <span className="mr-2 text-xl">{country.flag}</span>
                                                <span className='text-xl'>{country.name} ({country.code})</span>
                                            </li>
                                        </div>
                                    ))}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CountryDialog;