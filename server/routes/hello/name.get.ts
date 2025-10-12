export default eventHandler((event) => {
    const query = getQuery(event);
    
    if (!query) {
        return;
    }

    const names = Array.isArray(query.name) ? query.name : [query.name];
    
    const lis = names.map((name) => `<li>${name}</li>`).join('\n');
    
    return `
        <h1 style="color: blue; margin: 1em">
            Hello! ${lis}
        </h1>
    `;
})