const GetResponse = async (url) => {
    const res = await fetch(url);

    if (!res.ok) { // если в запросе пошло что-то не так, в консоль выкидываем ошибку
        throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
};

export default GetResponse;