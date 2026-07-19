export const auth = {
  async isAuthenticated() {
    const token = localStorage.getItem("AccessToken");
    return !!token;
  },

  signIn(token: string) {
    // AccessToken: auth.AccessToken,
	// 	IdToken: auth.IdToken,
	// 	RefreshToken: auth.RefreshToken,
    localStorage.setItem("AccessToken", token);
  },

  signOut() {
    localStorage.removeItem("token");
  },
};