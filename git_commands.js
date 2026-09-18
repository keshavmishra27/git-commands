/*
 untracked:new files that git doesn't yet track
 modified:changed
 staged:file is raedy to be committed
 unmodified:unchanged
 origin:github repo
 remote"github repo
 conflicts means problem if do changes in same line of different branches
 */

let work = document.querySelector(".command");
let btn = document.querySelector("#btn");
let msg = document.querySelector("#msg");
let para = document.createElement("p");

let cmdlst = {
    clone: "cloning repo in local machine",
    clone_syntax: "git clone link",
    status: "dispalys the status of the code",
    status_syntax: "git status",
    cd: "change directory",
    syntax_cd: "cd",
    cd_dotdot: "to get to previous directory",
    cd_dotdot_syntax: "cd ..",
    mkdir: "cretes new directory",
    mkdir_syntax: "mkddir directoryname",
    clear: "to clear the terminal",
    ls: "list files and folders",
    ls_syntax: "ls",
    ls_minus_a: "gives all types of files hidden,normal,etc",
    ls_minus_a_syntax: "ls-a",
    Get_ChildItem_Force: "if ls-a shows error use this instead of ls-a",
    Get_ChildItem_Force_syntax: "Get-ChildItem -Force",
    git_add: "add new or changed files in your working directory to the git staging area",
    git_add_syntax: "git add filename",
    git_add_dot: "add all files",
    git_add_dot_syntax: "git add .",
    commit: "it is the record of change",
    commit_syntax: "git commit -m some msg(in double quotes)",
    push_command: "upload local repo content to remote repo",
    push_command_syntax: "git push origin main",
    git_remote_add_origin: "add reomte i.e github repo",
    git_remote_add_origin_syntax: "git add remote add origin link",
    git_remote_minusv: "verify remote",
    git_remote_minusv_syntax: "git remote -v",
    git_branch: "to check cuurent branch",
    git_branch_syntax: "git branch",
    git_branch_Minusm: "to rename branch",
    git_branch_Minusm_syntax: "git branch -M main ",
    git_push_origin: "to push branch",
    git_push_origin_main_syntax: "git push origin branchname",
    git_push_minusu_origin: "to push a branch on which u have to work for a long time, if used then directly use git push afterwards",
    git_push_minusu_origin_syntax: "git push -u origin branchname",
    git_checkout: "to navigate through branches",
    git_checkout_syntax: "git checkout",
    git_checkout_newbranch: "craetes new branch",
    git_checkout_newbranch_syntax: "git checkout -b newbranchname",
    git_branch_minusd_branchname: "delete a branch (doesn't delete branch u are cuurently working in)",
    git_branch_minusd_branchname_syntax: "git branch -d branchname",
    git_diff_branchname: "to compare commits,branches,files & more",
    git_diff_branchname_syntax: "git diff branchname",
    git_merge: "merges 2 branches",
    git_merge_syntax: "git merge branchname",
    git_pull: "used to fetch and download content from a remote repo & immidiately update  the local repo to match that content",
    git_pull_syntax: "git pull origin branchname",
    git_reset: "undo changes in all files",
    git_reset_syntax: "git reset",
    git_reset_head: "reset commit changes",
    git_reset_head_syntax: "git reset HEAD~n",
    git_log: "log of your changes",
    git_log_syntax: "git log",
};

const gitcmd = () => {
    for (let key in cmdlst) {
        let para = document.createElement("p");
        para.innerText += `${key} : ${cmdlst[key]}\n`; // Append new values
        document.body.appendChild(para); // Append the paragraph to the DOM
    }
    btn.disabled = true; // way to disable the button aftfer use
};

btn.addEventListener("click", gitcmd);