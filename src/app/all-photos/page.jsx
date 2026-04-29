import PhotoCard from "@/component/PhotoCard";


const AllPhotosPage = async() => {

    const res = await fetch('https://pixgen-mu-nine.vercel.app/data.json')
    const photos = await res.json();
console.log(photos);

    return (
        <div>
            
                <h2 className="text-2xl font-bold m-6">All Photos</h2>
                <div className="grid grid-cols-4 gap-5">
                    {
                        photos.map(photo=> <PhotoCard key={photo.id} photo={photo}></PhotoCard>)
                    }
                </div>
            
        </div>
    );
};

export default AllPhotosPage;