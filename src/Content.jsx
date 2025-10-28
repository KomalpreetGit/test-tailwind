import shoesLogo from './assets/hero-image.png';
function Content() {
    return (
        <main className='flex justify-around mt-20'>
            <div className='w-150'>
                <h1 className="text-7xl text-black font-extrabold">YOUR FEET DESERVE THE BEST</h1>

                <p className='py-5'>YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES. YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.</p>
                <button className="bg-red-500 p-1 text-white px-4 py-1">Shop Now</button>
                <button className="bg-red-500 p-1 text-white px-4 py-1 m-1">Category</button>

            </div>
            <div>
                <img src={shoesLogo} className='w-100' />
            </div>
        </main>
    )
}

export default Content;