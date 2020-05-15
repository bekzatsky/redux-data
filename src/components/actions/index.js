const changeName = (name) => {
    return {
        type: 'CHANGE_NAME',
        payload: name
    };
};

export {
    changeName
};