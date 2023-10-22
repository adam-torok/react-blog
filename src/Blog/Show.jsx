import useFetch from '../useFetch'
import { useParams } from 'react-router-dom'
import Loading from '../Shared/Misc/Loading'
import { useEffect, useState } from 'react'
import Card from './Card'

export default function Show() {
    const { id } = useParams()
    const [moreBlogs, setMoreBlogs] = useState([])
    const { data: blog, isPending, error } = useFetch(`http://localhost:8000/blogs/${id}`)

    useEffect(() => {
        setTimeout(() => {
            fetchData()
        }, 200)
        // 🚧 I think it does not working properly - need revision!
    }, [])

    const fetchData = () => {
        setTimeout(() => {
            fetch(`http://localhost:8000/blogs?_limit=3`)
                .then((resp) => {
                    if (!resp.ok) {
                        throw Error('❌ Could not fetch the data.')
                    }
                    return resp.json()
                })
                .then((data) => {
                    setMoreBlogs(data)
                })
                .catch((err) => {
                    console.log(err.message)
                })
        }, 200)
    }

    return (
        <>
            <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
                {isPending && (<Loading />)}
                {error && (
                    <h1 className="mt-2 text-3xl font-bold tracking-tight text-red-900 sm:text-4xl">
                        An error has occurred.
                    </h1>
                )}
                {blog && (
                    <div>
                        <div>
                            <div className="absolute inset-0 -z-10 overflow-hidden">
                                <svg
                                    className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200"
                                    aria-hidden="true"
                                >
                                    <defs>
                                        <pattern
                                            id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                                            width={200}
                                            height={200}
                                            x="50%"
                                            y={-1}
                                            patternUnits="userSpaceOnUse"
                                        >
                                            <path d="M100 200V.5M.5 .5H200" fill="none" />
                                        </pattern>
                                    </defs>
                                    <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
                                        <path
                                            d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                                            strokeWidth={0}
                                        />
                                    </svg>
                                    <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
                                </svg>
                            </div>
                            <div>
                                <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:gap-x-8 lg:px-8">
                                    <div className="lg:pr-4">
                                        <div className="lg:max-w-lg">
                                            <p className="text-base font-semibold leading-7 text-indigo-600">{blog.authorName}</p>
                                            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{blog.title}</h1>
                                            <p className="mt-6 text-xl leading-8 text-gray-700">
                                                {blog.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:gap-x-8 lg:px-8">
                                    <div className="mt-5 text-base leading-7 text-gray-700">
                                        <p>
                                            {blog.content}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='bg-white px-5 container-xl mx-auto my-5 mx-auto mt-0 lg:mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-5 sm:mt-16 sm:pt-16 lg:mx-0 lg:grid-cols-3'>
                            {moreBlogs.map((blog) => (
                                <Card showActions={false} blog={blog} key={blog.id} />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}
