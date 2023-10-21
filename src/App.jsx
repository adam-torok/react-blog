import { useState } from 'react';
import Navbar from './Shared/Navigation/Navbar';
import Footer from './Shared/Navigation/Footer';
import Card from './Blog/Card';
import Alert from './Shared/Misc/Alert';

function App() {
	const [blogs, setBlogs] = useState([
		{
			id: 1,
			title: 'Boost your conversion rate',
			href: '#',
			description:
				'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
			date: 'Mar 16, 2020',
			datetime: '2020-03-16',
			category: { title: 'Marketing', href: '#' },
			author: {
				name: 'Michael Foster',
				role: 'Co-Founder / CTO',
				href: '#',
				imageUrl:
					'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
			},
		},
		{
			id: 2,
			title: 'Boost your conversion rate',
			href: '#',
			description:
				'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
			date: 'Mar 16, 2020',
			datetime: '2020-03-16',
			category: { title: 'Marketing', href: '#' },
			author: {
				name: 'Michael Foster',
				role: 'Co-Founder / CTO',
				href: '#',
				imageUrl:
					'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
			},
		},
	]);

	return (
		<>
			<Navbar />
			<Alert />
			<div className="bg-white py-5 container mx-auto my-5">
				<div className="mx-auto max-w-2xl lg:mx-0">
					<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
					<p className="mt-2 text-lg leading-8 text-gray-600">
						Learn how to grow your business with our expert advice.
					</p>
				</div>
				<div className='mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
					{blogs.map((blog) => (
						<Card {...blog} key={blog.id} />
					))}
				</div>
			</div>
			<Footer />
		</>
	);
}

export default App;
