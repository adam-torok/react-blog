export default function Card(blog) {
    return (
        <>
            <article key={blog.id} className="flex max-w-xl flex-col items-start justify-between">
                <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime={blog.datetime} className="text-gray-500">
                        {blog.date}
                    </time>
                </div>
                <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                        <a href={blog.href}>
                            <span className="absolute inset-0" />
                            {blog.title}
                        </a>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{blog.description}</p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                    <div className="text-sm leading-6">
                        <p className="font-semibold text-gray-900">
                            <a href={blog.author.href}>
                                <span className="absolute inset-0" />
                                {blog.author.name}
                            </a>
                        </p>
                        <p className="text-gray-600">{blog.author.role}</p>
                    </div>
                </div>
            </article>
        </>
    )
}