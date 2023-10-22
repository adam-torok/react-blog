import toast, { Toaster } from 'react-hot-toast';
import Loading from '../Shared/Misc/Loading';
import useFetch from '../useFetch';
import Card from './Card';

export default function Index() {
    const { data, isPending, error } = useFetch('http://localhost:8000/blogs');

    const deleteBlog = (id) => {
        fetch(`http://localhost:8000/blogs/${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        }).then((resp) => {
            if (resp.ok == false) {
                throw new Error('An error has occured.')
            }

            toast('Blog has been deleted!', {
                icon: '👏',
                style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                },
            })

            // Why it's not re running? useFetch('http://localhost:8000/blogs');

        }).catch((err) => {
            toast.error(err)
        })
    }

    return (
        <>
            {isPending && <Loading />}
            <Toaster position="bottom-right" />
            {error && <p className='text-center mt-5'>{error}</p>}
            <div className="bg-white px-5 container mx-auto my-5">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl mt-10 font-bold tracking-tight text-gray-900 sm:text-4xl">📖 From the blog</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        🤓 Read some of our blogs
                    </p>
                    {!data.length && <p className='mt-2 text-2xl leading-8 text-gray-800'>There are no blogs yet!</p>}
                </div>
                <div className='mx-auto mt-3 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-5 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
                    {data.map((blog) => (
                        <Card onDelete={deleteBlog} blog={blog} key={blog.id} />
                    ))}
                </div>
            </div>
        </>
    )
}