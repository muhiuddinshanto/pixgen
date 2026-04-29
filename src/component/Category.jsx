import { Button } from "@heroui/react";
import Link from "next/link";


const Category = async() => {

    const res = await fetch ('https://pixgen-mu-nine.vercel.app/category.json')
    const categorys = await res.json();
    console.log(categorys);
    
    return (
        <div className="flex gap-3">
             {
                categorys?.map(category => (
                    <Link href={`?category=${category.name.toLowerCase()}`} key={category.id}><Button variant="outline" size="sm"  className="px-4 py-2 border rounded">
                        {category.name}
                    </Button></Link>
                ))
            }
        </div>
    );
};

export default Category;