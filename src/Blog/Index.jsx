import Loading from '../Shared/Misc/Loading';
import useFetch from '../useFetch';
import Card from './Card';

export default function Index() {
	const {data, isPending, error } = useFetch('http://localhost:8000/blogs');

    return (
        <>
            {isPending && <Loading />}
			{error && <p className='text-center mt-5'>{error}</p>}
            <div className="bg-white px-5 container mx-auto my-5">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl mt-10 font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        Learn how to grow your business with our expert advice.
                    </p>
                </div>
                <div className='mx-auto mt-3 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-5 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
                    {data.map((blog) => (
                        <Card {...blog} key={blog.id} />
                    ))}
                </div>
            </div>
        </>
    )
}