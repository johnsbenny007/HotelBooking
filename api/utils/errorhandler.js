const handler =(status,message)=>{
    const err= new Error();
     err.status=status || "401";
     err.message=message || "Something went wrong!";
    return err;
}

export default handler