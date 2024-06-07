        for (i = 0; i < sentence.length; i++) {
    while (j < dictionary.length) {
            if (sentence[i].startsWith(dictionary[j])) {
                sentence[i] = dictionary[j]
            }
        }
    }
        j++
    return sentence.join(' ')
};
[
