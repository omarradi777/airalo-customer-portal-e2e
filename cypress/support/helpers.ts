export const isTokenExpired = (token: string): boolean => {
  try {
    const decoded = JSON.parse(atob(token.split('.')[1])); // Decode JWT token (if it's a JWT)
    const expiryTime = decoded.exp * 1000; // Convert expiry time to milliseconds
    return Date.now() > expiryTime; // Check if the token has expired
  } catch (error) {
    return true; // In case the token is invalid or cannot be decoded, consider it expired
  }
};
