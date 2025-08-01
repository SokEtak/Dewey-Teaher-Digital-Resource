import { Head } from '@inertiajs/react';
import { PDF_BASE, FLIPBOOK_BASE, AI_TOOLS_BASE, VIRTUAL_LAB_BASE, constructFullUrl } from '@/types/urlUtils';

// Mapping of English numbers to Khmer numbers
const numberMap: { [key: string]: string } = {
    '1': '១', '2': '២', '3': '៣', '4': '៤', '5': '៥', '6': '៦',
    '7': '៧', '8': '៨', '9': '៩', '10': '១០', '11': '១១', '12': '១២',
};

// Mapping of English subjects to Khmer subjects
const subjectTranslations: { [key: string]: string } = {
    math: 'គណិតវិទ្យា',
    science: 'វិទ្យាសាស្ត្រ',
    social: 'សិក្សាសង្គម',
    khmer: 'ភាសាខ្មែរ',
    reading: 'អំណាន',
    chaching: 'ឆា ឈីង',
    history: 'ប្រវត្តិវិទ្យា',
    english: 'ភាសាអង់គ្លេស',
    'virtual-lab': 'មន្ទីរពិសោធន៍និម្មិត',
    'ai-education': 'ការអប់រំអំពីបញ្ញាសាប្បនិម្មិត',
    geography: 'ភូមិវិទ្យា',
    geology: 'ផែនដីវិទ្យា',
    biology: 'ជីវវិទ្យា',
    physics: 'រូបវិទ្យា',
    chemistry: 'គីមីវិទ្យា',
    morality: 'សីលធម៌ ពលរដ្ធ'
};

interface LessonCardProps {
    lang: 'en' | 'km';
    subject?: string;
    program?: string;
    grade?: string;
    url: string;
}

// Shared resources for aiTools and virtualLabLinks
const commonResources = {
    aiTools: [
        { url: "toolbaz.com/", name: "Toolbaz AI" },
        { url: "magicschool.ai/", name: "MagicSchool AI" },
        { url: "eduaide.ai/", name: "EduAide AI" },
        { url: "teachy.app/en/", name: "Teachy AI" },
        { url: "education.com", name: "Education.com" },
        { url: "mentimeter.com/", name: "Mentimeter" },
        { url: "sala.moeys.gov.kh/kh", name: "Sala High School" },
        { url: "elearning.moeys.gov.kh/", name: "MoEYS E-Learning" },
        { url: "ebook.spm-edoc.com/", name: "SPM E-Book" },
        { url: "elibraryofcambodia.org/", name: "eLibrary of Cambodia" },
        { url: "duraseksa.com/home", name: "Duraseksa" },
    ],
    aiToolsHighSchool: [
        { url: "exam.moeys.gov.kh/", name: "Grade 12 Exam" },
        { url: "wayground.com/", name: "Wayground Quiz" },
        { url: "kahoot.com/", name: "Kahoot" },
        { url: "quizlet.com/", name: "Quizlet" },
        { url: "games4esl.com/", name: "Games4ESL Worksheets" },
        { url: "15worksheets.com/", name: "15Worksheets" },
        { url: "math-aids.com/", name: "Math Aids" },
        { url: "k5learning.com/", name: "K5 Learning" },
        { url: "worksheetspack.com/", name: "Worksheets Pack" },
        { url: "worksheetdigital.com/", name: "Worksheet Digital" },
        { url: "liveworksheets.com/", name: "Live Worksheets" },
        { url: "worksheetworks.com/", name: "Worksheet Works" },
        { url: "kiddoworksheets.com/", name: "Kiddo Worksheets" },
        { url: "commoncoresheets.com/", name: "Common Core Sheets" },
        { url: "kindergartenworksheets.net/", name: "Kindergarten Worksheets" },
        { url: "superteacherworksheets.com/summer.html", name: "Super Teacher Worksheets" },
        { url: "learnenglishkids.britishcouncil.org/print-make/worksheets", name: "British Council Worksheets" },
        { url: "eslcafe.com/resources/lesson-plans/spelling/human-spelling-machine", name: "ESL Cafe Spelling" },
        { url: "superstarworksheets.com/kindergarten-worksheets/kindergarten-writing-worksheets/", name: "Superstar Writing Worksheets" },
        { url: "coloring-pages-for-kids.rvappstudios.com/free-printable-worksheets-for-kids-math-practice/", name: "RVAppStudios Math Worksheets" },
    ],
    virtualLabLinks: [
        { url: "phet.colorado.edu/", name: "PhET Interactive Simulations" },
        { url: "labxchange.org/", name: "LabXchange" },
    ],
    virtualLabLinksPhysics: [
        { url: "myphysicslab.com/", name: "MyPhysicsLab" },
        { url: "ophysics.com/index.html", name: "OPhysics" },
        { url: "interactives.ck12.org/simulations/physics.html", name: "CK-12 Physics Simulations" },
    ],
    virtualLabLinksChemistry: [
        { url: "interactives.ck12.org/simulations/chemistry.html", name: "CK-12 Chemistry Simulations" },
    ],
};

