function useLocalStorage(key: string) {
  const setData = (data: any) => {
    clearData()
    return localStorage.setItem(key, data)
  }
  const GetData = () => {
    return localStorage.getItem(key)
  }

  const clearData = () => {
    return localStorage.removeItem(key)
  }

  return { setData, GetData, clearData }
}

export default useLocalStorage
