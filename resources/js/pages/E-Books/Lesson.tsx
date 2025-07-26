import { usePage } from '@inertiajs/react';
import type { PageProps } from '@inertiajs/inertia';
import PageLayout from '../PageLayout';
import LessonCard from '../E-Books/MainContent/LessonCard';

export default function Lesson() {
    const { props, url } = usePage<PageProps<{ subject?: string; program?: string; grade?: string; lang?: string }>>();
    const { subject = 'Unknown Subject', program = 'Unknown Program', grade = 'Unknown Grade', lang = 'en' } = props;

    return (
        <PageLayout lang={lang} setLang={() => {}} title={lang === 'en' ? 'Lesson Materials' : 'សម្ភារៈសិក្សា'}>
            <LessonCard lang={lang} subject={subject} program={program} grade={grade} url={url} />
        </PageLayout>
    );
}
