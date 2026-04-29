"use client";

import { UpdateUserModel } from "@/component/UpdateUserModel";
import { authClient } from "@/lib/auth-client";
import { Avatar, Card } from "@heroui/react";

const ProfilePage = () => {
    const userData = authClient.useSession();
    const user = userData.data?.user;
    return (
        <Card className="max-w-96 mx-auto flex flex-col items-center border mt-5" >
            <Avatar className="w-20 h-20">
                <Avatar.Image alt={user?.name} src={user?.image} referrerPolicy="no-referrer" />

                <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
            </Avatar>
            <h2 className="text-xl font-bold">{user?.name}</h2>
            <p className="text-muted">{user?.email}</p>
            <UpdateUserModel/>
        </Card>
    );
};

export default ProfilePage;