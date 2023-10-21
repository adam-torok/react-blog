import { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom'

export default function Create() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [authorName, setAuthorName] = useState('');
    const [authorRole, setAuthorRole] = useState('');
    const [content, setContent] = useState('');
    const [isPending, setIsPending] = useState(false);
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateInputs()) {
            setIsPending(true);
            const blog = { title, description, authorName, authorRole, content };

            fetch('http://localhost:8000/blogs', {
                method: 'POST',
                headers: { 'Content-Type': "application/json" },
                body: JSON.stringify(blog)
            }).then(() => {
                setTimeout(() => {
                    setIsPending(false);
                    toast('Blog has been created!',
                        {
                            icon: '👏',
                            style: {
                                borderRadius: '10px',
                                background: '#333',
                                color: '#fff',
                            },
                        }
                    );
                    setTimeout(() => {
                        // Bad practice, I only use it for testing
                        navigate('/');
                    }, 500);
                }, 400);
            }).catch((err) => {
                toast(err);
            })
        } else {
            toast.error('Please correct the fields!')
        }
    }

    const validateInputs = () => {
        const errors = {};

        if (!title) {
            errors.title = 'Title is required';
        }
        if (!description) {
            errors.description = 'Description is required';
        }
        if (!authorName) {
            errors.authorName = 'Author name is required';
        }
        if (!authorRole) {
            errors.authorRole = "Author's role is required";
        }
        if (!content) {
            errors.content = 'Content is required';
        }

        setErrors(errors);

        // Return true if there are no errors, indicating the form can be submitted
        return Object.keys(errors).length === 0;
    }

    return (
        <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
            <Toaster position="bottom-right" />

            <div
                className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
                aria-hidden="true"
            >
                <div
                    className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Create blog</h2>
                <p className="mt-2 text-lg leading-8 text-gray-600">
                    Fill the following form for creating a new blog post.
                </p>
            </div>
            <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
                <div className="grid gap-y-6">
                    <div className="sm:col-span-2">
                        <label htmlFor="title" className="block text-sm font-semibold leading-6 text-gray-900">
                            Blog title
                        </label>
                        <div className="mt-2.5">
                            <input
                                type="text"
                                name="title"
                                id="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                        {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="description" className="block text-sm font-semibold leading-6 text-gray-900">
                            Blog description
                        </label>
                        <div className="mt-2.5">
                            <input
                                type="text"
                                name="description"
                                id="description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                        {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}

                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="author-name" className="block text-sm font-semibold leading-6 text-gray-900">
                            Author
                        </label>
                        <div className="mt-2.5">
                            <input
                                type="text"
                                name="author.name"
                                id="author-name"
                                value={authorName}
                                onChange={(e) => setAuthorName(e.target.value)}
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                        {errors.authorName && <p className="text-red-500 text-sm mt-1">{errors.authorName}</p>}

                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="author-role" className="block text-sm font-semibold leading-6 text-gray-900">
                            Author's role
                        </label>
                        <div className="mt-2.5">
                            <input
                                type="text"
                                name="author.role"
                                id="author-role"
                                value={authorRole}
                                onChange={(e) => setAuthorRole(e.target.value)}
                                autoComplete="organization"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                        {errors.authorRole && <p className="text-red-500 text-sm mt-1">{errors.authorRole}</p>}
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="content" className="block text-sm font-semibold leading-6 text-gray-900">
                            Content
                        </label>
                        <div className="mt-2.5">
                            <textarea
                                name="content"
                                id="content"
                                rows={4}
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                        {errors.content && <p className="text-red-500 text-sm mt-1">{errors.content}</p>}
                    </div>
                </div>
                <div className="mt-10">
                    <button
                        disabled={isPending ? true : false}
                        type="submit"
                        className="submit--btn block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >

                        {isPending &&
                            (<div className="flex" role="status">
                                <svg aria-hidden="true" className="w-4 h-4 mr-2 text-gray-200 animate-spin fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                </svg>
                                <span className="sr-only">Loading...</span>
                            </div>)}

                        Create blog
                    </button>
                </div>
            </form>
        </div>
    )
}
