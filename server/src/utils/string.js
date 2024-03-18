


async function init() {
    const result1=await redis.set("user:4","oops")
    await redis.expire("user:4",10)
    const result=await redis.get("user:4")
    console.log(result)
    
}
init()