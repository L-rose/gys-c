// 将历史搜索内容存储到LocalStorage
const LOCAL_STORAGE_KEY = "searchHistory";
class Store {

}
// 将[]存入localStorage
Store.saveHistory = arr => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(arr));
}

// 从localStorage取出
Store.loadHistory = () => JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

// 情况全部localStorage历史查询
Store.removeAllHistory = () => {
    localStorage.removeItem(LOCAL_STORAGE_KEY);
}

export default Store;