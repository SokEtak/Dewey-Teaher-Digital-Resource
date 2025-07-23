import { useState, useEffect } from 'react';
import { Head, usePage } from '@inertiajs/react';
import type { PageProps } from '@inertiajs/inertia';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

// Convert number to Khmer numerals
const toKhmerNumber = (num: number): string => {
    const khmerDigits = ['០', '១', '២', '៣', '៤', '៥', '៦', '៧', '៨', '៩'];
    return num.toString().split('').map(d => khmerDigits[parseInt(d)]).join('');
};

export default function Grade() {
    const { props, url } = usePage<PageProps<{ program?: string }>>();
    const program = props.program;

    const queryParams = new URLSearchParams(url.split('?')[1]);
    const initialLang = queryParams.get('lang') === 'km' ? 'km' : 'en';

    const [lang, setLang] = useState<'en' | 'km'>(initialLang);
    const [grade, setGrade] = useState('');

    useEffect(() => {
        const newLang = queryParams.get('lang') === 'km' ? 'km' : 'en';
        setLang(newLang);
    }, [url]);

    const isKhmer = lang === 'km';

    const programText =
        program === "cambodia"
            ? (isKhmer ? "កម្មវិធីសិក្សាខ្មែរ" : "Cambodia Curriculum")
            : program === "america"
                ? (isKhmer ? "កម្មវិធីសិក្សាអាមេរិកកាំង" : "American Curriculum")
                : (isKhmer ? "កម្មវិធីសិក្សាបន្ថែម" : "Extra Curricular Curriculum");

    return (
        <>
            <Head title={isKhmer ? 'ជ្រើសរើសថ្នាក់' : 'Grade Selection'} />

            <div className={`flex min-h-screen flex-col items-center bg-gradient-to-b from-white via-indigo-50 to-indigo-100 p-4 text-gray-800 ${isKhmer ? 'font-khmer' : 'font-sans'}`}>

                {/* Language toggle */}
                <div className="mt-6 flex gap-2">
                    <button
                        onClick={() => setLang('en')}
                        className={`px-5 py-2 rounded-lg font-medium transition-all duration-300 ${
                            !isKhmer
                                ? 'bg-violet-700 text-white shadow-md'
                                : 'bg-white text-gray-700 hover:bg-violet-50 hover:shadow-md'
                        }`}
                    >
                        English
                    </button>
                    <button
                        onClick={() => setLang('km')}
                        className={`px-5 py-2 rounded-lg font-medium transition-all duration-300 ${
                            isKhmer
                                ? 'bg-orange-500 text-white shadow-md'
                                : 'bg-white text-gray-700 hover:bg-orange-50 hover:shadow-md'
                        }`}
                    >
                        ខ្មែរ
                    </button>
                </div>

                {/* Main card */}
                <div className="flex w-full max-w-lg items-center justify-center mt-6">
                    <div className="bg-white rounded-2xl shadow-lg p-6 w-full border-t-4 border-violet-700 hover:shadow-xl transition-all duration-300">

                        {/* Program Label */}
                        <h2 className="text-3xl font-semibold text-violet-700 mb-4 text-center">
                            {program ? programText : '-'}
                        </h2>

                        <h1 className="text-2xl sm:text-3xl font-bold text-center text-violet-700 mb-6 relative">
                            {isKhmer ? 'ជ្រើសរើសថ្នាក់' : 'Select Grade'}
                            <span className="absolute top-[-10px] right-[-20px] text-orange-500 text-3xl">🎓</span>
                        </h1>

                        {/* Grade Select */}
                        <div className="mb-6">
                            <label className="block mb-2 text-base font-medium text-gray-700">
                                {isKhmer ? 'ជ្រើសរើសថ្នាក់' : 'Choose Grade'}
                            </label>
                            <Select onValueChange={setGrade} value={grade}>
                                <SelectTrigger className="w-full bg-white text-gray-800 rounded-lg p-3 border border-gray-300 focus:ring-2 focus:ring-violet-400">
                                    <SelectValue placeholder={isKhmer ? 'ជ្រើសរើសថ្នាក់' : 'Select a grade'} />
                                </SelectTrigger>
                                <SelectContent className="bg-white text-gray-800 rounded-lg border border-gray-300">
                                    <SelectGroup>
                                        {[...Array(12).keys()].map(i => (
                                            <SelectItem key={i + 1} value={`${i + 1}`}>
                                                <span className="inline-flex items-center space-x-1">
                                                    <span>{isKhmer ? 'ថ្នាក់ទី' : 'Grade'}</span>
                                                    <span>{isKhmer ? toKhmerNumber(i + 1) : i + 1}</span>
                                                </span>
                                            </SelectItem>
                                        ))}
                                        <SelectItem value="club1">{isKhmer ? 'ក្លឹប១' : 'Club 1'}</SelectItem>
                                        <SelectItem value="club2">{isKhmer ? 'ក្លឹប២' : 'Club 2'}</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Continue button */}
                        <a
                            href={grade && program ? route('subject') + `?program=${program}&grade=${grade}&lang=${lang}` : '#'}
                            className={`block w-full rounded-lg px-4 py-3 text-center font-bold transition-all duration-300 ${
                                grade
                                    ? 'bg-violet-700 text-white hover:bg-violet-800 shadow-md'
                                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            }`}
                        >
                            {isKhmer ? 'បន្ត' : 'Continue'}
                        </a>

                        {/* Bottom divider */}
                        <div className="mt-4 border-b-4 border-violet-700 w-1/2 mx-auto"></div>
                    </div>
                </div>
            </div>
        </>
    );
}
