import { eventHandler } from 'h3';

export default  eventHandler((event)=> {
    return {
        user: {
            name: 'John Doe',
            email: 'john.doe@mail.com'
        }
    };
})