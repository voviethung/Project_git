

export const fontSizeReducer = (fSize = 20, action) => {
    //tất cả reducer đều chạy khi dispatch bất kì component nào
    const { type, payload } = action;
    if (type === 'CHANGE_FONT_SIZE') {
        fSize += payload;
    }
    return fSize; //imutable : tính bất biến
}