const LessonCard = ({ lang, subject = 'Unknown Subject', program = 'Unknown Program', grade = 'Unknown Grade', url }: LessonCardProps) => {
    const normalizedSubject = subject.toLowerCase().replace(/\s+/g, '');
    parseInt(grade, 10);
// Define grades object
    const grades: { [key: string]: { [key: string]: { [key: string]: { parts?: { pdf?: string; flipbook?: string; level?: string }[]; pdf?: string; flipbook?: string; aiTools?: { url: string; name?: string }[]; virtualLabLinks?: { url: string; name?: string }[] } } } } = {
        "1": {
            cambodia: {
                math: { pdf: "1GtH_b64YxegOsW0dbak0ot7cwLxGnYfE", flipbook: "ayjcf/xlcl/" },
                science: { pdf: "1AKoB1TggCdjtj4JrwSzvKgmhpFCUNYTB", parts: [{ flipbook: "ayjcf/unqv/", level: "Part 1" }, { flipbook: "ayjcf/lcec/", level: "Part 2" }] },
                social: { pdf: "1SL0FWWCViBvQBz8lvnvHP_olw9zGk5l6", flipbook: "ayjcf/jgfb/" },
                khmer: { pdf: "1i2MGyGWPQwupjLDNCruRJmjS-VoikuKd", flipbook: "ayjcf/wruc/" },
                'virtual-lab': { pdf: "#", flipbook: "#", virtualLabLinks: commonResources.virtualLabLinks },
                'ai-education': { pdf: "#", flipbook: "#", aiTools: commonResources.aiTools },
            },
        },
        "2": {
            cambodia: {
                math: { pdf: "1AarunHQniUFrdyDEEYecND_LXo6FA4zH", flipbook: "frszu/beag/" },
                science: { pdf: "14PAVUeQyYmv8JdnS5yzcZeDdAfeYh_pl", flipbook: "yhbke/egju/" },
                social: { pdf: "1bO39VjJXE7P-WO7ovBUKKA69rY9mbKmW", flipbook: "ayjcf/mdui/" },
                khmer: { pdf: "1bc89FmtR2fSE8_oM1GbNfcFAuvlTD3hw", flipbook: "ayjcf/wuqh/" },
                'virtual-lab': { pdf: "#", flipbook: "#", virtualLabLinks: commonResources.virtualLabLinks },
                'ai-education': { pdf: "#", flipbook: "#", aiTools: commonResources.aiTools },
            },
        },
        "3": {
            cambodia: {
                math: { pdf: "14_I5gclFkQCE3adTnpMc3eNFmOgYaeEx", flipbook: "frszu/mlxm/" },
                science: { pdf: "1KHvzDUCykCco5lIYnTiY71892vtnUJ3g", flipbook: "ayjcf/mdui/" },
                social: { pdf: "1H762S5l6ZlJwSDKUY-FWX6ZlVTjqEJih", flipbook: "ayjcf/mdui/" },
                reading: { pdf: "1IUf3VFO2eubJf2UPp-WxznHSA3Dfqokb", flipbook: "ayjcf/pvcf/" },
                khmer: { pdf: "1BaL5b2UDaWww1rFlCHMFj-hO6M_5c-Tf", flipbook: "frszu/pesv/" },
                'virtual-lab': { pdf: "#", flipbook: "#", virtualLabLinks: commonResources.virtualLabLinks },
                'ai-education': { pdf: "#", flipbook: "#", aiTools: commonResources.aiTools },
            },
        },
        "4": {
            cambodia: {
                chaching: { pdf: "18s612_lwpCq7rRnWnHXJxdEmM7iUtTwo", flipbook: "yhbke/wdok/" },
                math: { pdf: "1XYND_ahzAg8bXXaKscAnUbJklxy7w-qM", flipbook: "ayjcf/xjbv/" },
                history: { pdf: "1m03_gTMECeMCVexcD0xQw3WjUDzS0jbe", flipbook: "ayjcf/bicw/" },
                khmer: { pdf: "13S4xJ8GVfYvB8gDxnlq5x3co1iPACxBT", flipbook: "ayjcf/jwms/" },
                english: { pdf: "1PF3x2ycB6vFkUzM0s8AFhkfRRUi6TKd7", flipbook: "ayjcf/bicw/" },
                science: { pdf: "1QhObR3ZFSr-JN6LfvAP-bacb8ds-s5Io", flipbook: "ayjcf/gwqs/" },
                social: { pdf: "1_hJWsTgM4O8Q9gFU_0oL7AkkiMrnlwHO", flipbook: "frszu/ptwp/" },
                'virtual-lab': { pdf: "#", flipbook: "#", virtualLabLinks: commonResources.virtualLabLinks },
                'ai-education': { pdf: "#", flipbook: "#", aiTools: commonResources.aiTools },
            },
        },
        "5": {
            cambodia: {
                math: { pdf: "1TmN7W2dcLpwrTHuZAuQnk4A8mgBQpi8l", flipbook: "frszu/bjtb/" },
                khmer: { pdf: "1gZTxkP2ciOQ6RmJoN541VMS0kPD6_qLp", flipbook: "yhbke/rgyk/" },
                english: { pdf: "1SYRUilVE2xW8Z_4MIxMLyaCL8GnmsLOJ", flipbook: "yhbke/wdiv/" },
                science: { pdf: "1qpRXBqmz9YvLpO5xJj1y5aUI4hIQzfH5", flipbook: "yhbke/cxop/" },
                social: { pdf: "1gt8sqHQ9tgGIKyGnL4Hc-xHrkhpUsTYs", flipbook: "yhbke/qlef/" },
                'virtual-lab': { pdf: "#", flipbook: "#", virtualLabLinks: commonResources.virtualLabLinks },
                'ai-education': { pdf: "#", flipbook: "#", aiTools: commonResources.aiTools },
            },
        },
        "6": {
            cambodia: {
                math: { pdf: "1Z8mFgA4a3hvU9e-MYgnJ_M_Y_8Gh-C7U", flipbook: "frszu/mder/" },
                history: { pdf: "14IWWmfqNSSIBpp9I8jzMgIzc6MEqx-xv", flipbook: "frszu/yldb/" },
                khmer: { pdf: "1NMAONAHIMCL-zQX3pz2tt2BqMn2CQPs1", flipbook: "frszu/umpk/" },
                english: { pdf: "1-KbBGLLQzsz1VBXSucTePh7UfGUoi3wN", flipbook: "frszu/gozi/" },
                science: { pdf: "1VbJoyCa-H0SNA3hstyPcPQWfszh5jNp9", flipbook: "yhbke/ckvl/" },
                social: { pdf: "1N9nLoo5aLzZ3tPP_trwBKRDX3YpOF_wl", flipbook: "yhbke/ffmk/" },
                'virtual-lab': { pdf: "#", flipbook: "#", virtualLabLinks: commonResources.virtualLabLinks },
                'ai-education': { pdf: "#", flipbook: "#", aiTools: commonResources.aiTools },
            },
        },
        "7": {
            cambodia: {
                math: { pdf: "1I_H7gOzD2HhMA0XIjx2WCVJMUSeZPI6b", flipbook: "mylzw/yxwz/#p=1" },
                khmer: { pdf: "1EikPEwmG9uniJ-NSOr6WMC3N_COJ7D9C", flipbook: "yhbke/zrju/" },
                english: { pdf: "1V9hnZcPSc1Y0oOnJcEwDYi5AKhSw_1wO", flipbook: "yhbke/zyuq/" },
                science: { pdf: "1Z6Ot0z3brZ8QWz9Dnzxo4MOT3Manixp8", flipbook: "yhbke/edes/" },
                social: { pdf: "1b7ie5S-IykSCbXpx4H67VuQ0P31h_KUV", flipbook: "apzgt/xglk/" },
                'virtual-lab': { pdf: "#", flipbook: "#", virtualLabLinks: commonResources.virtualLabLinks },
                'ai-education': { pdf: "#", flipbook: "#", aiTools: commonResources.aiTools },
            },
        },
        "8": {
            cambodia: {
                math: { pdf: "1_RUcBu5lITC_LGWG4BTdVJRTCx-vKmvQ", flipbook: "mylzw/qoyg/#p=1" },
                khmer: { pdf: "117cgoDQ3kEmN6J-2oY2OXL6ZrG7wFwnl", flipbook: "apzgt/fink/" },
                english: { pdf: "1wVK84yVqYnZfpayouwi_AWxj8VlVBtzh", flipbook: "apzgt/cssh/" },
                science: { pdf: "1jVmXAXEjquYWrnV9E2TY7--qLToL7gtz", flipbook: "apzgt/lirg/" },
                social: { pdf: "1v3ez-eLprH2KJArYqv3hkzJRGq9kx6MR", flipbook: "apzgt/pjqz/" },
                'virtual-lab': { pdf: "#", flipbook: "#", virtualLabLinks: commonResources.virtualLabLinks },
                'ai-education': { pdf: "#", flipbook: "#", aiTools: commonResources.aiTools },
            },
        },
        "9": {
            cambodia: {
                math: { pdf: "1ocymmBiv7X6DdmXk6yZczobLs9NDo_oD", flipbook: "frszu/dpgo/" },
                khmer: { pdf: "1sed5sZKo0V17G6UJko3uUZ7k41b7yT_D", flipbook: "ecumu/usjo/" },
                english: { pdf: "15cVajVp6-Y7vY5wcsUCGx8OHee3sM68B", flipbook: "frszu/aiik/" },
                science: { pdf: "1CQfDPPvd-pR_0CQCzb1Ycf5r7sW8F1po", flipbook: "ecumu/ixrn/" },
                social: { pdf: "1499jKWdcYWYF3p0e9M3O56YKI4o0t9x1", flipbook: "ecumu/ygfz/" },
                'virtual-lab': { pdf: "#", flipbook: "#", virtualLabLinks: commonResources.virtualLabLinks },
                'ai-education': { pdf: "#", flipbook: "#", aiTools: commonResources.aiTools },
            },
        },
        "10": {
            cambodia: {
                math: { parts: [{ pdf: "10HNYy6nQBn8CZkOmucZhqXFZ73MLc3jp", flipbook: "ayjcf/asuh/", level: "Basic" }, { pdf: "10HNYy6nQBn8CZkOmucZhqXFZ73MLc3jp", flipbook: "ayjcf/fimj/", level: "Advance" }] },
                history: { pdf: "10HNYy6nQBn8CZkOmucZhqXFZ73MLc3jp", flipbook: "ayjcf/sqlz/" },
                geography: { pdf: "10HNYy6nQBn8CZkOmucZhqXFZ73MLc3jp", flipbook: "ayjcf/sqlz/" },
                geology: { pdf: "10HNYy6nQBn8CZkOmucZhqXFZ73MLc3jp", flipbook: "ebook.spm-edoc.com/ereading/Earth-EnvironmentGrade10/#p=1" },
                biology: { pdf: "10HNYy6nQBn8CZkOmucZhqXFZ73MLc3jp", flipbook: "ebook.spm-edoc.com/ereading/BiologyGrade10/#p=1" },
                physics: { pdf: "10HNYy6nQBn8CZkOmucZhqXFZ73MLc3jp", flipbook: "uouggg/cthz/", virtualLabLinks: commonResources.virtualLabLinksPhysics },
                chemistry: { pdf: "10HNYy6nQBn8CZkOmucZhqXFZ73MLc3jp", flipbook: "ebook.spm-edoc.com/ereading/ChemistryGrade10/#p=1", virtualLabLinks: commonResources.virtualLabLinksChemistry },
                morality: { pdf: "10HNYy6nQBn8CZkOmucZhqXFZ73MLc3jp", flipbook: "ayjcf/sqlz/" },
                khmer: { pdf: "10HNYy6nQBn8CZkOmucZhqXFZ73MLc3jp", flipbook: "uouggg/sgvw/" },
                english: { pdf: "#", flipbook: "ebook.spm-edoc.com/ereading/EnglishGrade10/#p=1" },
                homeeconomic: { pdf: "10HNYy6nQBn8CZkOmucZhqXFZ73MLc3jp", flipbook: "ayjcf/sqlz/" },
                'virtual-lab': { pdf: "#", flipbook: "#", virtualLabLinks: commonResources.virtualLabLinks },
                'ai-education': { pdf: "#", flipbook: "#", aiTools: [...commonResources.aiTools, ...commonResources.aiToolsHighSchool] },
            },
        },
        "11": {
            cambodia: {
                math: { parts: [{ pdf: "1NaQYd0A7KyhW_5_yZ5ECFsXMgt7buRz5", flipbook: "frszu/eywa/", level: "Basic" }, { pdf: "1NaQYd0A7KyhW_5_yZ5ECFsXMgt7buRz5", flipbook: "ebook.spm-edoc.com/ereading/Grade11Part2/MathGrade11/MathGrade11-Advance/#p=1", level: "Advance" }] },
                chemistry: { pdf: "1SGUiRI8pn3RjaFii0TLraFkmyZz4tQ13", flipbook: "frszu/bnao/", virtualLabLinks: commonResources.virtualLabLinksChemistry },
                economics: { pdf: "1DAYoS9w5yAFekzKLiQgtNzH8I1h34Ezh", flipbook: "frszu/cwev/" },
                biology: { pdf: "1WkQeps-ZCxjgq6_cp7D8vEzeDbBTJm5k", flipbook: "ayjcf/pipz/" },
                history: { pdf: "1YpQ7c-AaiLC3nRZt0x0BBObRwn_gWu97", flipbook: "ecumu/kbvx/" },
                geology: { pdf: "1FsY6Q307POOmfkiorX_9LXqjWKpC6tOj", flipbook: "uouggg/haki/" },
                geography: { pdf: "1n8LJdHvqtLIV4j-EojjVCMyhRRDNRB9_", flipbook: "uouggg/thqn/" },
                physics: { pdf: "1OPLZFL7d6OAiXAiBbkn-5ZxOBeB6MCBT", flipbook: "ayjcf/mcwq/", virtualLabLinks: commonResources.virtualLabLinksPhysics },
                morality: { pdf: "1MMhVWhqTEiKBsCM4Hgl0miWGm792Zp0o", flipbook: "uouggg/oyza/" },
                english: { pdf: "1EyekbhoLLRSf21dEr9lEJs7ROI3BP2Co", flipbook: "ayjcf/vern/" },
                khmer: { pdf: "1IfVeWVxJwlGGYWGMqrnMBNjXAdjddUK9", flipbook: "ayjcf/vthf/" },
                'virtual-lab': { pdf: "#", flipbook: "#", virtualLabLinks: commonResources.virtualLabLinks },
                'ai-education': { pdf: "#", flipbook: "#", aiTools: [...commonResources.aiTools, ...commonResources.aiToolsHighSchool] },
            },
        },
        "12": {
            cambodia: {
                math: { parts: [{ pdf: "1Mx5tDYI0ZvZPb1bxlBOQLbw0dZI6oWwn", flipbook: "frszu/krbe/", level: "Basic" }, { pdf: "14K2TxqN3qto6PzLtE0yfYt8a8KP2wqRz", flipbook: "frszu/wabt/", level: "Advance" }] },
                chemistry: { pdf: "1qJFtEgfVm_S4SzAnTiBQ2OJNO-Nic-kS", flipbook: "uouggg/xnvs/", virtualLabLinks: commonResources.virtualLabLinksChemistry },
                biology: { pdf: "1T-VVZARoJEviDjAn70X-A0o2nsp1BU-Q", flipbook: "frszu/iqfz/" },
                history: { pdf: "1UVnl2twJy_bzWdsKTYQ_8_IZy3fkkdWA", flipbook: "frszu/otfn/" },
                geology: { pdf: "1DZoon-Oap3xT91Hm4GsyANdmF9YdX9C7", flipbook: "frszu/rteb/" },
                geography: { pdf: "1UaEJEcjeicwRmimSXTmevUfxR5Sgt2VS", flipbook: "frszu/ttzo/" },
                physics: { pdf: "1qcowpi38uk3ZODKlDxzyEDZ4pVcelwUY", flipbook: "yhbke/yevz/", virtualLabLinks: commonResources.virtualLabLinksPhysics },
                morality: { pdf: "1QdT0anOEK-x57VrCkaVbrSiBedX3OKlr", flipbook: "uouggg/fpfp/" },
                english: { pdf: "16LOYCodyoPaSfj3FpVJLVIGz1yLIkUvj", flipbook: "yhbke/gslb/" },
                khmer: { pdf: "1CPwnyQK9_Pae_vRYf_7sm7P98OIT5eH-", flipbook: "yhbke/wqqz/" },
                'virtual-lab': { pdf: "#", flipbook: "#", virtualLabLinks: commonResources.virtualLabLinks },
                'ai-education': { pdf: "#", flipbook: "#", aiTools: [...commonResources.aiTools, ...commonResources.aiToolsHighSchool] },
            },
        },
    };

    // Construct full URLs
    const isValidGrade = grade in grades;
    const isValidProgram = isValidGrade && program in grades[grade];
    const isValidSubject = isValidProgram && normalizedSubject in grades[grade][program];
    const { parts, pdf, flipbook, aiTools = [], virtualLabLinks = [] } = isValidSubject ? grades[grade][program][normalizedSubject] : { parts: [], pdf: null, flipbook: null, aiTools: [], virtualLabLinks: [] };
    const fullPdf = constructFullUrl(PDF_BASE, pdf);
    const fullFlipbook = constructFullUrl(FLIPBOOK_BASE, flipbook);
    const fullParts = parts?.map(part => ({
        pdf: constructFullUrl(PDF_BASE, part.pdf),
        flipbook: constructFullUrl(FLIPBOOK_BASE, part.flipbook),
        level: part.level,
    })) || [];
    const fullAiTools = aiTools.map(tool => ({ ...tool, url: constructFullUrl(AI_TOOLS_BASE, tool.url) }));
    const fullVirtualLabLinks = virtualLabLinks.map(lab => ({ ...lab, url: constructFullUrl(VIRTUAL_LAB_BASE, lab.url) }));

    // Translations
    const translations = {
        en: {
            title: 'Lesson Materials',
            gradeLabel: 'Grade',
            programLabel: 'Program',
            subjectLabel: 'Subject',
            accessMaterials: 'Access the lesson materials:',
            aiTools: 'AI Education Tools:',
            virtualLabs: 'Virtual Labs:',
            viewPdf: 'View PDF',
            viewFlipbook: 'View Flipbook',
            noMaterials: 'No materials available for',
            invalidProgram: 'Invalid program:',
            invalidGrade: 'Invalid grade:',
            checkDetails: 'Please check the grade, program, or subject, or ',
            contactSupport: 'contact support',
            assistance: 'for assistance.',
        },
        km: {
            title: 'សម្ភារៈសិក្សា',
            gradeLabel: 'ថ្នាក់ទី',
            programLabel: 'កម្មវិធីសិក្សា',
            subjectLabel: 'មុខវិជ្ជា',
            accessMaterials: 'ចូលប្រើសម្ភារៈសិក្សា:',
            aiTools: 'ឧបករណ៍អប់រំ AI:',
            virtualLabs: 'មន្ទីរពិសោធន៍និម្មិត:',
            viewPdf: 'មើល PDF',
            viewFlipbook: 'មើល Flipbook',
            noMaterials: 'គ្មានសម្ភារៈសម្រាប់',
            invalidProgram: 'កម្មវិធីមិនត្រឹមត្រូវ:',
            invalidGrade: 'ថ្នាក់មិនត្រឹមត្រូវ:',
            checkDetails: 'សូមពិនិត្យថ្នាក់, កម្មវិធី, ឬមុខវិជ្ជា, ឬ ',
            contactSupport: 'ទាក់ទងផ្នែកជំនួយ',
            assistance: 'សម្រាប់ជំនួយ។',
        },
    };

    const t = lang === 'km' ? translations.km : translations.en;

    // Program display name
    const programDisplay = {
        en: program.charAt(0).toUpperCase() + program.slice(1),
        km: program === 'cambodia' ? 'ខ្មែរ' : program === 'america' ? 'អាឮមេរិកកាំង' : 'បន្ថែម',
    };

    // Render link component
    const renderLink = (href: string | null, text: string, color: string, ariaLabel: string) => href && (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`px-3 py-2 ${color} text-white font-semibold rounded-lg text-center text-base transition-all duration-300 hover:brightness-90`}
            aria-label={ariaLabel}
        >
            {text}
        </a>
    );

    return (
        <div className="flex w-full max-w-xl items-center justify-center mt-3">
            <div className="bg-white rounded-2xl shadow-lg p-6 w-full border-t-4 border-indigo-600 hover:shadow-xl transition-all duration-300">
                <Head title={t.title} />
                <h1 className="text-2xl sm:text-3xl font-bold text-center text-indigo-600 mb-4">{t.title}</h1>
                <h2 className="text-xl sm:text-3xl font-bold text-indigo-600 mb-4 text-center">
                    {t.gradeLabel} {lang === 'km' ? numberMap[grade] || grade : grade}: {programDisplay[lang]} {t.programLabel}
                </h2>
                <p className="text-base font-bold font-sans text-gray-700 mb-4">
                    <span className="font-bold font-sans">{t.subjectLabel}</span> {lang === 'km' ? subjectTranslations[normalizedSubject] : subject.charAt(0).toUpperCase() + subject.slice(1)}
                </p>
                {(fullParts.length > 0 || fullPdf || fullFlipbook || fullAiTools.length > 0 || fullVirtualLabLinks.length > 0) ? (
                    <div className="flex flex-col gap-4">
                        <p className="text-lg font-bold font-sans text-gray-700">{t.accessMaterials}</p>
                        {fullParts.length > 0 ? (
                            <div className="flex flex-col gap-3">
                                {fullParts.map((part, index) => (
                                    <div key={index} className="flex gap-3">
                                        {renderLink(
                                            part.pdf,
                                            `${t.viewPdf} ${part.level || `Part ${index + 1}`}`,
                                            'bg-indigo-600',
                                            lang === 'en' ? `View ${subject} ${t.gradeLabel} ${grade} ${part.level || `Part ${index + 1}`} PDF` : `មើល ${subject} ${t.gradeLabel} ${grade} ${part.level || `ផ្នែក ${index + 1}`} PDF`
                                        )}
                                        {renderLink(
                                            part.flipbook,
                                            `${t.viewFlipbook} ${part.level || `Part ${index + 1}`}`,
                                            'bg-green-600',
                                            lang === 'en' ? `View ${subject} ${t.gradeLabel} ${grade} ${part.level || `Part ${index + 1}`} Flipbook` : `មើល ${subject} ${t.gradeLabel} ${grade} ${part.level || `ផ្នែក ${index + 1}`} Flipbook`
                                        )}
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="flex flex-col gap-3">
                                {renderLink(fullPdf, t.viewPdf, 'bg-indigo-600', lang === 'en' ? `View ${subject} ${t.gradeLabel} ${grade} PDF` : `មើល ${subject} ${t.gradeLabel} ${grade} PDF`)}
                                {renderLink(fullFlipbook, t.viewFlipbook, 'bg-green-600', lang === 'en' ? `View ${subject} ${t.gradeLabel} ${grade} Flipbook` : `មើល ${subject} ${t.gradeLabel} ${grade} Flipbook`)}
                                {(normalizedSubject === 'virtual-lab' || normalizedSubject === 'ai-education') && !fullPdf && !fullFlipbook && (
                                    <p className="text-base text-gray-600">No PDF or Flipbook available.</p>
                                )}
                            </div>
                        )}
                        {fullAiTools.length > 0 && normalizedSubject === 'ai-education' && (
                            <div className="flex flex-col gap-3 mt-4 overflow-y-auto max-h-48">
                                <p className="text-lg font-bold font-sans text-gray-700">{t.aiTools}</p>
                                {fullAiTools.map((tool, index) => renderLink(
                                    tool.url,
                                    lang === 'en' ? (tool.name || `AI Tool ${index + 1}`) : (tool.name || `ឧបករណ៍ AI ${index + 1}`),
                                    'bg-purple-600',
                                    lang === 'en' ? `Visit ${tool.name || 'AI Tool'} for ${t.gradeLabel} ${grade}` : `ចូលមើល ${tool.name || 'ឧបករណ៍ AI'} សម្រាប់ ${t.gradeLabel} ${grade}`
                                ))}
                            </div>
                        )}
                        {fullVirtualLabLinks.length > 0 && normalizedSubject !== 'ai-education' && (
                            <div className="flex flex-col gap-3 mt-4">
                                <p className="text-lg font-bold font-sans text-gray-700">{t.virtualLabs}</p>
                                {fullVirtualLabLinks.map((lab, index) => renderLink(
                                    lab.url,
                                    lang === 'en' ? (lab.name || `Virtual Lab ${index + 1}`) : (lab.name || `មន្ទីរពិសោធន៍និម្មិត ${index + 1}`),
                                    'bg-blue-600',
                                    lang === 'en' ? `Visit ${lab.name || 'Virtual Lab'} for ${t.gradeLabel} ${grade}` : `ចូលមើល ${lab.name || 'មន្ទីរពិសោធន៍និម្មិត'} សម្រាប់ ${t.gradeLabel} ${grade}`
                                ))}
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="p-4 bg-red-50 border-l-4 border-red-600 rounded-lg" aria-live="polite">
                        <p className="text-base font-bold font-sans text-red-700">
                            {isValidGrade
                                ? isValidProgram
                                    ? `${t.noMaterials} ${subject} ${lang === 'en' ? 'in' : 'ក្នុង'} ${programDisplay[lang]} ${t.programLabel} ${lang === 'en' ? 'for' : 'សម្រាប់'} ${t.gradeLabel} ${grade}.`
                                    : `${t.invalidProgram} ${program} ${lang === 'en' ? 'for' : 'សម្រាប់'} ${t.gradeLabel} ${grade}.`
                                : `${t.invalidGrade} ${grade}.`}
                        </p>
                        <p className="text-base font-bold font-sans text-red-700 mt-2">
                            {t.checkDetails}
                            <a
                                href="https://t.me/DrHelloWorld"
                                className="text-indigo-600 hover:text-indigo-700 underline transition-all duration-300 ml-1"
                                aria-label={lang === 'en' ? 'Contact support' : 'ទាក់ទងផ្នែកជំនួយ'}
                            >
                                {t.contactSupport}
                            </a>
                            {t.assistance}
                        </p>
                    </div>
                )}
                <div className="mt-4 border-b-4 border-indigo-600 w-1/2 mx-auto"></div>
            </div>
        </div>
    );
};

export default LessonCard;
