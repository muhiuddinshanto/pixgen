import Category from "@/component/Category";
import PhotoCard from "@/component/PhotoCard";
import Link from "next/link";


const AllPhotosPage = async({searchParams}) => {

    const {category} = await searchParams;
    const res = await fetch('https://pixgen-mu-nine.vercel.app/data.json')
    const photos = await res.json();

    const filtaredPhotos = category ? photos.filter(photo=> photo.category.toLowerCase() == category.toLowerCase()) : photos
    console.log(category);
    


    return (
        <div className="space-y-3">
            
                <Link href={'/all-photos'}><h2 className="text-2xl font-bold m-6">All Photos</h2></Link>
                <Category/>
                <div className="grid grid-cols-4 gap-5">
                    {
                        filtaredPhotos.map(photo=> <PhotoCard key={photo.id} photo={photo}></PhotoCard>)
                    }
                </div>
            
        </div>
    );
};

export default AllPhotosPage;