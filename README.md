# webpack_script_evaluation_error
reproducible repo for [webpack #16618](https://github.com/webpack/webpack/issues/16618)

Output files are commited and modified after build to force a syntax error, the original error that made me investigate the issue was caused by a sintax error due to a lookbehind expression in a regex in safari but i think the scenario is the same in this example (a parsing error during script evaluation)
