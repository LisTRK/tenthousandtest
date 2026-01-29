interface MetaType {
createdAt: string, 
updatedAt: string, 
barcode: string, 
qrCode: string
};

interface ReviewsType {
comment: string;
date: string;
rating: number;
reviewerEmail: string;
reviewerName: string;
}

export interface ProductType{
availabilityStatus: string;
brand:string;
category: string;
description:string;
dimensions: 
{width: number, height: number, depth: number}
discountPercentage:  number;
id: number;
images: string[];
meta: MetaType;
minimumOrderQuantity: number;
price: number;
rating: number;
returnPolicy: string;
reviews: ReviewsType;
shippingInformation: string;
sku: string;
stock: number;
tags: string[];
thumbnail: string;
title: string;
warrantyInformation: string;
weight: number;
}
