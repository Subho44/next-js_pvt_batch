import { products } from "../route";

// SINGLE VIEW
export async function GET(request, { params }) {

    const { id } = await params;

    const product = products.find((x) => x.id === id);

    if (!product) {
        return Response.json(
            { message: "Product not found" },
            { status: 404 }
        );
    }

    return Response.json(product);
}


// UPDATE
export async function PUT(request, { params }) {

    const { id } = await params;

    const body = await request.json();

    const index = products.findIndex((x) => x.id === id);

    if (index === -1) {
        return Response.json(
            { message: "Product not found" },
            { status: 404 }
        );
    }

    products[index] = {
        ...products[index],
        name: body.name,
        price: Number(body.price),
        description: body.description,
    };

    return Response.json(products[index]);
}


// DELETE
export async function DELETE(request, { params }) {

    const { id } = await params;

    const index = products.findIndex((x) => x.id === id);

    if (index === -1) {
        return Response.json(
            { message: "Product not found" },
            { status: 404 }
        );
    }

    products.splice(index, 1);

    return Response.json({
        message: "Product deleted successfully",
    });
}