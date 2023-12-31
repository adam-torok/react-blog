import { Link } from "react-router-dom";
import { Tooltip } from 'react-tooltip'

export default function Card({ blog, onDelete, showActions }) {

    const handleDelete = () => {
        onDelete(blog.id);
    }

    return (
        <>
            <Tooltip id="blog-actions" />
            <div className="flex max-w-xl flex-col items-start justify-between">
                <Link to={`/blogs/${blog.id}`} key={blog.id} className="flex items-center gap-x-4 text-xs">
                    <img className="rounded-lg" src="https://placehold.co/600x400" alt={blog.title} />
                </Link>

                <div className="group relative">
                    <div className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                        <div className="flex align-center">
                            <Link to={`blogs/${blog.id}`}>
                                {blog.title}
                            </Link>

                            {showActions && (
                                <div className="flex">
                                    <div
                                        data-tooltip-id="blog-actions"
                                        data-tooltip-content="Delete blog"
                                        data-tooltip-place="top"
                                        onClick={handleDelete}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ml-3 w-6 h-6 d-inline">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                        </svg>
                                    </div>

                                    <Link
                                        data-tooltip-id="blog-actions"
                                        data-tooltip-content="Edit blog"
                                        data-tooltip-place="top"
                                        to={`/blogs/edit/${blog.id}`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ml-2 w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                        </svg>
                                    </Link>
                                </div>
                            )}

                        </div>
                    </div>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{blog.description}</p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                    <div className="text-sm leading-6">
                        <div className="font-semibold text-gray-900">
                            <div>
                                <span className="absolute inset-0" />
                                {blog.authorName}
                            </div>
                        </div>
                        <p className="text-gray-600">{blog.authorRole}</p>
                    </div>
                </div>
            </div>
        </>
    )
}