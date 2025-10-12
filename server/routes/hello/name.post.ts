export default eventHandler(async (event) => {
    const body = await readBody(event);
    const name = body.name;

    const query = getQuery(event);

    return {
        statusCode: 200,
        message: `Hello, ${name}! Your age is ${query.age}`,
    }
})