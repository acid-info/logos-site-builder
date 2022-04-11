import preval from 'next-plugin-preval';

async function getData() {
    return { items: [{link: "s/s/s/s"}]}
}

export default preval(getData());