export function urlToName(url) {
  const nameArray = url.split('-')
  const capitalisedNameArray = nameArray.map(
    (word) => word[0].toUpperCase() + word.substring(1)
  )
  return capitalisedNameArray.join(' ')
}
