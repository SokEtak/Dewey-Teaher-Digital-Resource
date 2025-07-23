import { useState } from 'react';
import { Head } from '@inertiajs/react';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export default function Program() {
    const [lang, setLang] = useState<'en' | 'km'>('en');
    const [campus, setCampus] = useState('');
    const [program, setProgram] = useState('');
    const isKhmer = lang === 'km';

    return (
        <>
            <Head title={isKhmer ? 'ជ្រើសរើសកម្មវិធីសិក្សា' : 'Program Selection'} />

            <div className="flex min-h-screen flex-col items-center bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 p-4 text-gray-900 font-sans">
                {/* Language toggle */}
                <div className="mt-6 flex gap-2">
                    <button
                        onClick={() => setLang('en')}
                        className={`px-5 py-2 rounded-lg font-semibold transition-all duration-300 ${
                            !isKhmer
                                ? 'bg-indigo-600 text-white shadow-md'
                                : 'bg-white text-gray-700 hover:bg-indigo-50 hover:shadow-sm'
                        }`}
                    >
                        English
                    </button>
                    <button
                        onClick={() => setLang('km')}
                        className={`px-5 py-2 rounded-lg font-semibold transition-all duration-300 ${
                            isKhmer
                                ? 'bg-green-600 text-white shadow-md'
                                : 'bg-white text-gray-700 hover:bg-green-50 hover:shadow-sm'
                        }`}
                    >
                        ខ្មែរ
                    </button>
                </div>

                {/* Card Container */}
                <div className="flex w-full max-w-lg items-center justify-center mt-6">
                    <div className="bg-white rounded-2xl shadow-lg p-6 w-full border-t-4 border-indigo-600 hover:shadow-xl transition-all duration-300">
                        <h2 className="text-3xl font-bold text-indigo-600 mb-4 text-center">
                            {isKhmer ? 'ជ្រើសរើសកម្មវិធី និងទីតាំង' : 'Select Program & Campus'}
                        </h2>

                        <h1 className="text-2xl sm:text-3xl font-bold text-center text-indigo-600 mb-6 relative">
                            {isKhmer ? 'ចាប់ផ្តើមដំណើររបស់អ្នក' : 'Start Your Journey'}
                            <span className="absolute top-[-10px] right-[-20px] text-green-500 text-3xl">
                🎓
              </span>
                        </h1>

                        {/* Campus Select */}
                        <div className="mb-5">
                            <label className="block mb-2 text-base font-medium text-gray-700">
                                {isKhmer ? 'ជ្រើសរើសទីតាំង' : 'Choose Campus'}
                            </label>
                            <Select onValueChange={setCampus} value={campus}>
                                <SelectTrigger className="w-full bg-white text-gray-900 rounded-lg p-3 border border-gray-300 focus:ring-2 focus:ring-indigo-500">
                                    <SelectValue placeholder={isKhmer ? "ជ្រើសរើសទីតាំង" : "Select a campus"} />
                                </SelectTrigger>
                                <SelectContent className="bg-white text-gray-900 rounded-lg border border-gray-300">
                                    <SelectGroup>
                                        {isKhmer ? (
                                            <>
                                                <SelectItem value="iconic">សាលាឌូវី សាខាអាយខនិក</SelectItem>
                                                <SelectItem value="ochar">សាលាឌូវី សាខាអូរចារ</SelectItem>
                                                <SelectItem value="banteay">សាខាបន្ទាយមានជ័យ</SelectItem>
                                                <SelectItem value="childcare">ឌូវី ឆាយលឃែរ ហោស៍</SelectItem>
                                                <SelectItem value="kindergarten">មត្តេយ្យ ឌូវី</SelectItem>
                                            </>
                                        ) : (
                                            <>
                                                <SelectItem value="iconic">Iconic Branch</SelectItem>
                                                <SelectItem value="ochar">Ochar Branch</SelectItem>
                                                <SelectItem value="banteay">Banteay Meanchey</SelectItem>
                                                <SelectItem value="childcare">Childcare House</SelectItem>
                                                <SelectItem value="kindergarten">Kindergarten</SelectItem>
                                            </>
                                        )}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Program Select */}
                        <div className="mb-6">
                            <label className="block mb-2 text-base font-medium text-gray-700">
                                {isKhmer ? 'ជ្រើសរើសកម្មវិធីសិក្សា' : 'Choose Program'}
                            </label>
                            <Select onValueChange={setProgram} value={program}>
                                <SelectTrigger className="w-full bg-white text-gray-900 rounded-lg p-3 border border-gray-300 focus:ring-2 focus:ring-indigo-500">
                                    <SelectValue placeholder={isKhmer ? "ជ្រើសរើសកម្មវិធី" : "Select a program"} />
                                </SelectTrigger>
                                <SelectContent className="bg-white text-gray-900 rounded-lg border border-gray-300">
                                    <SelectGroup>
                                        {isKhmer ? (
                                            <>
                                                <SelectItem value="cambodia">កម្មវិធីសិក្សាខ្មែរ</SelectItem>
                                                <SelectItem value="america">កម្មវិធីសិក្សាអាមេរិកកាំង</SelectItem>
                                                <SelectItem value="extra">កម្មវិធីបន្ថែម</SelectItem>
                                            </>
                                        ) : (
                                            <>
                                                <SelectItem value="cambodia">Cambodia Curriculum</SelectItem>
                                                <SelectItem value="america">American Curriculum</SelectItem>
                                                <SelectItem value="extra">Extra Curricular Curriculum</SelectItem>
                                            </>
                                        )}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Continue Button */}
                        <a
                            href={campus && program ? route('grade') + `?program=${program}&lang=${lang}` : '#'}
                            className={`block w-full rounded-lg px-4 py-3 text-center font-bold transition-all duration-300 ${
                                campus && program
                                    ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-md'
                                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            }`}
                        >
                            {isKhmer ? 'បន្ត' : 'Continue'}
                        </a>

                        <div className="mt-4 border-b-4 border-indigo-600 w-1/2 mx-auto"></div>
                    </div>
                </div>
            </div>
        </>
    );
}
