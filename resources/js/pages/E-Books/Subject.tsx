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

// Mapping of English numbers to Khmer numbers
const numberMap: { [key: string]: string } = {
    '1': '១',
    '2': '២',
    '3': '៣',
    '4': '៤',
    '5': '៥',
    '6': '៦',
    '7': '៧',
    '8': '៨',
    '9': '៩',
    '10': '១០',
    '11': '១១',
    '12': '១២',
    'club1': 'ក្លឹប១',
    'club2': 'ក្លឹប២',
};

export default function Subject() {
    const { props, url } = usePage<PageProps<{ program?: string; grade?: string }>>();
    const { program, grade } = props;

    // Get initial lang from query string
    const queryParams = new URLSearchParams(url.split('?')[1]);
    const initialLang = queryParams.get('lang') === 'km' ? 'km' : 'en';

    const [lang, setLang] = useState<'en' | 'km'>(initialLang);
    const [subject, setSubject] = useState('');

    // Update lang if query changes
    useEffect(() => {
        const newLang = queryParams.get('lang') === 'km' ? 'km' : 'en';
        setLang(newLang);
    }, [url]);

    // Mapping of grades to subjects based on program
    const gradeSubjects: { [key: string]: { [key: string]: { value: string; en: string; km: string }[] } } = {
        "1": {
            "cambodia": [
                { value: 'math', en: 'Mathematics', km: 'គណិតវិទ្យា' },
                { value: 'science', en: 'Science', km: 'វិទ្យាសាស្ត្រ' },
                { value: 'social', en: 'Social Science', km: 'សិក្សាសង្គម' },
                { value: 'khmer', en: 'Khmer Language', km: 'ភាសាខ្មែរ' },
                { value: 'virtual-lab', en: 'Virtual Lab', km: 'មន្ទីរពិសោធន៍និម្មិត' },
                { value: 'ai-education', en: 'AI Education', km: 'ការអប់រំ AI' }
            ],
            "america": [
                { value: 'math', en: 'Mathematics', km: 'គណិតវិទ្យា' },
                { value: 'science', en: 'Science', km: 'វិទ្យាសាស្ត្រ' },
                { value: 'social', en: 'Social Science', km: 'វិទ្យាសាស្ត្រ-សិក្សាសង្គម' }
            ],
            "extras": []
        },
        "2": {
            "cambodia": [
                { value: 'math', en: 'Mathematics', km: 'គណិតវិទ្យា' },
                { value: 'science', en: 'Science', km: 'វិទ្យាសាស្ត្រ' },
                { value: 'social', en: 'Social Science', km: 'វិទ្យាសាស្ត្រ-សិក្សាសង្គម' },
                { value: 'khmer', en: 'Khmer Language', km: 'ភាសាខ្មែរ' },
                { value: 'virtual-lab', en: 'Virtual Lab', km: 'មន្ទីរពិសោធន៍និម្មិត' },
                { value: 'ai-education', en: 'AI Education', km: 'ការអប់រំ AI' }
            ],
            "america": [
                { value: 'math', en: 'Mathematics', km: 'គណិតវិទ្យា' },
                { value: 'science', en: 'Science', km: 'វិទ្យាសាស្ត្រ' },
                { value: 'social', en: 'Social Science', km: 'វិទ្យាសាស្ត្រ-សិក្សាសង្គម' }
            ],
            "extras": []
        },
        "3": {
            "cambodia": [
                { value: 'math', en: 'Mathematics', km: 'គណិតវិទ្យា' },
                { value: 'science', en: 'Science', km: 'វិទ្យាសាស្ត្រ' },
                { value: 'social', en: 'Social Science', km: 'វិទ្យាសាស្ត្រ-សិក្សាសង្គម' },
                { value: 'reading', en: 'Reading', km: 'អំណាន' },
                { value: 'khmer', en: 'Khmer Language', km: 'ភាសាខ្មែរ' },
                { value: 'virtual-lab', en: 'Virtual Lab', km: 'មន្ទីរពិសោធន៍និម្មិត' },
                { value: 'ai-education', en: 'AI Education', km: 'ការអប់រំ AI' }
            ],
            "america": [
                { value: 'math', en: 'Mathematics', km: 'គណិតវិទ្យា' },
                { value: 'science', en: 'Science', km: 'វិទ្យាសាស្ត្រ' },
                { value: 'social', en: 'Social Science', km: 'វិទ្យាសាស្ត្រ-សិក្សាសង្គម' }
            ],
            "extras": []
        },
        "4": {
            "cambodia": [
                { value: 'chaching', en: 'Cha Ching', km: 'កម្មវិធីសិក្សា-ឆាឈីង' },
                { value: 'math', en: 'Mathematics', km: 'គណិតវិទ្យា' },
                { value: 'history', en: 'History Of Science', km: 'ប្រវិត្តិសាស្ត្រ' },
                { value: 'khmer', en: 'Khmer Language', km: 'ភាសាខ្មែរ' },
                { value: 'english', en: 'English', km: 'ភាសាអង់គ្លេស' },
                { value: 'science', en: 'Science', km: 'វិទ្យាសាស្ត្រ' },
                { value: 'social', en: 'Social Science', km: 'វិទ្យាសាស្ត្រ-សិក្សាសង្គម' },
                { value: 'virtual-lab', en: 'Virtual Lab', km: 'មន្ទីរពិសោធន៍និម្មិត' },
                { value: 'ai-education', en: 'AI Education', km: 'ការអប់រំ AI' }
            ],
            "america": [
                { value: 'math', en: 'Mathematics', km: 'គណិតវិទ្យា' },
                { value: 'science', en: 'Science', km: 'វិទ្យាសាស្ត្រ' },
                { value: 'social', en: 'Social Science', km: 'វិទ្យាសាស្ត្រ-សិក្សាសង្គម' }
            ],
            "extras": []
        },
        "5": {
            "cambodia": [
                { value: 'math', en: 'Mathematics', km: 'គណិតវិទ្យា' },
                { value: 'khmer', en: 'Khmer Language', km: 'ភាសាខ្មែរ' },
                { value: 'english', en: 'English', km: 'ភាសាអង់គ្លេស' },
                { value: 'science', en: 'Science', km: 'វិទ្យាសាស្ត្រ' },
                { value: 'social', en: 'Social Science', km: 'សិក្សាសង្គម' },
                { value: 'virtual-lab', en: 'Virtual Lab', km: 'មន្ទីរពិសោធន៍និម្មិត' },
                { value: 'ai-education', en: 'AI Education', km: 'ការអប់រំ AI' }
            ],
            "america": [
                { value: 'math', en: 'Mathematics', km: 'គណិតវិទ្យា' },
                { value: 'science', en: 'Science', km: 'វិទ្យាសាស្ត្រ' },
                { value: 'social', en: 'Social Science', km: 'សិក្សាសង្គម' }
            ],
            "extras": []
        },
        "6": {
            "cambodia": [
                { value: 'math', en: 'Mathematics', km: 'គណិតវិទ្យា' },
                { value: 'history', en: 'History', km: 'ប្រវិត្តិសាស្ត្រ' },
                { value: 'khmer', en: 'Khmer Language', km: 'ភាសាខ្មែរ' },
                { value: 'english', en: 'English', km: 'ភាសាអង់គ្លេស' },
                { value: 'science', en: 'Science', km: 'វិទ្យាសាស្ត្រ' },
                { value: 'social', en: 'Social Science', km: 'សិក្សាសង្គម' },
                { value: 'virtual-lab', en: 'Virtual Lab', km: 'មន្ទីរពិសោធន៍និម្មិត' },
                { value: 'ai-education', en: 'AI Education', km: 'ការអប់រំ AI' }
            ],
            "america": [
                { value: 'math', en: 'Mathematics', km: 'គណិតវិទ្យា' },
                { value: 'science', en: 'Science', km: 'វិទ្យាសាស្ត្រ' },
                { value: 'social', en: 'Social Science', km: 'វិទ្យាសាស្ត្រ-សិក្សាសង្គម' }
            ],
            "extras": []
        },
        "7": {
            "cambodia": [
                { value: 'math', en: 'Mathematics', km: 'គណិតវិទ្យា' },
                { value: 'khmer', en: 'Khmer Language', km: 'ភាសាខ្មែរ' },
                { value: 'english', en: 'English', km: 'ភាសាអង់គ្លេស' },
                { value: 'science', en: 'Science', km: 'វិទ្យាសាស្ត្រ' },
                { value: 'social', en: 'Social Science', km: 'វិទ្យាសាស្ត្រ-សិក្សាសង្គម' },
                { value: 'virtual-lab', en: 'Virtual Lab', km: 'មន្ទីរពិសោធន៍និម្មិត' },
                { value: 'ai-education', en: 'AI Education', km: 'ការអប់រំ AI' }
            ],
            "america": [
                { value: 'math', en: 'Mathematics', km: 'គណិតវិទ្យា' },
                { value: 'science', en: 'Science', km: 'វិទ្យាសាស្ត្រ' },
                { value: 'social', en: 'Social Science', km: 'វិទ្យាសាស្ត្រ-សិក្សាសង្គម' }
            ],
            "extras": []
        },
        "8": {
            "cambodia": [
                { value: 'math', en: 'Mathematics', km: 'គណិតវិទ្យា' },
                { value: 'khmer', en: 'Khmer Language', km: 'ភាសាខ្មែរ' },
                { value: 'english', en: 'English', km: 'ភាសាអង់គ្លេស' },
                { value: 'science', en: 'Science', km: 'វិទ្យាសាស្ត្រ' },
                { value: 'social', en: 'Social Science', km: 'វិទ្យាសាស្ត្រ-សិក្សាសង្គម' },
            ],
            "america": [
                { value: 'math', en: 'Mathematics', km: 'គណិតវិទ្យា' },
                { value: 'science', en: 'Science', km: 'វិទ្យាសាស្ត្រ' },
                { value: 'social', en: 'Social Science', km: 'វិទ្យាសាស្ត្រ-សិក្សាសង្គម' }
            ],
            "extras": []
        },
        "9": {
            "cambodia": [
                { value: 'math', en: 'Mathematics', km: 'គណិតវិទ្យា' },
                { value: 'khmer', en: 'Khmer Language', km: 'ភាសាខ្មែរ' },
                { value: 'english', en: 'English', km: 'ភាសាអង់គ្លេស' },
                { value: 'science', en: 'Science', km: 'វិទ្យាសាស្ត្រ' },
                { value: 'social', en: 'Social Science', km: 'វិទ្យាសាស្ត្រ-សិក្សាសង្គម' },
            ],
            "america": [
                { value: 'math', en: 'Mathematics', km: 'គណិតវិទ្យា' },
                { value: 'science', en: 'Science', km: 'វិទ្យាសាស្ត្រ' },
                { value: 'social', en: 'Social Science', km: 'វិទ្យាសាស្ត្រ-សិក្សាសង្គម' }
            ],
            "extras": []
        },
        "10": {
            "cambodia": [
                { value: 'math', en: 'Mathematics', km: 'គណិតវិទ្យា' },
                { value: 'history', en: 'History Of Science', km: 'ប្រវិត្តវិទ្យា' },
                { value: 'geography', en: 'Geography', km: 'ភូមិវិទ្យា' },
                { value: 'geology', en: 'Earth And Environmental Science ', km: 'ផែនដីវិទ្យា' },
                { value: 'biology', en: 'Biology', km: 'ជីវវិទ្យា' },
                { value: 'physics', en: 'Physics', km: 'រូបវិទ្យា' },
                { value: 'chemistry', en: 'Chemistry', km: 'គីមីវិទ្យា' },
                { value: 'morality', en: 'Morality-Civics', km: 'សីលធម៌-ពលរដ្ធវិជ្ជា' },
                { value: 'khmer', en: 'Khmer Language', km: 'ភាសាខ្មែរ' },
                { value: 'english', en: 'English', km: 'ភាសាអង់គ្លេស' },
                { value: 'homeeconomic', en: 'Home Economic', km: 'គេហវិទ្យា' },
                { value: 'virtual-lab', en: 'Virtual Lab', km: 'មន្ទីរពិសោធន៍និម្មិត' },
                { value: 'ai-education', en: 'AI Education', km: 'ការអប់រំ AI' }
            ],
            "america": [
                { value: 'math', en: 'Mathematics', km: 'គណិតវិទ្យា' },
                { value: 'science', en: 'Science', km: 'វិទ្យាសាស្ត្រ' },
                { value: 'socialscience', en: 'Social Science', km: 'វិទ្យាសាស្ត្រ-សិក្សាសង្គម' }
            ],
            "extras": []
        },
        "11": {
            "cambodia": [
                { value: 'math', en: 'Mathematics', km: 'គណិតវិទ្យា' },
                { value: 'chemistry', en: 'Chemistry', km: 'គីមីវិទ្យា' },
                { value: 'biology', en: 'Biology', km: 'ជីវវិទ្យា' },
                { value: 'history', en: 'History', km: 'ប្រវិត្តិសាស្ត្រ' },
                { value: 'geology', en: 'Geology', km: 'ភូគព្ភវិទ្យា' },
                { value: 'geography', en: 'Geography', km: 'ភូមិវិទ្យា' },
                { value: 'physics', en: 'Physics', km: 'រូបវិទ្យា' },
                { value: 'morality', en: 'Morality', km: 'សីលធម៌' },
                { value: 'english', en: 'English', km: 'ភាសាអង់គ្លេស' },
                { value: 'khmer', en: 'Khmer Language', km: 'អក្សរសាស្ត្រខ្មែរ' },
                { value: 'virtual-lab', en: 'Virtual Lab', km: 'មន្ទីរពិសោធន៍និម្មិត' },
                { value: 'ai-education', en: 'AI Education', km: 'ការអប់រំ AI' }
            ],
            "america": [
                { value: 'math', en: 'Mathematics', km: 'គណិតវិទ្យា' },
                { value: 'chemistry', en: 'Chemistry', km: 'គីមីវិទ្យា' },
                { value: 'biology', en: 'Biology', km: 'ជីវវិទ្យា' }
            ],
            "extras": []
        },
        "12": {
            "cambodia": [
                { value: 'math', en: 'Mathematics', km: 'គណិតវិទ្យា' },
                { value: 'chemistry', en: 'Chemistry', km: 'គីមីវិទ្យា' },
                { value: 'biology', en: 'Biology', km: 'ជីវវិទ្យា' },
                { value: 'history', en: 'History', km: 'ប្រវិត្តិសាស្ត្រ' },
                { value: 'geology', en: 'Earth And Environmental Science', km: 'ផែនដីវិទ្យានិងបរិស្ថានវិទ្យា' },
                { value: 'geography', en: 'Geography', km: 'ភូមិវិទ្យា' },
                { value: 'physics', en: 'Physics', km: 'រូបវិទ្យា' },
                { value: 'morality', en: 'Morality-Civics', km: 'សីលធម៌' },
                { value: 'english', en: 'English', km: 'ភាសាអង់គ្លេស' },
                { value: 'khmer', en: 'Khmer Language', km: 'អក្សរសាស្ត្រខ្មែរ' },
                { value: 'virtual-lab', en: 'Virtual Lab', km: 'មន្ទីរពិសោធន៍និម្មិត' },
                { value: 'ai-education', en: 'AI Education', km: 'ការអប់រំ AI' }
            ],
            "america": [
                { value: 'math', en: 'Mathematics', km: 'គណិតវិទ្យា' },
                { value: 'chemistry', en: 'Chemistry', km: 'គីមីវិទ្យា' },
                { value: 'biology', en: 'Biology', km: 'ជីវវិទ្យា' }
            ],
            "extras": []
        },
        "club1": {
            "cambodia": [],
            "america": [],
            "extras": [
                { value: 'art', en: 'Art', km: 'សិល្បៈ' },
                { value: 'music', en: 'Music', km: 'តន្ត្រី' },
                { value: 'sports', en: 'Sports', km: 'កីឡា' }
            ]
        },
        "club2": {
            "cambodia": [],
            "america": [],
            "extras": [
                { value: 'drama', en: 'Drama', km: 'ល្ខោន' },
                { value: 'dance', en: 'Dance', km: 'របាំ' },
                { value: 'debate', en: 'Debate', km: 'ការពិភាក្សា' }
            ]
        }
    };

    // Map program text
    const programText =
        program === "cambodia"
            ? (lang === 'en' ? "Cambodia Curriculum" : "កម្មវិធីសិក្សាខ្មែរ")
            : program === "america"
                ? (lang === 'en' ? "American Curriculum" : "កម្មវិធីសិក្សាអាមេរិកកាំង")
                : (lang === 'en' ? "Extra Curricular Curriculum" : "កម្មវិធីសិក្សាបន្ថែម");

    // Display program and grade with Khmer numbers when lang is 'km'
    const programGradeText = grade && program
        ? (lang === 'en'
                ? (["club1", "club2"].includes(grade) ? `${grade.charAt(0).toUpperCase() + grade.slice(4)} Level: ` : `Grade ${grade}: `) + programText
                : (["club1", "club2"].includes(grade) ? `${numberMap[grade]} កម្រិត: ` : `ថ្នាក់ទី ${numberMap[grade]}: `) + programText
        ) : '-';

    // Get subjects for the current grade and program, default to empty array if invalid
    const availableSubjects = grade && program && grade in gradeSubjects && program in gradeSubjects[grade]
        ? gradeSubjects[grade][program]
        : [];

    return (
        <>
            <Head title={lang === 'en' ? 'Subject Selection' : 'ជ្រើសរើសមុខវិជ្ជា'} />
            <div className={`flex min-h-screen flex-col items-center bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 p-4 text-gray-900 font-sans`}>
                {/* Language toggle */}
                <div className="mt-6 flex gap-2">
                    <button
                        onClick={() => setLang('en')}
                        className={`px-5 py-2 rounded-lg font-semibold transition-all duration-300 ${
                            lang === 'en'
                                ? 'bg-indigo-600 text-white shadow-md'
                                : 'bg-white text-gray-700 hover:bg-indigo-50 hover:shadow-sm'
                        }`}
                    >
                        English
                    </button>
                    <button
                        onClick={() => setLang('km')}
                        className={`px-5 py-2 rounded-lg font-semibold transition-all duration-300 ${
                            lang === 'km'
                                ? 'bg-green-600 text-white shadow-md'
                                : 'bg-white text-gray-700 hover:bg-green-50 hover:shadow-sm'
                        }`}
                    >
                        ខ្មែរ
                    </button>
                </div>

                {/* Main card with book-like divider */}
                <div className="flex w-full max-w-lg items-center justify-center mt-6">
                    <div className="bg-white rounded-2xl shadow-lg p-6 w-full border-t-4 border-indigo-600 hover:shadow-xl transition-all duration-300">
                        {/* Program and grade */}
                        <h2 className="text-3xl font-bold text-indigo-600 mb-4 text-center">
                            {programGradeText}
                        </h2>

                        {/* Title with graduation cap accent */}
                        <h1 className="text-2xl sm:text-3xl font-bold text-center text-indigo-600 mb-6 relative">
                            {lang === 'en' ? 'Choose Your Subject' : 'ជ្រើសរើសមុខវិជ្ជា'}
                            <span className="absolute top-[-10px] right-[-20px] text-green-500 text-3xl">🎓</span>
                        </h1>

                        {/* Subject Select */}
                        <div className="mb-6">
                            <label className="block mb-2 text-base font-medium text-gray-700">
                                {lang === 'en' ? 'Select a Subject' : 'ជ្រើសរើសមុខវិជ្ជា'}
                            </label>
                            <Select onValueChange={setSubject} value={subject}>
                                <SelectTrigger className="w-full bg-white text-gray-900 rounded-lg p-3 border border-gray-300 focus:ring-2 focus:ring-indigo-500">
                                    <SelectValue placeholder={lang === 'en' ? 'Select a subject' : 'ជ្រើសរើសមុខវិជ្ជា'} />
                                </SelectTrigger>
                                <SelectContent className="bg-white text-gray-900 rounded-lg border border-gray-300">
                                    <SelectGroup>
                                        {availableSubjects.map((subj) => (
                                            <SelectItem key={subj.value} value={subj.value} className="py-2 font-medium">
                                                {lang === 'en' ? subj.en : subj.km}
                                            </SelectItem>
                                        ))}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Continue button */}
                        <a
                            href={subject && program && grade ? route('lesson') + `?program=${program}&grade=${grade}&subject=${subject}&lang=${lang}` : '#'}
                            className={`block w-full rounded-lg px-4 py-3 text-center font-bold transition-all duration-300 ${
                                subject
                                    ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-md'
                                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            }`}
                        >
                            {lang === 'en' ? 'Continue' : 'បន្ត'}
                        </a>
                        {/* Book base divider */}
                        <div className="mt-4 border-b-4 border-indigo-600 w-1/2 mx-auto"></div>
                    </div>
                </div>
            </div>
        </>
    );
}
