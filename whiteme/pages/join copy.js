import { useRadioGroup } from '@mui/material';
import { useRouter } from 'next/router'
import Index from './index'


const join = () => {

    const router = useRouter();
    const {post} = router.query

    return (
        <>
            <Index>
            </Index>
        </>
    );
}

export default join;