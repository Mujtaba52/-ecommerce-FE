
export const NotFound = () => {
  return (
    <>
        <div className="flex flex-col items-center">
            <div className="font-medium text-8xl mt-32">404 Not Found</div>
            <div className="text-base mt-10">Your visited page not found. You may go home page.</div>
            <button className="bg-red-600 mt-16 text-white px-12 py-4 rounded">Back to home page</button>
        </div>
    </>
  )
}
