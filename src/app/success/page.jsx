import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const Success = dynamic(() => import('../../component/Success'));

export default function SuccessPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Success />
        </Suspense>
    );
}
