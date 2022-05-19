import { useRadioGroup } from '@mui/material';
import { useRouter } from 'next/router'
import Index from './index'


const join = () => {

    const router = useRouter();
    const {post} = router.query

    return (
        <>
            <Index>
                alsdkfjalskdjfkakldsjflkjd
                alskdjflkjasdklfklasjdklfjklsdjfkladjlkfskdlfjlasd
                여기는 join으로 들어오게 됩니다~~ {post}
            </Index>
        </>
    );
}

export default join;