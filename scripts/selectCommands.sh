#!/bin/zsh

HIST_FILE=~/.zsh_history

TOOL_INSTALL_COMMANDS=$(
  cat $HIST_FILE |
    sed 's/^: [0-9]\+:[0-9]\+;//' |
    fzf --multi --tac --header="Install commands (<Tab> to select)" --preview="echo {} | pygmentize -s -l shell -O style=one-dark" --preview-window wrap
)

echo $TOOL_INSTALL_COMMANDS
