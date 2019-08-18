import { useRouter } from 'next/router';
import myLayout from '../../components/MyLayout';
import withLayout from '../../components/MyLayout';

const Post = () => {
    const router = useRouter();

    return (
        <>
            <h1>{router.query.id}</h1>
            <p>This is the blog post content.</p>
        </>
    );
}

export default withLayout(Post);
