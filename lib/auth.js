// JWT Authentication utilities (client-side implementation)
const JWT_SECRET = 'cambodia-trip-secret-key-2024'

// Simple base64 encoding/decoding for client-side JWT simulation
const base64UrlEncode = (str) => {
  return btoa(str).replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '')
}

const base64UrlDecode = (str) => {
  str += new Array(5 - str.length % 4).join('=')
  return atob(str.replace(/\-/g, '+').replace(/_/g, '/'))
}

export const generateToken = (user) => {
  const header = {
    alg: 'HS256',
    typ: 'JWT'
  }
  
  const payload = {
    id: user.id,
    email: user.email,
    name: user.name,
    exp: Math.floor(Date.now() / 1000) + (7 * 24 * 60 * 60) // 7 days
  }
  
  const encodedHeader = base64UrlEncode(JSON.stringify(header))
  const encodedPayload = base64UrlEncode(JSON.stringify(payload))
  
  // Simple signature (in production, use proper HMAC)
  const signature = base64UrlEncode(`${encodedHeader}.${encodedPayload}.${JWT_SECRET}`)
  
  return `${encodedHeader}.${encodedPayload}.${signature}`
}

export const verifyToken = (token) => {
  try {
    if (!token) return null
    
    const parts = token.split('.')
    if (parts.length !== 3) return null
    
    const payload = JSON.parse(base64UrlDecode(parts[1]))
    
    // Check expiration
    if (payload.exp && payload.exp < Math.floor(Date.now() / 1000)) {
      return null
    }
    
    return payload
  } catch (error) {
    return null
  }
}

export const setAuthCookie = (token) => {
  if (typeof document !== 'undefined') {
    document.cookie = `auth-token=${token}; path=/; max-age=${7 * 24 * 60 * 60}; secure; samesite=strict`
  }
}

export const getAuthCookie = () => {
  if (typeof document !== 'undefined') {
    const cookies = document.cookie.split(';')
    const authCookie = cookies.find(cookie => cookie.trim().startsWith('auth-token='))
    return authCookie ? authCookie.split('=')[1] : null
  }
  return null
}

export const removeAuthCookie = () => {
  if (typeof document !== 'undefined') {
    document.cookie = 'auth-token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT'
  }
}
