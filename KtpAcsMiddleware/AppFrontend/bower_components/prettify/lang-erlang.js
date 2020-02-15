PR.registerLangHandler(PR.createSimpleLexer(
        [
            ["pln", /^[\t-\r ]+/, null, "\t\n\u000b\u000c\r "],
            ["str", /^"(?:[^\n\f\r"\\]|\\[\S\s])*(?:"|$)/, null, '"'],
            ["lit", /^[a-z]\w*/], ["lit", /^'(?:[^\n\f\r'\\]|\\[^&])+'?/, null, "'"],
            ["lit", /^\?[^\t\n ({]+/, null, "?"],
            ["lit", /^(?:0o[0-7]+|0x[\da-f]+|\d+(?:\.\d+)?(?:e[+-]?\d+)?)/i, null, "0123456789"]
        ],
        [
            ["com", /^%[^\n]*/],
            [
                "kwd",
                /^(?:module|attributes|do|let|in|letrec|apply|call|primop|case|of|end|when|fun|try|catch|receive|after|char|integer|float,atom,string,var)\b/
            ],
            ["kwd", /^-[_a-z]+/], ["typ", /^[A-Z_]\w*/], ["pun", /^[,.;]/]
        ]),
    ["erlang", "erl"]);