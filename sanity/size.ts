import { defineField, defineType } from "sanity";

export const size = defineType({
    name: "size",
    type: "document",
    // for sanity studio
    title: "Sizes", 
    fields: [
        defineField({
            name: "name",
            type: "string",
            title: "Product Size",
           
    }),
]
})