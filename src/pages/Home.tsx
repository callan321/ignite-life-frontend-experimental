export default function Home() {
    return (
        <div className="flex justify-center p-12">
            <div className="max-w-4xl w-full space-y-2">
                <h1 className="text-2xl">This will be the landing page...</h1>
                <p>The current site is operating in a front-end only mode, displaying minimal placeholder data. As such,
                    full functionality and backend connectivity are not yet available. </p>
                <p>Click on the admin tab to view the admin page, which showcases the design and user experience
                    elements currently in development. Once a basic thing of the admin panel and backend is finished the
                    landing page will then be developed </p>
                <p>PSA The pages will load slow because they have to wait for the request to time out (~2 secs)</p>

            </div>
        </div>

    )
}