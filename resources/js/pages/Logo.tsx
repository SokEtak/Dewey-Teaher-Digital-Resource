const Logo = ({ lang }: { lang: 'en' | 'km'; setLang: (lang: 'en' | 'km') => void }) => {
    const isKhmer = lang === 'km';

    return (
        <div className="mt-1 text-center">
            <img src="/images/DIS(no%20back).png" alt="Logo" className="mx-auto" style={{ width: "120px", height: "100px" }} />
            <h1 className="text-2xl font-bold text-green-500">
                {isKhmer ? 'សាលាអន្តរជាតិ ឌូវី' : 'Dewey International School'}
            </h1>
            <h1 className="text-2xl font-bold text-orange-500">
                {isKhmer ? 'ការសិក្សាផ្សារភ្ជាប់ជាមួយការអនុវត្ត' : 'Learning By Doing'}
            </h1>
        </div>
    );
};

export default Logo;
