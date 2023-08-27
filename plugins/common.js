/**
 * Phần này sử dụng để lưu các hàm js sử dụng lại
 * tác giả: Sơn
 * ngày : 26/08
 */

export const Common = {
    /**
     * Get 1 chuỗi key tránh bị trùng lặp ID,...
     * @param {*} length 
     * @returns 
     */
    getRandomKey(length=8) {
        let randomNumber = Math.floor(Math.random() * 10000) + 1;
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let randomText = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            randomText += characters.charAt(randomIndex);
        }
        return randomText + randomNumber;
    },
    /**
     * Xóa unicode, lowercase, xóa space, trả về dộ dài theo y/c
     * @param {*} length 
     */
    getKeyFromText(key="",length=6) {
        key = key.replace(/\s/g, "");
        key = key.replace(/[^\x00-\x7F]/g, "").toLowerCase();
        if(key.length > length) {
            return key.substring(0,length)
        }
        return key;
    },
} 