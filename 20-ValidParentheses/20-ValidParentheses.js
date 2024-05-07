    for (i = 0; i < s.length; i++) {
        if (s[i] == '{' || s[i] == '[' || s[i] == '(') {
            stack.push(s[i])
        } else if (characters[s[i]] == stack[stack.length - 1]) {
            stack.pop()
        } else {
            return false;
        }
    }
};

    return stack.length==0;

"
