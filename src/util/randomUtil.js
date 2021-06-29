class RandomUtil{

}
RandomUtil.getRandomNumber = (min, max) => parseInt(Math.random() * (max - min)) + min
export default RandomUtil;