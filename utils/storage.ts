export interface Storage {
  get(key: string): string
  set(key: string, value: string, expires?: number): void
  remove(key: string): void
  getExpiration(key: string): string
  removeExpiration(key: string): void
  isExpired(key: string): boolean
}

class LocalStorage implements Storage {
  private suffix = '_deadtime'

  public static canUse(): boolean {
    const TEST_KEY = generateTestKey()

    // 사용자가 쿠키를 차단 하는 경우 LocalStorage '접근' 시에 예외가 발생합니다.
    try {
      localStorage.setItem(TEST_KEY, 'test')
      localStorage.removeItem(TEST_KEY)
      return true
    } catch {
      return false
    }
  }

  public get(key: string): string {
    if (!key) {
      return ''
    }
    return String(localStorage.getItem(key))
  }

  /**
   * @param key 스토리지 키값
   * @param value 스토리지에 저장될 값
   * @param expires 유효기간 (Optional) - 시간 단위
   */
  public set(key: string, value: string, expires?: number) {
    if (!(key && value)) {
      return
    }

    localStorage.setItem(key, value)

    if (expires) {
      this.set(
        `${key}${this.suffix}`,
        String(Date.parse(String(new Date())) + expires * 3600000),
      )
    }
  }

  getExpiration(key: string): string {
    return this.get(key + this.suffix)
  }

  removeExpiration(key: string): void {
    this.remove(key + this.suffix)
  }

  isExpired(key: string): boolean {
    const expiration = Number(this.getExpiration(key) || 0)
    return expiration - Date.parse(String(new Date())) <= 2000
  }

  public remove(key: string) {
    if (!key) {
      return
    }

    localStorage.removeItem(key)
  }
}

class SessionStorage implements Storage {
  private suffix = '_deadtime'

  public static canUse(): boolean {
    const TEST_KEY = generateTestKey()

    // sessionStorage를 사용할 수 없는 경우
    try {
      sessionStorage.setItem(TEST_KEY, 'test')
      sessionStorage.removeItem(TEST_KEY)
      return true
    } catch (err) {
      return false
    }
  }

  public get(key: string) {
    return sessionStorage.getItem(key) || ''
  }

  /**
   * @param key 스토리지 키값
   * @param value 스토리지에 저장될 값
   * @param expires 유효기간 (Optional) - 시간 단위
   */
  public set(key: string, value: string, expires?: number) {
    if (!(key && value)) {
      return
    }

    sessionStorage.setItem(key, value)

    if (expires) {
      this.set(
        `${key}${this.suffix}`,
        String(Date.parse(String(new Date())) + expires * 3600000),
      )
    }
  }

  getExpiration(key: string): string {
    return this.get(key + this.suffix)
  }

  removeExpiration(key: string): void {
    this.remove(key + this.suffix)
  }

  isExpired(key: string): boolean {
    const expiration = Number(this.getExpiration(key) || 0)
    return expiration - Date.parse(String(new Date())) <= 2000
  }

  public remove(key: string) {
    if (!key) {
      return
    }

    sessionStorage.removeItem(key)
  }
}

class MemoStorage implements Storage {
  private suffix = '_deadtime'
  private storage = new Map<string, string>()

  public get(key: string) {
    return this.storage.get(key) || ''
  }

  public set(key: string, value: string) {
    this.storage.set(key, value)
  }

  getExpiration(key: string): string {
    return this.get(key + this.suffix)
  }

  removeExpiration(key: string) {
    this.remove(key + this.suffix)
  }

  isExpired(key: string) {
    const expiration = Number(this.getExpiration(key) || 0)
    return expiration - Date.parse(String(new Date())) <= 2000
  }

  public remove(key: string) {
    this.storage.delete(key)
  }
}

function generateTestKey() {
  return new Array(4)
    .fill(null)
    .map(() => Math.random().toString(36).slice(2))
    .join('')
}

/**
 * @description
 * 안전한 local storage accessor를 생성.
 * local storage를 사용할 수 없는 경우 inmemory storage를 생성
 *
 * @example
 * ```ts
 * const localStorage = generateStorage()
 * localStorage.set('someKey', 'someValue')
 * localStorage.get('someKey') // 'someValue'
 * ```
 */
export function generateStorage(): Storage {
  if (LocalStorage.canUse()) {
    return new LocalStorage()
  }
  return new MemoStorage()
}

/**
 * @description
 * session storage accessor를 생성.
 * session storage를 사용할 수 없는 경우 inmemory storage를 생성
 *
 * @example
 * ```ts
 * const sessionStorage = generateSessionStorage()
 * sessionStorage.set('someKey', 'someValue')
 * sessionStorage.get('someKey') // 'someValue'
 * ```
 */
export function generateSessionStorage(): Storage {
  if (SessionStorage.canUse()) {
    return new SessionStorage()
  }
  return new MemoStorage()
}
