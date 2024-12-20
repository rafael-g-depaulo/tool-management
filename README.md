# tool-management

Repo to manage my cli tools and other general environment stuff

## Dependencies

The following are the cli tools that need to already be installed for the project to work.

| Dependency | Reason |
|:-----------|:--------:|
| node v23   | used to run the scripts that aren't written using only shell scripting |
| sed | used for regex stuff |
| zsh | the scripts assume that you're running zsh. change HIST_FILE in the appropriate places if not in zsh |
| fzf | fuzzy finder used to select the commands to include as the tool's instalation process |
| jq | used to parse and create the .json files used by the scripts |
| nvm (optional) | recommended to set node version by having nvm installed and calling `nvm use` in the root project directory |
