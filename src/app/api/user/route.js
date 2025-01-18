
export async function POST(req){
    await connectDB()
    try {
    const obj = await req.json()
    let newUser = await new userModel({...obj});
    newUser = newUser.save()
    return Response.json({
        error: false,
        msg: "User Registered",
        user : newUser ,
    },
    {status: 201}
);
    }catch (e) {
        return Response.json({
            error: true,
            msg: "something want wrong user was not registered",
        },
        {status: 404}
    );
    }
}
export async function GET(req){
    await connectDB()
    const users = await userModel.find()
    return Response.json(
        {
            error: false,
            msg : "data was fatched." ,
            users, 
        },
        {status: 202}
    )

}
export async function PUT(req){}
export async function DELETE(req){}
