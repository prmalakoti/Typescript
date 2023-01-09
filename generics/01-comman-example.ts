const numbers = new Array<number>();

numbers.push(10);

const promise = new Promise<string> (async(resolve, rehject)=>{
    resolve("Hello promise");
})