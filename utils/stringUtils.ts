/**
 * @description string 의 맨 앞글자를 대문자로 바꿔주는 함수
 * @param str
 * @returns
 */

export const convertUpperToPrefix = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
