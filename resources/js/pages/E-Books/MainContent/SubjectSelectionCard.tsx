import { useEffect } from 'react';
import { Head } from '@inertiajs/react';
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

interface SubjectSelectionCardProps {
    lang: 'en' | 'km';
    setLang: (lang: 'en' | 'km') => void;
    subject: string;
    setSubject: (subject: string) => void;
    program?: string;
    grade?: string;
    url: string;
}

const SubjectSelectionCard = ({ lang, setLang, subject, setSubject, program, grade, url }: SubjectSelectionCardProps) => {
    const queryParams = new URLSearchParams(url.split('?')[1]);

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
        },
        "8": {
            "cambodia": [
                { value: 'math', en: 'Mathematics', km: 'គណិតវិទ្យា' },
                { value: 'khmer', en: 'Khmer Language', km: 'ភាសាខ្មែរ' },
                { value: 'english', en: 'English', km: 'ភាសាអង់គ្លេស' },
                { value: 'science', en: 'Science', km: 'វិទ្យាសាស្ត្រ' },
                { value: 'social', en: 'Social Science', km: 'វិទ្យាសាស្ត្រ-សិក្សាសង្គម' },
            ],
        },
        "9": {
            "cambodia": [
                { value: 'math', en: 'Mathematics', km: 'គណិតវិទ្យា' },
                { value: 'khmer', en: 'Khmer Language', km: 'ភាសាខ្មែរ' },
                { value: 'english', en: 'English', km: 'ភាសាអង់គ្លេស' },
                { value: 'science', en: 'Science', km: 'វិទ្យាសាស្ត្រ' },
                { value: 'social', en: 'Social Science', km: 'វិទ្យាសាស្ត្រ-សិក្សាសង្គម' },
            ],
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
        },
        "12": {
            "cambodia": [
                { value: 'math', en: 'Mathematics', km: 'គណិតវិទ្យា' },
                { value: 'economics', en: 'Economics', km: 'សេដ្ធកិច្ចវិទ្យា' },
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
        },
    };

    // Map grade text
    const gradeText = grade
        ? (lang === 'en'
            ? (["club1", "club2"].includes(grade) ? `${grade.charAt(0).toUpperCase() + grade.slice(4)} Level` : `Grade ${grade}`)
            : (["club1", "club2"].includes(grade) ? `${numberMap[grade]} កម្រិត` : `ថ្នាក់ទី ${numberMap[grade]}`))
        : '-';

    // Map program text
    const programText = program
        ? (program === "cambodia"
            ? (lang === 'en' ? "Cambodia Curriculum" : "កម្មវិធីសិក្សាខ្មែរ")
            : program === "america"
                ? (lang === 'en' ? "American Curriculum" : "កម្មវិធីសិក្សាអាមេរិកកាំង")
                : (lang === 'en' ? "Extra Curricular Curriculum" : "កម្មវិធីសិក្សាបន្ថែម"))
        : '-';

    // Get subjects for the current grade and program, default to empty array if invalid
    const availableSubjects = grade && program && grade in gradeSubjects && program in gradeSubjects[grade]
        ? gradeSubjects[grade][program]
        : [];

    useEffect(() => {
        const newLang = queryParams.get('lang') === 'km' ? 'km' : 'en';
        setLang(newLang);
    }, [url, setLang]);

    return (
        <div className="flex w-full max-w-xl items-center justify-center mt-3">
            <div className="bg-white rounded-2xl shadow-lg p-6 w-full border-t-4 border-indigo-600 hover:shadow-xl transition-all duration-300">
                <Head title={lang === 'en' ? 'Subject Selection' : 'ជ្រើសរើសមុខវិជ្ជា'} />
                {/* Program and grade */}
                <h2 className="text-xl sm:text-2xl font-bold text-indigo-600 mb-2 text-center">
                    {programText}
                </h2>


                {/* Title with graduation cap accent */}
                <h1 className="text-xl sm:text-2xl font-bold text-center text-indigo-600 mb-2 relative">
                    {lang === 'en' ? 'Choose Your Subject For' : 'ជ្រើសរើសមុខវិជ្ជាសម្រាប់'}
                </h1>

                <h2 className="text-xl sm:text-2xl font-bold text-indigo-600 mb-4 text-center">
                    {gradeText}
                </h2>

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
    );
};

export default SubjectSelectionCard;
