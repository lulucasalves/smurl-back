const FacebookLogin = require('../../Controllers/Authentication/facebook')
const GithubLogin = require('../../Controllers/Authentication/github')
const GoogleLogin = require('../../Controllers/Authentication/google')
const Login = require('../../Controllers/Authentication/login')

module.exports = {
  Mutation: {
    login: async (_, { email, password }) => {
      return await Login(email, password)
    },
    githubLogin: async (_, { code }) => {
      return await GithubLogin(code)
    },
    facebookLogin: async (_, { code }) => {
      return await FacebookLogin(code)
    },
    googleLogin: async (_, { code }) => {
      return await GoogleLogin(code)
    }
  }
}
