// diff type in sanity like string used in when we get something from input as an stirng so in defining schema we using document type
// show its a model just like contentfull model

import { defineField, defineType } from "sanity";

export const product = defineType({
        name: "product",
        type: "document",
        // for sanity studio
        title: "Product", 
        fields: [
            defineField({
                name: "title",
                title: "Product Title",
                type: "string"
            }),
            defineField({
                name: "description",
                title: "Product Description",
                type: "string"
            }),
            defineField({
                name: "image",
                title: "Product Image",
                type: "image"
            }),
            defineField({
                name: "price",
                title: "Product Price",
                type: "number"
            }),
            defineField({
                name: "category",
                title: "Product Category",
                type: "reference",
                to: [
                    {
                        type:"category"
                    }
                ]
            }),
            defineField({
                name: "size",
                title: "Available Sizes",
                type: "array",
                of: [
                    {
                      type: "reference",
                      to: [{ type: "size" }],
                    },
                ]
            }),
            defineField({
                name: "qty",
                title: "Quantity",
                type: "number",
            })
        ]
})