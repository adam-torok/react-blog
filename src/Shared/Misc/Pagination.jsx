export default function Pagination({ prevLink, nextLink, onNext, onPrev }) {
    return (
        <div className="container  mx-auto mt-10 border-t border-gray-300 flex items-center justify-between bg-white pt-5">
            <div className="flex flex-1 justify-between">
                {prevLink &&
                    (
                        <div
                            onClick={onPrev}
                            className="pagination--item  relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                        >
                            Previous
                        </div>
                    )}
                {nextLink &&
                    (<div
                        onClick={onNext}
                        className="pagination--item relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                    >
                        Next
                    </div>)}
            </div>
        </div>
    )
}
