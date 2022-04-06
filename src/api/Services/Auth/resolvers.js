const FacebookLogin = require('../../Controllers/Authentication/facebook')
const GithubLogin = require('../../Controllers/Authentication/github')
const Login = require('../../Controllers/Users/login')

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
    }
  }
}
