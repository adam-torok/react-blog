import { useEffect, useState } from 'react';

const useFetch = (url) => {
	const [data, setData] = useState([]);
	const [isPending, setIsPending] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		setTimeout(() => {
			fetch(url)
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
	}, [url]);

    return {data, isPending, error}
};

export default useFetch;
