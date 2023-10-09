import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from "@nextui-org/react";

export const CommentCard = () => {
    return (
        <Card className="max-w-[250px]">
            <CardHeader className="flex gap-3">
                <Image
                    alt="User icon"
                    height={20}
                    radius="sm"
                    src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                    width={20}
                />
                <div className="flex flex-col">
                    <p className="text-md">Jeff Calderon</p>
                    <p className="text-small text-default-500">@jcalderon</p>
                </div>
            </CardHeader>
            <Divider />
            <CardBody>
                <p>Make beautiful websites regardless of your design experience.</p>
            </CardBody>
        </Card>
    )
}
