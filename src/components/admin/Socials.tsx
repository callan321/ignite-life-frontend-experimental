export default function Socials() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="-mx-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-3">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="block bg-gray-400/5 p-8 sm:p-10">
                        <img
                            alt="Facebook"
                            src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"

                            height={60}
                            className="max-h-16 w-full object-contain"
                        />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="block bg-gray-400/5 p-8 sm:p-10">
                        <img
                            alt="Instagram"
                            src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                            width="auto"
                            height={60}
                            className="max-h-16 w-full object-contain"
                        />
                    </a>
                    <a href="https://squareup.com" target="_blank" rel="noopener noreferrer" className="block bg-gray-400/5 p-8 sm:p-10">
                        <img
                            alt="Square"
                            src="https://1000logos.net/wp-content/uploads/2021/11/Square-logo.png"
                            width="auto"
                            height={60}
                            className="max-h-16 w-full object-contain"
                        />
                    </a>
                </div>
            </div>
        </div>
    )
}
