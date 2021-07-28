export function isValidPassword(password: string) {
  const valid = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}/
  if (valid.test(password)) return true
  return false
}
