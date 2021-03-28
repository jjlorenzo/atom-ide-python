const { AutoLanguageClient } = require("atom-languageclient")

class PythonLanguageClient extends AutoLanguageClient {
  getGrammarScopes() {
    return ["source.python", "python"]
  }

  getLanguageName() {
    return "Python"
  }

  getServerName() {
    return "pyright"
  }

  startServerProcess() {
    return super.spawnChildNode([require.resolve("pyright/langserver.index"), "--stdio"])
  }
}

module.exports = new PythonLanguageClient()
