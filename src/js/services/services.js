const postData = async (url, data) => {
    document.querySelector('.status').textContent = 'Загрузка...';
    let result = await fetch(url, {
        method: 'POST',
        body: data
    })
    return await result.text();
}

export { postData }