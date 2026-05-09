let products = [
    {
        id:"1",
        name:"laptop",
        price:67777,
        description:"high level",
    },
    {
        id:"2",
        name:"Mobile",
        price:6777,
        description:"high level",
    },

];

//add
export async function POST(request) {
    const body = await request.json();
    const newproduct = {
        id: Date.now().toString(),
        name:body.name,
        price:Number(body.price),
        description:body.description,
    };
    products.push(newproduct);
    return Response.json({message:"product add successfully", newproduct});
    
}
//data view
export async function GET() {
    return Response.json(products);
}

export {products};