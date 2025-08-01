import { Head } from '@inertiajs/react';
import '/resources/css/app.css';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { motion } from 'framer-motion';
import { useState } from 'react';

interface ProgramContentProps {
    lang: 'en' | 'km';
    setLang: (lang: 'en' | 'km') => void;
    campus: string;
    setCampus: (campus: string) => void;
    program: string;
    setProgram: (program: string) => void;
}

const ProgramContent = ({ lang, setLang, campus, setCampus, program, setProgram }: ProgramContentProps) => {
    const isKhmer = lang === 'km';
    const [isCampusHovered, setCampusHovered] = useState(false);
    const [isProgramHovered, setProgramHovered] = useState(false);
    const [isLangHovered, setLangHovered] = useState(false);

    const campuses = [
        { value: 'iconic', labelEn: 'Iconic Branch', labelKm: 'សាលាឌូវី សាខាអាយខនិក' },
        { value: 'ochar', labelEn: 'Ochar Branch', labelKm: 'សាលាឌូវី សាខាអូរចារ' },
        { value: 'bmc', labelEn: 'Banteay Meanchey', labelKm: 'សាខាបន្ទាយមានជ័យ' },
        { value: 'childcare', labelEn: 'Childcare House', labelKm: 'ឌូវី ឆាយលឃែរ ហោស៍' },
        { value: 'kindergarten', labelEn: 'Kindergarten', labelKm: 'មត្តេយ្យ ឌូវី' },
    ];

    const programs = [
        { value: 'cambodia', labelEn: 'Cambodia Curriculum', labelKm: 'កម្មវិធីសិក្សាខ្មែរ' },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="flex w-full max-w-md p-6 items-center"
        >
            <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-3xl shadow-2xl p-10 w-full border border-purple-300 transition-all duration-500 hover:shadow-3xl battambang-font relative overflow-hidden">
                <Head title={isKhmer ? 'ជ្រើសរើសកម្មវិធីសិក្សា' : 'Program Selection'} />
                {/* Decorative Elements */}
                <motion.div
                    className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-orange-400 via-pink-400 to-purple-400 rounded-full opacity-30 -translate-x-16 -translate-y-16"
                    animate={{ scale: [1, 1.1, 1], rotate: [0, 10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
                />
                <motion.div
                    className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-teal-400 via-blue-400 to-purple-400 rounded-full opacity-30 translate-x-20 translate-y-20"
                    animate={{ scale: [1, 1.2, 1], rotate: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse' }}
                />

                {/* Language Toggle */}
                <div className="mb-8 relative">
                    <motion.div
                        onHoverStart={() => setLangHovered(true)}
                        onHoverEnd={() => setLangHovered(false)}
                        whileHover={{ scale: 1.02 }}
                        className="relative"
                    >
                        <Select onValueChange={setLang} value={lang}>
                            <SelectTrigger className="w-full bg-gradient-to-r from-blue-50 to-purple-50 text-gray-900 rounded-2xl p-4 border border-blue-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 battambang-font shadow-md">
                                <SelectValue placeholder={isKhmer ? "ជ្រើសរើសភាសា" : "Select language"} />
                            </SelectTrigger>
                            <SelectContent className="bg-white text-gray-900 rounded-2xl border border-blue-300 shadow-xl battambang-font">
                                <SelectGroup>
                                    <SelectItem value="en" className="hover:bg-gradient-to-r hover:from-blue-100 hover:to-purple-100 transition-colors duration-200 py-3 px-4">
                                        English
                                    </SelectItem>
                                    <SelectItem value="km" className="hover:bg-gradient-to-r hover:from-blue-100 hover:to-purple-100 transition-colors duration-200 py-3 px-4">
                                        ខ្មែរ
                                    </SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        {isLangHovered && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="absolute bottom-[-2.5rem] left-0 text-sm bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent battambang-font bg-blue-50 px-3 py-1 rounded-lg shadow-md"
                            >
                                {isKhmer ? 'ជ្រើសរើសភាសា' : 'Choose your language!'}
                            </motion.div>
                        )}
                    </motion.div>
                </div>

                <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-purple-600 bg-clip-text text-transparent mb-10 text-center battambang-font"
                >
                    {isKhmer ? 'ជ្រើសរើសទីតាំង និង កម្មវីធី' : 'Choose Your Educated Campus & Program'}
                </motion.h2>

                {/* Campus Select */}
                <div className="mb-10 relative">
                    <label className="block mb-3 text-base font-semibold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent battambang-font flex items-center">
                        <span className="mr-2">📍</span>
                        {isKhmer ? 'ទីតាំង' : 'Campus'}
                    </label>
                    <motion.div
                        onHoverStart={() => setCampusHovered(true)}
                        onHoverEnd={() => setCampusHovered(false)}
                        whileHover={{ scale: 1.02, translateY: -2 }}
                        className="relative"
                    >
                        <Select onValueChange={setCampus} value={campus}>
                            <SelectTrigger className="w-full bg-gradient-to-r from-teal-50 to-blue-50 text-gray-900 rounded-2xl p-5 border border-teal-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-300 battambang-font shadow-md">
                                <SelectValue placeholder={isKhmer ? "ជ្រើសរើសទីតាំង" : "Select a campus"} />
                            </SelectTrigger>
                            <SelectContent className="bg-white text-gray-900 rounded-2xl border border-teal-300 shadow-xl battambang-font max-h-64 overflow-y-auto">
                                <SelectGroup>
                                    {campuses.map((c) => (
                                        <SelectItem
                                            key={c.value}
                                            value={c.value}
                                            className="hover:bg-gradient-to-r hover:from-teal-100 hover:to-blue-100 transition-colors duration-200 py-3 px-4"
                                        >
                                            {isKhmer ? c.labelKm : c.labelEn}
                                        </SelectItem>
                                    ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        {isCampusHovered && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="absolute bottom-[-2.5rem] left-0 text-sm bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent battambang-font bg-teal-50 px-3 py-1 rounded-lg shadow-md"
                            >
                                {isKhmer ? 'ជ្រើសរើសទីតាំងសាលាដែលអ្នកបង្រៀន' : 'Pick your educated campus'}
                            </motion.div>
                        )}
                    </motion.div>
                </div>

                {/* Program Select */}
                <div className="mb-12 relative">
                    <label className="block mb-3 text-base font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent battambang-font flex items-center">
                        <span className="mr-2">📚</span>
                        {isKhmer ? 'កម្មវិធីសិក្សា' : 'Program'}
                    </label>
                    <motion.div
                        onHoverStart={() => setProgramHovered(true)}
                        onHoverEnd={() => setProgramHovered(false)}
                        whileHover={{ scale: 1.02, translateY: -2 }}
                        className="relative"
                    >
                        <Select onValueChange={setProgram} value={program}>
                            <SelectTrigger className="w-full bg-gradient-to-r from-purple-50 to-pink-50 text-gray-900 rounded-2xl p-5 border border-purple-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 battambang-font shadow-md">
                                <SelectValue placeholder={isKhmer ? "ជ្រើសរើសកម្មវិធី" : "Select a program"} />
                            </SelectTrigger>
                            <SelectContent className="bg-white text-gray-900 rounded-2xl border border-purple-300 shadow-xl battambang-font">
                                <SelectGroup>
                                    {programs.map((p) => (
                                        <SelectItem
                                            key={p.value}
                                            value={p.value}
                                            className="hover:bg-gradient-to-r hover:from-purple-100 hover:to-pink-100 transition-colors duration-200 py-3 px-4"
                                        >
                                            {isKhmer ? p.labelKm : p.labelEn}
                                        </SelectItem>
                                    ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        {isProgramHovered && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="absolute bottom-[-2.5rem] left-0 text-sm bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent battambang-font bg-purple-50 px-3 py-1 rounded-lg shadow-md"
                            >
                                {isKhmer ? 'ជ្រើសរើសកម្មវិធីសិក្សាដែលអ្នកចាប់អារម្មណ៍' : 'Choose your learning path!'}
                            </motion.div>
                        )}
                    </motion.div>
                </div>

                {/* Motivational Tagline */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="text-center mb-8 text-base text-gray-600 battambang-font italic"
                >
                    {isKhmer ? 'ចាប់ផ្តើមដំណើរអប់រំរបស់អ្នកជាមួយភាពរីករាយ!' : 'Start your learning journey with joy!'}
                </motion.div>

                {/* Continue Button */}
                <motion.a
                    href={campus && program ? route('grade') + `?program=${program}&lang=${lang}` : '#'}
                    whileHover={{ scale: campus && program ? 1.05 : 1 }}
                    whileTap={{ scale: campus && program ? 0.95 : 1 }}
                    className={`block w-full rounded-2xl px-8 py-4 text-center font-bold text-lg transition-all duration-300 battambang-font ${
                        campus && program
                            ? 'bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-white hover:from-orange-600 hover:via-pink-600 hover:to-purple-600 shadow-xl hover:shadow-2xl'
                            : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    }`}
                >
                    {isKhmer ? 'បន្ត' : 'Continue'}
                </motion.a>
            </div>
        </motion.div>
    );
};

export default ProgramContent;
