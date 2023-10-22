import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export default function Home() {

    const markdown = `
    # 🚀 Install dependencies
    - npm install
    - npm run dev
    - npm run build (for production)

    # 🖥️ Setting up json server

    - npx json-server --watch data/db.json --port 8000

    # TODOS / PLAN 🪄
    -   [x] Setup project using Vite
    -   [x] Use Tailwind
    -   [x] Add simple navbar - for viewing and creating blogs.
    -   [x] Research on router like Vue Router but for React
    -   [x] Set up default JSON server
    -   [x] Add a simple home page
    -   [x] Create CRUD
        -   [x] Create
            -   [x] Basic validation
        -   [x] Show
        -   [x] Update
        -   [x] Delete
    -   [x] Pagination
    -   [x] Full text search
    -   [x] List 3 more blogs on show page
    -   [x] 404 page
    -   [x] Adding tooltips
    -   [x] Adding toasts
    -   [] Adding lottie files
    -   [x] Add modals for confirmation before destructive actions
    -   [x] Removing ; from scripts to be unified
    -   [x] Deploy on Netlify
    -   [ ] Review
    `

    return (

        <div className="bg-white px-5 container mx-auto my-5">
            <div className="mx-auto">
                <h2 className="text-center text-3xl mt-10 font-bold tracking-tight text-gray-900 sm:text-4xl">Demo React Blog Project</h2>
                <p className="text-center mt-2 text-lg leading-8 text-gray-600">
                    created by <a href="https://github.com/adam-torok">https://github.com/adam-torok</a>
                </p>

                <iframe width="100%" height="400px" className="my-5" src="https://lottie.host/?file=6fb93c6c-f058-43d2-a2db-37993495b6dd/QGBeIEIRKi.json"></iframe>

                <h2 className="text-center text-2xl mt-10 font-bold tracking-tight text-gray-900 sm:text-3xl">✨ Project setup, features || To-Dos ✨</h2>
                <div className='md--container mt-5 mx-auto max-w-md'>
                    <Markdown remarkPlugins={[remarkGfm]}>{markdown}</Markdown>
                </div>
            </div>
        </div>
    )
}
