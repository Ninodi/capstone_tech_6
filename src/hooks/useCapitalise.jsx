function useCapitalise(word) {
    const capitaliseCategory = () => {
        let firstLetter = word[0].toLocaleUpperCase()
        return firstLetter + word.slice(1)
    }

    return capitaliseCategory
}

export default useCapitalise