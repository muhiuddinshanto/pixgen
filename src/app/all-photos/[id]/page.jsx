import { Card } from '@heroui/react';
import Image from 'next/image';
import React from 'react';

const PhotoDetailsPage = async ({ params }) => {

    const { id } = await params;

    const res = await fetch('https://pixgen-mu-nine.vercel.app/data.json')
    const photos = await res.json();
    const photo = photos.find(p=> p.id==id);
    console.log(photo);
    
    console.log(id);

    return (
        <Card className=''>
            <Image
            src={photo.imageUrl}
            width={500}
            height={500}
            alt='photo.title'
            className='object-cover'
            ></Image>
            <h2>{photo.title}</h2>
            <p>{photo.prompt}</p>
        </Card>
    );
};

export default PhotoDetailsPage;