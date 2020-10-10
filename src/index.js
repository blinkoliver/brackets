module.exports = check = (str, bracketsConfig) => {
    const pairs = bracketsConfig.map((element) => element.join("")).flat(); 
    for (let i = 0; i < pairs.length; i++) {
        if (str.includes(pairs[i])) {
            str = str.replace(pairs[i], "");
            i = -1;
        }
    }
    return str.length === 0;
};