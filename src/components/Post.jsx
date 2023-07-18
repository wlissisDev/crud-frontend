export function Post() {
    return (
        <div className="w-auto md:w-[90%] m-4 p-4 rounded-sm bg-white shadow">
            <h1 className="text-2xl text-center text-gray-700">Title</h1>
            <hr />
            <p className="mt-2 text-gray-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis autem alias harum id dolore, ut molestiae numquam animi neque! Voluptatem sequi ut inventore. Laboriosam veniam placeat laudantium exercitationem iste totam?
                Ut non quaerat qui necessitatibus, minima omnis debitis exercitationem numquam deserunt provident, corporis et rem asperiores, sapiente adipisci harum id quod eaque aut dolorum temporibus cum. Possimus id quam nihil.
                Deleniti ex unde, omnis harum placeat dignissimos fugiat ab pariatur dicta quis nihil vero architecto, repellat sed quam quae enim, itaque nulla numquam blanditiis minima? Necessitatibus repellat deleniti quaerat cum.
                Labore, voluptas at. Laudantium earum, reiciendis dolorum, quaerat ducimus distinctio iusto veniam officiis molestiae cupiditate saepe quasi corrupti adipisci quo magni repudiandae vitae, id maxime temporibus! Id praesentium vel totam.</p>
            <div className="text-end">
                <span className="m-4 cursor-pointer text-2xl text-red-500">
                    <ion-icon name="trash-outline"></ion-icon>
                </span>
                <span className="m-4 cursor-pointer text-2xl text-green-700">
                    <ion-icon name="create-outline"></ion-icon>
                </span>
            </div>
        </div>
    )
}