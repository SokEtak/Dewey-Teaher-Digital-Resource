import { Head } from '@inertiajs/react';

// Mapping of English numbers to Khmer numbers (partial, for reference)
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
    '10': '១ៀ',
    '11': '១១',
    '12': '១២',
};

interface LessonCardProps {
    lang: 'en' | 'km';
    subject?: string;
    program?: string;
    grade?: string;
    url: string;
}

const LessonCard = ({ lang, subject = 'Unknown Subject', program = 'Unknown Program', grade = 'Unknown Grade', url }: LessonCardProps) => {
    // Normalize subject to lowercase and remove spaces
    const normalizedSubject = subject.toLowerCase().replace(/\s+/g, '');

    // Base URLs for resources
    const PDF_BASE = "https://drive.google.com/drive/folders/";
    const FLIPBOOK_BASE = "https://online.fliphtml5.com/";

    // Define the grades object with grade -> program -> subject -> { parts: { pdf?, flipbook?, level? }[] | { pdf?, flipbook }, aiTools? }
    const grades: { [key: string]: { [key: string]: { [key: string]: { parts?: { pdf?: string; flipbook?: string; level?: string }[]; pdf?: string; flipbook?: string; aiTools?: { url: string; name?: string }[] } } } } = {
        "1": {
            "cambodia": {
                "math": { pdf: "1GtH_b64YxegOsW0dbak0ot7cwLxGnYfE", flipbook: "ayjcf/xlcl/" },
                "science": { parts: [
                        { pdf: "1AKoB1TggCdjtj4JrwSzvKgmhpFCUNYTB", flipbook: "ayjcf/unqv/", level: "Part 1" },
                        { pdf: "#", flipbook: "ayjcf/lcec/", level: "Part 2" }
                    ] },
                "social": { pdf: "1SL0FWWCViBvQBz8lvnvHP_olw9zGk5l6", flipbook: "ayjcf/jgfb/" },
                "khmer": { pdf: "1i2MGyGWPQwupjLDNCruRJmjS-VoikuKd", flipbook: "ayjcf/wruc/" },
                "virtual-lab": { pdf: "#", flipbook: "#" },
                "ai-education": {
                    pdf: "#",
                    flipbook: "#",
                    aiTools: [
                        { url: "https://toolbaz.com/", name: "Toolbaz AI" },
                        { url: "https://www.magicschool.ai/", name: "MagicSchool AI" },
                        { url: "https://www.eduaide.ai/", name: "EduAide AI" },
                        { url: "https://www.teachy.app/en/", name: "Teachy AI" }
                    ]
                }
            },
            "america": {
                "math": { pdf: "#", flipbook: "#" },
                "science": { pdf: "#", flipbook: "#" },
                "social": { pdf: "#", flipbook: "#" },
                "khmer": { pdf: "#", flipbook: "#" }
            }
        },
        "2": {
            "cambodia": {
                "math": { pdf: "1AarunHQniUFrdyDEEYecND_LXo6FA4zH", flipbook: "frszu/beag/" },
                "science": { pdf: "14PAVUeQyYmv8JdnS5yzcZeDdAfeYh_pl", flipbook: "yhbke/egju/" },
                "social": { pdf: "1bO39VjJXE7P-WO7ovBUKKA69rY9mbKmW", flipbook: "ayjcf/mdui/" },
                "khmer": { pdf: "1bc89FmtR2fSE8_oM1GbNfcFAuvlTD3hw", flipbook: "ayjcf/wuqh/" },
                "virtual-lab": { pdf: "#", flipbook: "#" },
                "ai-education": {
                    pdf: "#",
                    flipbook: "#",
                    aiTools: [
                        { url: "https://toolbaz.com/", name: "Toolbaz AI" },
                        { url: "https://www.magicschool.ai/", name: "MagicSchool AI" },
                        { url: "https://www.eduaide.ai/", name: "EduAide AI" },
                        { url: "https://www.teachy.app/en/", name: "Teachy AI" }
                    ]
                }
            },
            "america": {
                "math": { pdf: "#", flipbook: "#" },
                "science": { pdf: "#", flipbook: "#" },
                "social": { pdf: "#", flipbook: "#" },
                "khmer": { pdf: "#", flipbook: "#" }
            }
        },
        "3": {
            "cambodia": {
                "math": { pdf: "14_I5gclFkQCE3adTnpMc3eNFmOgYaeEx", flipbook: "frszu/mlxm/" },
                "science": { pdf: "1KHvzDUCykCco5lIYnTiY71892vtnUJ3g", flipbook: "ayjcf/mdui/" },
                "social": { pdf: "1H762S5l6ZlJwSDKUY-FWX6ZlVTjqEJih", flipbook: "ayjcf/mdui/" },
                "reading": { pdf: "1IUf3VFO2eubJf2UPp-WxznHSA3Dfqokb", flipbook: "ayjcf/pvcf/" },
                "khmer": { pdf: "1BaL5b2UDaWww1rFlCHMFj-hO6M_5c-Tf", flipbook: "frszu/pesv/" },
                "virtual-lab": { pdf: "#", flipbook: "#" },
                "ai-education": {
                    pdf: "#",
                    flipbook: "#",
                    aiTools: [
                        { url: "https://toolbaz.com/", name: "Toolbaz AI" },
                        { url: "https://www.magicschool.ai/", name: "MagicSchool AI" },
                        { url: "https://www.eduaide.ai/", name: "EduAide AI" },
                        { url: "https://www.teachy.app/en/", name: "Teachy AI" }
                    ]
                }
            },
            "america": {
                "math": { pdf: "#", flipbook: "#" },
                "science": { pdf: "#", flipbook: "#" },
                "social": { pdf: "#", flipbook: "#" },
                "reading": { pdf: "#", flipbook: "#" },
                "khmer": { pdf: "#", flipbook: "#" }
            }
        },
        "4": {
            "cambodia": {
                "chaching": { pdf: "18s612_lwpCq7rRnWnHXJxdEmM7iUtTwo", flipbook: "yhbke/wdok/" },
                "math": { pdf: "1XYND_ahzAg8bXXaKscAnUbJklxy7w-qM", flipbook: "ayjcf/xjbv/" },
                "history": { pdf: "1m03_gTMECeMCVexcD0xQw3WjUDzS0jbe", flipbook: "ayjcf/bicw/" },
                "khmer": { pdf: "13S4xJ8GVfYvB8gDxnlq5x3co1iPACxBT", flipbook: "ayjcf/jwms/" },
                "english": { pdf: "1PF3x2ycB6vFkUzM0s8AFhkfRRUi6TKd7", flipbook: "ayjcf/bicw/" },
                "science": { pdf: "1QhObR3ZFSr-JN6LfvAP-bacb8ds-s5Io", flipbook: "ayjcf/gwqs/" },
                "social": { pdf: "1_hJWsTgM4O8Q9gFU_0oL7AkkiMrnlwHO", flipbook: "frszu/ptwp/" },
                "virtual-lab": { pdf: "#", flipbook: "#" },
                "ai-education": {
                    pdf: "#",
                    flipbook: "#",
                    aiTools: [
                        { url: "https://toolbaz.com/", name: "Toolbaz AI" },
                        { url: "https://www.magicschool.ai/", name: "MagicSchool AI" },
                        { url: "https://www.eduaide.ai/", name: "EduAide AI" },
                        { url: "https://www.teachy.app/en/", name: "Teachy AI" }
                    ]
                }
            },
            "america": {
                "chaching": { pdf: "#", flipbook: "#" },
                "math": { pdf: "#", flipbook: "#" },
                "history": { pdf: "#", flipbook: "#" },
                "khmer": { pdf: "#", flipbook: "#" },
                "english": { pdf: "#", flipbook: "#" },
                "science": { pdf: "#", flipbook: "#" },
                "social": { pdf: "#", flipbook: "#" }
            }
        },
        "5": {
            "cambodia": {
                "math": { pdf: "1TmN7W2dcLpwrTHuZAuQnk4A8mgBQpi8l", flipbook: "frszu/bjtb/" },
                "khmer": { pdf: "1gZTxkP2ciOQ6RmJoN541VMS0kPD6_qLp", flipbook: "yhbke/rgyk/" },
                "english": { pdf: "1SYRUilVE2xW8Z_4MIxMLyaCL8GnmsLOJ", flipbook: "yhbke/wdiv/" },
                "science": { pdf: "1qpRXBqmz9YvLpO5xJj1y5aUI4hIQzfH5", flipbook: "yhbke/cxop/" },
                "social": { pdf: "1gt8sqHQ9tgGIKyGnL4Hc-xHrkhpUsTYs", flipbook: "yhbke/qlef/" },
                "virtual-lab": { pdf: "#", flipbook: "#" },
                "ai-education": {
                    pdf: "#",
                    flipbook: "#",
                    aiTools: [
                        { url: "https://toolbaz.com/", name: "Toolbaz AI" },
                        { url: "https://www.magicschool.ai/", name: "MagicSchool AI" },
                        { url: "https://www.eduaide.ai/", name: "EduAide AI" },
                        { url: "https://www.teachy.app/en/", name: "Teachy AI" }
                    ]
                }
            },
            "america": {
                "math": { pdf: "#", flipbook: "#" },
                "khmer": { pdf: "#", flipbook: "#" },
                "english": { pdf: "#", flipbook: "#" },
                "science": { pdf: "#", flipbook: "#" },
                "social": { pdf: "#", flipbook: "#" }
            }
        },
        "6": {
            "cambodia": {
                "math": { pdf: "1Z8mFgA4a3hvU9e-MYgnJ_M_Y_8Gh-C7U", flipbook: "frszu/mder/" },
                "history": { pdf: "14IWWmfqNSSIBpp9I8jzMgIzc6MEqx-xv", flipbook: "frszu/yldb/" },
                "khmer": { pdf: "1NMAONAHIMCL-zQX3pz2tt2BqMn2CQPs1", flipbook: "frszu/umpk/" },
                "english": { pdf: "1-KbBGLLQzsz1VBXSucTePh7UfGUoi3wN", flipbook: "frszu/gozi/" },
                "science": { pdf: "1VbJoyCa-H0SNA3hstyPcPQWfszh5jNp9", flipbook: "yhbke/ckvl/" },
                "social": { pdf: "1N9nLoo5aLzZ3tPP_trwBKRDX3YpOF_wl", flipbook: "yhbke/ffmk/" },
                "virtual-lab": { pdf: "#", flipbook: "#" },
                "ai-education": {
                    pdf: "#",
                    flipbook: "#",
                    aiTools: [
                        { url: "https://toolbaz.com/", name: "Toolbaz AI" },
                        { url: "https://www.magicschool.ai/", name: "MagicSchool AI" },
                        { url: "https://www.eduaide.ai/", name: "EduAide AI" },
                        { url: "https://www.teachy.app/en/", name: "Teachy AI" }
                    ]
                }
            },
            "america": {
                "math": { pdf: "#", flipbook: "#" },
                "history": { pdf: "#", flipbook: "#" },
                "khmer": { pdf: "#", flipbook: "#" },
                "english": { pdf: "#", flipbook: "#" },
                "science": { pdf: "#", flipbook: "#" },
                "social": { pdf: "#", flipbook: "#" }
            }
        },
        "7": {
            "cambodia": {
                "math": { pdf: "1I_H7gOzD2HhMA0XIjx2WCVJMUSeZPI6b", flipbook: "mylzw/yxwz/#p=1" },
                "khmer": { pdf: "1EikPEwmG9uniJ-NSOr6WMC3N_COJ7D9C", flipbook: "yhbke/zrju/" },
                "english": { pdf: "1V9hnZcPSc1Y0oOnJcEwDYi5AKhSw_1wO", flipbook: "yhbke/zyuq/" },
                "science": { pdf: "1Z6Ot0z3brZ8QWz9Dnzxo4MOT3Manixp8", flipbook: "yhbke/edes/" },
                "social": { pdf: "1b7ie5S-IykSCbXpx4H67VuQ0P31h_KUV", flipbook: "apzgt/xglk/" },
                "virtual-lab": { pdf: "#", flipbook: "#" },
                "ai-education": {
                    pdf: "#",
                    flipbook: "#",
                    aiTools: [
                        { url: "https://toolbaz.com/", name: "Toolbaz AI" },
                        { url: "https://www.magicschool.ai/", name: "MagicSchool AI" },
                        { url: "https://www.eduaide.ai/", name: "EduAide AI" },
                        { url: "https://www.teachy.app/en/", name: "Teachy AI" }
                    ]
                }
            },
            "america": {
                "math": { pdf: "#", flipbook: "#" },
                "khmer": { pdf: "#", flipbook: "#" },
                "english": { pdf: "#", flipbook: "#" },
                "science": { pdf: "#", flipbook: "#" },
                "social": { pdf: "#", flipbook: "#" }
            }
        },
        "8": {
            "cambodia": {
                "math": { pdf: "1_RUcBu5lITC_LGWG4BTdVJRTCx-vKmvQ", flipbook: "mylzw/qoyg/#p=1" },
                "khmer": { pdf: "117cgoDQ3kEmN6J-2oY2OXL6ZrG7wFwnl", flipbook: "apzgt/fink/" },
                "english": { pdf: "1wVK84yVqYnZfpayouwi_AWxj8VlVBtzh", flipbook: "apzgt/cssh/" },
                "science": { pdf: "1jVmXAXEjquYWrnV9E2TY7--qLToL7gtz", flipbook: "apzgt/lirg/" },
                "social": { pdf: "1v3ez-eLprH2KJArYqv3hkzJRGq9kx6MR", flipbook: "apzgt/pjqz/" },
                "virtual-lab": { pdf: "#", flipbook: "#" },
                "ai-education": {
                    pdf: "#",
                    flipbook: "#",
                    aiTools: [
                        { url: "https://toolbaz.com/", name: "Toolbaz AI" },
                        { url: "https://www.magicschool.ai/", name: "MagicSchool AI" },
                        { url: "https://www.eduaide.ai/", name: "EduAide AI" },
                        { url: "https://www.teachy.app/en/", name: "Teachy AI" }
                    ]
                }
            },
            "america": {
                "math": { pdf: "#", flipbook: "#" },
                "khmer": { pdf: "#", flipbook: "#" },
                "english": { pdf: "#", flipbook: "#" },
                "science": { pdf: "#", flipbook: "#" },
                "social": { pdf: "#", flipbook: "#" }
            }
        },
        "9": {
            "cambodia": {
                "math": { pdf: "1ocymmBiv7X6DdmXk6yZczobLs9NDo_oD", flipbook: "frszu/dpgo/" },
                "khmer": { pdf: "1sed5sZKo0V17G6UJko3uUZ7k41b7yT_D", flipbook: "ecumu/usjo/" },
                "english": { pdf: "15cVajVp6-Y7vY5wcsUCGx8OHee3sM68B", flipbook: "frszu/aiik/" },
                "science": { pdf: "1CQfDPPvd-pR_0CQCzb1Ycf5r7sW8F1po", flipbook: "ecumu/ixrn/" },
                "social": { pdf: "1499jKWdcYWYF3p0e9M3O56YKI4o0t9x1", flipbook: "ecumu/ygfz/" },
                "virtual-lab": { pdf: "#", flipbook: "#" },
                "ai-education": {
                    pdf: "#",
                    flipbook: "#",
                    aiTools: [
                        { url: "https://toolbaz.com/", name: "Toolbaz AI" },
                        { url: "https://www.magicschool.ai/", name: "MagicSchool AI" },
                        { url: "https://www.eduaide.ai/", name: "EduAide AI" },
                        { url: "https://www.teachy.app/en/", name: "Teachy AI" }
                    ]
                }
            },
            "america": {
                "math": { pdf: "#", flipbook: "#" },
                "khmer": { pdf: "#", flipbook: "#" },
                "english": { pdf: "#", flipbook: "#" },
                "science": { pdf: "#", flipbook: "#" },
                "social": { pdf: "#", flipbook: "#" }
            }
        },
        "10": {
            "cambodia": {
                "math": { parts: [
                        { pdf: "10HNYy6nQBn8CZkOmucZhqXFZ73MLc3jp", flipbook: "ayjcf/asuh/", level: "Basic" },
                        { pdf: "10HNYy6nQBn8CZkOmucZhqXFZ73MLc3jp", flipbook: "ayjcf/fimj/", level: "Advance" }
                    ] },
                "history": { pdf: "10HNYy6nQBn8CZkOmucZhqXFZ73MLc3jp", flipbook: "ayjcf/sqlz/" },
                "geography": { pdf: "10HNYy6nQBn8CZkOmucZhqXFZ73MLc3jp", flipbook: "ayjcf/sqlz/" },
                "geology": { pdf: "10HNYy6nQBn8CZkOmucZhqXFZ73MLc3jp", flipbook: "ebook.spm-edoc.com/ereading/Earth-EnvironmentGrade10/#p=1" },
                "biology": { pdf: "10HNYy6nQBn8CZkOmucZhqXFZ73MLc3jp", flipbook: "ebook.spm-edoc.com/ereading/BiologyGrade10/#p=1" },
                "physics": { pdf: "10HNYy6nQBn8CZkOmucZhqXFZ73MLc3jp", flipbook: "uouggg/cthz/" },
                "chemistry": { pdf: "10HNYy6nQBn8CZkOmucZhqXFZ73MLc3jp", flipbook: "ebook.spm-edoc.com/ereading/ChemistryGrade10/#p=1" },
                "morality": { pdf: "10HNYy6nQBn8CZkOmucZhqXFZ73MLc3jp", flipbook: "ayjcf/sqlz/" },
                "khmer": { pdf: "10HNYy6nQBn8CZkOmucZhqXFZ73MLc3jp", flipbook: "uouggg/sgvw/" },
                "english": { pdf: "#", flipbook: "ebook.spm-edoc.com/ereading/EnglishGrade10/#p=1" },
                "homeeconomic": { pdf: "10HNYy6nQBn8CZkOmucZhqXFZ73MLc3jp", flipbook: "ayjcf/sqlz/" },
                "virtual-lab": { pdf: "#", flipbook: "#" },
                "ai-education": {
                    pdf: "#",
                    flipbook: "#",
                    aiTools: [
                        { url: "https://toolbaz.com/", name: "Toolbaz AI" },
                        { url: "https://www.magicschool.ai/", name: "MagicSchool AI" },
                        { url: "https://www.eduaide.ai/", name: "EduAide AI" },
                        { url: "https://www.teachy.app/en/", name: "Teachy AI" }
                    ]
                }
            },
            "america": {
                "math": { pdf: "#", flipbook: "#" },
                "history": { pdf: "#", flipbook: "#" },
                "geography": { pdf: "#", flipbook: "#" },
                "geology": { pdf: "#", flipbook: "#" },
                "biology": { pdf: "#", flipbook: "#" },
                "physics": { pdf: "#", flipbook: "#" },
                "chemistry": { pdf: "#", flipbook: "#" },
                "morality": { pdf: "#", flipbook: "#" },
                "khmer": { pdf: "#", flipbook: "#" },
                "english": { pdf: "#", flipbook: "#" },
                "homeeconomic": { pdf: "#", flipbook: "#" }
            }
        },
        "11": {
            "cambodia": {
                "math": { parts: [
                        { pdf: "1NaQYd0A7KyhW_5_yZ5ECFsXMgt7buRz5", flipbook: "frszu/eywa/", level: "Basic" },
                        { pdf: "1NaQYd0A7KyhW_5_yZ5ECFsXMgt7buRz5", flipbook: "ebook.spm-edoc.com/ereading/Grade11Part2/MathGrade11/MathGrade11-Advance/#p=1", level: "Advance" }
                    ] },
                "chemistry": { pdf: "1SGUiRI8pn3RjaFii0TLraFkmyZz4tQ13", flipbook: "frszu/bnao/" },
                "economics": { pdf: "1DAYoS9w5yAFekzKLiQgtNzH8I1h34Ezh", flipbook: "ebook.spm-edoc.com/ereading/Grade11Part1/EconomicGrade11/#p=1" },
                "biology": { pdf: "1WkQeps-ZCxjgq6_cp7D8vEzeDbBTJm5k", flipbook: "ayjcf/pipz/" },
                "history": { pdf: "1YpQ7c-AaiLC3nRZt0x0BBObRwn_gWu97", flipbook: "ecumu/kbvx/" },
                "geology": { pdf: "1FsY6Q307POOmfkiorX_9LXqjWKpC6tOj", flipbook: "uouggg/haki/" },
                "geography": { pdf: "1n8LJdHvqtLIV4j-EojjVCMyhRRDNRB9_", flipbook: "uouggg/thqn/" },
                "physics": { pdf: "1OPLZFL7d6OAiXAiBbkn-5ZxOBeB6MCBT", flipbook: "ayjcf/mcwq/" },
                "morality": { pdf: "1MMhVWhqTEiKBsCM4Hgl0miWGm792Zp0o", flipbook: "uouggg/oyza/" },
                "english": { pdf: "1EyekbhoLLRSf21dEr9lEJs7ROI3BP2Co", flipbook: "ayjcf/vern/" },
                "khmer": { pdf: "1IfVeWVxJwlGGYWGMqrnMBNjXAdjddUK9", flipbook: "ayjcf/vthf/" },
                "virtual-lab": { pdf: "#", flipbook: "#" },
                "ai-education": {
                    pdf: "#",
                    flipbook: "#",
                    aiTools: [
                        { url: "https://toolbaz.com/", name: "Toolbaz AI" },
                        { url: "https://www.magicschool.ai/", name: "MagicSchool AI" },
                        { url: "https://www.eduaide.ai/", name: "EduAide AI" },
                        { url: "https://www.teachy.app/en/", name: "Teachy AI" }
                    ]
                }
            },
            "america": {
                "math": { pdf: "#", flipbook: "#" },
                "chemistry": { pdf: "#", flipbook: "#" },
                "economics": { pdf: "#", flipbook: "#" },
                "biology": { pdf: "#", flipbook: "#" },
                "history": { pdf: "#", flipbook: "#" },
                "geology": { pdf: "#", flipbook: "#" },
                "geography": { pdf: "#", flipbook: "#" },
                "physics": { pdf: "#", flipbook: "#" },
                "morality": { pdf: "#", flipbook: "#" },
                "english": { pdf: "#", flipbook: "#" },
                "khmer": { pdf: "#", flipbook: "#" }
            }
        },
        "12": {
            "cambodia": {
                "math": { parts: [
                        { pdf: "1Mx5tDYI0ZvZPb1bxlBOQLbw0dZI6oWwn", flipbook: "frszu/krbe/", level: "Basic" },
                        { pdf: "14K2TxqN3qto6PzLtE0yfYt8a8KP2wqRz", flipbook: "frszu/wabt/", level: "Advance" }
                    ] },
                "chemistry": { pdf: "1qJFtEgfVm_S4SzAnTiBQ2OJNO-Nic-kS", flipbook: "uouggg/xnvs/" },
                "biology": { pdf: "1T-VVZARoJEviDjAn70X-A0o2nsp1BU-Q", flipbook: "ebook.spm-edoc.com/ereading/Grade12Part1/BiologyGrade12/#p=1" },
                "history": { pdf: "1UVnl2twJy_bzWdsKTYQ_8_IZy3fkkdWA", flipbook: "ebook.spm-edoc.com/ereading/Grade12Part2/HistoryGrade12/#p=1" },
                "geology": { pdf: "1DZoon-Oap3xT91Hm4GsyANdmF9YdX9C7", flipbook: "ebook.spm-edoc.com/ereading/Grade12Part1/EarthandEnvironmentGrade12/#p=1" },
                "geography": { pdf: "1UaEJEcjeicwRmimSXTmevUfxR5Sgt2VS", flipbook: "ebook.spm-edoc.com/ereading/Grade12Part1/GeographicGrade12/#p=1" },
                "physics": { pdf: "1qcowpi38uk3ZODKlDxzyEDZ4pVcelwUY", flipbook: "yhbke/yevz/" },
                "morality": { pdf: "1QdT0anOEK-x57VrCkaVbrSiBedX3OKlr", flipbook: "uouggg/fpfp/" },
                "english": { pdf: "16LOYCodyoPaSfj3FpVJLVIGz1yLIkUvj", flipbook: "yhbke/gslb/" },
                "khmer": { pdf: "1CPwnyQK9_Pae_vRYf_7sm7P98OIT5eH-", flipbook: "yhbke/wqqz/" },
                "virtual-lab": { pdf: "#", flipbook: "#" },
                "ai-education": {
                    pdf: "#",
                    flipbook: "#",
                    aiTools: [
                        { url: "https://toolbaz.com/", name: "Toolbaz AI" },
                        { url: "https://www.magicschool.ai/", name: "MagicSchool AI" },
                        { url: "https://www.eduaide.ai/", name: "EduAide AI" },
                        { url: "https://www.teachy.app/en/", name: "Teachy AI" }
                    ]
                }
            },
            "america": {
                "math": { pdf: "#", flipbook: "#" },
                "chemistry": { pdf: "#", flipbook: "#" },
                "biology": { pdf: "#", flipbook: "#" },
                "history": { pdf: "#", flipbook: "#" },
                "geology": { pdf: "#", flipbook: "#" },
                "geography": { pdf: "#", flipbook: "#" },
                "physics": { pdf: "#", flipbook: "#" },
                "morality": { pdf: "#", flipbook: "#" },
                "english": { pdf: "#", flipbook: "#" },
                "khmer": { pdf: "#", flipbook: "#" }
            }
        }
    };

    // Construct full URLs dynamically
    const isValidGrade = grade in grades;
    const isValidProgram = isValidGrade && program in grades[grade];
    const isValidSubject = isValidProgram && normalizedSubject in grades[grade][program];
    const { parts, pdf, flipbook, aiTools = [] } = isValidSubject ? grades[grade][program][normalizedSubject] : { parts: [], pdf: null, flipbook: null, aiTools: [] };
    const fullPdf = pdf && pdf !== "#" ? `${PDF_BASE}${pdf}` : null;
    const fullFlipbook = flipbook && flipbook !== "#" ? `${FLIPBOOK_BASE}${flipbook}` : null;
    const fullParts = parts?.map(part => ({
        pdf: part.pdf && part.pdf !== "#" ? `${PDF_BASE}${part.pdf}` : null,
        flipbook: part.flipbook && part.flipbook !== "#" ? `${FLIPBOOK_BASE}${part.flipbook}` : null,
        level: part.level
    })) || [];

    // Translations
    const translations = {
        en: {
            title: 'Lesson Materials',
            gradeLabel: 'Grade',
            programLabel: 'Program',
            subjectLabel: 'Subject',
            accessMaterials: 'Access the lesson materials:',
            aiTools: 'AI Education Tools:',
            viewPdf: 'View PDF',
            viewFlipbook: 'View Flipbook',
            noMaterials: 'No materials available for',
            invalidProgram: 'Invalid program:',
            invalidGrade: 'Invalid grade:',
            checkDetails: 'Please check the grade, program, or subject, or',
            contactSupport: 'contact support',
            assistance: 'for assistance.'
        },
        km: {
            title: 'សម្ភារៈសិក្សា',
            gradeLabel: 'ថ្នាក់ទី',
            programLabel: 'កម្មវិធីសិក្សា',
            subjectLabel: 'មុខវិជ្ជា',
            accessMaterials: 'ចូលប្រើសម្ភារៈសិក្សា:',
            aiTools: 'ឧបករណ៍អប់រំ AI:',
            viewPdf: 'មើល PDF',
            viewFlipbook: 'មើល Flipbook',
            noMaterials: 'គ្មានសម្ភារៈសម្រាប់',
            invalidProgram: 'កម្មវិធីមិនត្រឹមត្រូវ:',
            invalidGrade: 'ថ្នាក់មិនត្រឹមត្រូវ:',
            checkDetails: 'សូមពិនិត្យថ្នាក់, កម្មវិធី, ឬមុខវិជ្ជា, ឬ',
            contactSupport: 'ទាក់ទងផ្នែកជំនួយ',
            assistance: 'សម្រាប់ជំនួយ។'
        }
    };

    // Use fallback to ensure correct language selection
    const t = lang === 'km' ? translations.km : translations.en;

    return (
        <div className="flex w-full max-w-xl  items-center justify-center mt-3">
            <div className="bg-white rounded-2xl shadow-lg p-6 w-full border-t-4 border-indigo-600 hover:shadow-xl transition-all duration-300">
                <Head title={t.title} />
                <h1 className="text-2xl sm:text-3xl font-bold text-center text-indigo-600 mb-4">
                    {t.title}
                </h1>
                <h2 className="text-xl sm:text-3xl font-bold text-indigo-600 mb-4 text-center ">
                    {lang === 'en'
                        ? `${t.gradeLabel} ${grade}: ${program.charAt(0).toUpperCase() + program.slice(1)} ${t.programLabel}`
                        : `${t.gradeLabel} ${numberMap[grade] || grade}: ${program === 'cambodia' ? 'ខ្មែរ' : program === 'america' ? 'អាមេរិកកាំង' : 'បន្ថែម'} ${t.programLabel}`}
                </h2>
                <p className="text-base font-bold font-sans text-gray-700 mb-4">
                    <span className="font-bold font-sans">{t.subjectLabel}</span> {subject.charAt(0).toUpperCase() + subject.slice(1)}
                </p>
                {(fullParts.length > 0 || fullPdf || fullFlipbook || aiTools.length > 0) ? (
                    <div className="flex flex-col gap-4">
                        <p className="text-lg font-bold font-sans text-gray-700">{t.accessMaterials}</p>
                        {fullParts.length > 0 ? (
                            <div className="flex flex-col gap-3">
                                {fullParts.map((part, index) => (
                                    <div key={index} className="flex gap-3">
                                        {part.pdf && (
                                            <a
                                                href={part.pdf}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-1 px-3 py-2 bg-indigo-600 text-white font-semibold rounded-lg text-center text-base transition-all duration-300 hover:bg-indigo-700"
                                                aria-label={lang === 'en' ? `View ${subject} ${t.gradeLabel} ${grade} ${part.level || `Part ${index + 1}`} PDF` : `មើល ${subject} ${t.gradeLabel} ${grade} ${part.level || `ផ្នែក ${index + 1}`} PDF`}
                                            >
                                                {lang === 'en' ? `${t.viewPdf} ${part.level || `Part ${index + 1}`}` : `${t.viewPdf} ${part.level || `ផ្នែក ${index + 1}`}`}
                                            </a>
                                        )}
                                        {part.flipbook && (
                                            <a
                                                href={part.flipbook}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-1 px-3 py-2 bg-green-600 text-white font-semibold rounded-lg text-center text-base transition-all duration-300 hover:bg-green-700"
                                                aria-label={lang === 'en' ? `View ${subject} ${t.gradeLabel} ${grade} ${part.level || `Part ${index + 1}`} Flipbook` : `មើល ${subject} ${t.gradeLabel} ${grade} ${part.level || `ផ្នែក ${index + 1}`} Flipbook`}
                                            >
                                                {lang === 'en' ? `${t.viewFlipbook} ${part.level || `Part ${index + 1}`}` : `${t.viewFlipbook} ${part.level || `ផ្នែក ${index + 1}`}`}
                                            </a>
                                        )}
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="flex flex-col gap-3">
                                {fullPdf && (
                                    <a
                                        href={fullPdf}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-3 py-2 bg-indigo-600 text-white font-semibold rounded-lg text-center text-base transition-all duration-300 hover:bg-indigo-700"
                                        aria-label={lang === 'en' ? `View ${subject} ${t.gradeLabel} ${grade} PDF` : `មើល ${subject} ${t.gradeLabel} ${grade} PDF`}
                                    >
                                        {t.viewPdf}
                                    </a>
                                )}
                                {fullFlipbook && (
                                    <a
                                        href={fullFlipbook}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-3 py-2 bg-green-600 text-white font-semibold rounded-lg text-center text-base transition-all duration-300 hover:bg-green-700"
                                        aria-label={lang === 'en' ? `View ${subject} ${t.gradeLabel} ${grade} Flipbook` : `មើល ${subject} ${t.gradeLabel} ${grade} Flipbook`}
                                    >
                                        {t.viewFlipbook}
                                    </a>
                                )}
                            </div>
                        )}
                        {aiTools.length > 0 && (
                            <div className="flex flex-col gap-3 mt-4">
                                <p className="text-lg font-bold font-sans text-gray-700">{t.aiTools}</p>
                                {aiTools.map((tool, index) => (
                                    <a
                                        key={index}
                                        href={tool.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-3 py-2 bg-purple-600 text-white font-semibold rounded-lg text-center text-base transition-all duration-300 hover:bg-purple-700"
                                        aria-label={lang === 'en' ? `Visit ${tool.name || 'AI Tool'} for ${t.gradeLabel} ${grade}` : `ចូលមើល ${tool.name || 'ឧបករណ៍ AI'} សម្រាប់ ${t.gradeLabel} ${grade}`}
                                    >
                                        {lang === 'en' ? (tool.name || `AI Tool ${index + 1}`) : (tool.name || `ឧបករណ៍ AI ${index + 1}`)}
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="p-4 bg-red-50 border-l-4 border-red-600 rounded-lg" aria-live="polite">
                        <p className="text-base font-bold font-sans text-red-700">
                            {isValidGrade
                                ? isValidProgram
                                    ? `${t.noMaterials} ${subject} ${lang === 'en' ? 'in' : 'ក្នុង'} ${program === 'cambodia' ? (lang === 'en' ? 'Cambodia' : 'ខ្មែរ') : program === 'america' ? (lang === 'en' ? 'America' : 'អាមេរិកកាំង') : 'other'} ${t.programLabel} ${lang === 'en' ? 'for' : 'សម្រាប់'} ${t.gradeLabel} ${grade}.`
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
