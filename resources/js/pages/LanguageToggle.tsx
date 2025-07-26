interface LanguageToggleProps {
    lang: 'en' | 'km';
    setLang: (lang: 'en' | 'km') => void;
}

const LanguageToggle = ({ lang, setLang }: LanguageToggleProps) => {
    const isKhmer = lang === 'km';

    return (
        <div className="mt-2 mb-2 flex gap-2">
            <button
                onClick={() => setLang('en')}
                className={`px-5 py-2 rounded-lg font-semibold transition-all duration-300 ${
                    !isKhmer
                        ? 'bg-orange-500 text-gray-700 shadow-md'
                        : 'bg-green-500 text-gray-700 hover:bg-orange-500 hover:shadow-sm'
                }`}
            >
                English
            </button>
            <button
                onClick={() => setLang('km')}
                className={`px-5 py-2 rounded-lg font-medium transition-all duration-300 ${
                    isKhmer
                        ? 'bg-orange-500 text-white shadow-md'
                        : 'bg-green-500 text-gray-700 hover:bg-orange-500 hover:shadow-sm'
                }`}
            >
                ខ្មែរ
            </button>
        </div>
    );
};

export default LanguageToggle;
