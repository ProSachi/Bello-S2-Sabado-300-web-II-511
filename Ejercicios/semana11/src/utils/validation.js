export const patterns = {
  fullName: /^[A-Za-zÀ-ÿ]+(?:\s[A-Za-zÀ-ÿ]+){1,3}$/,
  email: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
  password:
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&*!._-])[A-Za-z\d@#$%^&*!._-]{8,20}$/,
  newsTitle: /^[A-Za-zÀ-ÿ0-9\s.,:;!?()'"-]{8,80}$/,
  newsSummary: /^[A-Za-zÀ-ÿ0-9\s.,:;!?()'"-]{20,280}$/,
  imageUrl: /^https?:\/\/[^\s]+\.(?:png|jpg|jpeg|webp|gif)$/i,
}

export function validateField(value, pattern) {
  return pattern.test(value.trim())
}
