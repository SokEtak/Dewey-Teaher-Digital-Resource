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

interface ProgramContentProps {
    lang: 'en' | 'km';
    setLang: (lang: 'en' | 'km') => void;
    campus: string;
    setCampus: (campus: string) => void;
    program: string;
    setProgram: (program: string) => void;
}

const ProgramContent = ({ lang, campus, setCampus, program, setProgram }: ProgramContentProps) => {
    const isKhmer = lang === 'km';

    return (
        <div className="flex w-full max-w-xl items-center justify-center mt-3">
            <div className="bg-white rounded-2xl shadow-lg p-8 w-full border-t-4 border-indigo-600 hover:shadow-xl transition-all duration-300 battambang-font">
                <Head title={isKhmer ? 'ជ្រើសរើសកម្មវិធីសិក្សា' : 'Program Selection'} />
                <h2 className="text-2xl sm:text-2xl font-bold text-indigo-600 mb-4 text-center battambang-font">
                    {isKhmer ? 'ជ្រើសរើសកម្មវីធី និង ទីតាំង' : 'Program & Campus'}
                </h2>
                {/* Campus Select */}
                <div className="mb-5">
                    <label className="block mb-2 text-base font-medium text-gray-700 battambang-font">
                        {isKhmer ? 'ជ្រើសរើសទីតាំង' : 'Choose Campus'}
                    </label>
                    <Select onValueChange={setCampus} value={campus}>
                        <SelectTrigger className="w-full bg-white text-gray-900 rounded-lg p-3 border border-gray-300 focus:ring-2 focus:ring-indigo-500 battambang-font">
                            <SelectValue placeholder={isKhmer ? "ជ្រើសរើសទីតាំង" : "Select a campus"} />
                        </SelectTrigger>
                        <SelectContent className="bg-white text-gray-900 rounded-lg border border-gray-300 battambang-font">
                            <SelectGroup>
                                {isKhmer ? (
                                    <>
                                        <SelectItem value="iconic">សាលាឌូវី សាខាអាយខនិក</SelectItem>
                                        <SelectItem value="ochar">សាលាឌូវី សាខាអូរចារ</SelectItem>
                                        <SelectItem value="bmc">សាខាបន្ទាយមានជ័យ</SelectItem>
                                        <SelectItem value="childcare">ឌូវី ឆាយលឃែរ ហោស៍</SelectItem>
                                        <SelectItem value="kindergarten">មត្តេយ្យ ឌូវី</SelectItem>
                                    </>
                                ) : (
                                    <>
                                        <SelectItem value="iconic">Iconic Branch</SelectItem>
                                        <SelectItem value="ochar">Ochar Branch</SelectItem>
                                        <SelectItem value="bmc">Banteay Meanchey</SelectItem>
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
                    <label className="block mb-2 text-base font-medium text-gray-700 battambang-font">
                        {isKhmer ? 'ជ្រើសរើសកម្មវិធីសិក្សា' : 'Choose Program'}
                    </label>
                    <Select onValueChange={setProgram} value={program}>
                        <SelectTrigger className="w-full bg-white text-gray-900 rounded-lg p-3 border border-gray-300 focus:ring-2 focus:ring-indigo-500 battambang-font">
                            <SelectValue placeholder={isKhmer ? "ជ្រើសរើសកម្មវិធី" : "Select a program"} />
                        </SelectTrigger>
                        <SelectContent className="bg-white text-gray-900 rounded-lg border border-gray-300 battambang-font">
                            <SelectGroup>
                                {isKhmer ? (
                                    <>
                                        <SelectItem value="cambodia" >កម្មវិធីសិក្សាខ្មែរ</SelectItem>
                                        <SelectItem value="america" disabled={true}>កម្មវិធីសិក្សាអាមេរិកកាំង(មកដល់ឆាប់ៗនេះ)</SelectItem>
                                        <SelectItem value="extra" disabled={true}>កម្មវិធីបន្ថែម(មកដល់ឆាប់ៗនេះ)</SelectItem>
                                    </>
                                ) : (
                                    <>
                                        <SelectItem value="cambodia">Cambodia Curriculum</SelectItem>
                                        <SelectItem value="america" disabled={true}>American Curriculum(coming soon)</SelectItem>
                                        <SelectItem value="extra" disabled={true}>Extra Curricular Curriculum(coming soon)</SelectItem>
                                    </>
                                )}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>

                {/* Continue Button */}
                <a
                    href={campus && program ? route('grade') + `?program=${program}&lang=${lang}` : '#'}
                    className={`block w-full rounded-lg px-4 py-3 text-center font-bold transition-all duration-300 battambang-font ${
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
    );
};

export default ProgramContent;
