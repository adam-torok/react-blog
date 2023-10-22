import toast, { Toaster } from 'react-hot-toast';
import { useEffect, useState } from 'react';
import Loading from '../Shared/Misc/Loading';
import Modal from '../Shared/Misc/Modal';
import Card from './Card';

export default function Index() {
    const [data, setData] = useState([]);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    const [modalIsVisible, setModalIsVisible] = useState(false);
    const [selectedBlog, setSelectedBlog] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetchData();
        }, 500);
    }, []);

    const fetchData = () => {
        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
                .then((resp) => {
                    if (!resp.ok) {
                        setError('❌ Could not fetch the data.');
                        setIsPending(false);
                        throw Error('❌ Could not fetch the data.');
                    }
                    setError(null);
                    return resp.json();
                })
                .then((data) => {
                    setData(data);
                    setIsPending(false);
                })
                .catch((err) => {
                    console.log(err.message);
                });
        }, 500);
    }

    const deleteBlog = () => {
        fetch(`http://localhost:8000/blogs/${selectedBlog}`, {
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

            fetchData()
            hideModal()

        }).catch((err) => {
            toast.error(err)
        })
    }

    const showModal = (id) => {
        setSelectedBlog(id);
        setModalIsVisible(true);
    }

    const hideModal = () => {
        setSelectedBlog(null);
        setModalIsVisible(false)
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
                        <Card onDelete={showModal} blog={blog} key={blog.id} />
                    ))}
                </div>
            </div>
            {selectedBlog && <Modal onCancel={hideModal} id={selectedBlog} onAccept={deleteBlog} isVisible={modalIsVisible} />}
        </>
    )
}