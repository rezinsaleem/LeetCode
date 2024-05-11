
    while (true) {
        const next = a + b;
        yield next;
        a = b;
        b = next;
    }
    yield a;
    yield b;
};

/**
 * const gen = fibGenerator();
5
