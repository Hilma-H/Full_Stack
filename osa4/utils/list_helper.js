
const dummy = (blogs) => {
  return 1;
}
const totalLikes = (blogs) => {
  if (blogs.length === 0){
    return 0
  }
  const summa = (sum, item) => {
      return sum + item.likes
  }
  const total = blogs.reduce(summa, 0);
  return total
}

module.exports = {
  dummy,
  totalLikes
}