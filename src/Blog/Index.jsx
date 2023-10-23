import toast, { Toaster } from 'react-hot-toast'
import { useEffect, useState } from 'react'
import Loading from '../Shared/Misc/Loading'
import Modal from '../Shared/Misc/Modal'
import Card from './Card'
import Pagination from '../Shared/Misc/Pagination'

export default function Index() {
    const [data, setData] = useState([])
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)
    const [modalIsVisible, setModalIsVisible] = useState(false)
    const [selectedBlog, setSelectedBlog] = useState(null)
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(6)
    const [prevLink, setPrevLink] = useState(null)
    const [nextLink, setNextLink] = useState(null)
    const [search, setSearch] = useState('')

    useEffect(() => {
        setTimeout(() => {
            fetchData()
        }, 500)
        // 🚧 I think it does not working properly - need revision!
    }, [search])

    const fetchData = () => {
        setTimeout(() => {
            fetch(`http://localhost:8000/blogs?q=${search}&_page=${page}&_limit=${limit}`)
                .then((resp) => {
                    if (!resp.ok) {
                        setError('❌ Could not fetch the data.')
                        setIsPending(false)
                        throw Error('❌ Could not fetch the data.')
                    }
                    setError(null)

                    const linkHeader = resp.headers.get('Link')

                    if (linkHeader) {
                        const linkParts = linkHeader.split(', ')

                        const links = {}

                        linkParts.forEach((part) => {
                            const [link, rel] = part.split(' ')
                            const url = link.slice(1, -1)

                            const relType = rel.split('=')[1].slice(1, -1)

                            links[relType] = url
                        })

                        setPrevLink(links.prev)
                        setNextLink(links.next)
                    }

                    return resp.json()
                })
                .then((data) => {
                    setData(data)
                    setIsPending(false)
                })
                .catch((err) => {
                    console.log(err.message)
                })
        }, 200)
    }

    // The pagination itself should be refactored
    const goNextPage = () => {
        if (nextLink) {
            setPage(page + 1)
            fetchData()
            window.scrollTo(0, 0)
        }
    }

    const goPrevPage = () => {
        if (prevLink) {
            setPage(page - 1)
            fetchData()
            window.scrollTo(0, 0)
        }
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

    const searchText = (e) => {
        // 🚧 I think it does not working properly - need revision!
        setSearch(e.target.value)
        fetchData()
    }

    const showModal = (id) => {
        setSelectedBlog(id)
        setModalIsVisible(true)
    }

    const hideModal = () => {
        setSelectedBlog(null)
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
                        🤓 Read some of our blogs or search a specific keyword.
                    </p>
                    {!data.length && <p className='mt-2 text-2xl leading-8 text-gray-800'>There are no blogs yet!</p>}
                </div>
                <div className="mt-5">
                    <input
                        type="text"
                        name="title"
                        id="title"
                        value={search}
                        onChange={(e) => {searchText(e)}}
                        placeholder='Search in blogs'
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
                <div className='mx-auto mt-0 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-5 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
                    {data.map((blog) => (
                        <Card showActions={true} onDelete={showModal} blog={blog} key={blog.id} />
                    ))}
                </div>
            </div>
            <Pagination onNext={goNextPage} onPrev={goPrevPage} prevLink={prevLink} nextLink={nextLink} />
            {selectedBlog && <Modal onCancel={hideModal} id={selectedBlog} onAccept={deleteBlog} isVisible={modalIsVisible} />}
        </>
    )
}