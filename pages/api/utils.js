const sleepUtil = (ms) => {
    return new Promise(resolve=>{
        setTimeout(resolve,ms)
    });
};

export default sleepUtil;