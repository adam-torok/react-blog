import { Link } from "react-router-dom";

export default function Card(blog) {
    return (
        <>
            <Link to={`blogs/${blog.id}`} key={blog.id} className="flex max-w-xl flex-col items-start justify-between">
                <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime={blog.datetime} className="text-gray-500">
                        {blog.date}
                    </time>
                </div>
                <div className="group relative">
                    <div className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                        <div>
                            <span className="absolute inset-0" />
                            {blog.title}
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
            </Link>
        </>
    )
}