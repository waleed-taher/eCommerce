// diff type in sanity like string used in when we get something from input as an stirng so in defining schema we using document type
// show its a model just like contentfull model

export const product = {
        name: "product",
        type: "document",
        // for sanity studio
        title: "Product", 
        fields: [
            {
                name: "title",
                title: "Product Title",
                type: "string"
            },
            {
                name: "description",
                title: "Product Description",
                type: "string"
            },
            {
                name: "image",
                title: "Product Image",
                type: "image"
            },
            {
                name: "price",
                title: "Product Price",
                type: "number"
            }
        ]
}